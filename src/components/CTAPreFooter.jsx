import { whatsappUrl } from '../config/estudio.js'
import Icono from './Icono.jsx'
import './CTAPreFooter.css'

export default function CTAPreFooter() {
  return (
    <section className="prefooter" aria-labelledby="prefooter-titulo">
      <div className="contenedor prefooter__inner">
        <div>
          <p className="prefooter__eyebrow">Orientación legal oportuna</p>
          <h2 className="prefooter__titulo" id="prefooter-titulo">
            Dé el primer paso con <em>respaldo profesional.</em>
          </h2>
        </div>

        <div className="prefooter__accion">
          <p>Conversemos sobre su situación y evaluemos el camino más adecuado.</p>
          <a
            className="btn prefooter__btn"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icono nombre="whatsapp" tam={18} />
            Agendar una consulta
          </a>
        </div>
      </div>
    </section>
  )
}
