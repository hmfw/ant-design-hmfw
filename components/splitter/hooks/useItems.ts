import { ref, type Ref, type VNode } from 'vue'
import { isPlainObject } from '../../_utils/is'
import type { PanelProps, ItemType } from '../types'

function getCollapsible(collapsible?: PanelProps['collapsible']): ItemType['collapsible'] {
  if (isPlainObject(collapsible)) {
    return {
      ...collapsible,
      showCollapsibleIcon:
        (collapsible as any).showCollapsibleIcon === undefined ? 'auto' : (collapsible as any).showCollapsibleIcon,
    }
  }

  const mergedCollapsible = !!collapsible
  return {
    start: mergedCollapsible,
    end: mergedCollapsible,
    showCollapsibleIcon: 'auto',
  }
}

/**
 * 将 children 转换为 items
 * updateItems 供 children 变化时复用同一映射逻辑，避免归一化规则漂移
 * 注意：slot 调用由调用方在 render 函数内完成（Vue 依赖跟踪要求），此处仅做纯映射
 */
export default function useItems(): {
  items: Ref<ItemType[]>
  updateItems: (vnodes: VNode[]) => void
} {
  const items = ref<ItemType[]>([])

  const updateItems = (vnodes: VNode[]) => {
    items.value = vnodes
      // 只保留组件 VNode（Splitter.Panel），过滤文本/原生元素
      .filter((item) => item && typeof item === 'object' && item.type)
      .map((node) => {
        const props = (node.props || {}) as PanelProps & { class?: string }
        const { collapsible, className, class: classProp, ...restProps } = props
        return {
          ...restProps,
          // 归一化类名：JSX 使用 className、模板使用 class，统一落到 className 字段
          className: className ?? classProp,
          collapsible: getCollapsible(collapsible),
        }
      })
  }

  return { items, updateItems }
}
