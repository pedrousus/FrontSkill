import { usaAuth } from "../context/authContex"

export default function Header(){

    const {Autenticado, logOut, user}=usaAuth();

    return (
        <header>
            <h2><a href="/">SkillMentor</a></h2>
            <nav>
                <ul>
                    {Autenticado ? (
                        <>
                            <li><a href="/">Cursos</a></li>
                            <li><p className="saludo">Hola {user.usuario}</p></li>
                            <li><a className='CerrarSesion'onClick={()=>{
                                logOut();
                            }}href="/" >Cerrar Sesión</a></li>
                        </>
                    ) : (
                        <>
                            <li><a href="/">Cursos</a></li>
                            <li><a href="/AprendizajeGeneral">Aprendizaje</a></li>
                            <li><a className='Sesion' href="/InicioSesion">Iniciar Sesión</a></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    )
    
}