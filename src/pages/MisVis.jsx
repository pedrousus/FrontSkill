import Footer from '../components/Footer,'
import Header from '../components/Header'
import '../styles/App.css'

export default function MisVis() {

    return(
        <div className='APP'>
            <Header />
            <main>  
                <h1>Misión y Visión SkillMentor</h1>
                <section>
                    <h3>Visión</h3>
                    <p>
                    Nos visualizamos como la principal plataforma educativa en línea, donde los estudiantes de todas las edades y niveles de habilidad pueden acceder a recursos de aprendizaje de alta calidad. Nos esforzamos por ser un destino confiable y accesible para la educación en línea, empoderando a los estudiantes para alcanzar su máximo potencial y fomentar un amor duradero por el aprendizaje.
                    </p>
                    <h3>Misión</h3>
                    <p>
                    Nuestra misión es proporcionar una experiencia educativa enriquecedora y accesible para estudiantes de todas partes. Nos comprometemos a ofrecer contenido educativo diverso y de calidad, diseñado para inspirar la curiosidad, fomentar la exploración y promover el éxito académico. Buscamos ser un recurso invaluable para estudiantes, educadores y padres, apoyando el aprendizaje en el aula y más allá.
                    </p>
                </section>
            </main>
            <Footer/>
        </div>
    )
}