import { estudio } from '../config/estudio.js'
import { areas } from '../data/areas.js'
import Logo from './Logo.jsx'
import './Footer.css'

const nombresRedes = { instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook' }

export default function Footer() {
  const redes = Object.entries(estudio.redes).filter(([, url]) => url)

  return (
    <footer className="footer">
      <div className="contenedor footer__grid">
        <div className="footer__marca">
          <Logo variante="footer" />
          <p className="footer__tagline">{estudio.tagline}</p>
        </div>

        <div className="footer__col">
          <h2 className="footer__titulo">Contacto</h2>
          <ul className="footer__lista">
            <li>{estudio.direccion}</li>
            <li>{estudio.region}</li>
            <li>
              <a className="enlace-dorado" href={`tel:+${estudio.telefonoWhatsapp}`}>
                {estudio.telefonoVisible}
              </a>
            </li>
            {estudio.telefonoAlternativo && (
              <li>
                <a
                  className="enlace-dorado"
                  href={`tel:${estudio.telefonoAlternativo.replace(/\s/g, '')}`}
                >
                  {estudio.telefonoAlternativo}
                </a>
              </li>
            )}
            <li>
              <a className="enlace-dorado" href={`mailto:${estudio.email}`}>{estudio.email}</a>
            </li>
            {estudio.horario && <li>{estudio.horario}</li>}
          </ul>
        </div>

        <div className="footer__col">
          <h2 className="footer__titulo">Áreas</h2>
          <ul className="footer__lista">
            {areas.slice(0, 6).map((a) => (
              <li key={a.id}>
                <a className="enlace-dorado" href="#areas">{a.nombre}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h2 className="footer__titulo">Cobertura</h2>
          <ul className="footer__lista">
            <li>{estudio.coberturaTerritorial}</li>
          </ul>

          {redes.length > 0 && (
            <>
              <h2 className="footer__titulo footer__titulo--sep">Redes</h2>
              <ul className="footer__lista">
                {redes.map(([clave, url]) => (
                  <li key={clave}>
                    <a
                      className="enlace-dorado"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {nombresRedes[clave] ?? clave}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      <div className="contenedor footer__base">
        <p>© {new Date().getFullYear()} {estudio.nombre}. Todos los derechos reservados.</p>
        <p className="footer__aviso">
          El contenido de este sitio es informativo y no constituye asesoría legal.
        </p>
      </div>
    </footer>
  )
}
