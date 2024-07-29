/* eslint-disable react/no-unescaped-entities */

import Header from '../../components/Header'
import Footer from '../../components/Footer,'
import { useTask } from '../../context/taskContext'
import { useEffect, useState } from 'react';


export default function CuerpoHumano() {
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
                <li><p>Cuerpo Humano</p></li>
              </ul>
            </nav>
          </header>
          <h1>Cuerpo Humano</h1>
    
          <details>
                <summary>¿Qué voy a aprender?</summary>
                <div>
                El cuerpo humano es una maravilla de la biología, compuesto por sistemas y órganos que trabajan en conjunto para mantener la vida. Estas lecciones te proporcionarán un conocimiento detallado sobre la estructura y funcionamiento del cuerpo humano, permitiéndote comprender cómo cada parte contribuye al bienestar general.
                </div>
            </details>

          <details>
                <summary>Lección 1: Sistema Digestivo</summary>
                <div>
                <h1>Sistema Digestivo</h1>

<p>El sistema digestivo es responsable de descomponer los alimentos que ingerimos en nutrientes que el cuerpo puede usar para energía, crecimiento y reparación celular.</p>

<h2>Boca</h2>
<p>La digestión comienza en la boca, donde los alimentos son masticados y mezclados con saliva, que contiene enzimas que inician la descomposición de los carbohidratos.</p>

<h2>Esófago</h2>
<p>El esófago es un tubo muscular que conecta la boca con el estómago. Los movimientos peristálticos del esófago empujan los alimentos hacia el estómago.</p>

<h2>Estómago</h2>
<p>El estómago mezcla los alimentos con jugos gástricos, que contienen ácido clorhídrico y enzimas digestivas. Aquí se descomponen las proteínas.</p>

<h2>Intestino Delgado</h2>
<p>En el intestino delgado, los nutrientes son absorbidos en el torrente sanguíneo. Está compuesto por tres partes: duodeno, yeyuno e íleon.</p>

<h2>Intestino Grueso</h2>
<p>El intestino grueso absorbe el agua y los minerales de los restos de alimentos no digeridos, formando las heces que serán excretadas.</p>

<h2>Órganos Accesorios</h2>
<p>Los órganos accesorios, como el hígado, el páncreas y la vesícula biliar, producen sustancias que ayudan en la digestión y la absorción de nutrientes.</p>

                {getCalificacionByLeccion("Leccion1Digestivo") !== null ? (
                                            <h3>Tu calificación es: {getCalificacionByLeccion("Leccion1Digestivo")} </h3>
                                        ) : (
                                            <a href="/LecDigestivo">Realizar Cuestionario</a>
                                        )}
                </div>
              
            </details>
         
            <details>
                <summary>Lección 2: Sistema Circulatorio</summary>
                <div>
                <h1>Sistema Circulatorio</h1>

<p>El sistema circulatorio es responsable de transportar sangre, nutrientes, gases y desechos hacia y desde las células del cuerpo.</p>

<h2>Corazón</h2>
<p>El corazón es un órgano muscular que bombea sangre a través de todo el cuerpo. Está dividido en cuatro cavidades: dos aurículas y dos ventrículos.</p>

<h2>Vasos Sanguíneos</h2>
<p>Existen tres tipos principales de vasos sanguíneos: arterias, venas y capilares.</p>
<ul>
    <li>Arterias: Llevan la sangre rica en oxígeno desde el corazón hacia el resto del cuerpo.</li>
    <li>Venas: Devuelven la sangre pobre en oxígeno al corazón.</li>
    <li>Capilares: Pequeños vasos donde se produce el intercambio de gases, nutrientes y desechos.</li>
</ul>

<h2>Sangre</h2>
<p>La sangre es un tejido líquido que transporta células y sustancias vitales por todo el cuerpo. Está compuesta por plasma, glóbulos rojos, glóbulos blancos y plaquetas.</p>

<h2>Circuitos Circulatorios</h2>
<p>El sistema circulatorio tiene dos circuitos principales:</p>
<ul>
    <li>Circuito Pulmonar: Lleva la sangre desde el corazón a los pulmones y de vuelta al corazón.</li>
    <li>Circuito Sistémico: Lleva la sangre desde el corazón al resto del cuerpo y de vuelta al corazón.</li>
</ul>

                                        {getCalificacionByLeccion("Leccion2Circulatorio") !== null ? (
                                            <h3>Tu calificación es: {getCalificacionByLeccion("Leccion2Circulatorio")} </h3>
                                        ) : (
                                            <a href="/LecCirculatorio">Realizar Cuestionario</a>
                                        )}
                                  </div>
            </details>

            <details>
                <summary>Lección 3: Sistema Respiratorio</summary>
                <div>
                <h1>Sistema Respiratorio</h1>

<p>El sistema respiratorio es responsable de llevar oxígeno a los pulmones y expulsar dióxido de carbono del cuerpo.</p>

<h2>Nariz y Cavidad Nasal</h2>
<p>El aire entra al cuerpo a través de la nariz, donde es filtrado, calentado y humidificado antes de pasar a los pulmones.</p>

<h2>Faringe y Laringe</h2>
<p>La faringe sirve como un pasaje para el aire y los alimentos, mientras que la laringe contiene las cuerdas vocales y es responsable de la producción de sonido.</p>

<h2>Tráquea</h2>
<p>La tráquea es un tubo que lleva el aire desde la laringe a los bronquios. Está reforzada por anillos de cartílago para evitar su colapso.</p>

<h2>Bronquios y Bronquiolos</h2>
<p>Los bronquios son dos tubos que se ramifican desde la tráquea hacia cada pulmón. Dentro de los pulmones, se dividen en bronquiolos más pequeños.</p>

<h2>Alvéolos</h2>
<p>Los alvéolos son pequeñas bolsas de aire en los pulmones donde se produce el intercambio de gases entre el aire y la sangre.</p>

<h2>Diafragma</h2>
<p>El diafragma es un músculo que ayuda a expandir y contraer los pulmones para permitir la respiración.</p>
{getCalificacionByLeccion("Leccion3Respiratorio") !== null ? (
                                            <h3>Tu calificación es: {getCalificacionByLeccion("Leccion3Respiratorio")} </h3>
                                        ) : (
                                            <a href="/LecRespiratorio">Realizar Cuestionario</a>
                                        )}
                </div>
            </details>

            
        </main>
        <Footer />
      </div>
    </>
  )
}


