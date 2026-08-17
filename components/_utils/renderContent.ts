import type { VNode, VNodeChild } from 'vue'

/**
 * 渲染内容的通用类型：可以是静态内容或渲染函数
 */
export type RenderableContent = VNode | VNode[] | VNodeChild | string | number | (() => VNodeChild) | null | undefined

/**
 * 渲染内容辅助函数
 * 优先使用 slot，如果 slot 无内容则使用 content prop
 *
 * @param content - 内容 prop（静态内容或渲染函数）
 * @param slot - Vue slot 函数（可选）
 * @returns 渲染结果，如果都没有则返回 null
 *
 * @example
 * // 带 slot 的场景（Modal/Drawer）
 * const titleNode = renderContent(props.title, slots.title)
 * if (titleNode == null || titleNode === '') return null
 *
 * // 不带 slot 的场景（Image/Tour/Message）
 * const iconNode = renderContent(props.icon)
 */
export function renderContent(content: RenderableContent, slot?: () => VNode[] | undefined): VNodeChild {
  // 优先使用 slot
  if (slot) {
    const s = slot()
    if (s && s.length) return s
  }
  // 空值检查
  if (content == null || content === '') return null
  // 渲染函数
  if (typeof content === 'function') return (content as () => VNodeChild)()
  // 静态内容
  return content as VNodeChild
}
