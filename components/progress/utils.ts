import type { ProgressGradient, ProgressProps, SuccessProps } from './types'

/** 裁剪百分比到 [0, 100] */
export function validProgress(progress?: number): number {
  if (!progress || progress < 0) return 0
  if (progress > 100) return 100
  return progress
}

/** 取 success.percent（与 AntD 行为一致：仅当 success 中显式存在 percent 字段才返回） */
export function getSuccessPercent({ success }: Pick<ProgressProps, 'success'>): number | undefined {
  if (success && 'percent' in success) {
    return success.percent
  }
  return undefined
}

/**
 * 解析 size 到 [width, height]
 * - line: width=-1 表示自适应宽度（外层 100%）
 * - step: width 是「单段宽度 * steps」总宽
 * - circle/dashboard: 固定宽高
 */
export function getSize(
  size: ProgressProps['size'],
  type: 'line' | 'circle' | 'dashboard' | 'step',
  extra?: { steps?: number; strokeWidth?: number }
): [number, number] {
  let width = -1
  let height = -1

  if (type === 'step') {
    const steps = extra!.steps!
    const strokeWidth = extra!.strokeWidth!
    if (typeof size === 'string' || typeof size === 'undefined') {
      width = size === 'small' ? 2 : 14
      height = strokeWidth ?? 8
    } else if (typeof size === 'number') {
      ;[width, height] = [size, size]
    } else if (Array.isArray(size)) {
      width = (size[0] as number) ?? 14
      height = (size[1] as number) ?? 8
    } else {
      width = size.width ?? 14
      height = size.height ?? 8
    }
    width *= steps
  } else if (type === 'line') {
    const strokeWidth = extra?.strokeWidth
    if (typeof size === 'string' || typeof size === 'undefined') {
      height = strokeWidth || (size === 'small' ? 6 : 8)
    } else if (typeof size === 'number') {
      ;[width, height] = [size, size]
    } else if (Array.isArray(size)) {
      width = (size[0] as number) ?? -1
      height = (size[1] as number) ?? 8
    } else {
      width = size.width ?? -1
      height = size.height ?? 8
    }
  } else {
    // circle / dashboard
    if (typeof size === 'string' || typeof size === 'undefined') {
      ;[width, height] = size === 'small' ? [60, 60] : [120, 120]
    } else if (typeof size === 'number') {
      ;[width, height] = [size, size]
    } else if (Array.isArray(size)) {
      const v = (size[0] ?? size[1] ?? 120) as number
      ;[width, height] = [v, v]
    } else {
      const v = size.width ?? size.height ?? 120
      ;[width, height] = [v, v]
    }
  }

  return [width, height]
}

/** 渐变对象 → background CSS string（按 % key 排序，from/to 兜底） */
export function handleGradient(strokeColor: ProgressGradient, isRTL = false): string {
  const { from, to, direction = isRTL ? 'to left' : 'to right', ...rest } = strokeColor
  const restEntries = Object.entries(rest).filter(([, v]) => typeof v === 'string')

  if (restEntries.length > 0) {
    const stops = restEntries
      .map(([key, value]) => ({ key: parseFloat(String(key).replace(/%/g, '')), value }))
      .filter(item => !isNaN(item.key))
      .sort((a, b) => a.key - b.key)
      .map(({ key, value }) => `${value} ${key}%`)
      .join(', ')
    return `linear-gradient(${direction}, ${stops})`
  }

  return `linear-gradient(${direction}, ${from || '#1677ff'}, ${to || '#1677ff'})`
}

/**
 * 颜色亮度检测：用于 inner 模式下根据底色翻转文字颜色。
 * 支持 #rgb/#rrggbb/#rrggbbaa/rgb()/rgba()；其它（如渐变）按非亮色处理。
 */
export function isLightColor(color?: string): boolean {
  if (!color) return false
  let r = 0
  let g = 0
  let b = 0
  const hex = color.trim()

  if (hex.startsWith('#')) {
    let value = hex.slice(1)
    if (value.length === 3) {
      value = value
        .split('')
        .map(c => c + c)
        .join('')
    }
    if (value.length >= 6) {
      r = parseInt(value.slice(0, 2), 16)
      g = parseInt(value.slice(2, 4), 16)
      b = parseInt(value.slice(4, 6), 16)
    } else {
      return false
    }
  } else {
    const m = hex.match(/rgba?\(([^)]+)\)/i)
    if (!m) return false
    const parts = m[1].split(',').map(s => parseFloat(s.trim()))
    if (parts.length < 3 || parts.some(n => isNaN(n))) return false
    ;[r, g, b] = parts as [number, number, number]
  }

  // YIQ luminance, AntD 阈值 ~178
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 178
}

/** 取 strokeColor 第一个值（对象/数组都拿 string） */
export function pickFirstColor(strokeColor?: string | string[] | ProgressGradient): string | undefined {
  if (!strokeColor) return undefined
  if (typeof strokeColor === 'string') return strokeColor
  if (Array.isArray(strokeColor)) return strokeColor[0]
  // gradient: 取 from / 第一个 % key
  if ('from' in strokeColor && typeof strokeColor.from === 'string') return strokeColor.from
  const stops = Object.entries(strokeColor).filter(
    ([k, v]) => k !== 'direction' && typeof v === 'string'
  )
  if (stops.length > 0) return stops[0][1] as string
  return undefined
}

/**
 * 解析圆形/仪表盘渐变的 stop 列表。
 * - `from`/`to` 兜底为 0%/100%
 * - 百分比 key（如 `0%`、`50%`）按数值升序排序
 * 返回供 <stop offset stop-color> 使用的数组。
 */
export function getCircleGradientStops(
  gradient: ProgressGradient
): { offset: string; color: string }[] {
  const { from, to, direction: _direction, ...rest } = gradient as Record<string, string | undefined>
  const restEntries = Object.entries(rest).filter(([, v]) => typeof v === 'string') as [string, string][]

  if (restEntries.length > 0) {
    return restEntries
      .map(([key, color]) => ({
        offsetNum: parseFloat(String(key).replace(/%/g, '')),
        color,
      }))
      .filter(item => !isNaN(item.offsetNum))
      .sort((a, b) => a.offsetNum - b.offsetNum)
      .map(({ offsetNum, color }) => ({ offset: `${offsetNum}%`, color }))
  }

  // from/to 兜底
  return [
    { offset: '0%', color: from || '#1677ff' },
    { offset: '100%', color: to || '#1677ff' },
  ]
}

/** circle 默认 success 描边色 */
export const PRESET_SUCCESS_COLOR = '#52c41a'

/** 获取 success 段（圆形 / 线形）实际颜色 */
export function getSuccessStrokeColor(success?: SuccessProps): string {
  return success?.strokeColor || PRESET_SUCCESS_COLOR
}
