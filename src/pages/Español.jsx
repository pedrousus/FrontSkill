import '../styles/App.css';
import '../styles/Matematicas.css'; 
import Header from '../components/Header'
import Footer from '../components/Footer,'
import Card from '../components/Card'

function Español() {
  const cardPropsEspañol = [
    {
      id: 1,
      nombreMateria: "Ortografía",
      svgIcon: <svg width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12h14" /><path d="M10 16l1-4-2-2h3l-2-2" /><path d="M10 16v4h4v-4" /></svg>,
      lecciones: "6 lecciones",
      dificultad: "Principiante",
      classdificultad: "Princi",
      href: "Ortografia"
    },
    {
      id: 2,
      nombreMateria: "Gramática",
      svgIcon: <svg width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>,
      lecciones: "4 lecciones",
      dificultad: "Principiante",
      classdificultad: "Princi",
      href: "Gramatica"
    },
    {
      id: 3,
      nombreMateria: "Literatura",
      svgIcon: <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M5 8h4" /><path d="M9 16h4" /><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z" /><path d="M14 9l4 -1" /><path d="M16 16l3.923 -.98" /></svg>,
      lecciones: "5 lecciones",
      dificultad: "Intermedio",
      classdificultad: "Inter",
      href: "Literatura"
    },
    {
      id: 4,
      nombreMateria: "Redaccion",
      svgIcon: <svg width="80" height="80" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 19h-6a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2z" /><path d="M12 5v16" /><path d="M7 7h1" /><path d="M7 11h1" /><path d="M16 7h1" /><path d="M16 11h1" /><path d="M16 15h1" /></svg>,
      lecciones: "3 lecciones",
      dificultad: "Intermedio",
      classdificultad: "Inter",
      href: "Redaccion"
    },
    {
      id: 5,
      nombreMateria: "Comprension",
      svgIcon: <svg width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 6v10l4 -4l4 4v-10z" /></svg>,
      lecciones: "3 lecciones",
      dificultad: "Avanzado",
      classdificultad: "Avan",
      href: "Comprension"
    },
    
  ];

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
                <li><p>Español</p></li>
              </ul>
            </nav>
          </header>

          <section className='ListaMaterias'>
            {cardPropsEspañol.map((card) => (
              <Card
                key={card.id}
                {...card}
              />
            ))}
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Español;
