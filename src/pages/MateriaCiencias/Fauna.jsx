/* eslint-disable react/no-unescaped-entities */

import Header from '../../components/Header'
import Footer from '../../components/Footer,'
import { useTask } from '../../context/taskContext'
import { useEffect, useState } from 'react';


export default function Fauna() {
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
                <li><p>Fauna</p></li>
              </ul>
            </nav>
          </header>
          <h1>Fauna</h1>
    
          <details>
                <summary>¿Qué voy a aprender?</summary>
                <div>
                La fauna, o el conjunto de animales que habitan una región o ecosistema, es fundamental para la biodiversidad y el equilibrio ecológico. Estas lecciones te proporcionarán un conocimiento profundo y amplio sobre diversos aspectos de la fauna, permitiéndote comprender su importancia ecológica, biológica y económica.
                </div>
            </details>

          <details>
                <summary>Lección 1: Tipos de Habitats</summary>
                <div>
                <h1>Tipos de Hábitats</h1>

<p>Un hábitat es el lugar donde viven los animales y proporciona los recursos necesarios para su supervivencia, como alimento, agua, refugio y espacio para reproducirse. Hay diversos tipos de hábitats, cada uno con características únicas que influyen en la vida de los animales que los habitan.</p>

<h2>Bosques</h2>
<p>Los bosques son hábitats densamente poblados por árboles y arbustos. Pueden ser templados, tropicales o boreales, y albergan una gran diversidad de especies animales y vegetales.</p>

<h2>Desiertos</h2>
<p>Los desiertos son áreas con muy poca precipitación. Los animales de los desiertos han desarrollado adaptaciones para sobrevivir con escasez de agua y temperaturas extremas.</p>

<h2>Océanos</h2>
<p>Los océanos cubren la mayor parte del planeta y son hábitats ricos en biodiversidad. Los animales marinos han evolucionado para vivir en diversos niveles de profundidad y condiciones de salinidad.</p>

<h2>Montañas</h2>
<p>Las montañas ofrecen un hábitat con diferentes niveles de altitud, temperatura y vegetación. Los animales de montaña están adaptados a climas fríos y a escalar terrenos abruptos.</p>

<h2>Sabanas</h2>
<p>Las sabanas son áreas de pastizales con algunos árboles dispersos. Estas regiones experimentan una estación lluviosa y una seca, y son el hogar de grandes herbívoros y sus depredadores.</p>

                    
                {getCalificacionByLeccion("Leccion1TiposHabitat") !== null ? (
                                            <h3>Tu calificación es: {getCalificacionByLeccion("Leccion1TiposHabitat")} </h3>
                                        ) : (
                                            <a href="/resTiposHabit">Realizar Cuestionario</a>
                                        )}
                </div>
              
            </details>
         
            <details>
                <summary>Lección 2: Adaptacion de los Animales</summary>
                <div>
                <h1>Adaptaciones de los Animales</h1>

<p>Las adaptaciones son características físicas o comportamentales que han evolucionado en los animales para ayudarles a sobrevivir y reproducirse en sus entornos específicos. Estas adaptaciones pueden ser anatómicas, fisiológicas o conductuales.</p>

<h2>Adaptaciones Anatómicas</h2>
<p>Las adaptaciones anatómicas incluyen cambios en la estructura del cuerpo, como pelajes gruesos para el frío, garras afiladas para cazar, o alas para volar.</p>

<h2>Adaptaciones Fisiológicas</h2>
<p>Las adaptaciones fisiológicas son cambios en los procesos internos del cuerpo, como la capacidad de algunos reptiles de regular su temperatura corporal, o los riñones eficientes de los animales del desierto para conservar agua.</p>

<h2>Adaptaciones Conductuales</h2>
<p>Las adaptaciones conductuales son cambios en la forma en que los animales actúan, como la migración de las aves, la hibernación de los osos, o la caza en manada de los lobos.</p>

                                       
                                        {getCalificacionByLeccion("Leccion2Adaptacion") !== null ? (
                                            <h3>Tu calificación es: {getCalificacionByLeccion("Leccion2Adaptacion")} </h3>
                                        ) : (
                                            <a href="/LecAdap">Realizar Cuestionario</a>
                                        )}
                                  </div>
            </details>

            <details>
                <summary>Lección 3: Relaciones Tróficas</summary>
                <div>
                <h1>Relaciones Tróficas</h1>

<p>Las relaciones tróficas describen cómo se alimentan los organismos dentro de un ecosistema, estableciendo cadenas y redes alimentarias. Estas relaciones determinan cómo fluye la energía y los nutrientes a través de la comunidad biológica.</p>

<h2>Productores</h2>
<p>Los productores, como las plantas y algas, son organismos que producen su propio alimento a través de la fotosíntesis y forman la base de la cadena trófica.</p>

<h2>Consumidores</h2>
<p>Los consumidores son organismos que se alimentan de otros seres vivos. Se dividen en consumidores primarios (herbívoros), secundarios (carnívoros que comen herbívoros), y terciarios (carnívoros que comen otros carnívoros).</p>

<h2>Descomponedores</h2>
<p>Los descomponedores, como los hongos y bacterias, se alimentan de materia orgánica muerta, reciclando nutrientes esenciales de vuelta al ecosistema.</p>

<h2>Cadenas Tróficas</h2>
<p>Una cadena trófica es una secuencia lineal de organismos en la que cada uno se alimenta del anterior. Por ejemplo, pasto → conejo → zorro.</p>

<h2>Redes Tróficas</h2>
<p>Las redes tróficas son interconexiones complejas de múltiples cadenas tróficas en un ecosistema, mostrando cómo los organismos están relacionados entre sí de manera no lineal.</p>

                                        {getCalificacionByLeccion("Leccion3Relaciones") !== null ? (
                                            <h3>Tu calificación es: {getCalificacionByLeccion("Leccion3Relaciones")} </h3>
                                        ) : (
                                            <a href="/LecRelac">Realizar Cuestionario</a>
                                        )}
                </div>
            </details>

            <details>
                <summary>Lección 4: Conservacion de la Fauna</summary>
                <div>
                <h1>Conservación de la Fauna</h1>

<p>La conservación de la fauna se centra en proteger las especies animales y sus hábitats para asegurar su supervivencia a largo plazo. Los esfuerzos de conservación incluyen la protección de hábitats, la regulación de la caza, y la promoción de programas de cría en cautiverio.</p>

<h2>Amenazas a la Fauna</h2>
<p>Las principales amenazas a la fauna incluyen la destrucción del hábitat, la caza furtiva, el cambio climático y la contaminación. Estas amenazas pueden llevar a la disminución de poblaciones y la extinción de especies.</p>

<h2>Estrategias de Conservación</h2>
<p>Las estrategias de conservación incluyen la creación de reservas naturales, la implementación de leyes de protección, la educación ambiental y los esfuerzos de restauración de hábitats.</p>

<h2>Importancia de la Biodiversidad</h2>
<p>La biodiversidad es crucial para el equilibrio de los ecosistemas. Cada especie juega un papel en su comunidad, y la pérdida de una sola especie puede tener efectos en cadena en todo el ecosistema.</p>

<h2>Programas de Cría en Cautiverio</h2>
<p>Los programas de cría en cautiverio ayudan a aumentar las poblaciones de especies en peligro y pueden reintroducir animales en sus hábitats naturales.</p>

<h2>Participación Comunitaria</h2>
<p>La participación comunitaria es vital para el éxito de los esfuerzos de conservación. Las comunidades locales pueden ayudar en la protección de hábitats y en la educación sobre la importancia de la conservación.</p>

                                        {getCalificacionByLeccion("Leccion4Conservacion") !== null ? (
                                            <h3>Tu calificación es: {getCalificacionByLeccion("Leccion4Conservacion")} </h3>
                                        ) : (
                                            <a href="/LecCons">Realizar Cuestionario</a>
                                        )}
                </div>
            </details>

           

        </main>
        <Footer />
      </div>
    </>
  )
}


