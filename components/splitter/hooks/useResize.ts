import { ref, type Ref } from 'vue'
import type { ItemType, ResizableInfo } from '../types'
import { getPtg } from './useSizes'

/**
 * 处理用户拖拽调整大小逻辑
 */
export default function useResize(
  items: Ref<ItemType[]>,
  resizableInfos: Ref<ResizableInfo[]>,
  percentSizes: Ref<number[]>,
  containerSize: Ref<number | undefined>,
  updateSizes: (sizes: number[]) => void,
  reverse: boolean,
) {
  const limitSizes = () => items.value.map((item) => [item.min, item.max])

  const mergedContainerSize = () => containerSize.value || 0
  const ptg2px = (ptg: number) => ptg * mergedContainerSize()

  // ======================== 调整大小 ========================
  function getLimitSize(str: string | number | undefined, defaultLimit: number) {
    if (typeof str === 'string') {
      return ptg2px(getPtg(str))
    }
    return str ?? defaultLimit
  }

  // 实际 px 尺寸
  const cacheSizes = ref<number[]>([])
  const cacheCollapsedSizeRef = ref<number[]>([])

  /**
   * 当开始拖拽时，检查方向是 start 还是 end
   * 这将处理两个分隔栏在同一位置的情况
   */
  const movingIndex = ref<{
    index: number
    confirmed: boolean
  } | null>(null)

  const getPxSizes = () => percentSizes.value.map(ptg2px)

  const onOffsetStart = (index: number) => {
    cacheSizes.value = getPxSizes()
    movingIndex.value = {
      index,
      confirmed: false,
    }
  }

  const onOffsetUpdate = (index: number, offset: number) => {
    // 第一次触发移动索引更新在状态中不是同步的
    let confirmedIndex: number | null = null

    // 我们需要知道真实的索引是什么
    if ((!movingIndex.value || !movingIndex.value.confirmed) && offset !== 0) {
      // 搜索真实索引
      if (offset > 0) {
        confirmedIndex = index
        movingIndex.value = {
          index,
          confirmed: true,
        }
      } else {
        for (let i = index; i >= 0; i -= 1) {
          if (cacheSizes.value[i] > 0 && resizableInfos.value[i].resizable) {
            confirmedIndex = i
            movingIndex.value = {
              index: i,
              confirmed: true,
            }
            break
          }
        }
      }
    }
    const mergedIndex = confirmedIndex ?? movingIndex.value?.index ?? index

    const numSizes = [...cacheSizes.value]
    const nextIndex = mergedIndex + 1

    // 获取边界
    const limits = limitSizes()
    const startMinSize = getLimitSize(limits[mergedIndex][0], 0)
    const endMinSize = getLimitSize(limits[nextIndex][0], 0)
    const startMaxSize = getLimitSize(limits[mergedIndex][1], mergedContainerSize())
    const endMaxSize = getLimitSize(limits[nextIndex][1], mergedContainerSize())

    let mergedOffset = offset

    // 与边界对齐：确保拖拽后两个面板都在 min~max 范围内
    // 当前面板不能小于 min
    if (numSizes[mergedIndex] + mergedOffset < startMinSize) {
      mergedOffset = startMinSize - numSizes[mergedIndex]
    }
    // 下一个面板不能小于 min
    if (numSizes[nextIndex] - mergedOffset < endMinSize) {
      mergedOffset = numSizes[nextIndex] - endMinSize
    }
    // 当前面板不能大于 max
    if (numSizes[mergedIndex] + mergedOffset > startMaxSize) {
      mergedOffset = startMaxSize - numSizes[mergedIndex]
    }
    // 下一个面板不能大于 max
    if (numSizes[nextIndex] - mergedOffset > endMaxSize) {
      mergedOffset = numSizes[nextIndex] - endMaxSize
    }

    // 执行偏移
    numSizes[mergedIndex] += mergedOffset
    numSizes[nextIndex] -= mergedOffset

    updateSizes(numSizes)

    return numSizes
  }

  const onOffsetEnd = () => {
    movingIndex.value = null
  }

  // ======================= 折叠 =======================
  const onCollapse = (index: number, type: 'start' | 'end') => {
    const currentSizes = getPxSizes()
    const adjustedType = reverse ? (type === 'start' ? 'end' : 'start') : type

    const currentIndex = adjustedType === 'start' ? index : index + 1
    const targetIndex = adjustedType === 'start' ? index + 1 : index

    const currentSize = currentSizes[currentIndex]
    const targetSize = currentSizes[targetIndex]

    if (currentSize !== 0 && targetSize !== 0) {
      // 直接折叠
      currentSizes[currentIndex] = 0
      currentSizes[targetIndex] += currentSize
      cacheCollapsedSizeRef.value[index] = currentSize
    } else {
      const totalSize = currentSize + targetSize

      const limits = limitSizes()
      const currentSizeMin = getLimitSize(limits[currentIndex][0], 0)
      const currentSizeMax = getLimitSize(limits[currentIndex][1], mergedContainerSize())
      const targetSizeMin = getLimitSize(limits[targetIndex][0], 0)
      const targetSizeMax = getLimitSize(limits[targetIndex][1], mergedContainerSize())

      const limitStart = Math.max(currentSizeMin, totalSize - targetSizeMax)
      const limitEnd = Math.min(currentSizeMax, totalSize - targetSizeMin)
      const halfOffset = targetSizeMin || (limitEnd - limitStart) / 2

      const targetCacheCollapsedSize = cacheCollapsedSizeRef.value[index]
      const currentCacheCollapsedSize = totalSize - targetCacheCollapsedSize

      const shouldUseCache =
        targetCacheCollapsedSize &&
        targetCacheCollapsedSize <= targetSizeMax &&
        targetCacheCollapsedSize >= targetSizeMin &&
        currentCacheCollapsedSize <= currentSizeMax &&
        currentCacheCollapsedSize >= currentSizeMin

      if (shouldUseCache) {
        currentSizes[targetIndex] = targetCacheCollapsedSize
        currentSizes[currentIndex] = currentCacheCollapsedSize
      } else {
        currentSizes[currentIndex] -= halfOffset
        currentSizes[targetIndex] += halfOffset
      }
    }

    updateSizes(currentSizes)

    return currentSizes
  }

  return {
    onOffsetStart,
    onOffsetUpdate,
    onOffsetEnd,
    onCollapse,
    movingIndex,
  }
}
