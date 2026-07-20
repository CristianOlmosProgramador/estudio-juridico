/**
 * Genera las variantes WebP del hero a partir de public/hero.png
 *
 *   npm run img
 *
 * Al cambiar la foto del hero: reemplaza public/hero.png y vuelve a correrlo.
 * El PNG original no se publica (está en .gitignore) porque pesa demasiado
 * para servirlo: solo se suben las variantes WebP.
 */
import sharp from 'sharp'

const ORIGEN = 'public/hero.png'

// Escritorio ancho / escritorio / tablet / móvil
const ANCHOS = [1920, 1440, 1000, 640]

const { width: anchoOriginal } = await sharp(ORIGEN).metadata()

for (const ancho of ANCHOS) {
  // Nunca ampliamos: si el original es menor, se recorta la lista.
  if (ancho > anchoOriginal && ANCHOS.some((a) => a <= anchoOriginal && a >= ancho)) continue

  const objetivo = Math.min(ancho, anchoOriginal)
  const destino = `public/hero-${objetivo}.webp`

  const info = await sharp(ORIGEN)
    .resize({ width: objetivo, withoutEnlargement: true })
    .webp({ quality: 74 })
    .toFile(destino)

  const kb = (info.size / 1024).toFixed(0)
  // El nombre lleva el ancho real: el srcset depende de que coincidan.
  console.log(`${destino}  ${info.width}x${info.height}  ${kb} kB`)
}
