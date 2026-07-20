/**
 * FICHA DEL ESTUDIO
 * Único archivo que hay que tocar para re-skinnear el sitio a otro cliente
 * (junto con src/styles/variables.css y src/data/*.js).
 */

export const estudio = {
  nombre: 'Estudio Jurídico [Nombre]',
  nombreCorto: '[Nombre]',
  tagline: 'Defensa rigurosa. Estrategia a la medida.',

  // --- Copy del hero (editable sin tocar componentes) ---
  hero: {
    eyebrow: 'Abogados · Región de Valparaíso',
    // El titular se corta en dos para controlar el quiebre de línea.
    titulo: 'La defensa de sus derechos',
    tituloAcento: 'exige rigor, no promesas.',
    bajada:
      'Representación legal de excelencia para personas y empresas. Analizamos su caso con franqueza y definimos una estrategia clara desde la primera reunión.',
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
