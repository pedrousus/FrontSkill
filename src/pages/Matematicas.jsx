import '../styles/App.css'
import '../styles/Matematicas.css'
import Header from '../components/Header'
import Footer from '../components/Footer,'
import Card from '../components/Card'

function Matematicas() {
    const cardPropsMate = [
      {
        id: 1,
        nombreMateria: "Sumas y Restas",
        svgIcon: <svg width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7h6" /><path d="M7 4v6" /><path d="M20 18h-6" /><path d="M5 19l14 -14" /></svg>,
        lecciones: "5 lecciones",
        dificultad: "Principiante",
        classdificultad: "Princi",
        href: "SumasyRestas"
      },
      {
        id: 2,
        nombreMateria: "Geometría",
        svgIcon: <svg width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3l-4 7h8z" /><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>,
        lecciones: "4 lecciones",
        dificultad: "Principiante",
        classdificultad: "Princi",
        href: "Geometria"
      },
      {
        id: 3,
        nombreMateria: "Fracciones",
        svgIcon: <svg width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12h14" /><path d="M10 15h3a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h3" /><path d="M10 5l2 -2v6" /></svg>,
        lecciones: "3 lecciones",
        dificultad: "Intermedio",
        classdificultad: "Inter",
        href: "Fracciones"
      },
      {
        id: 4,
        nombreMateria: "Multiplicación",
        svgIcon: <svg width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>,
        lecciones: "3 lecciones",
        dificultad: "Intermedio",
        classdificultad: "Inter",
        href: "Multiplicacion"
      },
      {
        id: 5,
        nombreMateria: "División",
        svgIcon: <svg width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="6" r="1" fill="currentColor" /><circle cx="12" cy="18" r="1" fill="currentColor" /><path d="M5 12l14 0" /></svg>,
        lecciones: "3 lecciones",
        dificultad: "Intermedio",
        classdificultad: "Inter",
        href: "Division"
      },
      {
        id: 6,
        nombreMateria: "Algebra",
        svgIcon: <svg width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4c-2.5 5 -2.5 10 0 16m14 -16c2.5 5 2.5 10 0 16m-10 -11h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1" /><path d="M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" /></svg>,
        lecciones: "5 lecciones",
        dificultad: "Avanzado",
        classdificultad: "Avan",
        href: "Algebra"
      },
    ]

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
                <li><p>Matemáticas</p></li>
            </ul>
        </nav>
        </header>

        <section className='ListaMaterias'>
        {cardPropsMate.map((card)=>(
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

export default Matematicas
