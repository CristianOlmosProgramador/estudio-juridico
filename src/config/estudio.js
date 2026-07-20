/**
 * FICHA DEL ESTUDIO
 * Único archivo que hay que tocar para re-skinnear el sitio a otro cliente
 * (junto con src/styles/variables.css y src/data/*.js).
 */

export const estudio = {
  nombre: 'Estudio Jurídico [Nombre]',
  nombreCorto: '[Nombre]',
  tagline: 'Defensa rigurosa. Estrategia a la medida.',

  /**
   * Logo del estudio. Deja '' para mostrar el nombre tipográfico (wordmark).
   * Sube el archivo a /public/logo.png (idealmente PNG con fondo transparente,
   * ~400px de alto). Si la ruta falla, vuelve solo al wordmark.
   */
  logo: '/abogados-litoral-central-logo-150x150.webp',

  // --- Copy del hero (editable sin tocar componentes) ---
  hero: {
    eyebrow: 'Abogados · Región de Valparaíso',
    // El titular se corta en dos para controlar el quiebre de línea.
    titulo: 'La defensa de sus derechos',
    tituloAcento: 'exige rigor, no promesas.',
    bajada:
      'Representación legal de excelencia para personas y empresas. Analizamos su caso con franqueza y definimos una estrategia clara desde la primera reunión.',

    /**
     * Foto del hero, a sangre completa detrás del titular.
     * Pon `imagen: null` para volver al hero navy sólido, sin foto.
     *
     * Para cambiarla: reemplaza public/hero.png (apaisada, 1600px de ancho
     * como mínimo) y corre `npm run img`, que regenera las variantes WebP.
     *
     * `foco` es el object-position que se usa en móvil, donde el recorte es
     * agresivo: apunta a dónde están las personas para que no queden fuera.
     */
    imagen: {
      src: '/hero-1440.webp',
      srcSet:
        '/hero-640.webp 640w, /hero-1000.webp 1000w, /hero-1440.webp 1440w, /hero-1672.webp 1672w',
      alt: 'Equipo de abogados caminando por la playa del litoral central',
      foco: '72% 50%',
    },
  },

  // --- Contacto ---
  telefonoWhatsapp: '56949455852', // solo dígitos, con código de país
  telefonoVisible: '+56 9 4945 5852',
  mensajeWhatsapp: 'Hola, quiero agendar una consulta legal.',
  email: 'contacto@estudiojuridico.cl',

  // --- Ubicación ---
  direccion: 'Av. Libertad 1348, oficina 902, Viña del Mar',
  comuna: 'Viña del Mar',
  region: 'Región de Valparaíso',
  horario: 'Lunes a viernes · 09:00 a 18:30 h',
  coberturaTerritorial: 'Región de Valparaíso y Región Metropolitana',

  // --- Cifras de credibilidad (barra bajo el hero) ---
  fundacion: 2009,
  cifras: [
    { valor: '15', sufijo: '+', etiqueta: 'Años de ejercicio' },
    { valor: '900', sufijo: '+', etiqueta: 'Causas representadas' },
    { valor: '10', sufijo: '', etiqueta: 'Áreas de práctica' },
    { valor: '2', sufijo: '', etiqueta: 'Regiones de cobertura' },
  ],

  // --- Redes (deja vacío el que no aplique: no se renderiza) ---
  redes: {
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
    facebook: '',
  },
}

/** URL de WhatsApp con mensaje pre-cargado. */
export const whatsappUrl = (mensaje = estudio.mensajeWhatsapp) =>
  `https://wa.me/${estudio.telefonoWhatsapp}?text=${encodeURIComponent(mensaje)}`

export default estudio
