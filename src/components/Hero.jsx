import { estudio, whatsappUrl } from '../config/estudio.js'
import Credibilidad from './Credibilidad.jsx'
import './Hero.css'

export default function Hero() {
  const { hero } = estudio
  const img = hero.imagen

  return (
    <section className={`hero ${img ? 'hero--con-imagen' : ''}`} id="inicio">
      {img && (
        <div className="hero__fondo" style={{ '--foco': img.foco }}>
          {/* Imagen LCP: sin lazy, con prioridad alta y srcset por ancho */}
          <img
            className="hero__img"
            src={img.src}
            srcSet={img.srcSet}
            sizes="100vw"
            alt={img.alt}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      )}

      <div className="hero__inner contenedor">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-linea" />
          {hero.eyebrow}
        </p>

        <h1 className="hero__titulo">
          {hero.titulo}
          <br />
          <em className="hero__titulo-acento">{hero.tituloAcento}</em>
        </h1>

        <p className="hero__bajada">{hero.bajada}</p>

        <div className="hero__acciones">
          <a
            className="btn btn--primario"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agenda tu consulta
          </a>
          <a className="hero__link-areas enlace-dorado" href="#areas">
            Ver áreas de práctica
          </a>
        </div>
      </div>

      <Credibilidad />

      <span className="hero__scroll" aria-hidden="true" />
    </section>
  )
}
