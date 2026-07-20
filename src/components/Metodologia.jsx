import { pasos } from '../data/metodologia.js'
import { useReveal } from '../hooks/useReveal.js'
import './Metodologia.css'

export default function Metodologia() {
  const refCab = useReveal()
  const refPasos = useReveal({ grupo: true })

  return (
    <section className="seccion metodologia" id="metodologia">
      <div className="contenedor">
        <div className="metodologia__cabecera reveal" ref={refCab}>
          <p className="eyebrow eyebrow--claro">
            <span className="eyebrow__num">03</span>
            <span>Nuestro enfoque</span>
            <span className="eyebrow__linea" />
          </p>
          <h2 className="titulo-seccion metodologia__titulo">
            Cuatro pasos, <em className="acento-serif">sin zonas grises</em>.
          </h2>
          <p className="metodologia__intro">
            Sabrá en qué etapa está su causa y qué viene después. Siempre.
          </p>
        </div>

        <ol className="metodologia__pasos" ref={refPasos}>
          {pasos.map((p) => (
            <li className="paso" key={p.id}>
              <span className="paso__marca" aria-hidden="true" />
              <span className="paso__num">{p.numero}</span>
              <h3 className="paso__nombre">{p.nombre}</h3>
              <p className="paso__desc">{p.descripcion}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
