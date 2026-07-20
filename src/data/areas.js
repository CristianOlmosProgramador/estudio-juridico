/**
 * ÁREAS DE PRÁCTICA
 * Las 12 áreas publicadas en abogadoslitoralcentral.cl.
 * `icono` referencia una clave del set SVG propio (src/components/Icono.jsx).
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
    nombre: 'Derecho Laboral',
    categoria: 'personas',
    icono: 'balanza',
    descripcion:
      'Despidos injustificados, autodespido, tutela de derechos fundamentales y cobro de prestaciones. Representamos al trabajador y a la empresa.',
  },
  {
    id: 'familia',
    numero: '02',
    nombre: 'Derecho Familiar',
    categoria: 'personas',
    icono: 'personas',
    descripcion:
      'Divorcios, pensión de alimentos, cuidado personal y régimen comunicacional. Acompañamiento discreto en procesos sensibles.',
  },
  {
    id: 'inmobiliario',
    numero: '03',
    nombre: 'Derecho Inmobiliario',
    categoria: 'patrimonio',
    icono: 'edificio',
    descripcion:
      'Compraventas, estudios de título, saneamiento de propiedad y regularización. Clave en una zona de segunda vivienda.',
  },
  {
    id: 'litigios',
    numero: '04',
    nombre: 'Litigios',
    categoria: 'litigios',
    icono: 'martillo',
    descripcion:
      'Representación en juicio con una estrategia definida desde el primer día, no improvisada en la audiencia.',
  },
  {
    id: 'cobranza',
    numero: '05',
    nombre: 'Cobranza Judicial y Extrajudicial',
    categoria: 'patrimonio',
    icono: 'documento',
    descripcion:
      'Recuperación de deudas por gestión directa o juicio ejecutivo, con seguimiento hasta el pago efectivo.',
  },
  {
    id: 'contratos',
    numero: '06',
    nombre: 'Redacción de Contratos',
    categoria: 'patrimonio',
    icono: 'pluma',
    descripcion:
      'Contratos, mandatos y finiquitos redactados y revisados. Prevenimos el conflicto antes de que llegue a tribunales.',
  },
  {
    id: 'civil',
    numero: '07',
    nombre: 'Procedimientos Civiles',
    categoria: 'patrimonio',
    icono: 'columna',
    descripcion:
      'Responsabilidad contractual y extracontractual, indemnización de perjuicios, nulidades y arrendamientos.',
  },
  {
    id: 'corporativo',
    numero: '08',
    nombre: 'Derecho Corporativo',
    categoria: 'patrimonio',
    icono: 'maletin',
    descripcion:
      'Constitución y reorganización de sociedades, pactos de accionistas y asesoría legal permanente para empresas.',
  },
  {
    id: 'penal',
    numero: '09',
    nombre: 'Derecho Penal',
    categoria: 'litigios',
    icono: 'escudo',
    descripcion:
      'Defensa en todas las etapas del proceso, desde la primera audiencia hasta el juicio oral. También querellas y representación de víctimas.',
  },
  {
    id: 'transito',
    numero: '10',
    nombre: 'Juzgados de Policía Local',
    categoria: 'litigios',
    icono: 'volante',
    descripcion:
      'Infracciones, accidentes de tránsito y reclamos por Ley del Consumidor ante el juzgado que corresponda.',
  },
  {
    id: 'seguridad-social',
    numero: '11',
    nombre: 'Seguridad Social',
    categoria: 'personas',
    icono: 'escudo',
    descripcion:
      'Pensiones de invalidez y sobrevivencia, licencias médicas rechazadas y gestiones ante AFP e isapres.',
  },
  {
    id: 'mediacion',
    numero: '12',
    nombre: 'Mediación y Solución de Conflictos',
    categoria: 'litigios',
    icono: 'personas',
    descripcion:
      'Salidas negociadas cuando conviene más un acuerdo rápido que un juicio largo. Le diremos cuándo es el caso.',
  },
]

export default areas
