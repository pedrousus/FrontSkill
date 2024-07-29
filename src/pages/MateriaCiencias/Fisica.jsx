/* eslint-disable react/no-unescaped-entities */

import Header from '../../components/Header'
import Footer from '../../components/Footer,'
import { useTask } from '../../context/taskContext'
import { useEffect, useState } from 'react';


export default function Fisica() {
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
                <li><p>Fisica 1</p></li>
              </ul>
            </nav>
          </header>
          <h1>Fisica 1</h1>
    
          <details>
                <summary>¿Qué voy a aprender?</summary>
                <div>
                La física es la ciencia que estudia las propiedades y el comportamiento de la materia y la energía. Estas lecciones te proporcionarán un conocimiento profundo y amplio sobre diversos principios y fenómenos físicos, permitiéndote comprender las leyes fundamentales que gobiernan el universo.
                </div>
            </details>

          <details>
                <summary>Lección 1: Cinemática</summary>
                <div>
                <h1>Cinemática</h1>
    <p>La cinemática es la rama de la física que estudia el movimiento de los cuerpos sin considerar las causas que lo producen. Algunos conceptos fundamentales en cinemática son:</p>
    
    <p><strong>Desplazamiento:</strong> Es el cambio de posición de un objeto desde su punto inicial hasta su punto final. Es una magnitud vectorial, lo que significa que tiene magnitud y dirección.</p>
    
    <p><strong>Velocidad:</strong> Es el cambio de posición de un objeto por unidad de tiempo. Puede ser media o instantánea. La velocidad media se calcula como el desplazamiento dividido por el tiempo total.</p>
    
    <p><strong>Aceleración:</strong> Es el cambio de velocidad de un objeto por unidad de tiempo. Es una magnitud vectorial que puede ser positiva &#40;cuando el objeto acelera&#41; o negativa &#40;cuando el objeto desacelera&#41;.</p>
    
    <p><strong>Movimiento rectilíneo uniforme &#40;MRU&#41;:</strong> Es aquel en el que un objeto se mueve en línea recta con velocidad constante. La ecuación de posición es x = x&#42; + vt.</p>
    
    <p><strong>Movimiento uniformemente acelerado &#40;MUA&#41;:</strong> Es aquel en el que un objeto se mueve en línea recta con aceleración constante. Las ecuaciones de movimiento son:
     v = v&#42; + at
     x = x&#42; + v&#42;t + 1/2 at&sup2;
     v&sup2; = v&#42;&sup2; + 2a&#40;x - x&#42;&#41;</p>
                {getCalificacionByLeccion("Leccion1Cinematica") !== null ? (
                                            <h3>Tu calificación es: {getCalificacionByLeccion("Leccion1Cinematica")} </h3>
                                        ) : (
                                            <a href="/LecCine">Realizar Cuestionario</a>
                                        )}
                </div>
              
            </details>
         
            <details>
                <summary>Lección 2: Dinámica</summary>
                <div>
                <h1>Dinámica</h1>
    <p>La dinámica es la rama de la física que estudia las causas del movimiento de los cuerpos. Algunos conceptos fundamentales en dinámica son:</p>
    
    <p><strong>Primera ley de Newton &#40;Ley de la Inercia&#41;:</strong> Un objeto permanecerá en reposo o en movimiento rectilíneo uniforme a menos que actúe sobre él una fuerza neta externa.</p>
    
    <p><strong>Segunda ley de Newton:</strong> La aceleración de un objeto es directamente proporcional a la fuerza neta que actúa sobre él e inversamente proporcional a su masa. La fórmula es F = ma.</p>
    
    <p><strong>Tercera ley de Newton &#40;Acción y Reacción&#41;:</strong> Para cada acción hay una reacción igual y opuesta.</p>
    
    <p><strong>Fuerza:</strong> Es una interacción que, al aplicarse sobre un objeto, cambia su estado de movimiento o su forma. Es una magnitud vectorial.</p>
    
    <p><strong>Fricción:</strong> Es la fuerza que se opone al movimiento relativo de dos superficies en contacto. Puede ser estática &#40;impide el inicio del movimiento&#41; o cinética &#40;se opone al movimiento en curso&#41;.</p>
                                        {getCalificacionByLeccion("Leccion2Dinamica") !== null ? (
                                            <h3>Tu calificación es: {getCalificacionByLeccion("Leccion2Dinamica")} </h3>
                                        ) : (
                                            <a href="/LecDinamica">Realizar Cuestionario</a>
                                        )}
                                  </div>
            </details>

            <details>
                <summary>Lección 3: Energía y Trabajo</summary>
                <div>
                <h1>Energía y Trabajo</h1>
    <p>La energía es la capacidad de realizar trabajo. El trabajo es una medida de la energía transferida por una fuerza a lo largo de un desplazamiento. Algunos conceptos fundamentales son:</p>
    
    <p><strong>Energía cinética:</strong> Es la energía que posee un objeto debido a su movimiento. La fórmula es E&#42; = 1/2 mv&sup2;.</p>
    
    <p><strong>Energía potencial:</strong> Es la energía que posee un objeto debido a su posición o configuración. Existen diferentes tipos, como la energía potencial gravitatoria &#40;E&#42; = mgh&#41; y la energía potencial elástica.</p>
    
    <p><strong>Trabajo:</strong> Es la transferencia de energía que ocurre cuando una fuerza se aplica sobre un objeto y este se desplaza en la dirección de la fuerza. La fórmula es W = Fd cos&#40;&theta;&#41;.</p>
    
    <p><strong>Potencia:</strong> Es la cantidad de trabajo realizado por unidad de tiempo. La fórmula es P = W/t.</p>
    
    <p><strong>Conservación de la energía:</strong> La energía no se crea ni se destruye, solo se transforma de una forma a otra. La energía total de un sistema aislado permanece constante.</p>
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


