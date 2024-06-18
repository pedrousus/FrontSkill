import '../styles/App.css'
import Header from '../components/Header'
import Footer from '../components/Footer,'

export default function Fracciones() {
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
                <li><a href="/Matematicas">Matemáticas</a></li>
                <p>/</p>
                <li><p>Fracciones</p></li>
            </ul>
        </nav>
        </header>
        <h1>Fracciones</h1>
        <section>
            <details>
                <summary>¿Qué voy a aprender?</summary>
                <div>
                <p>
                Este curso está diseñado para explorar el fascinante mundo de las fracciones, un concepto fundamental en matemáticas que se encuentra en numerosos aspectos de nuestra vida diaria. A lo largo de este curso, descubrirás qué son las fracciones, cómo se utilizan y cómo realizar sumas y restas con ellas.
                </p>
                <p>
                A lo largo del curso, exploraremos ejemplos prácticos que te ayudarán a comprender mejor el concepto de fracciones y cómo realizar operaciones con ellas. Aprenderemos a identificar las partes de una fracción, a encontrar denominadores comunes y a realizar sumas y restas paso a paso.
                </p>
                </div>
            </details>
            <details>
                <summary>¿Qué son las fracciones?</summary>
                <div>
                <p>
                Las fracciones son representaciones matemáticas de partes de un todo. Son esenciales para dividir o expresar cantidades en porciones más pequeñas. Una fracción consta de dos partes fundamentales: el numerador y el denominador. Estos componentes trabajan en conjunto para describir la relación entre la parte tomada y el total original.
                </p>
                <p>
                Las fracciones están ligadas a los números enteros. Pueden representar valores que están entre dos números enteros. Por ejemplo, la fracción 1/2 se sitúa justo entre los números enteros 0 y 1. Las fracciones también pueden expresar cantidades mayores que un número entero, como 3/2, que es igual a 1 y medio.
                </p>
                </div>
            </details>
            <details>
                <summary>Definiciones</summary>
                <div>
                    <h5>Numerador</h5>
                    <p>
                    Es el número superior en la fracción y representa la cantidad de partes que estamos tomando o considerando. Por ejemplo, en la fracción 3/5, el 3 es el numerador, indicando que estamos tomando tres partes.
                    </p>
                    <h5>Denominador</h5>
                    <p>
                    Es el número inferior en la fracción y denota en cuántas partes se divide el todo original. Siguiendo el ejemplo anterior, el 5 en 3/5 es el denominador, indicando que el total se divide en cinco partes iguales.
                    </p>
                </div>
            </details>
            <details>
                <summary>Hallar el minimo común multiplo (MCM)</summary>
                <div>
                    <h5>Identificación de denominadores</h5>
                    <p>
                    Primero, identificamos los denominadores de las fracciones que queremos sumar o restar. Estos son los números que están debajo de la línea fraccionaria y representan las partes en las que se ha dividido el todo.
                    </p>
                    <h5>Encuentro el minimo común multiplo</h5>
                    <p>
                    El mínimo común múltiplo (mcm) es el número más pequeño que es múltiplo de todos los denominadores dados. Para encontrar el mcm, puedes seguir estos pasos:
                    </p>
                    <ul>
                        <li><small>1: Enumera los múltiplos de cada número.</small></li>
                        <li><small>2: Identifica el primer número que es un múltiplo de ambos denominadores.</small></li>
                    </ul>
                    <p>Por ejemplo, si queremos sumar las fracciones 2/3 y 3/4:</p>
                    <ul>
                        <li><small>Los múltiplos de 3 son 3, 6, 9, 12, 15, ...</small></li>
                        <li><small>Los múltiplos de 4 son 4, 8, 12, 16, 20, ...</small></li>
                    </ul>
                    <p>En este caso, el mcm es 12, ya que es el primer número que es múltiplo tanto de 3 como de 4.</p>
                    <h5>Igualar denominadores</h5>
                    <p>
                    Una vez que has encontrado el mcm, multiplicas cada fracción por un número que la convierta en una fracción equivalente con el denominador común (el mcm). Para hacerlo, sigue estos pasos:
                    </p>
                    <ul>
                        <li><small>1: Encuentra el factor por el cual necesitas multiplicar cada fracción para llegar al mcm.</small></li>
                        <li><small>2: Multiplica tanto el numerador como el denominador de cada fracción por el factor correspondiente.</small></li>
                    </ul>
                    <p>Por ejemplo, si el mcm es 12 y tenemos las fracciones 2/3 y 3/4:</p>
                    <p>Para la fracción 2/3:</p>
                    <ul>
                        <li><small>-Necesitamos multiplicar tanto el numerador como el denominador por 4 para que el denominador sea 12.</small></li>
                        <li><small>-Obtenemos así 8/12.</small></li>
                    </ul>
                    <p>Para la fracción 3/4:</p>
                    <ul>
                        <li><small>-Necesitamos multiplicar tanto el numerador como el denominador por 3 para que el denominador sea 12.</small></li>
                        <li><small>-Obtenemos así 9/12.</small></li>
                    </ul>
                    <p>Ahora, ambas fracciones tienen el mismo denominador (12), lo que nos permite sumar o restar los numeradores directamente.</p>
                    <h5>Realización de la operación: </h5>
                    <p>
                    Con los denominadores iguales, ahora podemos sumar o restar los numeradores directamente, manteniendo el denominador común. Una vez que hemos realizado la operación con los numeradores, conservamos el denominador común en la respuesta.
                    </p>
                </div>
            </details>
            <details>
                <summary>Leccion 1: Ejemplos de sumas de fracciones con el mismo denominador</summary>
                <div>
                    <h5>Ejemplo 1</h5>
                    <p>
                        En la fiesta de cumpleaños de Marta, había una mesa llena de dulces. Si Marta tenía 3/5 de un plato de galletas y su amigo Juan le regaló 1/5 más de otro plato, ¿cuántas galletas tiene Marta en total? 
                    </p>
                        <small>(3/5 de plato + 1/5 de plato = 4/5 de plato)</small>
                    <h5>Ejemplo 2</h5>
                    <p>
                        Sofía tenía 2/3 de una caja de juguetes y su hermano Pablo le dio 1/3 más de otra caja. ¿Cuántos cajas de juguetes tienen Sofía y Pablo en total? 
                    </p>
                        <small>(2/3 de caja + 1/3 de caja = 1 caja)</small>
                    <h5>Ejemplo 3</h5>
                    <p>
                        En una fiesta de cumpleaños donde asistieron 10 personas habia dos tartas una de chocolate, y la otra de fresa las cuales al final de la fiesta de cumpleaños quedaron 3/4 partes de la tarta de fresa y 1/4 de la tarta, de chocolate ¿cuántas tartas tienes en total? 
                    </p>
                        <small>(3/4 de tarta + 1/4 de tarta = 1 tarta)</small>
                    <h5>Ejemplo 4</h5>
                    <p>
                        En la granja de animales de la familia López, Martín tenía 5/8 de una caja de huevos y su hermana Ana le dio 1/8 más de otra caja. ¿Cuánta proporción de la caja de huevos tienen Martín y Ana en total?  
                    </p>
                        <small>(5/8 de caja + 1/8 de caja = 6/8 de caja)</small>
                    <h5>Ejemplo 5</h5>
                    <p>
                        En el picnic de la familia Rodríguez, Sofía tenía 3/4 de una canasta de frutas y su hermano Juan le dio 1/4 más de otra canasta. ¿Cuánta proporcion de las canastas de frutas pueden llenar Sofía y Juan en total? 
                    </p>
                        <small>(3/4 de canasta + 1/4 de canasta = 1 canasta)</small>
                </div>
            </details>
            <details>
                <summary>Leccion 2: Ejemplos de restas de fracciones con el mismo denominador</summary>
                <div>
                    <h5>Ejemplo 1</h5>
                    <p>
                        En la feria de manualidades, Laura tenía 4/5 de una caja de crayones y su primo Miguel le quitó 3/5 de la caja. ¿Cuánta proporción de la caja de crayones le quedan a Laura?
                    </p>
                        <small>(4/5 de caja - 3/5 de caja = 1/5 de caja)</small>
                    <h5>Ejemplo 2</h5>
                    <p>
                        En la fiesta de Navidad, Marcos tenía 2/3 de un paquete de chocolates y su hermana Carla le quitó 1/3 de la caja. ¿Cuánta proporción del paquete de chocolates le quedan a Marcos? 
                    </p>
                        <small>(2/3 de paquete - 1/3 de paquete = 1/3 de paquete)</small>
                    <h5>Ejemplo 3</h5>
                    <p>
                        En la clase de arte, Lucía tenía 3/4 de un rollo de papel y su amigo Carlos le quitó 1/4 del rollo. ¿Cuánto papel le queda a Lucía? 
                    </p>
                        <small>(3/4 de rollo - 1/4 de rollo = 2/4 de rollo)</small>
                    <h5>Ejemplo 4</h5>
                    <p>
                        En la tienda de juguetes, Martín tenía 5/6 de un set de Lego y su hermana Sofía le quitó 4/6 del set. ¿Cuántas piezas de Lego le quedan a Martín?  
                    </p>
                        <small>(5/6 de set - 4/6 de set = 1/6 de set)</small>
                    <h5>Ejemplo 5</h5>
                    <p>
                        En el zoológico, Lucas tenía 7/8 de una bolsa de caramelos y su hermano Pedro le quitó 5/8 de la bolsa. ¿Cuántos caramelos le quedan a Lucas? 
                    </p>
                        <small>(7/8 de bolsa - 5/8 de bolsa = 2/8 de bolsa)</small>
                </div>
            </details>
            <details>
                <summary>Leccion 3: Ejemplos de sumas de fracciones con diferente denominador</summary>
                <div>
                    <h5>Ejemplo 1</h5>
                    <p>
                        En una fiesta de cumpleaños, Julia tiene 1/3 de una pizza y 1/4 de una torta. ¿Cuántas porciones de comida tiene Julia en total? 
                    </p>
                        <small>(1/3 de pizza + 1/4 de torta = 7/12 de comida)</small>
                    <h5>Ejemplo 2</h5>
                    <p>
                        En la escuela, Pedro tiene 2/5 de un lápiz de colores y 1/3 de otro lápiz. ¿Cuántos lápices de colores tiene Pedro en total? 
                    </p>
                        <small>(2/5 de lápiz + 1/3 de lápiz = 11/15 de lápices)</small>
                    <h5>Ejemplo 3</h5>
                    <p>
                        En una tienda de golosinas, Ana compró 3/8 de una bolsa de caramelos y 2/7 de otra bolsa. ¿Cuántos caramelos tiene Ana en total? 
                    </p>
                        <small>(3/8 de bolsa + 2/7 de bolsa = 37/56 de caramelos)</small>
                    <h5>Ejemplo 4</h5>
                    <p>
                        En una juguetería, Juan tiene 2/6 de un juego de construcción y 3/10 de otro juego. ¿Cuántos juegos de construcción tiene Juan en total? 
                    </p>
                        <small>(2/6 de juego + 3/10 de juego = 11/15 de juegos)</small>
                    <h5>Ejemplo 5</h5>
                    <p>
                        En un parque de diversiones, Sofía compró 5/12 de un helado y 4/9 de otro helado. ¿Cuántos helados tiene Sofía en total? 
                    </p>
                        <small>(5/12 de helado + 4/9 de helado = 73/108 de helados)</small>
                </div>
            </details>
            <details>
                <summary>Leccion 4: Ejemplos de restas de fracciones con diferente denominador</summary>
                <div>
                    <h5>Ejemplo 1</h5>
                    <p>
                        Si tienes 7/8 de una barra de chocolate y compartes 3/5 de ella con tus amigos, ¿cuánto chocolate te queda? 
                    </p>
                        <small>(7/8 de chocolate - 3/5 de chocolate = 11/40 de chocolate)</small>
                    <h5>Ejemplo 2</h5>
                    <p>
                        Tienes 5/6 de una caja de crayones y gastas 1/4 de ella en una actividad escolar, ¿cuántos crayones te quedan? 
                    </p>
                        <small>(5/6 de caja - 1/4 de caja = 11/12 de crayones)</small>
                    <h5>Ejemplo 3</h5>
                    <p>
                        Si tienes 2/3 de una caja de juguetes y pierdes 3/10 de ella, ¿cuántos juguetes te quedan? 
                    </p>
                        <small>(2/3 de caja - 3/10 de caja = 1/15 de juguetes)</small>
                    <h5>Ejemplo 4</h5>
                    <p>
                        Tienes 4/5 de una barra de pan y consumes 1/3 de ella en el desayuno, ¿cuánto pan te queda? 
                    </p>
                        <small>(4/5 de barra - 1/3 de barra = 7/15 de pan)</small>
                    <h5>Ejemplo 5</h5>
                    <p>
                        Si tienes 3/4 de una bolsa de golosinas y compartes 2/7 de ella con tus amigos, ¿cuántas golosinas te quedan? 
                    </p>
                        <small>(3/4 de bolsa - 2/7 de bolsa = 17/28 de golosinas)</small>
                </div>
            </details>
            
        </section>
      </main>
      <Footer />
      </div>
    </>
  )
}


