import { estudio } from '../config/estudio.js'
import { useReveal } from '../hooks/useReveal.js'
import './Credibilidad.css'

export default function Credibilidad() {
  const ref = useReveal({ grupo: true })

  return (
    <section className="credibilidad" aria-label="Cifras del estudio">
      <div className="contenedor">
        <dl className="credibilidad__grid" ref={ref}>
          {estudio.cifras.map((c) => (
            <div className="cifra" key={c.etiqueta}>
              <dt className="solo-lectores">{c.etiqueta}</dt>
              <dd className="cifra__valor">
                {c.valor}
                <span className="cifra__sufijo">{c.sufijo}</span>
              </dd>
              <p className="cifra__etiqueta" aria-hidden="true">{c.etiqueta}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
