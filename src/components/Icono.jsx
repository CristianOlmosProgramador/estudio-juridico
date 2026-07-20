/**
 * Set de iconos SVG de línea, propio (sin librerías).
 * Trazo fino y uniforme: 1.25px sobre viewBox 24, coherente con las hairlines.
 * Para agregar un área nueva: añade una clave aquí y referénciala en areas.js.
 */

const trazos = {
  balanza: (
    <>
      <path d="M12 3v18M7 21h10M3 8l4-3 4 3M3 8l2 5h4l2-5M13 8l4-3 4 3M13 8l2 5h4l2-5" />
    </>
  ),
  escudo: <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3z" />,
  columna: (
    <>
      <path d="M3 8h18M4 21h16M12 2L3 8M12 2l9 6" />
      <path d="M7 8v13M12 8v13M17 8v13" />
    </>
  ),
  personas: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 5.5a3 3 0 010 5.5M17 14.5c2.4.7 4 2.8 4 5.5" />
    </>
  ),
  edificio: (
    <>
      <path d="M4 21V6l8-4 8 4v15M4 21h16" />
      <path d="M9 21v-5h6v5M8 9h2M14 9h2M8 12.5h2M14 12.5h2" />
    </>
  ),
  maletin: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="1" />
      <path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M3 12h18" />
    </>
  ),
  documento: (
    <>
      <path d="M14 3H7a1 1 0 00-1 1v16a1 1 0 001 1h10a1 1 0 001-1V7l-4-4z" />
      <path d="M14 3v4h4M9 12h6M9 16h4" />
    </>
  ),
  pluma: (
    <>
      <path d="M3 21c0-6 4-11 10-13l5-2-2 5c-2 6-7 10-13 10z" />
      <path d="M3 21l7-7" />
    </>
  ),
  martillo: (
    <>
      <path d="M4 21h9M5 15l6-6M9.5 4.5l6 6M13 8l3-3M8 13l3-3" />
      <path d="M12.5 3.5l4 4M7.5 8.5l4 4" />
      <path d="M17 12l4 4-2 2-4-4" />
    </>
  ),
  volante: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v6M4.5 16.5l5-2.5M19.5 16.5l-5-2.5" />
    </>
  ),
}

export default function Icono({ nombre, tam = 28, className = '' }) {
  const trazo = trazos[nombre]
  if (!trazo) return null

  return (
    <svg
      className={className}
      width={tam}
      height={tam}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {trazo}
    </svg>
  )
}
