import { useEffect, useState } from 'react'
import { estudio, whatsappUrl } from '../config/estudio.js'
import './Header.css'

const enlaces = [
  { href: '#areas', texto: 'Áreas de práctica' },
  { href: '#estudio', texto: 'El estudio' },
  { href: '#metodologia', texto: 'Metodología' },
  { href: '#equipo', texto: 'Equipo' },
  { href: '#contacto', texto: 'Contacto' },
]

export default function Header() {
  const [compacto, setCompacto] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)

  // El header pasa de transparente sobre el hero a fondo sólido al hacer scroll.
  useEffect(() => {
    const alScroll = () => setCompacto(window.scrollY > 40)
    alScroll()
    window.addEventListener('scroll', alScroll, { passive: true })
    return () => window.removeEventListener('scroll', alScroll)
  }, [])

  // Bloquea el scroll del body con el menú móvil abierto.
  useEffect(() => {
    document.body.style.overflow = menuAbierto ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuAbierto])

  return (
    <header className={`header ${compacto ? 'header--compacto' : ''}`}>
      <div className="header__inner contenedor">
        <a href="#inicio" className="header__logo" onClick={() => setMenuAbierto(false)}>
          <span className="header__logo-marca">{estudio.nombreCorto}</span>
          <span className="header__logo-sub">Estudio Jurídico</span>
        </a>

        <nav className="header__nav" aria-label="Navegación principal">
          {enlaces.map((e) => (
            <a key={e.href} href={e.href} className="header__link enlace-dorado">
              {e.texto}
            </a>
          ))}
        </nav>

        <a
          className="btn btn--contorno header__cta"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Agenda tu consulta
        </a>

        <button
          className="header__burger"
          onClick={() => setMenuAbierto((v) => !v)}
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuAbierto}
        >
          <span className={`header__burger-linea ${menuAbierto ? 'es-x1' : ''}`} />
          <span className={`header__burger-linea ${menuAbierto ? 'es-oculta' : ''}`} />
          <span className={`header__burger-linea ${menuAbierto ? 'es-x2' : ''}`} />
        </button>
      </div>

      {/* Menú móvil a pantalla completa */}
      <div className={`menu-movil ${menuAbierto ? 'menu-movil--abierto' : ''}`}>
        <nav className="menu-movil__nav" aria-label="Navegación móvil">
          {enlaces.map((e, i) => (
            <a
              key={e.href}
              href={e.href}
              className="menu-movil__link"
              style={{ transitionDelay: `${menuAbierto ? 80 + i * 55 : 0}ms` }}
              onClick={() => setMenuAbierto(false)}
            >
              <span className="menu-movil__num">{String(i + 1).padStart(2, '0')}</span>
              {e.texto}
            </a>
          ))}
        </nav>
        <a
          className="btn btn--primario menu-movil__cta"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuAbierto(false)}
        >
          Agenda tu consulta
        </a>
      </div>
    </header>
  )
}
