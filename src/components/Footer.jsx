import { estudio, whatsappUrl } from '../config/estudio.js'
import Icono from './Icono.jsx'
import Logo from './Logo.jsx'
import './Footer.css'

const enlaces = [
  { href: '#inicio', texto: 'Inicio' },
  { href: '#areas', texto: 'Áreas de práctica' },
  { href: '#estudio', texto: 'El estudio' },
  { href: '#metodologia', texto: 'Metodología' },
  { href: '#equipo', texto: 'Equipo' },
  { href: '#contacto', texto: 'Contacto' },
]

const nombresRedes = { instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook' }
const iconosRedes = { instagram: 'instagram', linkedin: 'linkedin', facebook: 'facebook' }

export default function Footer() {
  const redes = Object.entries(estudio.redes).filter(([, url]) => url)
  const cobertura = estudio.coberturaTerritorial.split(',').map((lugar) => lugar.trim())

  return (
    <footer className="footer">
      <div className="contenedor footer__grid">
        <div className="footer__marca">
          <Logo variante="footer" />
          <p className="footer__tagline">{estudio.tagline}</p>
          <p className="footer__descripcion">
            Representación legal para personas y empresas del Litoral Central, con una
            estrategia clara desde la primera reunión.
          </p>

          <div className="footer__social" aria-label="Canales de contacto y redes sociales">
            <a
              className="footer__social-link"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <Icono nombre="whatsapp" tam={18} />
            </a>
            {redes.map(([clave, url]) => (
              <a
                className="footer__social-link"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={nombresRedes[clave] ?? clave}
                key={clave}
              >
                <Icono nombre={iconosRedes[clave]} tam={18} />
              </a>
            ))}
          </div>
        </div>

        <nav className="footer__col" aria-label="Navegación del pie de página">
          <h2 className="footer__titulo">Navegación</h2>
          <ul className="footer__nav-lista">
            {enlaces.map((enlace) => (
              <li key={enlace.href}>
                <a href={enlace.href}>{enlace.texto}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__titulo">Dónde atendemos</h2>
          <ul className="footer__lista footer__lista--lugares">
            {cobertura.map((lugar) => (
              <li className="footer__item" key={lugar}>
                <Icono className="footer__icono" nombre="ubicacion" tam={17} />
                <span>{lugar}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__contacto">
          <h2 className="footer__titulo">Contacto</h2>
          <ul className="footer__lista">
            <li className="footer__item">
              <Icono className="footer__icono" nombre="ubicacion" tam={18} />
              <address>
                {estudio.direccion}
                <span>{estudio.region}</span>
              </address>
            </li>
            <li className="footer__item">
              <Icono className="footer__icono" nombre="telefono" tam={18} />
              <div>
                <a href={`tel:+${estudio.telefonoWhatsapp}`}>{estudio.telefonoVisible}</a>
                {estudio.telefonoAlternativo && (
                  <a
                    className="footer__dato-secundario"
                    href={`tel:${estudio.telefonoAlternativo.replace(/\s/g, '')}`}
                  >
                    {estudio.telefonoAlternativo}
                  </a>
                )}
              </div>
            </li>
            <li className="footer__item">
              <Icono className="footer__icono" nombre="correo" tam={18} />
              <a href={`mailto:${estudio.email}`}>{estudio.email}</a>
            </li>
            <li className="footer__item">
              <Icono className="footer__icono" nombre="reloj" tam={18} />
              <span>{estudio.horario || 'Atención previa coordinación'}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="contenedor footer__base">
        <div className="footer__base-principal">
          <p>© {new Date().getFullYear()} {estudio.nombre}. Todos los derechos reservados.</p>
          <p>
            Sitio desarrollado por{' '}
            <a href="https://webalpaso.cl" target="_blank" rel="noopener noreferrer">
              WebAlPaso
            </a>
          </p>
        </div>
        <p className="footer__aviso">
          El contenido de este sitio es informativo y no constituye asesoría legal.
        </p>
      </div>
    </footer>
  )
}
