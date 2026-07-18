import { inject, onMounted, onBeforeUnmount, ref, type Ref } from 'vue'

interface WatermarkContext {
  add: (ele: HTMLElement) => void
  remove: (ele: HTMLElement) => void
}

export const WatermarkContextKey = Symbol('WatermarkContext')

/**
 * usePanelRef - 用于 Modal/Drawer 等弹出组件集成 Watermark
 *
 * @param panelSelector - 面板容器的 CSS 选择器（可选）
 * @returns ref 回调函数，绑定到组件的根元素
 *
 * @example
 * const panelRef = usePanelRef('.hmfw-modal-container')
 * <div :ref="panelRef">...</div>
 */
export function usePanelRef(panelSelector?: string): (ele: HTMLElement | null) => void {
  const watermark = inject<WatermarkContext | null>(WatermarkContextKey, null)
  const panelEleRef: Ref<HTMLElement | null> = ref(null)

  const panelRef = (ele: HTMLElement | null) => {
    if (ele) {
      // 如果指定了选择器，查找匹配的子元素；否则使用元素本身
      const innerContentEle = panelSelector ? ele.querySelector<HTMLElement>(panelSelector) : ele
      if (innerContentEle && watermark) {
        watermark.add(innerContentEle)
        panelEleRef.value = innerContentEle
      }
    } else {
      // 元素卸载时移除水印
      if (panelEleRef.value && watermark) {
        watermark.remove(panelEleRef.value)
        panelEleRef.value = null
      }
    }
  }

  return panelRef
}
