import { testimonios } from '../data/testimonios.js'
import { useReveal } from '../hooks/useReveal.js'
import './Testimonios.css'

export default function Testimonios() {
  const refCab = useReveal()
  const refGrid = useReveal({ grupo: true })

  if (!testimonios.length) return null

  return (
    <section className="seccion seccion--linea" id="testimonios">
      <div className="contenedor">
        <p className="eyebrow reveal" ref={refCab}>
          <span className="eyebrow__num">05</span>
          <span>Testimonios</span>
          <span className="eyebrow__linea" />
        </p>

        <div className="testimonios__grid" ref={refGrid}>
          {testimonios.map((t) => (
            <figure className="testimonio" key={t.id}>
              <blockquote className="testimonio__cita">{t.cita}</blockquote>
              <figcaption className="testimonio__pie">
                <span className="testimonio__autor">{t.autor}</span>
                <span className="testimonio__contexto">{t.contexto}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
