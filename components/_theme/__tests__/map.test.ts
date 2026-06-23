import { describe, it, expect } from 'vitest'
import { generateMapTokens } from '../map'
import { defaultSeedTokens } from '../seed'

describe('generateMapTokens spacing', () => {
  const tokens = generateMapTokens(defaultSeedTokens)

  // 间距 token 必须与 ant-design 默认主题一致（sizeUnit=4、sizeStep=4）
  it('padding tokens align with antd', () => {
    expect(tokens.paddingXXS).toBe(4)
    expect(tokens.paddingXS).toBe(8)
    expect(tokens.paddingSM).toBe(12)
    expect(tokens.padding).toBe(16)
    expect(tokens.paddingMD).toBe(20)
    expect(tokens.paddingLG).toBe(24)
    expect(tokens.paddingXL).toBe(32)
  })

  it('margin tokens align with antd', () => {
    expect(tokens.marginXXS).toBe(4)
    expect(tokens.marginXS).toBe(8)
    expect(tokens.marginSM).toBe(12)
    expect(tokens.margin).toBe(16)
    expect(tokens.marginMD).toBe(20)
    expect(tokens.marginLG).toBe(24)
    expect(tokens.marginXL).toBe(32)
    expect(tokens.marginXXL).toBe(48)
  })

  // 间距阶梯随 seed 等比缩放（compact 场景 sizeStep 减小）
  it('scales with sizeStep', () => {
    const compact = generateMapTokens({ ...defaultSeedTokens, sizeStep: 2 })
    expect(compact.margin).toBe(8) // sizeUnit(4) * sizeStep(2)
    expect(compact.marginXS).toBe(0) // 4 * (2 - 2)
    expect(compact.marginLG).toBe(16) // 4 * (2 + 2)
  })
})
