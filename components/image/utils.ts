import type { VNode } from 'vue'
import type { ImageContent, PreviewConfig, MaskType, TransformType } from './types'

// ---- body scroll lock (引用计数，与 Modal 同策略) ----
let lockCount = 0
let cachedOverflow = ''
export function lockScroll() {
  if (typeof document === 'undefined') return
  if (lockCount === 0) {
    cachedOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  }
  lockCount += 1
}
export function unlockScroll() {
  if (typeof document === 'undefined') return
  lockCount = Math.max(0, lockCount - 1)
  if (lockCount === 0) document.body.style.overflow = cachedOverflow
}

// ---- 预览配置默认值 ----
export const DEFAULT_SCALE_STEP = 0.5
export const DEFAULT_MIN_SCALE = 1
export const DEFAULT_MAX_SCALE = 50

// ---- helpers ----
export function renderContent(content?: ImageContent): VNode | null {
  if (content == null) return null
  return typeof content === 'function' ? content() : content
}

/** 把 preview prop（boolean | PreviewConfig）规范成 config 或 null（禁用） */
export function normalizePreview(preview: boolean | PreviewConfig | undefined): PreviewConfig | null {
  if (typeof preview === 'boolean') return preview ? {} : null
  return preview ?? {}
}

/** 解析 mask 配置：返回 { enabled, closable, coverNode } */
export function resolveMask(cfg: PreviewConfig): {
  enabled: boolean
  closable: boolean
  coverNode: VNode | null
} {
  const coverNode: VNode | null = renderContent(cfg.cover)
  const maskObj: boolean | MaskType | undefined = cfg.mask
  let enabled = true
  let closable = true
  if (typeof maskObj === 'boolean') {
    enabled = maskObj
  } else if (maskObj && typeof maskObj === 'object') {
    if (maskObj.enabled !== undefined) enabled = maskObj.enabled
    if (maskObj.closable !== undefined) closable = maskObj.closable
  }
  return { enabled, closable, coverNode }
}

export const DEFAULT_TRANSFORM = (): TransformType => ({
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  flipX: false,
  flipY: false,
})
