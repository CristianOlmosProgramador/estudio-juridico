import Icono from './Icono.jsx'
import './AreaCard.css'

export default function AreaCard({ area }) {
  return (
    <article className="area">
      {/* Numeral fantasma: recurso editorial, decorativo */}
      <span className="area__ghost" aria-hidden="true">{area.numero}</span>

      <span className="area__icono-caja" aria-hidden="true">
        <Icono nombre={area.icono} tam={30} className="area__icono" />
      </span>

      <h3 className="area__titulo">{area.nombre}</h3>
      <p className="area__desc">{area.descripcion}</p>

      <span className="area__filete" aria-hidden="true" />
    </article>
  )
}
