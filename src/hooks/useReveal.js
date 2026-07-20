import { useEffect, useRef } from 'react'

/**
 * Scroll reveal con Intersection Observer nativo.
 *
 * Uso:
 *   const ref = useReveal()
 *   <section ref={ref} className="reveal">…</section>
 *
 * Para escalonar hijos, pasa { grupo: true }: el hook marca cada hijo con
 * .reveal y un --i incremental que la clase .reveal-grupo convierte en delay.
 */
export function useReveal({ grupo = false, umbral = 0.15, margen = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Sin soporte de IO o con motion reducido: mostrar todo de inmediato.
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!('IntersectionObserver' in window) || sinMovimiento) {
      el.classList.add('visible')
      if (grupo) Array.from(el.children).forEach((h) => h.classList.add('visible'))
      return
    }

    if (grupo) {
      el.classList.add('reveal-grupo')
      Array.from(el.children).forEach((hijo, i) => {
        hijo.classList.add('reveal')
        hijo.style.setProperty('--i', i)
      })
    }

    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return
          entrada.target.classList.add('visible')
          if (grupo) {
            Array.from(entrada.target.children).forEach((h) => h.classList.add('visible'))
          }
          observer.unobserve(entrada.target) // una sola vez
        })
      },
      { threshold: umbral, rootMargin: margen }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [grupo, umbral, margen])

  return ref
}

export default useReveal
