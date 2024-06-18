import '../styles/Footer.css'

export default function Footer() {
    return(
        <footer>
        <div>
          <h5>Sobre Nosotros</h5>
          <nav>
            <ul>
              <li><a href='MisionVision'>Misión y Visión</a></li>
              <li><a href='Valores'>Valores</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <h5>Aprendizaje</h5>
          <nav>
            <ul>
              <li><a href='AprendizajeGeneral'>Que voy aprender</a></li>
            </ul>
          </nav>
        </div>
        {/* <div>
          <h5>Cursos</h5>
          <nav>
            <ul>
              <li><a>Unirme a un curso</a></li>
              <li><a>Ver todos los cursos</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <h5>Herramientas para maestros</h5>
          <nav>
            <ul>
              <li><a>Crear un nuevo curso</a></li>
              <li><a>Ver calificaciones</a></li>
            </ul>
          </nav>
        </div> */}
      </footer>
    )
}