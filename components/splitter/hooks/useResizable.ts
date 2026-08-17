import { computed, type Ref } from 'vue'
import type { ShowCollapsibleIconMode } from '../types'
import type { ItemType, ResizableInfo } from '../types'

type Option = { collapsible: boolean; showCollapsibleIcon: ShowCollapsibleIconMode }

function getShowCollapsibleIcon(prev: Option, next: Option): ShowCollapsibleIconMode {
  if (prev.collapsible && next.collapsible) {
    if (prev.showCollapsibleIcon === true || next.showCollapsibleIcon === true) {
      return true
    }
    if (prev.showCollapsibleIcon === 'auto' || next.showCollapsibleIcon === 'auto') {
      return 'auto'
    }
    return false
  }
  if (prev.collapsible) {
    return prev.showCollapsibleIcon
  }
  if (next.collapsible) {
    return next.showCollapsibleIcon
  }
  return false
}

export default function useResizable(
  items: Ref<ItemType[]>,
  pxSizes: Ref<number[]>,
  reverse: boolean,
  containerSize?: Ref<number | undefined>,
) {
  return computed(() => {
    const resizeInfos: ResizableInfo[] = []
    // 容器尺寸无效时（初始化阶段），不进行折叠状态检查
    const hasValidSize = containerSize && containerSize.value && containerSize.value > 0

    for (let i = 0; i < items.value.length - 1; i += 1) {
      const prevItem = items.value[i]
      const nextItem = items.value[i + 1]
      const prevSize = pxSizes.value[i]
      const nextSize = pxSizes.value[i + 1]

      const { resizable: prevResizable = true, min: prevMin, collapsible: prevCollapsible } = prevItem
      const { resizable: nextResizable = true, min: nextMin, collapsible: nextCollapsible } = nextItem

      const mergedResizable =
        // 两者都需要可调整大小
        prevResizable &&
        nextResizable &&
        // 只有在容器尺寸有效时才检查折叠状态，避免初始化时误判
        (!hasValidSize ||
          // 前一个未折叠且限制最小尺寸
          ((prevSize !== 0 || !prevMin) &&
            // 下一个未折叠且限制最小尺寸
            (nextSize !== 0 || !nextMin)))

      const prevEndCollapsible = !!prevCollapsible.end && prevSize > 0
      const nextStartExpandable = !!nextCollapsible.start && nextSize === 0 && prevSize > 0
      const startCollapsible = prevEndCollapsible || nextStartExpandable

      const nextStartCollapsible = !!nextCollapsible.start && nextSize > 0
      const prevEndExpandable = !!prevCollapsible.end && prevSize === 0 && nextSize > 0
      const endCollapsible = nextStartCollapsible || prevEndExpandable

      const showStartCollapsibleIcon = getShowCollapsibleIcon(
        {
          collapsible: prevEndCollapsible,
          showCollapsibleIcon: prevCollapsible.showCollapsibleIcon,
        },
        {
          collapsible: nextStartExpandable,
          showCollapsibleIcon: nextCollapsible.showCollapsibleIcon,
        },
      )

      const showEndCollapsibleIcon = getShowCollapsibleIcon(
        {
          collapsible: nextStartCollapsible,
          showCollapsibleIcon: nextCollapsible.showCollapsibleIcon,
        },
        {
          collapsible: prevEndExpandable,
          showCollapsibleIcon: prevCollapsible.showCollapsibleIcon,
        },
      )

      resizeInfos[i] = {
        resizable: mergedResizable,
        startCollapsible: !!(reverse ? endCollapsible : startCollapsible),
        endCollapsible: !!(reverse ? startCollapsible : endCollapsible),
        showStartCollapsibleIcon: reverse ? showEndCollapsibleIcon : showStartCollapsibleIcon,
        showEndCollapsibleIcon: reverse ? showStartCollapsibleIcon : showEndCollapsibleIcon,
      }
    }

    return resizeInfos
  })
}
