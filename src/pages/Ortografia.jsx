/* eslint-disable react/no-unescaped-entities */
import '../styles/App.css'
import Header from '../components/Header'
import Footer from '../components/Footer,'
import { useTask } from '../context/taskContext'
import { useEffect, useState } from 'react';


export default function Ortografia() {
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
                <li><p>Ortografía</p></li>
              </ul>
            </nav>
          </header>
          <h1>Ortografía</h1>

          <details>
            <summary>¿Qué voy a aprender?</summary>
            <div>
              <p>
                En este curso de ortografía, explorarás las reglas fundamentales de la correcta escritura en español. Aprenderás a utilizar adecuadamente las tildes, las letras b y v, las letras c y s, así como otros aspectos importantes de la gramática y la puntuación que te ayudarán a mejorar tu habilidad para escribir de manera clara y precisa. Mediante ejercicios prácticos y ejemplos claros, adquirirás las herramientas necesarias para evitar errores comunes y comunicarte de manera efectiva en cualquier contexto escrito.
              </p>
            </div>
          </details>

          <details>
            <summary>Lección 1: Uso de mayúsculas y minúsculas</summary>
            <div>
              <p>
                En esta lección aprenderás la importancia y las reglas fundamentales para el uso adecuado de mayúsculas y minúsculas en el idioma español.
              </p>
              <p>Algunas reglas importantes son:</p>
              <ul>
                <li>Las Mayusculas siempre van al inicio de las oraciones.</li>
                <li>Los nombres propios siempre inician con mayúsculas.</li>
                <li>Los nombres de océanos, mares, ríos, montañas, etc., se escriben con mayúscula.</li>
                <li> Los títulos de libros, películas, canciones, etc., se escriben con mayúscula en la primera letra y en las palabras importantes, como nombres propios y sustantivos. </li>
                <li>Las siglas y abreviaturas se escriben en mayúsculas</li>
              </ul>


              <h5>Ejemplo 1</h5>
              <p>
                Mayúscula inicial de oraciones
              </p>
              <small>Incorrecto: la casa está en la colina. <br />
                Correcto: La casa está en la colina.</small>
              <h5>Ejemplo 2</h5>
              <p>
                Nombres propios
              </p>
              <small>Incorrecto: maría vive en barcelona. <br />
                Correcto: María vive en Barcelona.</small>
              <h5>Ejemplo 3</h5>
              <p>
                Nombres geográficos
              </p>
              <small>Incorrecto: montaña de la mesa en sudáfrica. <br />
                Correcto: Montaña de la Mesa en Sudáfrica.</small>
              <h5>Ejemplo 4</h5>
              <p>
                Titulos de obras
              </p>
              <small>Incorrecto: el libro "cien años de soledad" es muy famoso. <br />
                Correcto: El libro "Cien años de soledad" es muy famoso.</small>
              <h5>Ejemplo 5</h5>
              <p>
                Siglas y abreviaturas
              </p>
              <small>Incorrecto: la onu tiene sedes en varios países. <br />
                Correcto: La ONU tiene sedes en varios países.</small>
              {getCalificacionByLeccion("Leccion1Espanol") !== null ? (
                <h3>Tu calificación es: {getCalificacionByLeccion("Leccion1Espanol")} </h3>
              ) : (
                <a href="/resEspanol">Realizar Cuestionario</a>
              )}
            </div>

          </details>

          <details>
            <summary>Lección 2: Acentuación de palabras agudas, graves, esdrújulas y sobreesdrújulas.</summary>
            <div>
              <p>

                La acentuación de palabras en español se basa en la ubicación de la sílaba tónica, es decir, la sílaba que se pronuncia con mayor intensidad en una palabra. Dependiendo de dónde se encuentre esta sílaba tónica, las palabras se clasifican en agudas, graves (o llanas), esdrújulas y sobreesdrújulas
              </p>
              <h5>Palabras agudas </h5>
              <p>
                Son aquellas cuya sílaba tónica es la última sílaba. Estas palabras llevan tilde (acento ortográfico) si terminan en vocal, "n" o "s".
              </p>
              <small> cajón, pared, Madrid, albornoz, casualidad, menú, reloj, coser, caminar, café, hotel</small>

              <h5>Palabras graves o llanas </h5>
              <p>
                La sílaba tónica de estas palabras es la penúltima sílaba. Llevan tilde si no terminan en vocal, "n" o "s".
              </p>
              <small>árbol, música, fácil, mármol</small>

              <h5>Palabras esdrújulas </h5>
              <p>
                Tienen la sílaba tónica en la antepenúltima sílaba y siempre llevan tilde.
              </p>
              <small>teléfono, fácilmente, rápido, cárcel. </small>

              <h5>Palabras sobreesdrújulas </h5>
              <p>
                La sílaba tónica de estas palabras está antes de la antepenúltima sílaba y siempre llevan tilde. Este tipo de palabras es menos común en el español y suelen ser verbos en formas especiales o pronombres enclíticos con acento enfático.
              </p>
              <small>cántamelo, cómpratelo, díganselo.</small>
              {getCalificacionByLeccion("Leccion2Espanol") !== null ? (
                <h3>Tu calificación es: {getCalificacionByLeccion("Leccion2Espanol")} </h3>
              ) : (
                <a href="/LecOrtografia">Realizar Cuestionario</a>
              )}
            </div>
          </details>

          <details>
            <summary>Lección 3: Las reglas de ortografía de la B y V</summary>
            <div>
              <p>

                La ortografía de las letras "B" y "V" en español es uno de los aspectos fundamentales de la gramática que requiere atención debido a la similitud en la pronunciación de ambas letras. Aunque en muchos dialectos del español actual estas letras suenan de manera muy similar o incluso idéntica, es crucial distinguirlas correctamente en la escritura para evitar errores ortográficos y garantizar una comunicación clara y precisa.
              </p>
              <h5>Uso de la "B":</h5>
              <ul>
                <li>Cuando va seguida de las vocales "a", "o", "u", por ejemplo: "bailar", "boca", "bulto".</li>
                <li>Después de consonantes, como en "abril", "subrayar", "obstáculo".</li>
                <li>En palabras que terminan en "-bundo" o "-bunda", como "moribundo", "zámbula".</li>
                <li>En palabras que comienzan con los prefijos "bi-" y "biz-", como "bisabuelo", "bizantino".</li>
              </ul>
              <h5>Uso de la "V":</h5>
              <ul>
                <li>Cuando va seguida de las vocales "e" e "i", como en "veinte", "viento", "vivir".</li>
                <li>En los verbos que terminan en "-ev", como "beber", "volver", "conmover".</li>
                <li>En palabras que comienzan con los prefijos "vice-" y "vices-", como "vicepresidente", "vicesecretario", "vicealmirante".</li>

              </ul>

              {getCalificacionByLeccion("Leccion3Espanol") !== null ? (
                <h3>Tu calificación es: {getCalificacionByLeccion("Leccion3Espanol")} </h3>
              ) : (
                <a href="/LecBV">Realizar Cuestionario</a>
              )}

            </div>

          </details>

          <details>
            <summary>Lección 4: Las reglas de ortografía de la G y J</summary>
            <div>
              <p>

                La ortografía de las letras "G" y "J" en español es uno de los aspectos fundamentales de la gramática que requiere atención debido a la similitud en la pronunciación de ambas letras. Aunque en muchos dialectos del español actual estas letras suenan de manera muy similar o incluso idéntica, es crucial distinguirlas correctamente en la escritura para evitar errores ortográficos y garantizar una comunicación clara y precisa.
              </p>
              <h5>Uso de la "G":</h5>
              <ul>
                <li>La "g" se utiliza antes de las vocales "a", "o", "u" y consonantes, como en "gato", "gota", "guerra", "gris".</li>
                <li>En los verbos que terminan en "-ger" y "-gir", como "proteger", "dirigir".</li>
                <li>Antes de la vocal "e" o "i" seguida de una "u" que no suene, como en "guerra", "guiso".</li>
              </ul>
              <h5>Uso de la "J":</h5>
              <ul>
                <li>La "j" se usa para representar el sonido fuerte de la "jota", como en "juego", "joven", "jirafa".</li>
                <li>En los verbos que terminan en "-jar", como "viajar", "trabajar".</li>
                <li>En los adjetivos que terminan en "-joso" y "-judo", como "peligroso", "consecuente".</li>
                <li>En palabras de origen extranjero, como "jazz", "jersey".</li>
              </ul>
              <p>
                Es importante recordar que la "g" y la "j" pueden tener sonidos similares en algunas palabras, pero su uso ortográfico es determinado por las reglas de la lengua española. Practicar la escritura y leer textos variados ayudará a familiarizarse con estas reglas y a escribir con mayor precisión.
              </p>

              {getCalificacionByLeccion("Leccion4Espanol") !== null ? (
                <h3>Tu calificación es: {getCalificacionByLeccion("Leccion4Espanol")} </h3>
              ) : (
                <a href="/LecGJ">Realizar Cuestionario</a>
              )}

            </div>
          </details>

          <details>
            <summary>Lección 5: Las reglas de ortografía de la C, S y Z</summary>
            <div>
              <p>
                Las reglas de ortografía de la "c", "s" y "z" en español son fundamentales para escribir correctamente y evitar confusiones en la pronunciación de las palabras.
              </p>
              <h5>Uso de la "C":</h5>
              <ul>
                <li>La "c" se utiliza antes de las vocales "a", "o", "u" y consonantes, como en "casa", "coco", "cuaderno", "clase".</li>
                <li>En palabras que terminan en "-ción", "-cto" y "-cte", como "acción", "dictado", "conducta".</li>
                <li>En los verbos que terminan en "-cer" y "-cir", como "conocer", "decir".</li>
              </ul>

              <h5>Uso de la "S":</h5>
              <ul>
                <li>La "s" se usa para representar el sonido de la "ese", como en "sol", "mesa", "rosa".</li>
                <li>En palabras que terminan en "-sión", "-sión", "-sivo" y "-siva", como "expresión", "comisión", "decisivo", "ofensiva".</li>
                <li>Antes de las consonantes "b", "v", "m" y "n", como en "submarino", "observar", "insomnio"</li>
              </ul>

              <h5>Uso de la "Z":</h5>
              <ul>
                <li>La "z" se utiliza para representar el sonido de la "zeta", como en "zapato", "zorro", "luz".</li>
                <li>En palabras que terminan en "-zón", "-zuela", como "expresión", "cabezuela".</li>
                <li>En los verbos que terminan en "-zar", como "organizar", "empezar".</li>
              </ul>

              {getCalificacionByLeccion("Leccion5Espanol") !== null ? (
                <h3>Tu calificación es: {getCalificacionByLeccion("Leccion5Espanol")} </h3>
              ) : (
                <a href="/LecCSZ">Realizar Cuestionario</a>
              )}

            </div>
          </details>

          <details>
            <summary>Lección 6: El uso de los signos de puntuación</summary>
            <div>

              <h5>Punto(.) </h5>
              <p>
                Se utiliza al final de las oraciones declarativas y enunciativas. También se usa después de las abreviaturas
              </p>
              <small> Ejemplo:  "Ella estudia en la universidad."</small>

              <h5>Coma(,)</h5>
              <p>
                Se usa para separar elementos en una enumeración. Para separar frases subordinadas o aclaratorias.
              </p>
              <small>Ejemplo: "Juan, María y Pedro fueron al cine."</small>

              <h5>Punto y coma(;)</h5>
              <p>
                Se emplea para separar oraciones relacionadas pero independientes entre sí. Antes de conjunciones como "sin embargo", "por lo tanto", "por consiguiente".
              </p>
              <small>Ejemplo 1: "Ella estudió toda la noche; aún así, no aprobó el examen." <br />  Ejemplo 2: "Llegaron tarde; sin embargo, lograron completar la tarea."</small>

              <h5>Dos puntos(:) </h5>
              <p>
                Se usan para introducir una enumeración, una cita textual o un ejemplo.
              </p>
              <small>Ejemplo: "Los colores primarios son: rojo, azul y amarillo."</small>
              <h5>Punto y seguido (.) </h5>
              <p>
                Se utiliza para separar oraciones dentro de un mismo párrafo cuando se quiere continuar el texto después de la pausa.
              </p>
              <small>Ejemplo: "Ella estudia mucho. Pedro también estudia, pero a veces se distrae."</small>
              <h5>Punto y aparte (.) </h5>
              <p>
                Se usa para indicar el final de un párrafo o una idea completa. Después de este punto, se inicia un nuevo párrafo.
              </p>
              <small>Ejemplo: "Ella estudia mucho. Pedro también estudia. Sin embargo, a veces se distrae."</small>
              <h5>Signos de interrogación (¿?) y exclamación (¡!) </h5>
              <p>
                Se utilizan al inicio y al final de las preguntas (interrogación) y las exclamaciones, respectivamente.
              </p>
              <small>Ejemplo: "¿Cómo estás?" / "¡Qué alegría verte!"</small>
              <h5>Comillas ("")</h5>
              <p>
                Se utilizan para indicar citas textuales, títulos de obras, nombres de programas, entre otros.
              </p>
              <small>Ejemplo: Dijo Juan: "Me encanta esta canción."</small>

              {getCalificacionByLeccion("Leccion6Espanol") !== null ? (
                <h3>Tu calificación es: {getCalificacionByLeccion("Leccion6Espanol")} </h3>
              ) : (
                <a href="/LecPunt">Realizar Cuestionario</a>
              )}

            </div>
          </details>

        </main>
        <Footer />
      </div>
    </>
  )
}


