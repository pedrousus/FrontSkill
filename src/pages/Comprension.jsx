import '../styles/App.css'
import Header from '../components/Header'
import Footer from '../components/Footer,'
import { useTask } from '../context/taskContext'
import { useEffect, useState } from 'react';

export default function Comprension() {
    const { getTask } = useTask();

    const [calificaciones, setCalificaciones] = useState(null);
    useEffect(() => {
        const fetchCalificaciones = async () => {
            try {
                const calificacionesData = await getTask();
                setCalificaciones(calificacionesData);
            } catch (error) {
                console.error("Error al obtener las calificaciones:", error);
            }
        };

        fetchCalificaciones();
    }, []);

    const getCalificacionByLeccion = (leccion) => {
        if (!calificaciones) return null;

        const calificacion = calificaciones.find(c => c.leccion === leccion);
        return calificacion ? calificacion.score : null;
    };

    useEffect(() => {
        getTask();
    }, [])
    return (
        <>
            <div className='APP'>
                <Header />
                <main>
                    <header>
                        <nav>
                            <ul>
                                <li><a href="/">Skill Mentor</a></li>
                                <p>/</p>
                                <li><a href="/Español">Español</a></li>
                                <p>/</p>
                                <li><p>Comprensión lectora </p></li>
                            </ul>
                        </nav>
                    </header>
                    <h1>Comprensión lectora </h1>
                    <section>
                        <details>
                            <summary>¿Qué voy a aprender?</summary>
                            <div>
                                <p>
                                    En el este curso, aprenderás estrategias efectivas para leer textos de diferentes géneros y temas, identificar ideas principales y secundarias, inferir significados a partir del contexto, desarrollar vocabulario, pensamiento crítico y analítico, interpretar figuras retóricas, y resumir información de manera precisa y concisa. Estas habilidades te ayudarán a entender textos con mayor profundidad, comunicarte de manera efectiva y formar juicios fundamentados.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary>¿Qué es la comprensión lectora?</summary>
                            <div>
                                <p>La comprensión lectora se refiere a la habilidad para entender, interpretar y evaluar la información presente en un texto escrito. Involucra no solo la capacidad de leer las palabras y entender su significado individual, sino también de comprender el mensaje global, identificar las ideas principales y secundarias, inferir el significado a partir del contexto, evaluar la validez de argumentos y evidencias, y formar conclusiones fundamentadas. La comprensión lectora es fundamental para el aprendizaje, la comunicación efectiva y el desarrollo del pensamiento crítico y analítico.</p>

                            </div>
                        </details>
                        <details>
                            <summary>Lección 1: Introducción a la Comprensión Lectora</summary>
                            <div>
                                <p>En esta lección comprenderas la importancia de la comprensión lectora y desarrollar habilidades básicas de comprensión</p>
                                <h5>Definición de comprensión lectora</h5>
                                <p>La comprensión lectora se refiere a la habilidad para entender, interpretar y evaluar la información presente en un texto escrito, incluyendo la identificación de ideas principales, la inferencia de significados, la evaluación de argumentos y la formación de conclusiones fundamentadas.</p>
                                <h5>Importancia de comprender lo que se lee</h5>
                                <p>La comprensión lectora es fundamental para el aprendizaje efectivo, la comunicación clara y precisa, el desarrollo del pensamiento crítico y analítico, y la toma de decisiones informadas en diversos contextos.</p>
                                <h5>Estrategias básicas de comprensión</h5>
                                <ul>
                                    <li>Identificar ideas principales: Localizar la información más relevante en un texto para entender su mensaje central.</li>
                                    <li>Inferir significados: Deducir el significado de palabras o conceptos desconocidos a partir del contexto y de pistas contextuales.</li>
                                    <li>Hacer predicciones: Anticipar lo que sucederá en el texto o prever posibles resultados basándose en la información presente.</li>

                                </ul>
                                <h5>Lectura de textos cortos y sencillos con preguntas para practicar la comprensión</h5>
                                <p>Se proporcionarán textos cortos y sencillos para que practiques las estrategias de comprensión mencionadas. Después de leer cada texto, se formularán preguntas relacionadas con el contenido para evaluar tu comprensión y práctica de las estrategias.</p>
                                {getCalificacionByLeccion("Leccion1Compre") !== null ? (
                                    <h3>Tu calificación es: {getCalificacionByLeccion("Leccion1Compre")} </h3>
                                ) : (
                                    <a href="/LecCompre">Realizar Cuestionario</a>
                                )}
                            </div>
                        </details>
                        <details>
                            <summary>Lección 2: Estrategias Avanzadas de Comprensión Lectora</summary>
                            <div>
                                <p>En esta lección mejoraras las habilidades de comprensión mediante el uso de estrategias avanzadas.</p>
                                <h5>Identificación de ideas secundarias y detalles relevantes</h5>
                                <p>Aprenderás a reconocer las ideas secundarias y los detalles importantes en un texto para comprender el mensaje global y la información detallada que respalda las ideas principales.</p>
                                <h5>Uso de marcadores de cohesión y conectores</h5>
                                <p>Se enseñarán técnicas para utilizar marcadores de cohesión y conectores, como pronombres, conjunciones y adverbios, para entender la relación entre ideas dentro de un texto y mantener la coherencia y fluidez en la lectura.</p>
                                <h5>Análisis de estructuras textuales</h5>
                                <p>Se explorarán diferentes estructuras textuales como la causa-efecto, la comparación-contraste y el problema-solución, para comprender cómo están organizadas las ideas en un texto y cómo estas estructuras ayudan a comunicar el mensaje de manera efectiva.</p>
                                {getCalificacionByLeccion("Leccion2Compre") !== null ? (
                                    <h3>Tu calificación es: {getCalificacionByLeccion("Leccion2Compre")} </h3>
                                ) : (
                                    <a href="/LecEstra">Realizar Cuestionario</a>
                                )}
                            </div>
                        </details>
                        <details>
                            <summary>Lección 3: Aplicación Práctica de Comprensión Lectora</summary>
                            <div>
                                <p>En eta lección aplicaras las habilidades de comprensión lectora en contextos diversos y realistas.</p>
                                <h5>Lectura de textos variados</h5>
                                <p>Se te proporcionarán textos de diferentes géneros como narrativos (cuentos, novelas), informativos (artículos de noticias, ensayos) y argumentativos (editoriales, ensayos argumentativos) para que practiques la comprensión en diversos contextos y estilos de escritura.</p>
                                <h5>Análisis crítico de textos</h5>
                                <p>Aprenderás a evaluar la credibilidad de los textos, identificar los puntos de vista del autor, analizar los argumentos presentados y formar juicios críticos fundamentados sobre la calidad y validez de la información proporcionada.</p>
                                <h5>Resumen y síntesis de información</h5>
                                <p>Desarrollarás habilidades para extraer las ideas principales de un texto y expresarlas de manera concisa y clara, eliminando la información redundante o secundaria y manteniendo la coherencia y cohesión del resumen.</p>
                                <h5>Actividades prácticas de comprensión</h5>
                                <p>Participarás en debates y discusiones sobre los textos leídos, analizarás artículos o ensayos para identificar los argumentos y puntos de vista presentados, y realizarás actividades de análisis crítico que te ayudarán a profundizar en la comprensión de los textos y desarrollar tu pensamiento crítico y analítico.</p>
                                {getCalificacionByLeccion("Leccion3Compre") !== null ? (
                                    <h3>Tu calificación es: {getCalificacionByLeccion("Leccion3Compre")} </h3>
                                ) : (
                                    <a href="/LecPracEstra">Realizar Cuestionario</a>
                                )}
                            </div>
                        </details>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    )
}
