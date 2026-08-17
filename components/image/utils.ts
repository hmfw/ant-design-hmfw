import type { VNode } from 'vue'
import { isVNode } from 'vue'
import { renderContent as renderContentUtil } from '../_utils/renderContent'
import type { ImageContent, PreviewConfig, MaskType, TransformType } from './types'

// ---- 预览配置默认值 ----
export const DEFAULT_SCALE_STEP = 0.5
export const DEFAULT_MIN_SCALE = 1
export const DEFAULT_MAX_SCALE = 50

// ---- helpers ----
/**
 * @deprecated 使用公共的 renderContent 工具
 * 为保持向后兼容，重新导出公共方法
 */
export function renderContent(content?: ImageContent): VNode | null {
  const result = renderContentUtil(content)
  // 只返回 VNode 类型
  if (isVNode(result)) {
    return result
  }
  // 如果是数组，返回第一个 VNode
  if (Array.isArray(result)) {
    const firstVNode = result.find((item) => isVNode(item))
    return firstVNode || null
  }
  return null
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
