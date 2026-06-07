// HSB ↔ RGB ↔ Hex color utilities

export interface HSB {
  h: number
  s: number
  b: number
}
export interface RGB {
  r: number
  g: number
  b: number
}

export function hexToRgb(hex: string): RGB {
  const clean = hex.replace('#', '')
  const full =
    clean.length === 3
      ? clean
          .split('')
          .map((c) => c + c)
          .join('')
      : clean
  const n = parseInt(full, 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}

export function rgbToHex({ r, g, b }: RGB): string {
  return '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')
}

export function rgbToHsb({ r, g, b }: RGB): HSB {
  const rn = r / 255,
    gn = g / 255,
    bn = b / 255
  const max = Math.max(rn, gn, bn),
    min = Math.min(rn, gn, bn)
  const diff = max - min
  let h = 0
  if (diff !== 0) {
    if (max === rn) h = ((gn - bn) / diff) % 6
    else if (max === gn) h = (bn - rn) / diff + 2
    else h = (rn - gn) / diff + 4
    h = Math.round(h * 60)
    if (h < 0) h += 360
  }
  const s = max === 0 ? 0 : Math.round((diff / max) * 100)
  const bv = Math.round(max * 100)
  return { h, s, b: bv }
}

export function hsbToRgb({ h, s, b }: HSB): RGB {
  const sn = s / 100,
    bn = b / 100
  const c = bn * sn
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = bn - c
  let r = 0,
    g = 0,
    bv = 0
  if (h < 60) {
    r = c
    g = x
  } else if (h < 120) {
    r = x
    g = c
  } else if (h < 180) {
    g = c
    bv = x
  } else if (h < 240) {
    g = x
    bv = c
  } else if (h < 300) {
    r = x
    bv = c
  } else {
    r = c
    bv = x
  }
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((bv + m) * 255),
  }
}

export function hsbToHex(hsb: HSB): string {
  return rgbToHex(hsbToRgb(hsb))
}

export function hexToHsb(hex: string): HSB {
  return rgbToHsb(hexToRgb(hex))
}

export function isValidHex(hex: string): boolean {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex)
}
