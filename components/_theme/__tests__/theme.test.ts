import { describe, it, expect } from 'vitest'
import { generateMapTokens, defaultSeedTokens } from '../theme'

describe('generateMapTokens', () => {
  const tokens = generateMapTokens(defaultSeedTokens)

  // ========== 间距 ==========

  describe('spacing', () => {
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

    it('spacing values are correct under default sizeStep', () => {
      expect(tokens.margin).toBe(16) // SIZE_UNIT * SIZE_STEP = 4 * 4
      expect(tokens.marginXS).toBe(8) // SIZE_UNIT * (SIZE_STEP - 2) = 4 * 2
      expect(tokens.marginLG).toBe(24) // SIZE_UNIT * (SIZE_STEP + 2) = 4 * 6
    })
  })

  // ========== lighten / darken ==========

  describe('lighten / darken', () => {
    it('lighten produces lighter color', () => {
      expect(tokens.colorPrimaryHover).toBe('#4592ff')
      expect(tokens.colorPrimaryBg).toBe('#e8f1ff')
    })

    it('darken produces darker color', () => {
      expect(tokens.colorPrimaryActive).toBe('#146be5')
    })

    it('lighten from black', () => {
      const t = generateMapTokens({ ...defaultSeedTokens, colorPrimary: '#000000' })
      expect(t.colorPrimaryBg).toBe('#e6e6e6')
    })

    it('darken from white', () => {
      const t = generateMapTokens({ ...defaultSeedTokens, colorPrimary: '#ffffff' })
      expect(t.colorPrimaryActive).toBe('#e5e5e5')
    })

    it('returns original value for invalid hex', () => {
      const t = generateMapTokens({ ...defaultSeedTokens, colorPrimary: 'invalid' })
      // lighten/darken/alpha 对非法 hex 原样返回，不产生 NaN
      expect(t.colorPrimaryHover).toBe('invalid')
      expect(t.colorPrimaryActive).toBe('invalid')
      expect(t.colorPrimaryBg).toBe('invalid')
    })
  })

  // ========== colorTextBase 派生 ==========

  describe('colorTextBase derivation', () => {
    it('derives text colors from black colorTextBase', () => {
      expect(tokens.colorText).toBe('rgba(0,0,0,0.88)')
      expect(tokens.colorTextSecondary).toBe('rgba(0,0,0,0.65)')
      expect(tokens.colorTextTertiary).toBe('rgba(0,0,0,0.45)')
      expect(tokens.colorTextQuaternary).toBe('rgba(0,0,0,0.25)')
      expect(tokens.colorTextDisabled).toBe('rgba(0,0,0,0.25)')
      expect(tokens.colorTextPlaceholder).toBe('rgba(0,0,0,0.25)')
      expect(tokens.colorTextHeading).toBe('rgba(0,0,0,0.88)')
      expect(tokens.colorTextLabel).toBe('rgba(0,0,0,0.65)')
      expect(tokens.colorTextDescription).toBe('rgba(0,0,0,0.45)')
    })

    it('derives text colors from white colorTextBase (dark mode)', () => {
      const t = generateMapTokens({ ...defaultSeedTokens, colorTextBase: '#ffffff' })
      expect(t.colorText).toBe('rgba(255,255,255,0.88)')
      expect(t.colorTextSecondary).toBe('rgba(255,255,255,0.65)')
      expect(t.colorTextTertiary).toBe('rgba(255,255,255,0.45)')
    })
  })

  // ========== colorBgBase 派生 ==========

  describe('colorBgBase derivation', () => {
    it('derives bg colors from white base', () => {
      expect(tokens.colorBgContainer).toBe('#ffffff')
      expect(tokens.colorBgElevated).toBe('#ffffff')
      expect(tokens.colorBgLayout).toBe('#f5f5f5')
    })

    it('derives mask/spotlight from colorTextBase', () => {
      expect(tokens.colorBgSpotlight).toBe('rgba(0,0,0,0.85)')
      expect(tokens.colorBgMask).toBe('rgba(0,0,0,0.45)')
    })

    it('derives border from bg base', () => {
      expect(tokens.colorBorder).toBe('#d9d9d9')
      expect(tokens.colorBorderSecondary).toBe('#f0f0f0')
    })

    it('handles black bg base', () => {
      const t = generateMapTokens({ ...defaultSeedTokens, colorBgBase: '#000000', colorTextBase: '#ffffff' })
      expect(t.colorBgContainer).toBe('#000000')
      expect(t.colorBgLayout).toBe('#000000')
      expect(t.colorBorder).toBe('#000000')
    })
  })

  // ========== fill 派生 ==========

  describe('fill derivation', () => {
    it('derives fill colors from colorTextBase', () => {
      expect(tokens.colorFill).toBe('rgba(0,0,0,0.15)')
      expect(tokens.colorFillSecondary).toBe('rgba(0,0,0,0.06)')
      expect(tokens.colorFillTertiary).toBe('rgba(0,0,0,0.04)')
      expect(tokens.colorFillQuaternary).toBe('rgba(0,0,0,0.02)')
    })

    it('colorFillContent equals colorFillSecondary', () => {
      expect(tokens.colorFillContent).toBe(tokens.colorFillSecondary)
    })
  })

  // ========== 语义色变体（新增 Success/Warning/Info 交互态） ==========

  describe('semantic color variants', () => {
    it('primary has full variant set', () => {
      expect(tokens.colorPrimaryBg).toBe('#e8f1ff')
      expect(tokens.colorPrimaryBorder).toBe('#a2c9ff')
      expect(tokens.colorPrimaryHover).toBe('#4592ff')
      expect(tokens.colorPrimaryActive).toBe('#146be5')
    })

    it('success has hover/active', () => {
      expect(tokens.colorSuccessBg).toBe('#eef9e8')
      expect(tokens.colorSuccessBorder).toBe('#a9e28d')
      expect(tokens.colorSuccessText).toBe('#52c41a')
      expect(tokens.colorSuccessHover).toBe('#75d048')
      expect(tokens.colorSuccessActive).toBe('#4ab017')
    })

    it('warning has hover/active', () => {
      expect(tokens.colorWarningBg).toBe('#fff7e8')
      expect(tokens.colorWarningBorder).toBe('#fdd68a')
      expect(tokens.colorWarningText).toBe('#faad14')
      expect(tokens.colorWarningHover).toBe('#fbbd43')
      expect(tokens.colorWarningActive).toBe('#e19c12')
    })

    it('error has hover/active', () => {
      expect(tokens.colorErrorHover).toBe('#ff7172')
      expect(tokens.colorErrorActive).toBe('#e54547')
    })

    it('info has full variant set', () => {
      expect(tokens.colorInfoBg).toBe('#e8f1ff')
      expect(tokens.colorInfoBorder).toBe('#8bbbff') // 0.5 amount vs primary 0.6
      expect(tokens.colorInfoText).toBe('#1677ff')
      expect(tokens.colorInfoHover).toBe('#4592ff')
      expect(tokens.colorInfoActive).toBe('#146be5')
    })

    it('info variants are independent of primary', () => {
      const t = generateMapTokens({ ...defaultSeedTokens, colorInfo: '#00b96b' })
      expect(t.colorInfoText).toBe('#00b96b')
      // primary stays unchanged
      expect(t.colorPrimaryText).toBe('#1677ff')
    })
  })

  // ========== 补充 token ==========

  describe('supplementary tokens', () => {
    it('arrowBg', () => {
      expect(tokens.arrowBg).toBe('#ffffff')
    })

    it('borderRadiusXS', () => {
      expect(tokens.borderRadiusXS).toBe(4)
    })

    it('boxShadowTertiary is a seed token (user-configurable)', () => {
      expect(tokens.boxShadowTertiary).toBe(tokens.boxShadow)
      // 可独立覆盖
      const t = generateMapTokens({ ...defaultSeedTokens, boxShadowTertiary: '0 0 10px red' })
      expect(t.boxShadowTertiary).toBe('0 0 10px red')
      expect(t.boxShadow).not.toBe('0 0 10px red')
    })

    it('colorFillAlter mirrors colorFillQuaternary', () => {
      expect(tokens.colorFillAlter).toBe('rgba(0,0,0,0.02)')
      expect(tokens.colorFillAlter).toBe(tokens.colorFillQuaternary)
    })

    it('colorSplit mirrors colorBorderSecondary', () => {
      expect(tokens.colorSplit).toBe('#f0f0f0')
      expect(tokens.colorSplit).toBe(tokens.colorBorderSecondary)
    })

    it('controlPaddingHorizontal is fixed (not coupled to spacing)', () => {
      expect(tokens.controlPaddingHorizontal).toBe(12)
      expect(tokens.controlPaddingHorizontalSM).toBe(8)
    })

    it('z-index tokens', () => {
      expect(tokens.zIndexBase).toBe(0)
      expect(tokens.zIndexPopup).toBe(1050)
    })

    it('skeleton tokens', () => {
      expect(tokens.skeletonColorBase).toBe(tokens.colorFillSecondary)
      expect(tokens.skeletonColorHighlight).toBe(tokens.colorFill)
    })

    it('timelineTitleSpan', () => {
      expect(tokens.timelineTitleSpan).toBe(80)
    })

    it('lineWidthBold', () => {
      expect(tokens.lineWidthBold).toBe(2)
    })

    it('colorBgHeader is a seed token (user-configurable)', () => {
      expect(tokens.colorBgHeader).toBe('#001529')
      const t = generateMapTokens({ ...defaultSeedTokens, colorBgHeader: '#0a0a0a' })
      expect(t.colorBgHeader).toBe('#0a0a0a')
    })
  })

  // ========== 字号下限守卫 ==========

  describe('guards', () => {
    it('fontSizeSM has lower bound of 1', () => {
      const t = generateMapTokens({ ...defaultSeedTokens, fontSizeBase: 1 })
      expect(t.fontSizeSM).toBe(1) // Math.max(1, 1-2)
    })
  })

  // ========== 整体一致性 ==========

  describe('consistency', () => {
    it('all seed fields are carried through', () => {
      for (const key of Object.keys(defaultSeedTokens) as (keyof typeof defaultSeedTokens)[]) {
        expect(tokens[key]).toBeDefined()
      }
    })

    it('font size hierarchy is monotonic', () => {
      expect(tokens.fontSizeSM).toBeLessThan(tokens.fontSize)
      expect(tokens.fontSize).toBeLessThan(tokens.fontSizeLG)
      expect(tokens.fontSizeLG).toBeLessThan(tokens.fontSizeXL)
    })

    it('control height hierarchy is monotonic', () => {
      expect(tokens.controlHeightXS).toBeLessThan(tokens.controlHeightSM)
      expect(tokens.controlHeightSM).toBeLessThan(tokens.controlHeight)
      expect(tokens.controlHeight).toBeLessThan(tokens.controlHeightLG)
    })
  })
})
