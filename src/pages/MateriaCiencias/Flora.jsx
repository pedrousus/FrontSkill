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
                La flora, o el conjunto de plantas que habitan una región o ecosistema, es fundamental para la vida en la Tierra. Estas lecciones te proporcionarán un conocimiento profundo y amplio sobre diversos aspectos de la flora, permitiéndote comprender su importancia ecológica, biológica y económica. 
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
                <summary>Lección 2: Tipos de Plantas.</summary>
                <div>
                <p>Las plantas son organismos esenciales en los ecosistemas, y se pueden clasificar en varios tipos según sus características y adaptaciones.</p>
<p>Aquí te presento una clasificación básica de los tipos de plantas.</p>

<h2>Clasificación de las Plantas</h2>

<h3>Plantas no vasculares:</h3>

<p><strong>Musgos:</strong> Plantas pequeñas que carecen de sistema vascular (xilema y floema).</p>
<p>Crecen en lugares húmedos y sombreados.</p>
<p><strong>Hepáticas:</strong> Plantas similares a los musgos, suelen crecer en ambientes muy húmedos y son más planas y delgadas.</p>

<h3>Plantas vasculares:</h3>

<p><strong>Pteridofitas (Helechos):</strong> Tienen un sistema vascular pero no producen semillas.</p>
<p>Se reproducen mediante esporas.</p>
<p><strong>Gimnospermas:</strong> Plantas vasculares que producen semillas no encerradas en frutos.</p>
<p>Incluyen a las coníferas como pinos y abetos.</p>
<p><strong>Angiospermas:</strong> Plantas vasculares que producen flores y semillas encerradas en frutos.</p>
<p>Son las plantas más diversas y abundantes.</p>

<h2>Clasificación de las Angiospermas</h2>

<h3>Monocotiledóneas:</h3>

<p>Tienen un solo cotiledón (hoja embrionaria).</p>
<p>Hojas con venación paralela.</p>
<p>Ejemplos: pastos, lirios, palmeras.</p>

<h3>Dicotiledóneas:</h3>

<p>Tienen dos cotiledones.</p>
<p>Hojas con venación reticulada.</p>
<p>Ejemplos: rosas, robles, girasoles.</p>

<h2>Importancia de los Tipos de Plantas</h2>

<p><strong>Ecología:</strong> Las plantas son la base de las cadenas alimenticias y contribuyen a la estabilidad de los ecosistemas.</p>
<p><strong>Economía:</strong> Proporcionan alimentos, medicinas, madera y otros recursos.</p>
<p><strong>Cultura:</strong> Han sido parte esencial de las culturas humanas, usadas en rituales, medicina tradicional y arte.</p>

                                       
                                     
                                        {getCalificacionByLeccion("Leccion2Tipos") !== null ? (
                                            <h3>Tu calificación es: {getCalificacionByLeccion("Leccion2Tipos")} </h3>
                                        ) : (
                                            <a href="/LecTipos">Realizar Cuestionario</a>
                                        )}
                                  </div>
            </details>

            <details>
                <summary>Lección 3: Cliclos de vida de una planta</summary>
                <div>
                <h1>Ciclos de Vida de las Plantas</h1>

<p>Las plantas tienen ciclos de vida complejos que varían entre diferentes grupos de plantas.</p>
<p>Aquí se describen las principales etapas del ciclo de vida de las plantas:</p>

<h2>Ciclos de Vida de las Plantas</h2>

<h3>Germinación:</h3>
<p>El proceso por el cual una semilla se convierte en una plántula.</p>
<p>Requiere condiciones adecuadas de humedad, temperatura y oxígeno.</p>

<h3>Crecimiento:</h3>
<p>La plántula se desarrolla y crece mediante división celular y elongación.</p>
<p>Incluye la formación de raíces, tallos y hojas.</p>

<h3>Floración:</h3>
<p>La planta madura produce flores, que son las estructuras reproductivas.</p>
<p>Este proceso es influenciado por factores como la luz y la temperatura.</p>

<h3>Polinización:</h3>
<p>Transferencia de polen desde las anteras (parte masculina) hasta el estigma (parte femenina) de las flores.</p>
<p>Puede ser realizada por viento, agua o animales.</p>

<h3>Fecundación:</h3>
<p>Unión de los gametos masculino (polen) y femenino (óvulo) para formar una semilla.</p>

<h3>Fructificación:</h3>
<p>Desarrollo de la semilla dentro del fruto, el cual protege y ayuda en la dispersión de la semilla.</p>

<h3>Dispersión de semillas:</h3>
<p>El proceso por el cual las semillas son transportadas lejos de la planta madre para germinar en nuevos lugares.</p>
<p>Puede ser por viento, agua, animales o explosión de frutos.</p>
{getCalificacionByLeccion("Leccion3Ciclos") !== null ? (
                                            <h3>Tu calificación es: {getCalificacionByLeccion("Leccion3Ciclos")} </h3>
                                        ) : (
                                            <a href="/LecCiclos">Realizar Cuestionario</a>
                                        )}
                </div>
            </details>

            <details>
                <summary>Lección 4: Partes de una planta</summary>
                <div>
                <h1>Partes de una Planta</h1>

<p>Las plantas están compuestas por varias partes esenciales que tienen funciones específicas.</p>
<p>Aquí se describen las principales partes de una planta:</p>

<h2>Partes de una Planta</h2>

<h3>Raíz:</h3>
<p>Absorbe agua y nutrientes del suelo.</p>
<p>Ancla la planta al suelo.</p>
<p>Almacena alimentos.</p>

<h3>Tallo:</h3>
<p>Soporta la planta y transporta agua y nutrientes entre las raíces y las hojas.</p>
<p>Puede almacenar nutrientes.</p>
<p>Algunos tallos realizan fotosíntesis.</p>

<h3>Hojas:</h3>
<p>Principal lugar de la fotosíntesis.</p>
<p>Intercambian gases (CO₂, O₂) a través de estomas.</p>
<p>Transpiran para regular la temperatura y transportar nutrientes.</p>

<h3>Flores:</h3>
<p>Estructuras reproductivas de las plantas angiospermas.</p>
<p>Contienen órganos masculinos (estambres) y femeninos (pistilos).</p>

<h3>Frutos:</h3>
<p>Estructuras que protegen y ayudan en la dispersión de las semillas.</p>

<h3>Semillas:</h3>
<p>Contienen el embrión de la planta y los nutrientes necesarios para su germinación.</p>
{getCalificacionByLeccion("Leccion4Partes") !== null ? (
                                            <h3>Tu calificación es: {getCalificacionByLeccion("Leccion4Partes")} </h3>
                                        ) : (
                                            <a href="/LecPartes">Realizar Cuestionario</a>
                                        )}
                </div>
            </details>

            <details>
                <summary>Lección 5: Importancia ecológica de las plantas</summary>
                <div>
                <h1>Importancia Ecológica de las Plantas</h1>

<p>Las plantas desempeñan roles vitales en los ecosistemas y tienen una gran importancia ecológica.</p>
<p>Aquí se describen algunas de sus funciones ecológicas clave:</p>

<h2>Importancia Ecológica de las Plantas</h2>

<h3>Producción de Oxígeno:</h3>
<p>Las plantas liberan oxígeno a la atmósfera durante la fotosíntesis, lo cual es esencial para la vida de la mayoría de los organismos.</p>

<h3>Base de la Cadena Alimentaria:</h3>
<p>Las plantas son productores primarios, convirtiendo la energía solar en energía química que es utilizada por herbívoros y otros niveles tróficos.</p>

<h3>Ciclo de Nutrientes:</h3>
<p>Las plantas absorben nutrientes del suelo y los reciclan a través de la descomposición de materia orgánica.</p>

<h3>Hábitat y Refugio:</h3>
<p>Las plantas proporcionan hábitat y refugio para numerosos organismos, incluyendo insectos, aves y mamíferos.</p>

<h3>Regulación del Clima:</h3>
<p>Las plantas ayudan a regular el clima al absorber dióxido de carbono y liberar oxígeno.</p>
<p>También influyen en la humedad del aire y la estabilidad del suelo.</p>

<h3>Purificación del Aire:</h3>
<p>Las plantas filtran contaminantes del aire, mejorando la calidad del mismo.</p>

<h3>Prevención de la Erosión:</h3>
<p>Las raíces de las plantas ayudan a mantener el suelo en su lugar, previniendo la erosión.</p>

<h3>Control del Agua:</h3>
<p>Las plantas ayudan a regular el ciclo del agua, aumentando la infiltración y reduciendo la escorrentía.</p>
{getCalificacionByLeccion("Leccion5Import") !== null ? (
                                            <h3>Tu calificación es: {getCalificacionByLeccion("Leccion5Import")} </h3>
                                        ) : (
                                            <a href="/LecImport">Realizar Cuestionario</a>
                                        )}
                </div>
            </details>

           

        </main>
        <Footer />
      </div>
    </>
  )
}


