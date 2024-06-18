import '../styles/App.css'
import Header from '../components/Header'
import Footer from '../components/Footer,'

export default function Geometria() {
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
                <li><p>Geometría</p></li>
            </ul>
        </nav>
        </header>
        <h1>Geometría</h1>
        <section>
            <details>
                <summary>¿Qué voy a aprender?</summary>
                <div>
                <p>
                En este curso, exploraremos los fundamentos de la geometría, una rama de las matemáticas que estudia las formas, tamaños y propiedades de los objetos en el espacio. A lo largo de nuestras lecciones, te introduciremos a conceptos esenciales que te ayudarán a comprender el mundo que te rodea de una manera más profunda y estructurada.
                </p>
                </div>
            </details>
            <details>
                <summary>¿Qué es la geometría?</summary>
                <div>
                <p>
                La geometría es la rama de las matemáticas que se ocupa de las propiedades y relaciones de puntos, líneas, ángulos, superficies y sólidos. Es una herramienta poderosa que nos ayuda a comprender la estructura y el orden en el mundo que nos rodea.
                </p>
                </div>
            </details>
            <details>
                <summary>Definiciones</summary>
                <div>
                    <h5>Puntos</h5>
                    <p>
                    Son ubicaciones en el espacio que no tienen tamaño, solo posición. Imagina un punto como una pequeña bolita que no tiene tamaño, solo indica un lugar en el espacio.
                    </p>
                    <h5>Líneas</h5>
                    <p>
                    Una línea es como un camino dibujado con un lápiz. Puedes pensar en una línea como un montón de puntos conectados uno tras otro. Son series de puntos infinitamente continuos en una dirección.
                    </p>
                    <h5>Lados</h5>
                    <p>
                    Son las partes rectas que forman los límites de una figura geométrica. Piensa en ellos como las orillas de un dibujo.
                    </p>
                    <h5>Perímetro</h5>
                    <p>
                    Es la longitud total de los lados de una figura. Es como si dieras un paseo alrededor de una figura, añadiendo la longitud de todos sus lados. 
                    </p>
                    <h5>Área</h5>
                    <p>
                    Es la cantidad de espacio dentro de los límites de una figura. Se mide en unidades cuadradas. Imagina que quieres pintar el interior de una figura. El área es cuánta pintura necesitarías.
                    </p>
                    <h5>Altura</h5>
                    <p>
                    Es la distancia vertical desde la base de una figura hasta su punto más alto. Es como medir lo alto que es un edificio o una montaña. 
                    </p>
                    <h5>Volumen</h5>
                    <p>
                    Es el espacio ocupado por un objeto tridimensional. Se mide en unidades cúbicas. Piensa en el volumen como el espacio que ocuparía un objeto si lo llenas de agua.
                    </p>
                    
                </div>
            </details>
            <details>
                <summary>Figuras básicas</summary>
                <div>
                    <h5>Cuadrado</h5>
                    <svg width="100" height="100" viewBox="0 0 24 24" strokeWidth="1" stroke="var(--color-green-600)" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /></svg>
                    <p>
                    <small>Descripción:</small> Un cuadrado es como un pedazo de papel o una ventana que tiene cuatro lados iguales y cuatro esquinas en ángulo recto.
                    </p>
                    <p>
                    <small>Lados:</small> Todos los lados del cuadrado tienen la misma longitud.
                    </p>
                    <p>
                    <small>Perímetro:</small> Para encontrar el perímetro (la distancia alrededor del cuadrado), sumamos la longitud de los cuatro lados. La fórmula es: Perímetro = Lado + Lado + Lado + Lado, o Perímetro = 4 x Lado.
                    </p>
                    <p>
                    <small>Área:</small> El área (el espacio dentro del cuadrado) se encuentra multiplicando la longitud de un lado por sí misma. La fórmula es: Área = Lado x Lado, o Área = Lado².
                    </p>
                    <h5>Rectángulo</h5>
                    <svg width="150" height="150" viewBox="0 0 24 24" strokeWidth="1" stroke="var(--color-yellow-600)" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /></svg>
                    <p>
                    <small>Descripción:</small> Un rectángulo es como una puerta o una mesa que tiene cuatro lados, dos de los cuales son más largos que los otros dos.
                    </p>
                    <p>
                    <small>Lados:</small> Tiene dos pares de lados iguales en longitud, pero los lados opuestos no son necesariamente del mismo tamaño.
                    </p>
                    <p>
                    <small>Perímetro:</small> El perímetro se encuentra sumando la longitud de todos los lados. La fórmula es: Perímetro = Lado1 + Lado2 + Lado1 + Lado2, o Perímetro = 2 x (Lado1 + Lado2).
                    </p>
                    <p>
                    <small>Área:</small> El área de un rectángulo se encuentra multiplicando la longitud de un lado largo por la longitud de un lado corto. La fórmula es: Área = Largo x Corto.
                    </p>
                    <h5>Círculo</h5>
                    <svg width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--color-red-600)" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>
                    <p>
                    <small>Descripción:</small> Un círculo es como una galleta redonda o una rueda. Tiene una línea curva llamada circunferencia que rodea todo su interior.
                    </p>
                    <p>
                    <small>Radio:</small> La distancia desde el centro del círculo hasta cualquier punto de la circunferencia se llama radio.
                    </p>
                    <p>
                    <small>Diametro:</small> Es la distancia de un extremo del círculo al otro, pasando por el centro.
                    </p>
                    <p>
                    <small>Perimetro:</small> La fórmula para encontrar la circunferencia de un círculo es: Circunferencia = π x Diámetro, o Circunferencia = 2 x π x Radio.
                    </p>
                    <p>
                    <small>Área:</small> El área de un círculo se encuentra usando la fórmula: Área = π x Radio * Radio.
                    </p>
                    <h5>Triángulo equilátero</h5>
                    <svg  width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--color-blue-500)" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" /></svg>
                    <p>
                    <small>Descripción:</small> Un triángulo equilátero es una figura con tres lados iguales y tres ángulos iguales.
                    </p>
                    <p>
                    <small>Lados:</small> Todos los lados del triángulo equilátero tienen la misma longitud.
                    </p>
                    <p>
                    <small>Perimetro:</small> Para encontrar el perímetro (la distancia alrededor del triángulo), simplemente sumamos la longitud de los tres lados. La fórmula es: Perímetro = Lado + Lado + Lado, o Perímetro = 3 x Lado.
                    </p>
                    <p>
                    <small>Área:</small> El área de un triangulo equilatero se encuentra multiplicando la longitud de su base por la longitud de la altura y el resultado dividirlo entre 2. La fórmula es: Área = (Base x Altura) / 2.
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


