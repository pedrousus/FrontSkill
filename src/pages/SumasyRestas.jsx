import '../styles/App.css'
import Header from '../components/Header'
import Footer from '../components/Footer,'
import { useTask } from '../context/taskContext'
import { useEffect, useState } from 'react';




function SumasyRestas() {
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
         <svg width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
        <nav>
            <ul>
                <li><a href="/">Skill Mentor</a></li>
                <p>/</p>
                <li><a href="/Matematicas">Matemáticas</a></li>
                <p>/</p>
                <li><p>Sumas y Restas</p></li>
            </ul>
        </nav>
         <a className='Cursos' href="">Ingresar código de cursos</a>
        </header>
        <h1>Sumas y Restas</h1>
        <section>
            <details>
                <summary>¿Qué voy a aprender?</summary>
                <div>
                <p>
                Este curso está diseñado especialmente para aquellos que están comenzando su viaje en el mundo de las matemáticas. En este curso, aprenderás los conceptos básicos de las sumas y las restas, dos operaciones fundamentales que utilizamos en nuestra vida diaria. A través de ejemplos prácticos y actividades interactivas, te familiarizarás con estas operaciones y aprenderás cómo aplicarlas en diferentes situaciones.
                </p>
                </div>
            </details>
            <details>
                <summary>Definiciones</summary>
                <div>
                    <h5>Suma</h5>
                    <p>
                    Es una operación aritmética fundamental que se utiliza para combinar dos o más cantidades y obtener un total. En términos simples, podemos pensar en la suma como la acción de agregar o reunir cosas.
                    </p>
                    <h5>Resta</h5>
                    <p>
                    Es una operación aritmética que consiste en eliminar o quitar una cantidad de otra para encontrar la diferencia entre ellas. Se representa mediante el símbolo &quot;-&quot;. La resta se utiliza para determinar cuánto queda de una cantidad después de quitar otra cantidad de ella.
                    </p>
                    <h5>Artimética</h5>
                    <p>
                    La aritmética es una rama de las matemáticas que se centra en el estudio de los números y las operaciones que se pueden realizar con ellos. En la aritmética, exploramos conceptos como contar, sumar, restar, multiplicar y dividir, así como las relaciones entre estos conceptos. Es una de las ramas más fundamentales de las matemáticas y proporciona las bases para entender y resolver problemas matemáticos más complejos.
                    </p>
                    <h5>Operación</h5>
                    <p>
                    Una operación es un proceso matemático que se realiza sobre uno o más números para obtener un resultado. 
                    </p>
                </div>
            </details>
            <details>
                <summary>Leccion 1: Ejemplos de sumas con unidades y decenas</summary>
                <div>
                    <h5>Ejemplo 1</h5>
                    <p>
                        Si Pedrito en su casa tiene 3 manzanas, pero su papá trajo dos manzanas de la tienda, ¿Cuántas manzanas tiene Pedrito en su casa ahora? 
                    </p>
                        <small>(2 manzanas + 3 manzanas = 5 manzanas)</small>
                    <h5>Ejemplo 2</h5>
                    <p>
                        María tiene 7 lápices de color y su hermano le regaló 4 lápices más, ¿Cuántos lápices tiene ahora María? 
                    </p>
                        <small>(7 lápices + 4 lápices = 11 lápices)</small>
                    <h5>Ejemplo 3</h5>
                    <p>
                        Si Juan tiene 8 libros y su abuela le regala 2 libros, ¿Cuántos libros tiene ahora Juan? 
                    </p>
                        <small>(8 libros + 2 libros = 10 libros)</small>
                    <h5>Ejemplo 4</h5>
                    <p>
                        En la fiesta de cumpleaños de Ana, hay 15 bloques de construcción, y después de abrir los regalos encontro que le habian regalado 5 bloques más de construcción, ¿Cuántos bloques de construcción tiene Ana despues de abrir los regalos? 
                    </p>
                        <small>(15 bloques + 5 bloques = 20 bloques)</small>
                    <h5>Ejemplo 5</h5>
                    <p>
                        Si Carlos tiene 6 pelotas y su amigo José tiene 9 pelotas más, ¿Cuántas pelotas tienen entre Carlos y José? 
                    </p>
                        <small>(6 pelotas + 9 pelotas = 15 pelotas)</small>
                        {getCalificacionByLeccion("Leccion1SumasRestas") !== null ? (
                            <h3>Tu calificación es: {getCalificacionByLeccion("Leccion1SumasRestas")} </h3>
                        ) : (
                            <a href="/ResSumasRestas">Realizar Cuestionario</a>
                        )}
                </div>
            </details>
            <details>
                <summary>Leccion 2: Ejemplos de restas con unidades y decenas</summary>
                <div>
                    <h5>Ejemplo 1</h5>
                    <p>
                        Si Laura tiene 10 galletas y se come 4 galletas, ¿Cuántas galletas le quedan a Laura? 
                    </p>
                        <small>(10 galletas - 4 galletas = 6 galletas)</small>
                    <h5>Ejemplo 2</h5>
                    <p>
                        David tiene 20 juguetes y regala 7 juguetes a su hermano, ¿Cuántos juguetes le quedan a David? 
                    </p>
                        <small>(20 juguetes - 7 juguetes = 13 juguetes)</small>
                    <h5>Ejemplo 3</h5>
                    <p>
                        Si Sofía tiene 18 caramelos y decide darle 9 caramelos a su mejor amiga, ¿Cuántos caramelos le quedan a Sofía? 
                    </p>
                        <small>(18 caramelos - 9 caramelos = 9 caramelos)</small>
                    <h5>Ejemplo 4</h5>
                    <p>
                        Juanita tiene 25 lápices de color y pierde 8 lápices, ¿Cuántos lápices le quedan a Juanita? 
                    </p>
                        <small>(25 lápices - 8 lápices = 17 lápices)</small>
                    <h5>Ejemplo 5</h5>
                    <p>
                        Si Pedro tiene 14 libros y presta 5 libros a su primo, ¿Cuántos libros le quedan a Pedro? 
                    </p>
                        <small>(14 libros - 5 libros = 9 libros)</small>
                        {getCalificacionByLeccion("Leccion2SumasRestas") !== null ? (
                            <h3>Tu calificación es: {getCalificacionByLeccion("Leccion2SumasRestas")} </h3>
                        ) : (
                            <a href="/CuestionarodosSumasRests">Realizar Cuestionario</a>
                        )}
                </div>
            </details>
            <details>
                <summary>Leccion 3: Ejemplos de sumas con unidades, decenas y centenas</summary>
                <div>
                    <h5>Ejemplo 1</h5>
                    <p>
                        En una libreria hay tres estantes que contienen libros, en el primer estante hay 90 libros, en el segundo estante hay 174 libros, al cual se le añaden 9 libros más, y en el ultimo estante hay 231 libros, en el cual se colocan 10 libros más. ¿Cuántos libros hay en total en los estantes?
                    </p>
                        <small>(90 libros + 174 libros +9 libros + 231 libros + 10 libros = 514 libros)</small>
                    <h5>Ejemplo 2</h5>
                    <p>
                        En un zoologico en el cual se encuentra dos estanques el primero que contiene 500 peces, se le añaden 300 peces más, en el segundo estanque hay 127 peces adicionales, el cual se le añaden 240 peces más. ¿Cuántos peces hay en total en los dos estanques?
                    </p>
                        <small>(500 peces + 300 peces + 127 peces + 240 peces = 1167 peces)</small>
                    <h5>Ejemplo 3</h5>
                    <p>
                        Si Ana tiene 120 bolígrafos, luego compra 200 lápices y 400 marcadores, ¿cuántos artículos de papelería tiene en total Ana? 
                    </p>
                        <small>(120 bolígrafos + 200 lápices + 400 marcadores = 720 artículos de papelería)</small>
                    <h5>Ejemplo 4</h5>
                    <p>
                        Marta tiene 242 libros en un estante, luego coloca 124 libros en otro estante, 83 libros en otro estante, 124 libros más en otro estante y finalmente 134 libros en un último estante, ¿cuántos libros tiene Marta en total? 
                    </p>
                        <small>(242 libros + 124 libros + 83 libros + 124 libros + 134 libros = 707 libros)</small>
                    <h5>Ejemplo 5</h5>
                    <p>
                        En una tienda de ropa, se venden 180 camisetas, luego llegan 250 pantalones y se añaden 400 pares de zapatos, ¿cuántas prendas hay en total en la tienda? 
                    </p>
                        <small>(180 camisetas + 250 pantalones + 400 pares de zapatos = 830 prendas)</small>
                        {getCalificacionByLeccion("Leccion3SumasRestas") !== null ? (
                            <h3>Tu calificación es: {getCalificacionByLeccion("Leccion3SumasRestas")} </h3>
                        ) : (
                            <a href="/ResSumasRestas">Realizar Cuestionario</a>
                        )}
                </div>
            </details>
            <details>
                <summary>Leccion 4: Ejemplos de restas con unidades, decenas y centenas</summary>
                <div>
                    <h5>Ejemplo 1</h5>
                    <p>
                        Si María tiene 805 dólares y decide comprar un televisor que cuesta 310 dólares, luego gasta 223 dólares en muebles, ¿cuánto dinero le queda a María? 
                    </p>
                        <small>(805 dólares - 310 dólares - 223 dólares = 272 dólares)</small>
                    <h5>Ejemplo 2</h5>
                    <p>
                        Antonio tenía 1650 euros y gastó 680 euros en un nuevo teléfono móvil, luego compró un ordenador por 450 euros y pagó una factura de 223 euros, ¿cuánto dinero le queda a Antonio? 
                    </p>
                        <small>(1650 euros - 680 euros - 450 euros - 223 euros = 297 euros) </small>
                    <h5>Ejemplo 3</h5>
                    <p>
                        Si Laura tenía 2500 dólares y decide comprar un sofá que cuesta 950 dólares, luego gasta 550 dólares en decoración y 230 dólares en electrodomésticos, ¿cuánto dinero le queda a Laura? 
                    </p>
                        <small>(2500 dólares - 950 dólares - 550 dólares - 230 dólares = 770 dólares)</small>
                    <h5>Ejemplo 4</h5>
                    <p>
                        Jorge tenía 3500 pesos y compró un reloj que costaba 1250 pesos, luego gastó 860 pesos en ropa y 420 pesos en accesorios, ¿cuánto dinero le queda a Jorge? 
                    </p>
                        <small>(3500 pesos - 1250 pesos - 860 pesos - 420 pesos = 970 pesos)</small>
                    <h5>Ejemplo 5</h5>
                    <p>
                        Si Carlos tenía 4000 euros y gastó 930 euros en un viaje, luego compró un teléfono por 570 euros, pagó una factura de 223 euros y gastó 185 euros en regalos, ¿cuánto dinero le queda a Carlos? 
                    </p>
                        <small>(4000 euros - 930 euros - 570 euros - 223 euros - 185 euros = 2092 euros)</small>
                </div>
            </details>
            <details>
                <summary>Leccion 5: Ejemplos de sumas y restas con unidades, decenas, centenas  y unidades de millar</summary>
                <div>
                    <h5>Ejemplo 1</h5>
                    <p>
                        Si Ana gasta 1350 dólares en un viaje, luego compra un pasaje de avión por 680 dólares, después adquiere un paquete de tours por 1250 dólares, suma un recuerdo de 45 dólares y además compra souvenirs por 180 dólares, ¿cuánto dinero gastó Ana en total? 
                    </p>
                        <small>(1350 dólares + 680 dólares + 1250 dólares + 45 dólares + 180 dólares = 3505 dólares)</small>
                    <h5>Ejemplo 2</h5>
                    <p>
                        Carlos tiene 2450 dólares en su cuenta bancaria, luego deposita 500 dólares, retira 123 dólares, recibe un pago de 3000 dólares, retira 215 dólares más, gasta 470 dólares en la tienda y recibe un reembolso de 800 dólares, ¿cuánto dinero tiene ahora Carlos en su cuenta? 
                    </p>
                        <small><p>(2450 dólares + 500 dólares - 123 dólares + 3000 dólares - 215 dólares - 470 dólares + 800 dólares = 5942 dólares)</p></small>
                    <h5>Ejemplo 3</h5>
                    <p>
                        En una granja hay 750 pollos, llegan 400 pollos nuevos, luego nacen 200 pollos más, se venden 300 pollos, luego llegan 600 pollos adicionales y finalmente se retiran 150 pollos. ¿Cuántos pollos hay en total en la granja? 
                    </p>
                        <small>(750 pollos + 400 pollos + 200 pollos - 300 pollos + 600 pollos - 150 pollos = 2000 pollos)</small>
                    <h5>Ejemplo 4</h5>
                    <p>
                        En una clase hay 30 alumnos, llegan 15 alumnos nuevos, luego se van 10 alumnos, llegan 25 alumnos más, se gradúan 5 alumnos y finalmente se retiran 8 alumnos. ¿Cuántos alumnos hay en total en la clase? 
                    </p>
                        <small>(30 alumnos + 15 alumnos - 10 alumnos + 25 alumnos - 5 alumnos - 8 alumnos = 47 alumnos)</small>
                    <h5>Ejemplo 5</h5>
                    <p>
                        Si en una tienda hay 350 libros, se venden 150 libros, luego llegan 200 libros nuevos, se venden 100 libros más, llegan 300 libros adicionales y finalmente se venden 250 libros. ¿Cuántos libros hay en total en la tienda? 
                    </p>
                        <small>(350 libros - 150 libros + 200 libros - 100 libros + 300 libros - 250 libros = 550 libros)</small>
                    <h5>Ejemplo 6</h5>
                    <p>
                        Una empresa tiene 1800 unidades de un producto en su almacén, luego envía 500 unidades a una sucursal, llegan 350 unidades nuevas, se venden 450 unidades, llegan 600 unidades adicionales y finalmente se venden 800 unidades. ¿Cuántas unidades del producto quedan en el almacén? 
                    </p>
                        <small><p>(1800 unidades - 500 unidades + 350 unidades - 450 unidades + 600 unidades - 800 unidades = 1000 unidades)</p></small>
                </div>
            </details>
        </section>
      </main>
      <Footer />
      </div>
    </>
  )
}

export default SumasyRestas
