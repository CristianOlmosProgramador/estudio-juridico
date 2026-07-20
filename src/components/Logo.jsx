import { useState } from 'react'
import { estudio } from '../config/estudio.js'
import './Logo.css'

/**
 * Logo del estudio.
 * Si estudio.logo está vacío —o el archivo no existe todavía— cae al
 * wordmark tipográfico, de modo que el sitio nunca muestra una imagen rota.
 */
export default function Logo({ variante = 'header' }) {
  const [falla, setFalla] = useState(false)
  const mostrarImagen = estudio.logo && !falla

  return (
    <span className={`logo logo--${variante}`}>
      {mostrarImagen ? (
        <img
          className="logo__img"
          src={estudio.logo}
          alt={estudio.nombre}
          onError={() => setFalla(true)}
        />
      ) : (
        <span className="logo__wordmark">
          <span className="logo__marca">{estudio.nombreCorto}</span>
          <span className="logo__sub">Estudio Jurídico</span>
        </span>
      )}
    </span>
  )
}
