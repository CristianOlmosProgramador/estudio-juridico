import { estudio, whatsappUrl } from '../config/estudio.js'
import './Hero.css'

export default function Hero() {
  const { hero } = estudio

  return (
    <section className="hero" id="inicio">
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

      <span className="hero__scroll" aria-hidden="true" />
    </section>
  )
}
