import { computed } from 'vue'

export type ItemHeightData = [key: string | number, height: number, column?: number]

export type ItemPositions = Map<
  string | number,
  {
    column: number
    top: number
  }
>

/**
 * 自动排列瀑布流项目
 * 按照顺序获取稳定的位置，而不是动态调整下一个项目的高度
 */
export default function usePositions(
  itemHeights: () => ItemHeightData[],
  columnCount: () => number,
  verticalGutter: () => number,
) {
  const orderItemPositions = computed(() => {
    const heights = itemHeights()
    const cols = columnCount()
    const gutter = verticalGutter()

    const columnHeights = new Array(cols).fill(0) as number[]
    const itemPositions: ItemPositions = new Map()

    for (let i = 0; i < heights.length; i++) {
      const [itemKey, itemHeight, itemColumn] = heights[i]

      let targetColumnIndex = itemColumn ?? columnHeights.indexOf(Math.min(...columnHeights))
      targetColumnIndex = Math.min(targetColumnIndex, cols - 1)

      const top = columnHeights[targetColumnIndex]
      itemPositions.set(itemKey, {
        column: targetColumnIndex,
        top,
      })

      columnHeights[targetColumnIndex] += itemHeight + gutter
    }

    const totalHeight = columnHeights.length > 0 ? Math.max(0, Math.max(...columnHeights) - gutter) : 0

    return { itemPositions, totalHeight }
  })

  return orderItemPositions
}
