import '../styles/App.css'
import '../styles/Matematicas.css'
import Header from '../components/Header'
import Footer from '../components/Footer,'
import Card from '../components/Card'

export default function Ciencias() {
    const cardPropsCiencias = [
      {
        id: 1,
        nombreMateria: "Flora",
        svgIcon: <svg width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z" /><path d="M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" /><path d="M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" /><path d="M12 15l0 -6" /></svg>,
        lecciones: "5 lecciones",
        dificultad: "Principiante",
        classdificultad: "Princi",
        href: "Flora"
      },
      {
        id: 2,
        nombreMateria: "Fauna",
        svgIcon: <svg width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.7 13.5c-1.1 -2 -1.441 -2.5 -2.7 -2.5c-1.259 0 -1.736 .755 -2.836 2.747c-.942 1.703 -2.846 1.845 -3.321 3.291c-.097 .265 -.145 .677 -.143 .962c0 1.176 .787 2 1.8 2c1.259 0 3 -1 4.5 -1s3.241 1 4.5 1c1.013 0 1.8 -.823 1.8 -2c0 -.285 -.049 -.697 -.146 -.962c-.475 -1.451 -2.512 -1.835 -3.454 -3.538z" /><path d="M20.188 8.082a1.039 1.039 0 0 0 -.406 -.082h-.015c-.735 .012 -1.56 .75 -1.993 1.866c-.519 1.335 -.28 2.7 .538 3.052c.129 .055 .267 .082 .406 .082c.739 0 1.575 -.742 2.011 -1.866c.516 -1.335 .273 -2.7 -.54 -3.052z" /><path d="M9.474 9c.055 0 .109 0 .163 -.011c.944 -.128 1.533 -1.346 1.32 -2.722c-.203 -1.297 -1.047 -2.267 -1.932 -2.267c-.055 0 -.109 0 -.163 .011c-.944 .128 -1.533 1.346 -1.32 2.722c.204 1.293 1.048 2.267 1.933 2.267z" /><path d="M16.456 6.733c.214 -1.376 -.375 -2.594 -1.32 -2.722a1.164 1.164 0 0 0 -.162 -.011c-.885 0 -1.728 .97 -1.93 2.267c-.214 1.376 .375 2.594 1.32 2.722c.054 .007 .108 .011 .162 .011c.885 0 1.73 -.974 1.93 -2.267z" /><path d="M5.69 12.918c.816 -.352 1.054 -1.719 .536 -3.052c-.436 -1.124 -1.271 -1.866 -2.009 -1.866c-.14 0 -.277 .027 -.407 .082c-.816 .352 -1.054 1.719 -.536 3.052c.436 1.124 1.271 1.866 2.009 1.866c.14 0 .277 -.027 .407 -.082z" /></svg>,
        lecciones: "4 lecciones",
        dificultad: "Principiante",
        classdificultad: "Princi",
        href: "Fauna"
      },
      {
        id: 3,
        nombreMateria: "Cuerpo Humano",
        svgIcon: <svg width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 16v5" /><path d="M14 16v5" /><path d="M9 9h6l-1 7h-4z" /><path d="M5 11c1.333 -1.333 2.667 -2 4 -2" /><path d="M19 11c-1.333 -1.333 -2.667 -2 -4 -2" /><path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></svg>,
        lecciones: "3 lecciones",
        dificultad: "Intermedio",
        classdificultad: "Inter",
        href: "CuerpoHumano"
      },
      {
        id: 4,
        nombreMateria: "Fisica 1",
        svgIcon: <svg width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12v.01" /><path d="M19.071 4.929c-1.562 -1.562 -6 .337 -9.9 4.243c-3.905 3.905 -5.804 8.337 -4.242 9.9c1.562 1.561 6 -.338 9.9 -4.244c3.905 -3.905 5.804 -8.337 4.242 -9.9" /><path d="M4.929 4.929c-1.562 1.562 .337 6 4.243 9.9c3.905 3.905 8.337 5.804 9.9 4.242c1.561 -1.562 -.338 -6 -4.244 -9.9c-3.905 -3.905 -8.337 -5.804 -9.9 -4.242" /></svg>,
        lecciones: "3 lecciones",
        dificultad: "Intermedio",
        classdificultad: "Inter",
        href: "Fisica"
      },
      {
        id: 5,
        nombreMateria: "Quimica 1",
        svgIcon: <svg width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.1 15h11.8" /><path d="M14 3v7.342a6 6 0 0 1 1.318 10.658h-6.635a6 6 0 0 1 1.317 -10.66v-7.34h4z" /><path d="M9 3h6" /></svg>,
        lecciones: "3 lecciones",
        dificultad: "Intermedio",
        classdificultad: "Inter",
        href: "Quimica"
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
                <li><p>Ciencias</p></li>
            </ul>
        </nav>
        </header>
        <section className='ListaMaterias'>
        {cardPropsCiencias.map((card)=>(
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
