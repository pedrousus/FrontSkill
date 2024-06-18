import { useState,useEffect } from 'react'
import Footer from '../components/Footer,'
import Header from '../components/Header'
import FormInput from '../components/FormInput';
import '../styles/Sesion.css'
import { usaAuth } from '../context/authContex';
import { useNavigate } from 'react-router-dom';

export default function InicioSesion() {
    const [formLogValues, setLogFormValues] = useState({
        email: "",
        password: ""
    });


    const {singIn, errors,Autenticado}=  usaAuth();

    const navigate = useNavigate();
    // Funciones para manejar los eventos de los inputs
    const formInputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Correo electrónico",
            errorMessage: "Proporciona un correo electrónico valido.",
            label: "Correo electrónico",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "password",
            errorMessage: "La contraseña es erronea.",
    
            label: "password",
            required: true,
        },
    ]

    const onChange = (e) => {
        setLogFormValues({ ...formLogValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        singIn(formLogValues);
    };
    
    useEffect(()=>{
        if(Autenticado) navigate( "/") 
    },[Autenticado, navigate])

    return (
        <>
            <Header />
            <main>
                <section>
                    {errors && errors.length > 0 && (
                        <div className='erorr'>
                            {errors.map((error, i) => (
                                <div key={i}>{error}</div>
                            ))}
                        </div>
                    )}
                    <h2>Iniciar Sesión</h2>
                    <form onSubmit={handleSubmit}>
                        {formInputs.map((input) => (
                            <FormInput
                                key={input.id}
                                {...input}
                                value={formLogValues[input.name]}
                                onChange={onChange}
                            />
                        ))}
                        <button type="submit">Ingresar</button>
                    </form>
                </section>
                <a href="/Registro">Registrarse</a>
            </main>
            <Footer />
        </>
    );
}