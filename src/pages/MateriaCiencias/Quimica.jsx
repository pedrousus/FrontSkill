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
                </div>
            </details>

           

        </main>
        <Footer />
      </div>
    </>
  )
}


