import { estudio, whatsappUrl } from '../config/estudio.js'
import './Hero.css'

export default function Hero() {
  const { hero } = estudio

  return (
    <section className={`hero ${hero.imagen ? 'hero--con-imagen' : ''}`} id="inicio">
      <div className="hero__inner contenedor">
        <div className="hero__texto">
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

        {hero.imagen && (
          <figure className="hero__figura">
            {/* Imagen LCP: sin lazy y con prioridad alta */}
            <img
              className="hero__img"
              src={hero.imagen}
              alt={hero.imagenAlt}
              fetchPriority="high"
              decoding="async"
            />
            <span className="hero__marco" aria-hidden="true" />
          </figure>
        )}
      </div>

      <span className="hero__scroll" aria-hidden="true" />
    </section>
  )
}
