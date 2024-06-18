import Footer from '../components/Footer,'
import Header from '../components/Header'
import '../styles/App.css'

export default function Valores() {

    return(
        <div className='APP'>
            <Header />
            <main>
                <header>
                </header>
                <h1>Valores SkillMentor</h1>
                <section>
                    <h3>Excelencia Educativa:</h3>
                    <p>
                     Nos esforzamos por ofrecer contenido educativo de alta calidad que inspire el aprendizaje y promueva el desarrollo académico de los estudiantes.
                    </p>
                    <h3>Accesibilidad:</h3>
                    <p>
                     Creemos en la igualdad de oportunidades educativas y nos comprometemos a proporcionar acceso fácil y amplio a nuestros recursos educativos para estudiantes de todas partes.
                    </p>
                    <h3> Innovación:</h3>
                    <p>
                    Buscamos constantemente nuevas formas de mejorar y enriquecer la experiencia de aprendizaje en línea, utilizando tecnología innovadora y metodologías pedagógicas efectivas.
                    </p>
                    <h3>Integridad:</h3>
                    <p>
                    Nos comprometemos a mantener altos estándares éticos y a ofrecer contenido educativo preciso, confiable y libre de sesgos.
                    </p>
                    <h3>Colaboración:</h3>
                    <p>
                    Creemos en la colaboración y el trabajo en equipo, tanto dentro de nuestra organización como con educadores, padres y estudiantes, para impulsar el éxito académico y el crecimiento personal.
                    </p>
                    <h3>Transparencia:</h3>
                    <p>
                    Nos comprometemos a ser transparentes en nuestras prácticas y procesos, brindando a los usuarios información clara y precisa sobre nuestros recursos educativos y políticas.
                    </p>
                </section>
            </main>
            <Footer/>
        </div>
    )
}