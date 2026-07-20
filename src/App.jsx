import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Credibilidad from './components/Credibilidad.jsx'
import AreasPractica from './components/AreasPractica.jsx'
import Estudio from './components/Estudio.jsx'
import Metodologia from './components/Metodologia.jsx'
import Equipo from './components/Equipo.jsx'
import Testimonios from './components/Testimonios.jsx'
import CTAConsulta from './components/CTAConsulta.jsx'
import Footer from './components/Footer.jsx'
import WhatsappFloat from './components/WhatsappFloat.jsx'

/** Sitio one-page — Estudio Jurídico. Todo el contenido vive en config/ y data/. */
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Credibilidad />
        <AreasPractica />
        <Estudio />
        <Metodologia />
        <Equipo />
        <Testimonios />
        <CTAConsulta />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}
