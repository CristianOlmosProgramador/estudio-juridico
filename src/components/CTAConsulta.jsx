import { useState } from 'react'
import { estudio, whatsappUrl } from '../config/estudio.js'
import { areas } from '../data/areas.js'
import { useReveal } from '../hooks/useReveal.js'
import Icono from './Icono.jsx'
import './CTAConsulta.css'

const vacio = { nombre: '', email: '', telefono: '', materia: '', mensaje: '' }

export default function CTAConsulta() {
  const [datos, setDatos] = useState(vacio)
  const [errores, setErrores] = useState({})
  const refCab = useReveal()

  const cambiar = (e) => {
    const { name, value } = e.target
    setDatos((d) => ({ ...d, [name]: value }))
    if (errores[name]) setErrores((x) => ({ ...x, [name]: null }))
  }

  const validar = () => {
    const err = {}
    if (datos.nombre.trim().length < 3) err.nombre = 'Indique su nombre completo.'
    if (!/^\S+@\S+\.\S+$/.test(datos.email)) err.email = 'Revise el correo electrónico.'
    if (datos.telefono.replace(/\D/g, '').length < 8) err.telefono = 'Revise el teléfono.'
    if (!datos.materia) err.materia = 'Seleccione una materia.'
    if (datos.mensaje.trim().length < 10) err.mensaje = 'Describa brevemente su caso.'
    return err
  }

  const enviar = (e) => {
    e.preventDefault()
    const err = validar()
    setErrores(err)
    if (Object.keys(err).length) return

    const texto =
      `Hola, quiero agendar una consulta legal.\n\n` +
      `Nombre: ${datos.nombre}\n` +
      `Email: ${datos.email}\n` +
      `Teléfono: ${datos.telefono}\n` +
      `Materia: ${datos.materia}\n\n` +
      `${datos.mensaje}`
    window.open(whatsappUrl(texto), '_blank', 'noopener,noreferrer')
    setDatos(vacio)
  }

  const campo = (name) => ({
    id: name,
    name,
    value: datos[name],
    onChange: cambiar,
    'aria-invalid': errores[name] ? 'true' : undefined,
    'aria-describedby': errores[name] ? `${name}-error` : undefined,
    className: `campo__input ${errores[name] ? 'es-error' : ''}`,
  })

  return (
    <section className="seccion cta" id="contacto">
      <div className="contenedor cta__grid">
        <div className="cta__intro reveal" ref={refCab}>
          <p className="cta__eyebrow">
            <span aria-hidden="true" />
            Contacto
          </p>

          <h2 className="titulo-seccion cta__titulo">
            Cuéntenos sobre <em className="acento-serif">su caso</em>
          </h2>

          <p className="cta__bajada">
            Déjenos sus datos y le responderemos con una orientación clara, confidencial y
            sin compromisos. La primera conversación no tiene costo.
          </p>

          <div className="cta__contactos">
            <a
              className="cta__contacto-card"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="cta__contacto-icono">
                <Icono nombre="whatsapp" tam={21} />
              </span>
              <span>
                <strong>WhatsApp</strong>
                <small>{estudio.telefonoVisible}</small>
              </span>
            </a>

            <a className="cta__contacto-card" href={`mailto:${estudio.email}`}>
              <span className="cta__contacto-icono">
                <Icono nombre="correo" tam={21} />
              </span>
              <span>
                <strong>Correo</strong>
                <small>{estudio.email}</small>
              </span>
            </a>

            <div className="cta__contacto-card">
              <span className="cta__contacto-icono">
                <Icono nombre="ubicacion" tam={21} />
              </span>
              <span>
                <strong>Ubicación</strong>
                <small>{estudio.comuna} · {estudio.region}</small>
              </span>
            </div>
          </div>

          <p className="cta__respuesta">
            <Icono nombre="reloj" tam={17} />
            Respondemos dentro del mismo día hábil.
          </p>
        </div>

        <form className="cta__form" onSubmit={enviar} noValidate>
          <div className="campo__fila">
            <div className="campo">
              <label className="campo__label" htmlFor="nombre">Nombre completo *</label>
              <input type="text" autoComplete="name" placeholder="Su nombre" {...campo('nombre')} />
              {errores.nombre && <p className="campo__error" id="nombre-error">{errores.nombre}</p>}
            </div>

            <div className="campo">
              <label className="campo__label" htmlFor="email">Correo electrónico *</label>
              <input type="email" autoComplete="email" placeholder="correo@ejemplo.cl" {...campo('email')} />
              {errores.email && <p className="campo__error" id="email-error">{errores.email}</p>}
            </div>
          </div>

          <div className="campo__fila">
            <div className="campo">
              <label className="campo__label" htmlFor="telefono">Teléfono *</label>
              <input type="tel" autoComplete="tel" placeholder="+56 9 1234 5678" {...campo('telefono')} />
              {errores.telefono && <p className="campo__error" id="telefono-error">{errores.telefono}</p>}
            </div>

            <div className="campo">
              <label className="campo__label" htmlFor="materia">Materia *</label>
              <select {...campo('materia')}>
                <option value="">Seleccione una materia</option>
                {areas.map((a) => (
                  <option key={a.id} value={a.nombre}>{a.nombre}</option>
                ))}
                <option value="Otra materia">Otra materia</option>
              </select>
              {errores.materia && <p className="campo__error" id="materia-error">{errores.materia}</p>}
            </div>
          </div>

          <div className="campo">
            <label className="campo__label" htmlFor="mensaje">Mensaje *</label>
            <textarea
              rows="5"
              placeholder="Cuéntenos brevemente qué necesita resolver…"
              {...campo('mensaje')}
            />
            {errores.mensaje && <p className="campo__error" id="mensaje-error">{errores.mensaje}</p>}
          </div>

          <button type="submit" className="btn cta__submit">
            <Icono nombre="pluma" tam={17} />
            Solicitar consulta
          </button>

          <p className="cta__legal">
            Al enviar, abriremos WhatsApp con los datos de su consulta. La información es
            confidencial y se utiliza únicamente para responderle.
          </p>
        </form>
      </div>
    </section>
  )
}
