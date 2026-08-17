import { ref, computed, watch, type Ref } from 'vue'
import type { PanelProps } from '../types'
import { autoPtgSizes } from './sizeUtil'

export function getPtg(str: string) {
  return Number(str.slice(0, -1)) / 100
}

function isPtg(itemSize: string | number | undefined): itemSize is string {
  return typeof itemSize === 'string' && itemSize.endsWith('%')
}

function isNonNullable<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined
}

/**
 * 保存尺寸状态
 * 将尺寸对齐到 flex 百分比基础
 */
export default function useSizes(items: Ref<PanelProps[]>, containerSize?: Ref<number | undefined>) {
  const itemsCount = computed(() => items.value.length)
  const propSizes = computed(() => items.value.map((item) => item.size))

  const mergedContainerSize = computed(() => containerSize?.value || 0)
  const ptg2px = (ptg: number) => ptg * mergedContainerSize.value

  // 内部尺寸状态
  const innerSizes = ref<(string | number | undefined)[]>(items.value.map((item) => item.defaultSize))

  // 当 items 改变时重置内部尺寸
  watch(
    itemsCount,
    (newCount) => {
      if (innerSizes.value.length !== newCount) {
        innerSizes.value = items.value.map((item) => item.defaultSize)
      }
    },
    { immediate: false },
  )

  const sizes = computed(() => {
    // 如果任何面板通过 prop 传递了 size，使用 propSizes
    // 否则使用 innerSizes
    return propSizes.value.some(isNonNullable) ? propSizes.value : innerSizes.value
  })

  const postPercentMinSizes = computed(() =>
    items.value.map((item) => {
      if (isPtg(item.min)) {
        return getPtg(item.min)
      }
      return (item.min || 0) / mergedContainerSize.value
    }),
  )

  const postPercentMaxSizes = computed(() =>
    items.value.map((item) => {
      if (isPtg(item.max)) {
        return getPtg(item.max)
      }
      return (item.max || mergedContainerSize.value) / mergedContainerSize.value
    }),
  )

  // 处理尺寸：
  // 1. 将所有 px 转换为百分比（如果不为空）
  // 2. 获取现有百分比的剩余百分比
  // 3. 将剩余百分比填充到空项
  const postPercentSizes = computed(() => {
    const ptgList: (number | undefined)[] = []

    // 填充默认百分比
    for (let i = 0; i < itemsCount.value; i += 1) {
      const itemSize = sizes.value[i]

      if (isPtg(itemSize)) {
        ptgList[i] = getPtg(itemSize)
      } else if (itemSize || itemSize === 0) {
        const num = Number(itemSize)
        if (!Number.isNaN(num)) {
          ptgList[i] = num / mergedContainerSize.value
        }
      } else {
        ptgList[i] = undefined
      }
    }

    // 使用 autoPtgSizes 处理未定义的尺寸
    return autoPtgSizes(ptgList, postPercentMinSizes.value, postPercentMaxSizes.value)
  })

  const postPxSizes = computed(() => postPercentSizes.value.map(ptg2px))

  // 如果是 SSR，首先使用开发者配置的尺寸
  const panelSizes = computed(() => (containerSize?.value ? postPxSizes.value : sizes.value))

  const updateSizes = (newSizes: number[]) => {
    innerSizes.value = newSizes
  }

  return {
    panelSizes,
    postPxSizes,
    postPercentSizes,
    postPercentMinSizes,
    postPercentMaxSizes,
    updateSizes,
  }
}
