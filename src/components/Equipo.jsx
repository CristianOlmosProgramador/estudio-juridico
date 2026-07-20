import { useState } from 'react'
import { equipo } from '../data/equipo.js'
import { useReveal } from '../hooks/useReveal.js'
import './Equipo.css'

/** Iniciales para el retrato de respaldo. */
const iniciales = (nombre) =>
  nombre
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')

function Retrato({ persona }) {
  const [falla, setFalla] = useState(false)

  // Si la foto no existe todavía (demo), mostramos un monograma sobrio
  // en vez de una imagen rota. Al cargar /public/equipo/*.jpg desaparece.
  if (falla || !persona.foto) {
    return (
      <div className="retrato retrato--monograma" aria-hidden="true">
        <span>{iniciales(persona.nombre)}</span>
      </div>
    )
  }

  return (
    <img
      className="retrato img-bn"
      src={persona.foto}
      alt={`${persona.nombre}, ${persona.cargo}`}
      loading="lazy"
      onError={() => setFalla(true)}
    />
  )
}

export default function Equipo() {
  const refCab = useReveal()
  const refGrid = useReveal({ grupo: true })

  if (!equipo.length) return null

  return (
    <section className="seccion seccion--linea" id="equipo">
      <div className="contenedor">
        <div className="equipo__cabecera reveal" ref={refCab}>
          <p className="eyebrow">
            <span className="eyebrow__num">04</span>
            <span>Equipo</span>
            <span className="eyebrow__linea" />
          </p>
          <h2 className="titulo-seccion">
            Quién <em className="acento-serif">llevará</em> su causa.
          </h2>
        </div>

        <div className="equipo__grid" ref={refGrid}>
          {equipo.map((p) => (
            <article className="abogado" key={p.id}>
              <div className="abogado__foto-wrap">
                <Retrato persona={p} />
              </div>
              <p className="abogado__cargo">{p.cargo}</p>
              <h3 className="abogado__nombre">{p.nombre}</h3>
              <p className="abogado__especialidad">{p.especialidad}</p>
              <p className="abogado__trayectoria">{p.trayectoria}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
