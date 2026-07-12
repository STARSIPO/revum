// Optimize brand + photo assets and generate favicons / OG image / art tiles.
// Run:  npm run assets
// Inputs:  _raw/*
// Outputs: src/assets/generated/*  (imported by the app)
//          public/*                (favicons, og-image — static paths)
import sharp from 'sharp'
import { mkdir, access } from 'node:fs/promises'
import { constants } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const RAW = resolve(__dirname, '../_raw')
const GEN = resolve(__dirname, '../src/assets/generated')
const PUB = resolve(__dirname, '../public')
const PUBMEDIA = resolve(PUB, 'media')

const exists = async (p) => { try { await access(p, constants.F_OK); return true } catch { return false } }
const inp = (n) => resolve(RAW, n)
const gen = (n) => resolve(GEN, n)
const pub = (n) => resolve(PUB, n)

// Brand palette
const NOIR = '#0E0E0E'

async function logo(name, out, width) {
  const src = inp(name)
  if (!(await exists(src))) return console.warn(`  ! missing ${name}`)
  const base = sharp(src).trim({ threshold: 12 }).resize({ width, withoutEnlargement: true })
  await base.clone().webp({ quality: 92 }).toFile(gen(`${out}.webp`))
  await base.clone().png({ compressionLevel: 9 }).toFile(gen(`${out}.png`))
  console.log(`  logo  ${out}`)
}

async function emblem(name, out, size = 320) {
  const src = inp(name)
  if (!(await exists(src))) return console.warn(`  ! missing ${name}`)
  const base = sharp(src).trim({ threshold: 12 }).resize({ width: size, height: size, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  await base.clone().webp({ quality: 92 }).toFile(gen(`${out}.webp`))
  await base.clone().png({ compressionLevel: 9 }).toFile(gen(`${out}.png`))
  console.log(`  emblem ${out}`)
}

async function photo(name, out, sizes, { fit = 'cover', height } = {}) {
  const src = inp(name)
  if (!(await exists(src))) return console.warn(`  ! missing ${name}`)
  for (const w of sizes) {
    const resizeOpts = height ? { width: w, height: Math.round(height * (w / sizes[0])), fit } : { width: w, fit }
    const suffix = sizes.length > 1 ? `-${w}` : ''
    await sharp(src).resize(resizeOpts).webp({ quality: 80 }).toFile(gen(`${out}${suffix}.webp`))
  }
  // jpg fallback at the largest size
  const wMax = sizes[sizes.length - 1]
  const resizeOpts = height ? { width: wMax, height: Math.round(height * (wMax / sizes[0])), fit } : { width: wMax, fit }
  await sharp(src).resize(resizeOpts).jpeg({ quality: 82, mozjpeg: true }).toFile(gen(`${out}.jpg`))
  console.log(`  photo ${out} [${sizes.join(', ')}]`)
}

// Hero → public/media/ with stable paths so index.html can <link rel=preload>
// a responsive set (the LCP image). Widths: 800 / 1400 / 2200 + jpg fallback.
async function heroImage() {
  const src = inp('photo-room-treatment.jpg')
  if (!(await exists(src))) return console.warn('  ! missing hero source')
  await mkdir(PUBMEDIA, { recursive: true })
  for (const w of [800, 1400, 2200]) {
    await sharp(src).resize({ width: w }).webp({ quality: 80 }).toFile(resolve(PUBMEDIA, `hero-${w}.webp`))
  }
  await sharp(src).resize({ width: 1600 }).jpeg({ quality: 82, mozjpeg: true }).toFile(resolve(PUBMEDIA, 'hero.jpg'))
  console.log('  hero -> public/media/ [800, 1400, 2200] + jpg')
}

async function favicons() {
  const src = inp('emblem-gold.png')
  if (!(await exists(src))) return console.warn('  ! missing emblem-gold.png for favicons')
  const S = 512
  const emblemBuf = await sharp(src).trim({ threshold: 12 })
    .resize({ width: 340, height: 340, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer()
  const mask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}"><rect width="${S}" height="${S}" rx="112" fill="#ffffff"/></svg>`
  )
  const composedBuf = await sharp({ create: { width: S, height: S, channels: 4, background: NOIR } })
    .composite([
      { input: emblemBuf, gravity: 'center' },
      { input: mask, blend: 'dest-in' },
    ])
    .png()
    .toBuffer()
  await sharp(composedBuf).resize(512).toFile(pub('favicon-512.png'))
  await sharp(composedBuf).resize(180).toFile(pub('apple-touch-icon.png'))
  await sharp(composedBuf).resize(32).toFile(pub('favicon-32.png'))
  await sharp(composedBuf).resize(16).toFile(pub('favicon-16.png'))
  console.log('  favicons -> public/')
}

async function ogImage() {
  const src = inp('logo-full-gold.png')
  const W = 1200, H = 630
  const bg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
      <defs>
        <radialGradient id="g" cx="50%" cy="42%" r="70%">
          <stop offset="0%" stop-color="#1a1712"/>
          <stop offset="55%" stop-color="#111111"/>
          <stop offset="100%" stop-color="#080808"/>
        </radialGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#g)"/>
      <rect x="40" y="40" width="${W - 80}" height="${H - 80}" fill="none" stroke="#B89455" stroke-opacity="0.5" stroke-width="1.5"/>
    </svg>`
  )
  const layers = [{ input: bg, top: 0, left: 0 }]
  if (await exists(src)) {
    const logo = await sharp(src).trim({ threshold: 12 }).resize({ width: 560 }).png().toBuffer()
    const meta = await sharp(logo).metadata()
    layers.push({ input: logo, top: Math.round((H - (meta.height || 300)) / 2), left: Math.round((W - 560) / 2) })
  }
  await sharp({ create: { width: W, height: H, channels: 4, background: NOIR } })
    .composite(layers).jpeg({ quality: 86, mozjpeg: true }).toFile(pub('og-image.jpg'))
  console.log('  og-image -> public/')
}

// On-brand abstract art tiles (SVG -> webp). Face-free, palette-locked.
async function artTiles() {
  const tiles = {
    'art-noir': `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500">
      <defs><radialGradient id="r" cx="30%" cy="25%" r="90%">
        <stop offset="0%" stop-color="#1c1a16"/><stop offset="45%" stop-color="#121212"/><stop offset="100%" stop-color="#070707"/>
      </radialGradient></defs>
      <rect width="1200" height="1500" fill="url(#r)"/>
      <g fill="none" stroke="#B89455" stroke-opacity="0.16">
        ${Array.from({ length: 9 }, (_, i) => `<circle cx="300" cy="360" r="${140 + i * 120}" stroke-width="1"/>`).join('')}
      </g>
    </svg>`,
    'art-champagne': `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500">
      <defs><linearGradient id="l" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#F7F4EE"/><stop offset="55%" stop-color="#EFE9DE"/><stop offset="100%" stop-color="#E4DAC6"/>
      </linearGradient></defs>
      <rect width="1200" height="1500" fill="url(#l)"/>
      <g fill="none" stroke="#B89455" stroke-opacity="0.5">
        ${Array.from({ length: 7 }, (_, i) => `<path d="M ${-100 + i * 40} 1500 Q 600 ${700 - i * 60} 1300 ${200 + i * 30}" stroke-width="1"/>`).join('')}
      </g>
    </svg>`,
    'art-gold-arc': `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#141414"/><stop offset="100%" stop-color="#0b0b0b"/></linearGradient>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#80652F"/><stop offset="50%" stop-color="#D4BC88"/><stop offset="100%" stop-color="#B89455"/></linearGradient></defs>
      <rect width="1200" height="900" fill="url(#g)"/>
      <g fill="none" stroke="url(#gold)" stroke-opacity="0.55">
        ${Array.from({ length: 5 }, (_, i) => `<ellipse cx="600" cy="450" rx="${520 - i * 70}" ry="${320 - i * 45}" stroke-width="1"/>`).join('')}
      </g>
    </svg>`,
  }
  for (const [name, svg] of Object.entries(tiles)) {
    await sharp(Buffer.from(svg)).webp({ quality: 86 }).toFile(gen(`${name}.webp`))
    console.log(`  art   ${name}`)
  }
}

async function run() {
  await mkdir(GEN, { recursive: true })
  await mkdir(PUB, { recursive: true })

  console.log('Logos:')
  await logo('logo-full-white.png', 'logo-white', 760)
  await logo('logo-full-black.png', 'logo-black', 760)
  await logo('logo-full-gold.png', 'logo-gold', 760)

  console.log('Emblems:')
  await emblem('emblem-white.png', 'emblem-white', 360)
  await emblem('emblem-gold.png', 'emblem-gold', 360)
  await emblem('emblem-black.png', 'emblem-black', 360)

  console.log('Photos:')
  await heroImage()
  await photo('photo-interior-salon.jpg', 'interior-salon', [1500], { fit: 'cover' })
  await photo('photo-room-treatment.jpg', 'room-treatment', [1200], { fit: 'cover' })
  await photo('photo-specialist-1.png', 'team-1', [900], { fit: 'cover' })
  await photo('photo-specialist-2.png', 'team-2', [900], { fit: 'cover' })

  console.log('Art tiles:')
  await artTiles()

  console.log('Icons:')
  await favicons()
  await ogImage()

  console.log('\nDone.')
}

run().catch((e) => { console.error(e); process.exit(1) })
