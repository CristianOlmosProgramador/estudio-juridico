import { useState } from 'react'
import { estudio, whatsappUrl } from '../config/estudio.js'
import { areas } from '../data/areas.js'
import { useReveal } from '../hooks/useReveal.js'
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

  /**
   * MAQUETA FUNCIONAL: valida y abre WhatsApp con el caso ya redactado.
   *
   * Para conectar a un backend real, reemplaza el bloque marcado por un fetch:
   *
   *   await fetch('https://api.web3forms.com/submit', {
   *     method: 'POST',
   *     headers: { 'Content-Type': 'application/json' },
   *     body: JSON.stringify({ access_key: 'TU_KEY_WEB3FORMS', ...datos }),
   *   })
   *
   * (Web3Forms entrega el mensaje al correo del estudio sin servidor propio.)
   */
  const enviar = (e) => {
    e.preventDefault()
    const err = validar()
    setErrores(err)
    if (Object.keys(err).length) return

    // ---- inicio del bloque reemplazable ----
    const texto =
      `Hola, quiero agendar una consulta legal.\n\n` +
      `Nombre: ${datos.nombre}\n` +
      `Email: ${datos.email}\n` +
      `Teléfono: ${datos.telefono}\n` +
      `Materia: ${datos.materia}\n\n` +
      `${datos.mensaje}`
    window.open(whatsappUrl(texto), '_blank', 'noopener,noreferrer')
    // ---- fin del bloque reemplazable ----

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
          <p className="eyebrow eyebrow--claro">
            <span className="eyebrow__num">06</span>
            <span>Consulta</span>
            <span className="eyebrow__linea" />
          </p>

          <h2 className="titulo-seccion cta__titulo">
            La primera conversación <em className="acento-serif">no tiene costo</em>.
          </h2>

          <p className="cta__bajada">
            Cuéntenos su situación y le diremos con franqueza si podemos ayudarle. Respondemos
            dentro del mismo día hábil.
          </p>

          <ul className="cta__datos">
            <li>
              <span className="cta__dato-et">Teléfono</span>
              <a className="enlace-dorado" href={`tel:+${estudio.telefonoWhatsapp}`}>
                {estudio.telefonoVisible}
              </a>
            </li>
            <li>
              <span className="cta__dato-et">Correo</span>
              <a className="enlace-dorado" href={`mailto:${estudio.email}`}>
                {estudio.email}
              </a>
            </li>
            <li>
              <span className="cta__dato-et">Atención</span>
              <span>{estudio.horario}</span>
            </li>
          </ul>

          <a
            className="btn btn--contorno cta__wsp"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribir por WhatsApp
          </a>
        </div>

        <form className="cta__form" onSubmit={enviar} noValidate>
          <div className="campo">
            <label className="campo__label" htmlFor="nombre">Nombre completo</label>
            <input type="text" autoComplete="name" {...campo('nombre')} />
            {errores.nombre && <p className="campo__error" id="nombre-error">{errores.nombre}</p>}
          </div>

          <div className="campo__fila">
            <div className="campo">
              <label className="campo__label" htmlFor="email">Correo electrónico</label>
              <input type="email" autoComplete="email" {...campo('email')} />
              {errores.email && <p className="campo__error" id="email-error">{errores.email}</p>}
            </div>

            <div className="campo">
              <label className="campo__label" htmlFor="telefono">Teléfono</label>
              <input type="tel" autoComplete="tel" placeholder="+56 9 …" {...campo('telefono')} />
              {errores.telefono && <p className="campo__error" id="telefono-error">{errores.telefono}</p>}
            </div>
          </div>

          <div className="campo">
            <label className="campo__label" htmlFor="materia">Materia</label>
            <select {...campo('materia')}>
              <option value="">Seleccione…</option>
              {areas.map((a) => (
                <option key={a.id} value={a.nombre}>{a.nombre}</option>
              ))}
              <option value="Otra materia">Otra materia</option>
            </select>
            {errores.materia && <p className="campo__error" id="materia-error">{errores.materia}</p>}
          </div>

          <div className="campo">
            <label className="campo__label" htmlFor="mensaje">Describa brevemente su caso</label>
            <textarea rows="4" {...campo('mensaje')} />
            {errores.mensaje && <p className="campo__error" id="mensaje-error">{errores.mensaje}</p>}
          </div>

          <button type="submit" className="btn btn--primario cta__submit">
            Solicitar consulta
          </button>

          <p className="cta__legal">
            La información entregada es confidencial y está protegida por el secreto profesional.
          </p>
        </form>
      </div>
    </section>
  )
}
