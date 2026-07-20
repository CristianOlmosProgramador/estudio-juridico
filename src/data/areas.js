/**
 * ÁREAS DE PRÁCTICA
 * `icono` referencia una clave del set SVG propio (src/components/Icono.jsx).
 * `categoria` alimenta el filtro de la grilla.
 * Descripciones: 1–2 frases. Nunca párrafos largos.
 */

export const categorias = [
  { id: 'todas', nombre: 'Todas' },
  { id: 'personas', nombre: 'Personas y familia' },
  { id: 'patrimonio', nombre: 'Patrimonio y empresa' },
  { id: 'litigios', nombre: 'Litigios y defensa' },
]

export const areas = [
  {
    id: 'laboral',
    numero: '01',
    nombre: 'Derecho Laboral y Seguridad Social',
    categoria: 'personas',
    icono: 'balanza',
    descripcion:
      'Despidos injustificados, autodespido, tutela de derechos fundamentales y cobro de prestaciones. Representamos tanto al trabajador como a la empresa.',
  },
  {
    id: 'penal',
    numero: '02',
    nombre: 'Derecho Penal',
    categoria: 'litigios',
    icono: 'escudo',
    descripcion:
      'Defensa penal en todas las etapas del proceso, desde la primera audiencia hasta el juicio oral. También querellas y representación de víctimas.',
  },
  {
    id: 'civil',
    numero: '03',
    nombre: 'Derecho Civil',
    categoria: 'patrimonio',
    icono: 'columna',
    descripcion:
      'Responsabilidad contractual y extracontractual, indemnización de perjuicios, nulidades y juicios de arrendamiento.',
  },
  {
    id: 'familia',
    numero: '04',
    nombre: 'Derecho de Familia',
    categoria: 'personas',
    icono: 'personas',
    descripcion:
      'Divorcios, pensión de alimentos, cuidado personal y régimen comunicacional. Acompañamiento discreto en procesos sensibles.',
  },
  {
    id: 'inmobiliario',
    numero: '05',
    nombre: 'Derecho Inmobiliario',
    categoria: 'patrimonio',
    icono: 'edificio',
    descripcion:
      'Compraventas, estudios de título, saneamiento de propiedad y regularización de posesión efectiva.',
  },
  {
    id: 'corporativo',
    numero: '06',
    nombre: 'Derecho Corporativo y Societario',
    categoria: 'patrimonio',
    icono: 'maletin',
    descripcion:
      'Constitución y reorganización de sociedades, pactos de accionistas y asesoría legal permanente para empresas.',
  },
  {
    id: 'cobranza',
    numero: '07',
    nombre: 'Cobranza Judicial y Extrajudicial',
    categoria: 'patrimonio',
    icono: 'documento',
    descripcion:
      'Recuperación de deudas mediante gestión directa o juicio ejecutivo, con seguimiento hasta el pago efectivo.',
  },
  {
    id: 'contratos',
    numero: '08',
    nombre: 'Contratos y Documentos Legales',
    categoria: 'patrimonio',
    icono: 'pluma',
    descripcion:
      'Redacción y revisión de contratos, mandatos y finiquitos. Prevenimos el conflicto antes de que llegue a tribunales.',
  },
  {
    id: 'litigios',
    numero: '09',
    nombre: 'Litigios y Solución de Conflictos',
    categoria: 'litigios',
    icono: 'martillo',
    descripcion:
      'Representación en juicio y en instancias de mediación o arbitraje, con una estrategia definida desde el primer día.',
  },
  {
    id: 'transito',
    numero: '10',
    nombre: 'Juzgados de Policía Local y Tránsito',
    categoria: 'litigios',
    icono: 'volante',
    descripcion:
      'Defensa por infracciones, accidentes de tránsito y reclamos ante la Ley del Consumidor.',
  },
]

export default areas
