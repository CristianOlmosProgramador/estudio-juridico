import { useMemo, useState } from 'react'
import { areas, categorias } from '../data/areas.js'
import { useReveal } from '../hooks/useReveal.js'
import AreaCard from './AreaCard.jsx'
import './AreasPractica.css'

export default function AreasPractica() {
  const [filtro, setFiltro] = useState('todas')
  const refCabecera = useReveal()
  const refGrid = useReveal({ grupo: true })

  const visibles = useMemo(
    () => (filtro === 'todas' ? areas : areas.filter((a) => a.categoria === filtro)),
    [filtro]
  )

  return (
    <section className="seccion seccion--linea" id="areas">
      <div className="contenedor">
        <div className="areas__cabecera reveal" ref={refCabecera}>
          <div>
            <p className="eyebrow">
              <span className="eyebrow__num">01</span>
              <span>Áreas de práctica</span>
              <span className="eyebrow__linea" />
            </p>
            <h2 className="titulo-seccion">
              Un ámbito de acción <em className="acento-serif">amplio</em>, con criterio
              especializado.
            </h2>
          </div>
          <p className="areas__intro">
            No abarcamos todo: abarcamos aquello en lo que podemos responder con solvencia.
            Cada materia está a cargo de un abogado con experiencia específica en tribunales.
          </p>
        </div>

        {/* Filtro por categoría */}
        <div className="areas__filtros" role="tablist" aria-label="Filtrar áreas de práctica">
          {categorias.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={filtro === c.id}
              className={`areas__filtro ${filtro === c.id ? 'es-activo' : ''}`}
              onClick={() => setFiltro(c.id)}
            >
              {c.nombre}
            </button>
          ))}
        </div>

        <div className="areas__grid" ref={refGrid}>
          {visibles.map((a) => (
            <AreaCard key={a.id} area={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
