import { createContext, useContext, useEffect, useState } from "react";
import { RegistroRequest,loginRequest,verificaToken } from '../api/auth.js';
import Cookies from "js-cookie";


const AuthContext = createContext("");

export const usaAuth = ()=>{
    const context = useContext(AuthContext)
    if(!context){
        throw new Error('useAuth must be used within the AuthProvider')
    }
    return context;
}

export const AuthProve = ({children})=>{
    const [user,setUser] =useState(null);
    const[Autenticado,setAutenticado]= useState(false);
    const [errors, setErrors]=useState([])
    const [cargar, setcargar]= useState(true)
    
    //Metodo para registrar el Usuario

    const singUp = async(formRegValues)=>{
        const response = await RegistroRequest(formRegValues); // Llamamos a la función RegistroRequest
        console.log(response.data);
        setUser(response.data);
        setAutenticado(true);
        if (response.status === 200) {
            // Registro exitoso
            console.log('Registro exitoso');
        } else {
            // Manejo de errores
            console.error('Fallo al registrar usuario');
        }
    }

    // Metodo para loguearnos en el sistema
    const singIn = async (user) => {
        try {
            const res = await loginRequest(user);

            setAutenticado(true);
            setUser(res.data);
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                setErrors(error.response.data);

                // Limpiar errores después de 5 segundos
                setTimeout(() => {
                    setErrors([]);
                }, 5000);
            } else {
                setErrors(["Ha ocurrido un error durante el inicio de sesión. Por favor, verifica si tus datos son correctos."]);

                // Limpiar errores después de 5 segundos
                setTimeout(() => {
                    setErrors([]);
                }, 5000);
            }
        }
    };

    const logOut= ()=>{
        Cookies.remove("token");
        window.location.reload();
        setAutenticado(false);
        setUser(null);
    }

    // useEffect para leer la cookie en cada cambio de pantalla
    useEffect(()=>{
        async function checarLogin () {
            const cookies= Cookies.get();
        console.log(cookies)
        if(!cookies.token){
            setAutenticado(false);
            setUser(null)
            setcargar(false)
            return;
        }
            try {
                const res = await verificaToken(cookies.token)
                console.log(res)
                if(!res.data){
                    setAutenticado(false);
                    setcargar(false);
                    return
                } 
                setAutenticado(true)
                setUser(res.data)
                setcargar(false);
            } catch (error) {
                setAutenticado(false)
                setUser(null)
                setcargar(false);
                }
            
        }
        checarLogin();
    },[])
        
        return(
            <AuthContext.Provider value={{
                singUp,
                singIn,
                user,
                cargar,
                logOut,
                Autenticado,
                errors
            }}>    
                {children}
            </AuthContext.Provider>
        )
    }

    export {AuthContext};