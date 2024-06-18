import { useEffect, useState } from 'react'
import Header from '../components/Header'
import '../styles/Sesion.css'
import FormInput from '../components/FormInput';
import Footer from '../components/Footer,';
import { usaAuth } from '../context/authContex';
import { useNavigate } from 'react-router-dom';
export default function Registrarse() {

    const {singUp,Autenticado}= usaAuth()
    const navegacion =useNavigate();
    
    useEffect(()=>{
        if(Autenticado) navegacion( "/InicioSesion") 
    },[Autenticado])
    //Estado para los campos del formulario de registro
    const [formRegValues, setFormRegValues] = useState({
        usuario: "",
        email: "",
        password: "",
    });

    const formInputs = [
        {
            id: 1,
            name: "usuario",
            type: "text",
            placeholder: "Nombre de usuario",
            errorMessage: "El nombre de usuario debe de tener una longitud mínima de 5 letras, con un máximo de 50 y no debe de incluir caracteres especiales, ni números.",
            pattern: "^[A-Za-z]{5,50}$",
            label: "Usuario",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Correo electrónico",
            errorMessage: "Proporciona un correo electrónico válido.",
            label: "Correo electrónico",
            required: true,
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Contraseña",
            errorMessage: "La contraseña debe de tener una longitud mínima de 8 letras con un máximo de 20, debe incluir al menos una letra, un número, un caracter especial.",
            label: "Contraseña",
            required: true,
        },
    ];

    const onChange = (e) =>{
        setFormRegValues({...formRegValues, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Datos del formulario:", formRegValues); // Para verificar los datos que se envían
        singUp(formRegValues)
    };

    return(
        <>
            <Header />
            <main>
                <section>
                    <h2>Registro de Usuario</h2>
                    <form onSubmit={handleSubmit}>
                        {formInputs.map((input)=>(
                            <FormInput 
                                key={input.id} 
                                {...input} 
                                value={formRegValues[input.name]} 
                                onChange={onChange}
                            />
                        ))}
                        <label htmlFor="">Tipo de cuenta</label>
                        <select required>
                            <option value="">Tipo de cuenta</option>
                            <option value="estudiante">Estudiante</option>
                            <option value="profesor">Profesor</option>
                        </select>
                        <button /*type="submit"*/>Registrarse</button>
                    </form>
                </section>
            </main>
            <Footer/>
        </>
    );
}