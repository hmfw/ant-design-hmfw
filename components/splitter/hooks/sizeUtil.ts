type SizeUnit = number | undefined

export function autoPtgSizes(ptgSizes: SizeUnit[], minPtgSizes: SizeUnit[], maxPtgSizes: SizeUnit[]): number[] {
  // 统计当前总百分比
  let currentTotalPtg = 0
  const undefinedIndexes: number[] = []
  ptgSizes.forEach((size, index) => {
    if (size === undefined) {
      undefinedIndexes.push(index)
    } else {
      currentTotalPtg += size
    }
  })

  const restPtg = 1 - currentTotalPtg
  const undefinedCount = undefinedIndexes.length

  // 如果所有尺寸都已定义但总和不为 1，则缩放它们
  if (ptgSizes.length && !undefinedIndexes.length && currentTotalPtg !== 1) {
    // 处理所有尺寸都为 0 的情况：平均分配
    if (currentTotalPtg === 0) {
      const avg = 1 / ptgSizes.length
      return ptgSizes.map(() => avg)
    }
    // 按比例缩放到总和为 1
    const scale = 1 / currentTotalPtg
    return ptgSizes.map((size) => (size as number) * scale)
  }

  // 如果超出则填充（已定义项总和 > 1，未定义项填充为 0）
  if (restPtg < 0) {
    const scale = 1 / currentTotalPtg
    return ptgSizes.map((size) => (size === undefined ? 0 : size * scale))
  }

  // 检查未定义项的 min/max 限制
  let sumMin = 0
  let sumMax = 0
  let limitMin = 0
  let limitMax = 1
  for (const index of undefinedIndexes) {
    const min = minPtgSizes[index] || 0
    const max = maxPtgSizes[index] || 1
    sumMin += min
    sumMax += max
    limitMin = Math.max(limitMin, min)
    limitMax = Math.min(limitMax, max)
  }

  // 不可能的情况（min 总和 > 1 且 max 总和 < 1），直接平均填充
  if (sumMin > 1 && sumMax < 1) {
    const avg = 1 / undefinedCount
    return ptgSizes.map((size) => (size === undefined ? avg : size))
  }

  // 如果可以快速填充（剩余空间平均分配后在每项的 min~max 范围内）
  const restAvg = restPtg / undefinedCount
  if (limitMin <= restAvg && restAvg <= limitMax) {
    return ptgSizes.map((size) => (size === undefined ? restAvg : size))
  }

  // 贪心算法：依次为未定义项分配空间，优先满足 min，剩余空间按 max 限制分配
  const result = [...ptgSizes] as number[]
  let remain = restPtg - sumMin

  for (let i = 0; i < undefinedCount; i += 1) {
    const index = undefinedIndexes[i]
    const min = minPtgSizes[index] || 0
    const max = maxPtgSizes[index] || 1

    // 先分配最小值
    result[index] = min

    // 剩余空间在 max 范围内追加
    const canAdd = max - min
    const add = Math.min(canAdd, remain)
    result[index] += add
    remain -= add
  }

  return result
}
