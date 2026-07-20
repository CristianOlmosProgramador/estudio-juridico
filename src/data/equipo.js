/**
 * EQUIPO / SOCIOS
 *
 * `foto`: ruta en /public/equipo/ (ej. '/equipo/socia-1.jpg') o URL.
 *   Se renderiza en blanco y negro. Con `foto: ''` se muestra un monograma
 *   sobrio con las iniciales — así el demo nunca queda con fotos rotas.
 *   Al cargar las fotos reales del cliente, solo completa la ruta.
 *
 * Deja el array vacío para ocultar la sección completa.
 */

export const equipo = [
  {
    id: 'socio-1',
    nombre: 'María Fernanda Rojas',
    cargo: 'Socia fundadora',
    especialidad: 'Derecho Laboral y Seguridad Social',
    foto: '', // '/equipo/socia-1.jpg'
    trayectoria:
      'Quince años litigando en tribunales laborales de la Región de Valparaíso. Magíster en Derecho del Trabajo, Universidad de Chile.',
  },
  {
    id: 'socio-2',
    nombre: 'Ignacio Vergara Soto',
    cargo: 'Socio',
    especialidad: 'Derecho Penal y Litigios',
    foto: '', // '/equipo/socio-2.jpg'
    trayectoria:
      'Ex Defensor Penal Público. Más de 300 juicios orales, con especialización en delitos económicos.',
  },
  {
    id: 'socio-3',
    nombre: 'Carolina Ibáñez Pinto',
    cargo: 'Abogada asociada',
    especialidad: 'Familia e Inmobiliario',
    foto: '', // '/equipo/socia-3.jpg'
    trayectoria:
      'Mediadora certificada. Conduce procesos de familia con un enfoque de acuerdo antes que de confrontación.',
  },
]

export default equipo
