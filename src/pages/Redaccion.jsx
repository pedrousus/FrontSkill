import '../styles/App.css'
import Header from '../components/Header'
import Footer from '../components/Footer,'
import { useTask } from '../context/taskContext'
import { useEffect, useState } from 'react';


export default function Redaccion() {

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
                <li><p>Redacción y composición</p></li>
            </ul>
        </nav>
        </header>
        <h1>Redacción y composición </h1>
        <section>
            <details>
                <summary>¿Qué voy a aprender?</summary>
                <div>
                <p>
                En un curso de Redacción y Composición, aprenderás una variedad de habilidades y técnicas relacionadas con la comunicación escrita efectiva. 
                </p>
                </div>
            </details>
            <details>
                <summary>¿Qué es la redacción y composición?</summary>
                <div>
                <p>
                La redacción y composición se refieren a la habilidad de expresar ideas de forma clara y coherente en texto escrito. Esto implica organizar pensamientos, estructurar información y transmitir mensajes efectivos utilizando un lenguaje claro y preciso, manteniendo la coherencia entre ideas y utilizando una estructura adecuada con correcta gramática y ortografía. También incluye adaptar el estilo y tono al propósito y audiencia, así como revisar y editar el texto para mejorar su calidad y claridad.
                </p>
                </div>
            </details>
            <details>
                  <summary>Lección 1: Fundamentos de la Redacción</summary>
                  <div>
                    <p>En esta lección apremderas los conceptos básicos de la redacción efectiva</p>
                    <h5>Definición de redacción y composición</h5>
                    <ul>
                      <li>Redacción: Es el proceso de expresar ideas y pensamientos de manera escrita de forma clara, coherente y organizada.</li>
                      <li>Composición: Se refiere a la estructuración y organización de ideas en un texto para transmitir un mensaje de manera efectiva y persuasiva.</li>
                    </ul>

                    <h5>Importancia de la claridad, coherencia y concisión en la escritura</h5>
                    <ul>
                      <li>Claridad: Permite que el lector comprenda fácilmente el mensaje sin ambigüedades ni confusiones.</li>
                      <li>Coherencia: Asegura que las ideas estén conectadas de manera lógica y consistente a lo largo del texto.</li>
                      <li>Concisión: Utilizar palabras y frases precisas para transmitir la información de manera eficiente y sin redundancias</li>
                    </ul>
                    <h5>Estructura de un párrafo</h5>
                    <ul>
                      <li>Idea principal: Presenta la información central o el argumento principal del párrafo.</li>
                      <li>Desarrollo: Expande la idea principal con detalles, ejemplos o evidencias que la respalden.</li>
                      <li>Conclusión: Resume o refuerza la idea principal y puede conducir al siguiente párrafo.</li>
                    </ul>
                    <h5>Uso adecuado de conectores y transiciones</h5>
                    <ul>
                      <li>Conectores: Palabras o frases que enlazan ideas dentro de un párrafo o entre párrafos para mantener la cohesión y fluidez del texto</li>
                      <small>Además, por otro lado, en conclusión</small>
                      <li>Transiciones: Expresiones que indican el cambio de idea, tema o punto de vista en el texto, facilitando la comprensión y la secuencia lógica</li>
                      <small>Ejemplo: en primer lugar, por lo tanto, en resumen</small>
                    </ul>

                    {getCalificacionByLeccion("Leccion1Reda") !== null ? (
                  <h3>Tu calificación es: {getCalificacionByLeccion("Leccion1Reda")} </h3>
                ) : (
                  <a href="/LecFunReda">Realizar Cuestionario</a>
                )}
                    </div>
                    </details>
                    <details>
                      <summary>Lección 2: Organización de Ideas y Argumentación</summary>
                      <div>
                        <p>En esta lección desarrollaras la habilidad para organizar ideas de manera lógica y argumentar coherentemente.</p>
                        <h5>Identificación de la idea principal y las ideas secundarias en un texto</h5>
                        <ul>
                          <li>La idea principal es el mensaje central o el punto principal que el autor quiere comunicar.</li>
                          <li>Las ideas secundarias son detalles, ejemplos o explicaciones que respaldan o desarrollan la idea principal.</li>
                        </ul>
                        <h5>Métodos de organización</h5>
                        <ul>
                          <li>Cronológico: Organiza la información en función del tiempo, siguiendo una secuencia temporal.</li>
                          <li>Comparativo: Compara dos o más elementos para resaltar similitudes y diferencias.</li>
                          <li>Causa-Efecto: Explica las relaciones de causa y efecto entre eventos o fenómenos.</li>
                          <li>Problema-Solución: Presenta un problema y luego propone una solución o soluciones.</li>
                        </ul>
                        <h5>Desarrollo de argumentos</h5>
                        <ul>
                          <li>Utiliza ejemplos concretos, evidencia (datos, estadísticas, hechos) y razonamientos lógicos para respaldar tus argumentos y puntos de vista.</li>
                          <li>Presenta tus ideas de manera clara y coherente, siguiendo una estructura lógica y organizada.</li>
                        </ul>
                        <h5>Uso de citas y referencias</h5>
                        <ul>
                          <li>Cita las fuentes de información que respaldan tus argumentos, como libros, artículos, investigaciones, entrevistas, entre otros.</li>
                          <li>Utiliza un estilo de citación y referencias bibliográficas adecuado, como APA, MLA, Chicago, según las normas académicas o profesionales establecidas.</li>
                        </ul>
                        {getCalificacionByLeccion("Leccion2Reda") !== null ? (
                  <h3>Tu calificación es: {getCalificacionByLeccion("Leccion2Reda")} </h3>
                ) : (
                  <a href="/LecArgu">Realizar Cuestionario</a>
                )}
                      </div>
                    </details>
                    <details>
                      <summary>Lección 3: Estilo y Revisión de Textos</summary>
                      <div>
                        <p>En esta lección  aprenderas técnicas para mejorar el estilo de escritura y realizar revisiones efectivas de textos.</p>
                        <h5>Elementos del estilo de escritura</h5>
                        <ul>
                          <li>Vocabulario adecuado: Utilizar palabras precisas y apropiadas para el contexto, evitando términos ambiguos o inadecuados.</li>
                          <li>Variedad sintáctica: Vary the sentence structure by using different sentence lengths, types, and patterns to create a more engaging and dynamic writing style.</li>
                          <li>Tono y registro: Adaptar el tono y el registro de la escritura según el propósito y la audiencia, manteniendo la coherencia y la adecuación del mensaje.</li>
                        </ul>
                        <h5>Uso de figuras retóricas</h5>
                        <ul>
                          <li>Utilizar figuras retóricas como metáforas, símiles, personificación, hipérboles, entre otras, para enfatizar ideas, crear imágenes vívidas y generar impacto emocional en el lector.</li>
                        </ul>
                        <h5>Revisión y corrección de errores comunes</h5>
                        <ul>
                          <li>Ortografía: Revisar la correcta escritura de palabras, incluyendo acentos, letras duplicadas, y errores de escritura comunes.</li>
                          <li>Gramática: Verificar la correcta construcción de oraciones, concordancia entre sujeto y verbo, uso adecuado de tiempos verbales, pronombres, y estructura gramatical en general.</li>
                          <li>Puntuación: Revisar el uso correcto de comas, puntos, punto y coma, comillas, entre otros, para asegurar la claridad y coherencia del texto.</li>
                        </ul>
                        <h5>Estrategias para mejorar la cohesión y coherencia del texto</h5>
                        <ul>
                          <li>Utilizar conectores y palabras de transición para enlazar ideas y párrafos de manera fluida y cohesiva.</li>
                          <li>Organizar la información de forma lógica y secuencial, siguiendo una estructura clara y ordenada.</li>
                          <li>Revisar la consistencia en el uso de términos, conceptos y referencias a lo largo del texto para mantener la coherencia temática.</li>
                        </ul>
                        {getCalificacionByLeccion("Leccion3Reda") !== null ? (
                  <h3>Tu calificación es: {getCalificacionByLeccion("Leccion3Reda")} </h3>
                ) : (
                  <a href="/LecRevText">Realizar Cuestionario</a>
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
