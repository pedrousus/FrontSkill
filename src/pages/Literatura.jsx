/* eslint-disable react/no-unescaped-entities */
import '../styles/App.css'
import Header from '../components/Header'
import Footer from '../components/Footer,'
import { useTask } from '../context/taskContext'
import { useEffect, useState } from 'react';

export default function Literatura() {
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
                <li><p>Literatura</p></li>
              </ul>
            </nav>
          </header>
          <h1>Literatura</h1>
          <section>
            <details>
              <summary>¿Qué voy a aprender?</summary>
              <div>
                <p>
                  En este curso de literatura, explorarás los elementos esenciales que componen una obra literaria y desarrollarás habilidades críticas para analizar y comprender textos literarios. Aprenderás sobre los diferentes géneros literarios, como la narrativa, la poesía, el teatro y el ensayo, así como las técnicas y recursos que utilizan los escritores para transmitir ideas y emociones de manera efectiva.
                </p>
              </div>
            </details>
            <details>
              <summary>¿Qué es literatura?</summary>
              <div>
                <p>
                  La literatura es una forma de arte que utiliza la palabra escrita para crear obras significativas y profundas que impactan a los lectores y contribuyen al desarrollo cultural y humano.
                </p>
              </div>
            </details>

            <details>
              <summary>Lección 1: Introducción a la Literatura</summary>
              <div>
                <p>Te presentara el concepto de literatura, sus géneros principales (narrativo, lírico, dramático) y sus elementos (personajes, trama, ambiente).</p>


                <h5>Definición</h5>
                <p>La literatura se refiere al conjunto de obras escritas que tienen un valor estético y artístico, y que expresan ideas, emociones y experiencias a través del lenguaje de manera creativa y significativa.</p>
                <h5>Funciones de la literatura</h5>
                <p>La literatura cumple diversas funciones, como la expresión artística y estética, la exploración y reflexión sobre la condición humana, la transmisión de conocimientos y valores culturales, el entretenimiento, la crítica social y política, y la estimulación de la imaginación y la empatía.</p>
                <h5>Géneros literarios:</h5>
                <ul>
                  <li>Narrativo: Incluye obras como novelas y cuentos, que presentan una historia con personajes, trama y ambiente desarrollados.</li>
                  <li>Lírico: Caracterizado por la expresión subjetiva de emociones, sentimientos y pensamientos del autor, a menudo en forma de poemas.</li>
                  <li>Dramático: Se centra en la representación teatral de conflictos y situaciones a través del diálogo y las acciones de los personajes.</li>
                </ul>
                <h5>Elementos de la narrativa</h5>
                <ul>
                  <li>Personajes: Individuos ficticios o reales que protagonizan la historia y tienen características y roles específicos.</li>
                  <li>Trama: Secuencia de eventos que conforman la estructura narrativa de la obra, incluyendo la introducción, desarrollo, clímax y desenlace.</li>
                  <li>Ambiente: El entorno físico, social y emocional en el que se desarrolla la historia, que puede influir en los personajes y la trama.</li>
                </ul>

                <h5>Ejemplos representativos de cada género</h5>
                <ul>
                  <li>Narrativo</li>
                  <small> "Cien años de soledad" de Gabriel García Márquez.</small>
                  <li>Lírico</li>
                  <small>"Veinte poemas de amor y una canción desesperada" de Pablo Neruda.</small>
                  <li>Dramático</li>
                  <small>Romeo y Julieta" de William Shakespeare.</small>
                </ul>

                {getCalificacionByLeccion("Leccion1Lit") !== null ? (
                  <h3>Tu calificación es: {getCalificacionByLeccion("Leccion1Lit")} </h3>
                ) : (
                  <a href="/LecIntrLit">Realizar Cuestionario</a>
                )}
              </div>
            </details>
            <details>
              <summary>Lección 2: Géneros Literarios</summary>
              <div>
                <p>En esta lección identificaras y analizaras los diferentes géneros literarios.</p>

                <h5>Género narrativo</h5>
                <p>Presenta una historia con personajes, trama y ambiente desarrollados. Puede incluir elementos ficticios o reales.</p>
                <small> "Cien años de soledad" de Gabriel García Márquez (novela), "La Cenicienta" (cuento), "La Llorona" (leyenda).</small>

                <h5>Género lírico</h5>
                <p>Expresa emociones, sentimientos y pensamientos de manera subjetiva y artística. Se centra en la belleza del lenguaje y la musicalidad.</p>
                <small>"Veinte poemas de amor y una canción desesperada" de Pablo Neruda (poesía), "Soneto XXIII" de Garcilaso de la Vega (soneto), "Oda a la vida" de Pablo Neruda (poema).</small>

                <h5>Género dramático</h5>
                <p>Se centra en la representación teatral de conflictos y situaciones a través del diálogo y las acciones de los personajes. Puede ser de tono serio (tragedia) o cómico (comedia).</p>
                <small> "Hamlet" de William Shakespeare (obra de teatro), "Romeo y Julieta" de William Shakespeare (tragedia), "La casa de Bernarda Alba" de Federico García Lorca (drama).</small>

                <h5>Actividad práctica: análisis de textos representativos</h5>
                <h5>Género narrativo (cuento)</h5>
                <p>"Había una vez un pequeño ratón que vivía en un viejo roble. Un día, mientras buscaba comida, se encontró con un gato enorme. ¿Logrará escapar el ratón del astuto felino?"</p>

                <h5>Género lírico (poema)</h5>
                <small> "Bajo el cielo estrellado,</small>
                <small> susurra el viento su canción.</small>
                <small>El corazón, emocionado,</small>
                <small> late al ritmo de esta ilusión.</small>
                <h5>Género dramático (diálogo de una obra de teatro)</h5>
                <small>Personaje 1: ¿Qué harás ahora?</small>
                <small>Personaje 2: No lo sé, estoy perdido.</small>
                <small>Personaje 1: Debes tomar una decisión rápida.</small>

                {getCalificacionByLeccion("Leccion2Lit") !== null ? (
                  <h3>Tu calificación es: {getCalificacionByLeccion("Leccion2Lit")} </h3>
                ) : (
                  <a href="/LecGenLit">Realizar Cuestionario</a>
                )}
              </div>
            </details>
            <details>
              <summary>Lección 3: Elementos Literarios</summary>
              <div>
                <p> En esta lección reconoceras y comprenderas los elementos fundamentales de la literatura.</p>
                <h5>Figuras literarias</h5>
                <ul>
                  <li>Metáfora: Figura que consiste en identificar un objeto con otro mediante una relación de semejanza.</li>
                  <small>Ejemplo: "Eres mi sol", donde se compara a alguien con el sol para expresar su importancia.</small>
                  <li>Símil: Comparación directa entre dos elementos utilizando "como" o "parecido a".</li>
                  <small>Ejemplo: "Tus ojos brillan como estrellas".</small>
                  <li>Personificación: Atribución de características humanas a objetos, animales o ideas. </li>
                  <small>Ejemplo: "El viento susurraba secretos al oído de la noche".</small>
                </ul>
                <h5>Estilos literarios</h5>
                <ul>
                  <li>Realismo: Enfoque en la representación fiel y objetiva de la realidad, sin idealizaciones ni exageraciones.</li>
                  <li>Romanticismo: Énfasis en la expresión de emociones, la libertad individual y la búsqueda de la belleza y la espiritualidad.</li>
                  <li>Modernismo: Búsqueda de innovación y ruptura con las formas tradicionales, exploración de temas universales y uso de lenguaje poético.</li>
                </ul>
                <h5>Temas literarios</h5>
                <ul>
                  <li>Amor: Exploración de relaciones afectivas, pasiones y sentimientos románticos.</li>
                  <li>Muerte: Reflexión sobre la vida, la mortalidad, el paso del tiempo y la trascendencia.</li>
                  <li>Sociedad: Análisis de conflictos sociales, injusticias, roles y dinámicas sociales.</li>
                  <li>Naturaleza: Celebración de la belleza natural, conexión con el entorno y reflexión sobre la relación humano-naturaleza.</li>
                </ul>

                <h5>Técnicas narrativas</h5>
                <ul>
                  <li>Narrador: Persona que cuenta la historia. Puede ser omnisciente (sabe todo), protagonista (parte de la historia) o testigo (observador externo).</li>
                  <li>Punto de vista: Perspectiva desde la cual se narra la historia, como primera persona (yo), segunda persona (tú) o tercera persona (él/ella).</li>
                  <li>Tiempo narrativo: Orden temporal en el que se desarrolla la historia, como lineal (cronológico), no lineal (flashbacks, flashforwards) o simultáneo.</li>
                </ul>

                {getCalificacionByLeccion("Leccion3Lit") !== null ? (
                  <h3>Tu calificación es: {getCalificacionByLeccion("Leccion3Lit")} </h3>
                ) : (
                  <a href="/LecEleLit">Realizar Cuestionario</a>
                )}
              </div>
              
            </details>
            <details>
              <summary>Lección 4: Autores y Obras Representativas</summary>
              <div>
                <p> En esta lección conoceras a algunos autores y obras destacadas de la literatura.</p>
                <h5>Autores clásicos y contemporáneos</h5>
                <ul>
                  <li>Cervantes: Autor español del siglo XVI conocido por su obra cumbre "Don Quijote de la Mancha", una novela que satiriza las novelas de caballerías y reflexiona sobre la realidad y la fantasía.</li>
                  <li>García Márquez: Escritor colombiano del siglo XX, famoso por su obra "Cien años de soledad", considerada una obra maestra del realismo mágico y que aborda temas como la historia de América Latina y la identidad.</li>
                  <li>Borges: Escritor argentino del siglo XX, reconocido por sus relatos breves y su estilo enigmático y metafísico. Obras destacadas incluyen "Ficciones" y "El Aleph".</li>
                  <li>Neruda: Poeta chileno del siglo XX, galardonado con el Premio Nobel de Literatura. Sus poemas exploran temas como el amor, la política y la naturaleza. Obras destacadas son "Veinte poemas de amor y una canción desesperada" y "Canto general".</li>
                </ul>
                <h5>Obras representativas de diferentes épocas y estilos</h5>
                <ul>
                  <li>"Don Quijote de la Mancha" de Cervantes (1605): Novela que parodia las historias de caballerías y cuestiona la realidad y la fantasía.</li>
                  <li>"Cien años de soledad" de García Márquez (1967): Realismo mágico, historia de la familia Buendía en Macondo que refleja la historia de América Latina.</li>
                  <li>"Ficciones" de Borges (1944): Relatos breves que exploran temas metafísicos y la naturaleza de la realidad y la ficción.</li>
                  <li>"Veinte poemas de amor y una canción desesperada" de Neruda (1924): Poemas que exploran el amor, el deseo y la pasión, con un lenguaje poético y emotivo.</li>
                </ul>
                <h5>Contexto histórico y cultural de las obras y sus autores</h5>
                <ul>
                  <li>Cervantes: Siglo de Oro español, contexto de la Contrarreforma y la exploración del género novelístico.</li>
                  <li>García Márquez: Boom latinoamericano, contexto de la historia política y social de América Latina.</li>
                  <li>Borges: Modernismo y vanguardias literarias, contexto de la filosofía y la metafísica.</li>
                  <li>Neruda: Movimiento literario de la Generación del 27, contexto de la poesía comprometida y la política latinoamericana.</li>
                </ul>

                {getCalificacionByLeccion("Leccion4Lit") !== null ? (
                  <h3>Tu calificación es: {getCalificacionByLeccion("Leccion4Lit")} </h3>
                ) : (
                  <a href="/LecAutores">Realizar Cuestionario</a>
                )}
              </div>

            </details>
            <details>
              <summary>Lección 5: Análisis Literario</summary>
              <div>
                <p>En esta sección aplicaras los conocimientos adquiridos en el análisis crítico de textos literarios.</p>
                <h5>Herramientas de análisis literario</h5>
                <ul>
                  <li>Contexto histórico: Comprender el entorno histórico en el que se escribió la obra, incluyendo eventos políticos, sociales y culturales que puedan influir en su contenido y significado.</li>
                  <li>Estructura: Analizar la organización y disposición de los elementos de la obra, como la trama, los personajes, los puntos de giro y el desenlace.</li>
                  <li>stilo: Estudiar las técnicas y recursos literarios utilizados por el autor, como la narrativa, el lenguaje, la sintaxis, el tono y la voz narrativa.</li>
                </ul>

                <h5>Interpretación de símbolos y metáforas</h5>
                <ul>
                  <li>Identificar símbolos, metáforas y otras figuras literarias utilizadas en la obra para expresar ideas, emociones y conceptos de manera simbólica y sugerente.</li>
                  <li>Interpretar el significado de estos elementos en relación con el contexto de la obra y las intenciones del autor, así como su posible impacto en la interpretación global de la obra.</li>
                </ul>
                <h5>Relación entre la obra y su contexto social, político y cultural</h5>
                <ul>
                  <li> Analizar cómo la obra refleja, critica o se relaciona con aspectos de la sociedad, la política, la cultura y las normas sociales de su época.</li>
                  <li>Explorar temas relevantes como la justicia, la igualdad, el poder, la identidad, la libertad y la moralidad, y su tratamiento en la obra en relación con el contexto histórico y cultural.</li>
                </ul>


                {getCalificacionByLeccion("Leccion5Lit") !== null ? (
                  <h3>Tu calificación es: {getCalificacionByLeccion("Leccion5Lit")} </h3>
                ) : (
                  <a href="/LecAnaLit">Realizar Cuestionario</a>
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


