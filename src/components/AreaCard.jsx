import Icono from './Icono.jsx'
import './AreaCard.css'

export default function AreaCard({ area }) {
  return (
    <article className="area">
      <header className="area__head">
        <span className="area__num">{area.numero}</span>
        <Icono nombre={area.icono} className="area__icono" />
      </header>

      <h3 className="area__titulo">{area.nombre}</h3>
      <p className="area__desc">{area.descripcion}</p>

      {/* Filete dorado que se dibuja al hover */}
      <span className="area__filete" aria-hidden="true" />
    </article>
  )
}
