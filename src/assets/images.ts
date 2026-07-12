// Central image manifest. Swap a photo here (or replace the file in
// _raw/ and re-run `npm run assets`) to update it everywhere at once.
import logoWhite from './generated/logo-white.webp'
import logoGold from './generated/logo-gold.webp'
import emblemWhite from './generated/emblem-white.webp'
import emblemGold from './generated/emblem-gold.webp'

import interiorSalon from './generated/interior-salon.webp'
import roomTreatment from './generated/room-treatment.webp'
import team1 from './generated/team-1.webp'
import team2 from './generated/team-2.webp'

import artNoir from './generated/art-noir.webp'
import artChampagne from './generated/art-champagne.webp'
import artGoldArc from './generated/art-gold-arc.webp'

export const LOGO = { white: logoWhite, gold: logoGold }
export const EMBLEM = { white: emblemWhite, gold: emblemGold }

// Hero images live in public/media/ (stable paths) so index.html can
// preload the LCP image — see index.html + src/components/Hero.tsx.
export const PHOTO = {
  interiorSalon,
  roomTreatment,
  team1,
  team2,
}

export const ART = {
  noir: artNoir,
  champagne: artChampagne,
  goldArc: artGoldArc,
}
