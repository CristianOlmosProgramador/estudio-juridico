import { estudio } from '../config/estudio.js'
import { pilares } from '../data/pilares.js'
import { useReveal } from '../hooks/useReveal.js'
import './Estudio.css'

export default function Estudio() {
  const refTexto = useReveal()
  const refLista = useReveal({ grupo: true })

  return (
    <section className="seccion seccion--linea" id="estudio">
      <div className="contenedor estudio__grid">
        <div className="estudio__col-texto reveal" ref={refTexto}>
          <p className="eyebrow">
            <span className="eyebrow__num">02</span>
            <span>El estudio</span>
            <span className="eyebrow__linea" />
          </p>

          <h2 className="titulo-seccion">
            Prestigio construido <em className="acento-serif">causa a causa</em>.
          </h2>

          <p className="bajada">
            Desde {estudio.fundacion} representamos a personas y empresas en {estudio.coberturaTerritorial}.
            No somos un estudio masivo, y esa es una decisión deliberada: tomamos las causas que
            podemos atender con la dedicación que merecen.
          </p>

          {/* Panel tipográfico sobrio en lugar de foto de stock.
              Para usar una imagen real: reemplaza este bloque por
              <img src="/estudio.jpg" alt="…" loading="lazy" className="img-bn" /> */}
          <figure className="estudio__panel">
            <blockquote className="estudio__cita">
              «La confianza de un cliente no se gana con adjetivos, sino con la constancia de
              hacer bien lo que corresponde.»
            </blockquote>
            <figcaption className="estudio__firma">
              {estudio.nombre} · {estudio.comuna}
            </figcaption>
          </figure>
        </div>

        <ul className="estudio__pilares" ref={refLista}>
          {pilares.map((p) => (
            <li className="pilar" key={p.id}>
              <span className="pilar__num">{p.numero}</span>
              <div>
                <h3 className="pilar__nombre">{p.nombre}</h3>
                <p className="pilar__desc">{p.descripcion}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
