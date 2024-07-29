/* eslint-disable react/no-unescaped-entities */

import Header from '../../components/Header'
import Footer from '../../components/Footer,'
import { useTask } from '../../context/taskContext'
import { useEffect, useState } from 'react';


export default function Quimica() {
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
                <li><a href="/Ciencias">Ciencias</a></li>
                <p>/</p>
                <li><p>Quimica 1</p></li>
              </ul>
            </nav>
          </header>
          <h1>Quimica 1</h1>
    
          <details>
                <summary>¿Qué voy a aprender?</summary>
                <div>
                La química es la ciencia que estudia la composición, estructura, propiedades y cambios de la materia. A través de estas lecciones, obtendrás un conocimiento detallado de los principios y fenómenos químicos, y aprenderás cómo estos principios se aplican en la vida cotidiana y en diversos campos científicos.
                </div>
            </details>

          <details>
                <summary>Lección 1: Átomos y Moléculas</summary>
                <div>
                <h1>Átomos y Moléculas</h1>
  <p>Un átomo es la unidad básica de un elemento químico. Está compuesto por protones, neutrones y electrones.</p>
  <ul>
    <li><strong>Protones</strong>: Tienen carga positiva y se encuentran en el núcleo del átomo.</li>
    <li><strong>Neutrones</strong>: No tienen carga y también se encuentran en el núcleo.</li>
    <li><strong>Electrones</strong>: Tienen carga negativa y orbitan alrededor del núcleo.</li>
  </ul>
  <p>Las moléculas están formadas por dos o más átomos unidos por enlaces químicos.</p>

                {getCalificacionByLeccion("Leccion1Atomos") !== null ? (
                                            <h3>Tu calificación es: {getCalificacionByLeccion("Leccion1Atomos")} </h3>
                                        ) : (
                                            <a href="/LecAtom">Realizar Cuestionario</a>
                                        )}
                </div>
              
            </details>
         
            <details>
                <summary>Lección 2: Enlaces Químicos</summary>
                <div>
                <h1>Enlaces Químicos</h1>
  <p>Los enlaces químicos son las fuerzas que mantienen unidos a los átomos en las moléculas. Hay varios tipos de enlaces químicos:</p>
  <ul>
    <li><strong>Enlace iónico</strong>: Se forma cuando un átomo cede electrones a otro átomo.</li>
    <li><strong>Enlace covalente</strong>: Se forma cuando dos átomos comparten uno o más pares de electrones.</li>
    <li><strong>Enlace metálico</strong>: Se forma entre átomos de metales, donde los electrones se mueven libremente entre los núcleos.</li>
  </ul>
                                        {getCalificacionByLeccion("Leccion2Enlaces") !== null ? (
                                            <h3>Tu calificación es: {getCalificacionByLeccion("Leccion2Enlaces")} </h3>
                                        ) : (
                                            <a href="/LecEnlaces">Realizar Cuestionario</a>
                                        )}
                                  </div>
            </details>

            <details>
                <summary>Lección 3: Reacciones Químicas</summary>
                <div>
                <h1>Reacciones Químicas</h1>
  <p>Una reacción química es un proceso en el cual una o más sustancias se transforman en una o más sustancias diferentes. Las sustancias iniciales se llaman reactivos y las finales productos.</p>
  <p>Ejemplos de reacciones químicas incluyen:</p>
  <ul>
    <li><strong>Combustión</strong>: Una sustancia reacciona con oxígeno, liberando energía en forma de calor y luz.</li>
    <li><strong>Neutralización</strong>: Un ácido reacciona con una base, produciendo una sal y agua.</li>
    <li><strong>Oxidación-reducción</strong>: Implica la transferencia de electrones entre sustancias.</li>
  </ul>
  {getCalificacionByLeccion("Leccion2Espanol") !== null ? (
                                            <h3>Tu calificación es: {getCalificacionByLeccion("Leccion2Espanol")} </h3>
                                        ) : (
                                            <a href="/LecOrtografia">Realizar Cuestionario</a>
                                        )}
                </div>
            </details>

           

        </main>
        <Footer />
      </div>
    </>
  )
}


