import '../styles/App.css'
import Header from '../components/Header'
import Footer from '../components/Footer,'
import Card from '../components/Card'

export default function App() {

  const cardProps = [
    {
      id: 1,
      nombreMateria: "Matematicas",
      svgIcon: <svg width="80" height="80" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 10v-7l-2 2" /><path d="M6 16a2 2 0 1 1 4 0c0 .591 -.601 1.46 -1 2l-3 3h4" /><path d="M15 14a2 2 0 1 0 2 -2a2 2 0 1 0 -2 -2" /><path d="M6.5 10h3" /></svg>,
      materias: "6 materias",
      href: "Matematicas"
    },
    {
      id: 2,
      nombreMateria: "Ciencias",
      svgIcon: <svg width="80" height="80" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" /><path d="M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" /><path d="M12 20l0 -10" /></svg>,
      materias: "5 materias",
      href: "Ciencias"
    },
    {
      id: 5,
      nombreMateria: "Español",
      svgIcon: <svg width="80" height="80" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 16v-6a2 2 0 1 1 4 0v6" /><path d="M3 13h4" /><path d="M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1" /><path d="M20.732 12a2 2 0 0 0 -3.732 1v1a2 2 0 0 0 3.726 1.01" /></svg>,
      materias: "5 materias",
      href: "Español"
    },
  ]

  return (
    <div className='APP'>
      <Header />
      <main>
        <section className='ListaMaterias'>
          {cardProps.map((card)=>(
            <Card
              key={card.id}
              {...card}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}