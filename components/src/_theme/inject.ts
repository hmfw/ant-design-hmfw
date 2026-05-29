import type { MapTokens } from './map'

// Token keys whose numeric values are unitless (no px suffix)
const UNITLESS_KEYS = ['lineHeight', 'fontWeight', 'opacity', 'zIndex', 'columns', 'ratio']

function isUnitless(key: string): boolean {
  return UNITLESS_KEYS.some((k) => key.toLowerCase().includes(k.toLowerCase()))
}

function toCssValue(key: string, value: number | string): string {
  if (typeof value === 'number') {
    return isUnitless(key) ? String(value) : `${value}px`
  }
  return value
}

function toKebab(key: string): string {
  return key
    .replace(/XXL/g, '-xxl')
    .replace(/XXS/g, '-xxs')
    .replace(/XL/g, '-xl')
    .replace(/XS/g, '-xs')
    .replace(/SM/g, '-sm')
    .replace(/LG/g, '-lg')
    .replace(/MD/g, '-md')
    .replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`)
    .replace(/--+/g, '-')
    .replace(/^-/, '')
}

export function tokensToCssVars(tokens: MapTokens, prefix = 'hmfw'): string {
  const entries: string[] = []

  for (const [key, value] of Object.entries(tokens)) {
    if (typeof value === 'string' || typeof value === 'number') {
      const cssKey = `--${prefix}-${toKebab(key)}`
      const cssValue = toCssValue(key, value)
      entries.push(`  ${cssKey}: ${cssValue};`)
    }
  }

  return `:root {\n${entries.join('\n')}\n}`
}

export function injectCssVars(tokens: MapTokens, prefix = 'hmfw'): void {
  if (typeof document === 'undefined') return

  const id = `${prefix}-theme-vars`
  let style = document.getElementById(id) as HTMLStyleElement | null
  if (!style) {
    style = document.createElement('style')
    style.id = id
    document.head.appendChild(style)
  }
  style.textContent = tokensToCssVars(tokens, prefix)
}

export function injectScopedCssVars(
  el: HTMLElement,
  tokens: Partial<MapTokens>,
  prefix = 'hmfw',
): void {
  for (const [key, value] of Object.entries(tokens)) {
    if (typeof value === 'string' || typeof value === 'number') {
      const cssKey = `--${prefix}-${toKebab(key)}`
      const cssValue = toCssValue(key, value)
      el.style.setProperty(cssKey, cssValue)
    }
  }
}
