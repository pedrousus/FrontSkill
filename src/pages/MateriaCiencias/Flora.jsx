/* eslint-disable react/no-unescaped-entities */

import Header from '../../components/Header'
import Footer from '../../components/Footer,'
import { useTask } from '../../context/taskContext'
import { useEffect, useState } from 'react';


export default function Flora() {
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
                <li><p>Flora</p></li>
              </ul>
            </nav>
          </header>
          <h1>Flora</h1>
    
          <details>
                <summary>¿Qué voy a aprender?</summary>
                <div>
                <p>
                En este curso sobre la flora, explorarás las características fundamentales de diferentes tipos de plantas, sus funciones, y sus roles en el ecosistema. Aprenderás a identificar diversas especies, comprender su importancia ecológica y económica, y conocer los procesos esenciales para su crecimiento y reproducción. Este curso te proporcionará una base sólida en botánica, ayudándote a apreciar la diversidad y complejidad del reino vegetal.
                </p>
                </div>
            </details>

          <details>
                <summary>Lección 1: Fotosíntesis</summary>
                <div>
                <p>
                La fotosíntesis es el proceso mediante el cual las plantas, las algas y algunas bacterias convierten la luz solar en energía química. Este proceso es fundamental para la vida en la Tierra, ya que produce oxígeno y es la base de la cadena alimenticia.
</p>
<p>Etapas de la Fotosíntesis
</p>
<p>Captura de luz: Las plantas utilizan clorofila, un pigmento verde en las hojas, para capturar la luz solar.
</p>
<p>Conversión de energía: La energía solar capturada se convierte en energía química en forma de ATP y NADPH.
</p>
<p>Síntesis de glucosa: El dióxido de carbono y el agua se utilizan para producir glucosa y oxígeno en una serie de reacciones llamadas ciclo de Calvin.
</p>
<p>Factores que Afectan la Fotosíntesis
</p>
<p>Luz: La intensidad y la calidad de la luz afectan la tasa de fotosíntesis.
</p>
<p>  Dióxido de carbono: La concentración de CO₂ influye en la cantidad de glucosa producida.
</p>
<p>Agua: Es esencial para el proceso, ya que proporciona electrones y protones.
</p>
<p>Temperatura: La temperatura óptima varía según la planta, pero en general, temperaturas extremas pueden inhibir la fotosíntesis.
</p>
<p>Importancia de la Fotosíntesis
</p>
<p>Producción de oxígeno: Libera oxígeno a la atmósfera, lo cual es esencial para la respiración de la mayoría de los organismos.
</p>
<p>Base de la cadena alimenticia: Las plantas producen glucosa, que es la fuente de energía para herbívoros y, subsecuentemente, para carnívoros.
</p>
<p>Ciclo del carbono: Ayuda a regular los niveles de dióxido de carbono en la atmósfera.
                </p>
                
                   
                  
                
                   
                 
                {getCalificacionByLeccion("Leccion1Fotosintesis") !== null ? (
                                            <h3>Tu calificación es: {getCalificacionByLeccion("Leccion1Fotosintesis")} </h3>
                                        ) : (
                                            <a href="/LecFotos">Realizar Cuestionario</a>
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
                </div>
            </details>

           

        </main>
        <Footer />
      </div>
    </>
  )
}


