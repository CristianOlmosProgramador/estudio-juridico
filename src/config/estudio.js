/**
 * FICHA DEL ESTUDIO
 * Único archivo que hay que tocar para re-skinnear el sitio a otro cliente
 * (junto con src/styles/variables.css y src/data/*.js).
 *
 * Datos tomados de abogadoslitoralcentral.cl.
 * Los marcados con POR CONFIRMAR no aparecen en ese sitio: hay que
 * verificarlos con el estudio antes de publicar.
 */

export const estudio = {
  nombre: 'Abogados en el Litoral Central',
  nombreCorto: 'Litoral Central',
  tagline: 'Defensa rigurosa. Estrategia a la medida.',

  /**
   * Logo del estudio. Deja '' para mostrar el nombre tipográfico (wordmark).
   * El archivo actual no tiene canal alfa, por eso se recorta en círculo.
   */
  logo: '/logo-blanco-transparente.png',

  // --- Copy del hero (editable sin tocar componentes) ---
  hero: {
    eyebrow: 'Abogados · Litoral Central',
    // El titular se corta en dos para controlar el quiebre de línea.
    titulo: 'Tu Estudio Jurídico',
    tituloAcento: 'de Confianza',
    bajada:
      'En Abogados en el Litoral Central, cada caso recibe una atención personalizada y profesional. Entregamos soluciones legales integrales con transparencia, ética y dedicación en Valparaíso, Viña del Mar, Concón y Quintero.',

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
  telefonoWhatsapp: '56933380223', // solo dígitos, con código de país
  telefonoVisible: '+56 9 3338 0223',
  telefonoAlternativo: '+56 9 5017 3896',
  mensajeWhatsapp: 'Hola, quiero agendar una consulta legal.',
  email: 'contacta@abogadoslitoralcentral.cl',

  // --- Ubicación ---
  direccion: 'El Boldo 334, Of. 37 · Centro Comercial Espacio Algarrobo',
  comuna: 'Algarrobo',
  region: 'Región de Valparaíso',
  horario: '', // POR CONFIRMAR: no publicado. Vacío = no se muestra.
  coberturaTerritorial: 'Litoral Central, Valparaíso, Viña del Mar, Concón y Quintero',

  // --- Cifras de credibilidad (barra bajo el hero) ---
  fundacion: null, // POR CONFIRMAR: el sitio dice "años de experiencia", sin cifra
  cifras: [
    // POR CONFIRMAR con el estudio antes de publicar.
    { valor: '12', sufijo: '', etiqueta: 'Áreas de práctica' },
    { valor: '5', sufijo: '', etiqueta: 'Comunas de cobertura' },
    { valor: '24', sufijo: 'h', etiqueta: 'Respuesta a consultas' },
  ],

  // --- Redes (deja vacío el que no aplique: no se renderiza) ---
  redes: {
    instagram: '',
    linkedin: '',
    facebook: 'https://www.facebook.com/profile.php?id=100085628260286',
  },
}

/** URL de WhatsApp con mensaje pre-cargado. */
export const whatsappUrl = (mensaje = estudio.mensajeWhatsapp) =>
  `https://wa.me/${estudio.telefonoWhatsapp}?text=${encodeURIComponent(mensaje)}`

export default estudio
