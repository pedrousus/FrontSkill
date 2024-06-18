import Footer from '../components/Footer,'
import Header from '../components/Header'
import '../styles/App.css'

export default function Aprendizaje() {

    return(
        <div className='APP'>
            <Header />
            <main>
                <h1>Aprendizaje</h1>
                <section>
                    <h3>¿Que voy a aprender?</h3>
                    <p>
                    En nuestra página web, te ofrecemos una amplia gama de recursos y lecciones diseñadas para ayudarte a explorar y dominar una variedad de temas escolares. Desde Matemáticas hasta Ciencias, Historia, Programas de Computadora y Español, hemos creado un entorno de aprendizaje interactivo y divertido para estudiantes de todas las edades y niveles de habilidad.
                    </p>
                    <p>
                    Cada lección viene acompañada de actividades interactivas y un pequeño cuestionario para reforzar lo aprendido. Nuestro objetivo es proporcionarte una experiencia educativa enriquecedora y divertida que te motive a explorar y aprender.
                    </p>
                    <h3>Materias que ofrecemos</h3>
                    <details>
                        <summary>Matemáticas</summary>
                        <div>
                        <p>
                        Desde aprender a contar y reconocer números hasta resolver ecuaciones algebraicas complejas, nuestras lecciones de matemáticas están diseñadas para guiar a los estudiantes en cada paso de su viaje matemático. Exploramos conceptos como aritmética, geometría, álgebra, estadísticas y probabilidad, preparando a los estudiantes para enfrentar desafíos matemáticos con confianza en el aula y más allá.
                        </p>
                        </div>
                    </details>
                    <details>
                        <summary>Ciencias</summary>
                        <div>
                        <p>
                        Descubre el fascinante mundo que te rodea a través de nuestras lecciones de ciencias. Desde explorar células y entender cómo funcionan los ecosistemas hasta aprender sobre las leyes fundamentales del universo, nuestras lecciones de ciencias inspiran la curiosidad y fomentan la exploración del mundo natural y más allá.
                        </p>
                        </div>
                    </details>
                    <details>
                        <summary>Historia</summary>
                        <div>
                        <p>
                        Viaja en el tiempo y explora los eventos, las personas y las culturas que han dado forma al mundo en el que vivimos. Desde la antigüedad hasta los tiempos modernos, nuestras lecciones de historia proporcionan una comprensión profunda de los acontecimientos clave que han moldeado la sociedad, la política y la cultura en todo el mundo.
                        </p>
                        </div>
                    </details>
                    <details>
                        <summary>TICS</summary>
                        <div>
                        <p>
                        En la era digital actual, la alfabetización informática es esencial. Nuestras lecciones sobre programas de computadora como Word, PowerPoint y Excel enseñan habilidades prácticas que son cruciales tanto para la educación como para el mundo laboral. Desde la creación de documentos profesionales hasta la presentación de ideas de manera efectiva, nuestras lecciones de programas informáticos preparan a los estudiantes para sobresalir en un mundo cada vez más digitalizado.
                        </p>
                        </div>
                    </details>
                    <details>
                        <summary>Español</summary>
                        <div>
                        <p>
                        Perfecciona tus habilidades lingüísticas con nuestras lecciones de español que cubren gramática, vocabulario, comprensión de lectura y expresión escrita. Desde lo básico hasta niveles más avanzados, te ayudaremos a comunicarte con confianza en español.
                        </p>
                        </div>
                    </details>
                </section>
            </main>
            <Footer/>
        </div>
    )
}