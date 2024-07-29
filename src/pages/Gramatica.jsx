/* eslint-disable react/no-unescaped-entities */
import '../styles/App.css'
import Header from '../components/Header'
import Footer from '../components/Footer,'
import { useTask } from '../context/taskContext'
import { useEffect, useState } from 'react';

export default function Gramatica() {
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
                <li><p>Gramática</p></li>
              </ul>
            </nav>
          </header>
          <h1>Gramática</h1>
          <section>
            <details>
              <summary>¿Qué voy a aprender?</summary>
              <div>
                <p>
                  En este curso, exploraremos los fundamentos de la gramática, una parte esencial del estudio del lenguaje que nos permite comprender cómo se estructuran las palabras y las frases para comunicarnos de manera efectiva.
                </p>
              </div>
            </details>
            <details>
              <summary>¿Qué es la gramática?</summary>
              <div>
                <p>
                  La gramática es el conjunto de reglas y principios que rigen el uso de un idioma. Estudia la estructura de las palabras, las frases y las oraciones, así como las reglas de concordancia y construcción de textos.
                </p>
              </div>
            </details>
            <details>
              <summary>Lección 1: Introducción a la gramática</summary>
              <div>
                <p>
                  En esta lección comprenderas qué es la literatura y su importancia en la cultura.
                </p>
                <p>La gramática es un conjunto de reglas y estructuras que rigen el uso correcto de un idioma. Sus componentes principales son:</p>
                <ul>
                  <li>Sintaxis: Se refiere a la estructura y organización de las palabras en las frases y oraciones. Incluye la colocación de sujetos, verbos, complementos y otros elementos para formar unidades gramaticales coherentes.</li>
                  <li>Morfología: Estudia la estructura interna de las palabras, es decir, su formación y análisis en unidades más pequeñas llamadas morfemas. Los morfemas pueden ser raíces, prefijos, sufijos, entre otros, que modifican el significado o la función de las palabras.</li>
                  <li>Semántica: Analiza el significado de las palabras y cómo se relacionan entre sí para transmitir mensajes precisos y comprensibles. La semántica abarca la interpretación de palabras individuales, así como de frases y textos completos.</li>
                </ul>


                <h5>Errores mas comunes</h5>
                <p>
                  Errores de concordancia: Como en frases donde el sujeto y el verbo no concuerdan en número o persona
                </p>
                <small> "Ellos estudia" en lugar de "Ellos estudian"</small>

                <p>
                  Uso incorrecto de tiempos verbales: Como en la confusión entre el presente simple y el presente continuo
                </p>
                <small>"Ella estudia" en lugar de "Ella está estudiando".</small>

                <p>
                  Errores de puntuación: Como la falta de comas en lugares clave de la frase, alterando su significado
                </p>
                <small>"Vamos a comer niños" en lugar de "Vamos a comer, niños".</small>

                <p>
                  Confusión en el uso de pronombres: Como en frases ambiguas que no especifican claramente a quién o qué se refiere el pronombre
                </p>
                <small> "Le di el libro a él" en lugar de "Le di el libro a Juan".</small>
                {getCalificacionByLeccion("Leccion1Grama") !== null ? (
                  <h3>Tu calificación es: {getCalificacionByLeccion("Leccion1Grama")} </h3>
                ) : (
                  <a href="/LecGrama">Realizar Cuestionario</a>
                )}
              </div>
            </details>
            <details>
              <summary>Lección 2: Sintaxis y Estructura de la Oración</summary>
              <div>
                <p>
                  En esta lección comprenderas la estructura básica de las oraciones y cómo se relacionan las palabras en ellas.
                </p>

                <h5>Sujeto, Verbo y Complemento:</h5>
                <ul>
                  <li>Sujeto: Es la parte de la oración que realiza la acción del verbo o sobre la que se dice algo.</li>
                  <small>En la frase "Juan estudia", "Juan" es el sujeto porque realiza la acción de estudiar.</small>
                  <li>Verbo: Es la palabra que indica la acción que realiza el sujeto o el estado en el que se encuentra. </li>
                  <small>En la frase anterior, "estudia" es el verbo.</small>
                  <li>Complemento: Es la parte de la oración que complementa o amplía la información sobre el verbo o el sujeto. Puede ser directo, indirecto, de régimen, entre otros. </li>
                  <small>En la frase "Juan compró un libro", "un libro" es el complemento directo que completa la acción del verbo "compró".</small>
                </ul>

                <h5>Tipos de oraciones</h5>
                <ul>
                  <li>Afirmativas: Son aquellas que expresan una afirmación o una declaración de algo que es verdadero.</li>
                  <small>Por ejemplo, "María lee un libro".</small>
                  <li>Negativas: Son oraciones que niegan algo. </li>
                  <small>Por ejemplo, "No tengo hambre".</small>
                  <li>Interrogativas: Son oraciones que formulan una pregunta. </li>
                  <small>Pueden ser interrogativas directas, como "¿Cómo te llamas?", o indirectas, como "Quiero saber cómo te llamas".</small>
                </ul>

                <h5>Construcción de Oraciones Simples y Compuestas</h5>
                <ul>
                  <li>Oraciones Simples: Son aquellas que contienen un solo verbo conjugado. </li>
                  <small>Por ejemplo, "El perro ladra".</small>
                  <li>Oraciones Compuestas: Son aquellas que están formadas por dos o más oraciones simples unidas por conjunciones o signos de puntuación.</li>
                  <small>Por ejemplo,"El perro ladra y el gato maúlla".</small>
                </ul>
                {getCalificacionByLeccion("Leccion2Grama") !== null ? (
                  <h3>Tu calificación es: {getCalificacionByLeccion("Leccion2Grama")} </h3>
                ) : (
                  <a href="/LecSintax">Realizar Cuestionario</a>
                )}
              </div>
            </details>
            <details>
              <summary>Lección 3: Morfología y Clasificación de Palabras</summary>
              <div>
                <p>
                  En esta lección conoceras las clases de palabras y sus características morfológicas.
                </p>

                <h5>Clasificación de palabras</h5>
                <ul>
                  <li>Sustantivos: Son palabras que nombran personas, animales, cosas, lugares, ideas, etc. </li>
                  <small>Ejemplos: perro, casa, amor.</small>
                  <li>Adjetivos: Describen características o cualidades de los sustantivos</li>
                  <small>Ejemplos: grande, hermoso, inteligente.</small>
                  <li>Verbos: Expresan acciones, estados o procesos. </li>
                  <small>Ejemplos: correr, ser, aprender.</small>
                  <li>Adverbios: Modifican verbos, adjetivos u otros adverbios, indicando cómo, cuándo, dónde, etc. </li>
                  <small>Ejemplos: rápidamente, muy, aquí.</small>
                  <li>Pronombres: Sustituyen o representan a un sustantivo.</li>
                  <small> Ejemplos: él, ella, nosotros, quienes.</small>
                  <li>Preposiciones: Establecen relaciones espaciales, temporales o lógicas entre palabras. </li>
                  <small>Ejemplos: en, con, durante.</small>
                  <li>Conjunciones: Unen palabras, frases u oraciones.</li>
                  <small> Ejemplos: y, pero, aunque.</small>
                </ul>

                <h5>Flexión de género y número en sustantivos y adjetivos</h5>
                <ul>
                  <li>Género: Algunos sustantivos y adjetivos cambian su forma para indicar género masculino y femenino. </li>
                  <small>Ejemplo: gato (masculino) - gata (femenino).</small>
                  <li>Número: Los sustantivos y adjetivos pueden estar en singular (una sola cosa) o plural (más de una cosa). </li>
                  <small> Ejemplo: casa (singular) - casas (plural).</small>
                </ul>

                <h5>Conjugación verbal</h5>
                <ul>
                  <li>Verbos regulares: Siguen patrones predecibles al cambiar de forma según el tiempo verbal y la persona.</li>
                  <small>Ejemplo en español: hablar (presente: yo hablo, tú hablas, él/ella habla).</small>
                  <li>Verbos irregulares: Tienen formas verbales que no siguen patrones regulares. </li>
                  <small>Ejemplo en español: ser (presente: yo soy, tú eres, él/ella es).</small>
                </ul>
                {getCalificacionByLeccion("Leccion3Grama") !== null ? (
                  <h3>Tu calificación es: {getCalificacionByLeccion("Leccion3Grama")} </h3>
                ) : (
                  <a href="/LecMorfo">Realizar Cuestionario</a>
                )}
              </div>
            </details>

            <details>
              <summary>Lección 4: Flexión y concordancia</summary>
              <div>
                <p>
                  En esta lección entenderas la flexión de género y número en sustantivos y adjetivos, así como la concordancia entre sujetos y verbos.
                </p>

                <h5>Flexión de género y número en sustantivos y adjetivos</h5>
                <ul>
                  <li>Género: Algunos sustantivos y adjetivos cambian su forma para indicar género masculino y femenino.</li>
                  <small> Por ejemplo, en español, "niño" es masculino y "niña" es femenino. </small>
                  <li>Los adjetivos también se flexionan para concordar en género con el sustantivo al que modifican.</li>
                  <small> Por ejemplo, "alto" (masculino) y "alta" (femenino).</small>
                  <li>Número: Los sustantivos y adjetivos pueden estar en singular (una sola cosa o persona) o plural (más de una cosa o persona). La flexión en número afecta tanto a los sustantivos como a los adjetivos. </li>
                  <small>Por ejemplo, "gato" (singular) y "gatos" (plural), "pequeño" (singular) y "pequeños" (plural).</small>

                </ul>

                <h5>Concordancia entre sujeto y verbo en número y persona</h5>
                <p>En español y en muchos otros idiomas, el verbo debe concordar en número y persona con el sujeto de la oración. Esto significa que la forma del verbo cambia según si el sujeto está en singular o plural, y según la persona (primera, segunda o tercera).</p>

                <h5>Ejemplo de concordancia en número y persona:</h5>
                <ul>

                  <small>Sujeto singular (yo): "Yo hablo español." (Verbo en primera persona del singular: "hablo")</small>

                  <small> Sujeto plural (ellos): "Ellos hablan español." (Verbo en tercera persona del plural: "hablan")</small>
                  <small>Sujeto singular (tú): "Tú hablas español." (Verbo en segunda persona del singular: "hablas")</small>
                </ul>
                {getCalificacionByLeccion("Leccion4Grama") !== null ? (
                  <h3>Tu calificación es: {getCalificacionByLeccion("Leccion4Grama")} </h3>
                ) : (
                  <a href="/LecFlex">Realizar Cuestionario</a>
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
