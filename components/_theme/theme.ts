/**
 * 设计 Token 系统 — 构建时生成 + 运行时覆盖
 *
 * 三层管道：
 *   SeedTokens（语义参数，唯一需要人工调整的源）
 *     → generateMapTokens（派生 ~110 个 MapTokens）
 *       → injectCssVars / tokensToCssVars（注入为 CSS 变量）
 *
 * 修改 seed 默认值或派生逻辑后，运行 `pnpm generate-theme` 重新生成静态 CSS。
 */

// ============================================================================
// SeedTokens — 基础设计参数
// ============================================================================

export interface SeedTokens {
  // Color
  colorPrimary: string
  colorSuccess: string
  colorWarning: string
  colorError: string
  colorInfo: string
  colorTextBase: string
  colorBgBase: string

  // Typography
  fontFamily: string
  fontSizeBase: number
  lineHeightBase: number

  // Border
  borderRadius: number
  borderRadiusSM: number
  borderRadiusLG: number

  // Motion
  motionDurationFast: string
  motionDurationMid: string
  motionDurationSlow: string
  motionEaseInOut: string
  motionEaseOut: string

  // Shadow
  boxShadow: string
  boxShadowSecondary: string
  boxShadowTertiary: string
  boxShadowPopoverArrow: string

  // Layout
  colorBgHeader: string
}

export const defaultSeedTokens: SeedTokens = {
  colorPrimary: '#1677ff',
  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#ff4d4f',
  colorInfo: '#1677ff',
  colorTextBase: '#000000',
  colorBgBase: '#ffffff',

  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif`,
  fontSizeBase: 14,
  lineHeightBase: 1.5714285714285714,

  borderRadius: 6,
  borderRadiusSM: 4,
  borderRadiusLG: 8,

  motionDurationFast: '0.1s',
  motionDurationMid: '0.2s',
  motionDurationSlow: '0.3s',
  motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',

  boxShadow: `0 1px 2px 0 rgba(0,0,0,0.03), 0 1px 6px -1px rgba(0,0,0,0.02), 0 2px 4px 0 rgba(0,0,0,0.02)`,
  boxShadowSecondary: `0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)`,
  boxShadowTertiary: `0 1px 2px 0 rgba(0,0,0,0.03), 0 1px 6px -1px rgba(0,0,0,0.02), 0 2px 4px 0 rgba(0,0,0,0.02)`,
  boxShadowPopoverArrow: `2px 2px 5px rgba(0,0,0,0.05)`,

  colorBgHeader: '#001529',
}

// ============================================================================
// MapTokens — 派生 Token
// ============================================================================

export interface MapTokens extends SeedTokens {
  // Color text
  colorText: string
  colorTextSecondary: string
  colorTextTertiary: string
  colorTextQuaternary: string
  colorTextDisabled: string
  colorTextPlaceholder: string
  colorTextHeading: string
  colorTextLabel: string
  colorTextDescription: string

  // Color bg
  colorBgContainer: string
  colorBgElevated: string
  colorBgLayout: string
  colorBgSpotlight: string
  colorBgMask: string

  // Color border
  colorBorder: string
  colorBorderSecondary: string

  // Color fill
  colorFill: string
  colorFillSecondary: string
  colorFillTertiary: string
  colorFillQuaternary: string
  colorFillContent: string
  colorFillContentHover: string

  // Color primary variants
  colorPrimaryHover: string
  colorPrimaryActive: string
  colorPrimaryBg: string
  colorPrimaryBgHover: string
  colorPrimaryBorder: string
  colorPrimaryBorderHover: string
  colorPrimaryText: string
  colorPrimaryTextHover: string
  colorPrimaryTextActive: string

  // Color success variants
  colorSuccessBg: string
  colorSuccessBorder: string
  colorSuccessText: string
  colorSuccessHover: string
  colorSuccessActive: string

  // Color warning variants
  colorWarningBg: string
  colorWarningBorder: string
  colorWarningText: string
  colorWarningHover: string
  colorWarningActive: string

  // Color error variants
  colorErrorBg: string
  colorErrorBorder: string
  colorErrorText: string
  colorErrorHover: string
  colorErrorActive: string

  // Color info variants
  colorInfoBg: string
  colorInfoBorder: string
  colorInfoText: string
  colorInfoHover: string
  colorInfoActive: string

  // Additional tokens used by components
  colorWhite: string
  colorLink: string
  colorLinkHover: string
  colorLinkActive: string
  colorBgContainerDisabled: string
  colorBgTextHover: string
  colorTextLightSolid: string
  fontSize: number
  lineHeight: number

  // Font sizes
  fontSizeSM: number
  fontSizeLG: number
  fontSizeXL: number
  fontSizeHeading1: number
  fontSizeHeading2: number
  fontSizeHeading3: number
  fontSizeHeading4: number
  fontSizeHeading5: number

  // Line heights
  lineHeightSM: number
  lineHeightLG: number
  lineHeightHeading1: number
  lineHeightHeading2: number
  lineHeightHeading3: number
  lineHeightHeading4: number
  lineHeightHeading5: number

  // Control sizes
  controlHeight: number
  controlHeightSM: number
  controlHeightLG: number
  controlHeightXS: number

  // Padding
  paddingXXS: number
  paddingXS: number
  paddingSM: number
  padding: number
  paddingMD: number
  paddingLG: number
  paddingXL: number

  // Margin
  marginXXS: number
  marginXS: number
  marginSM: number
  margin: number
  marginMD: number
  marginLG: number
  marginXL: number
  marginXXL: number

  // Supplementary tokens
  arrowBg: string
  borderRadiusXS: number
  colorFillAlter: string
  colorSplit: string
  controlItemBgHover: string
  controlPaddingHorizontal: number
  controlPaddingHorizontalSM: number
  lineWidthBold: number
  zIndexBase: number
  zIndexPopup: number

  // Skeleton
  skeletonColorBase: string
  skeletonColorHighlight: string

  // Timeline
  timelineTitleSpan: number

  // Typography weights
  fontWeightStrong: number

  // Popover
  popoverTitleMinWidth: number
  popoverInnerPadding: number
  popoverTitleMarginBottom: number
}

// ============================================================================
// 颜色工具函数
// ============================================================================

/** 校验 hex 颜色是否为 6 位格式（#rrggbb） */
function isValidHex(c: string): boolean {
  return /^#[0-9a-fA-F]{6}$/.test(c)
}

/** 将 6 位 hex 颜色转换为 rgba 表示；非法格式原样返回 */
function alpha(hex: string, opacity: number): string {
  if (!isValidHex(hex)) return hex
  const num = parseInt(hex.slice(1), 16)
  const r = (num >> 16) & 0xff
  const g = (num >> 8) & 0xff
  const b = num & 0xff
  return `rgba(${r},${g},${b},${opacity})`
}

function lighten(hex: string, amount: number): string {
  if (!isValidHex(hex)) return hex
  const num = parseInt(hex.slice(1), 16)
  const r = Math.min(255, (num >> 16) + Math.round((255 - (num >> 16)) * amount))
  const g = Math.min(255, ((num >> 8) & 0xff) + Math.round((255 - ((num >> 8) & 0xff)) * amount))
  const b = Math.min(255, (num & 0xff) + Math.round((255 - (num & 0xff)) * amount))
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

function darken(hex: string, amount: number): string {
  if (!isValidHex(hex)) return hex
  const num = parseInt(hex.slice(1), 16)
  const r = Math.max(0, (num >> 16) - Math.round((num >> 16) * amount))
  const g = Math.max(0, ((num >> 8) & 0xff) - Math.round(((num >> 8) & 0xff) * amount))
  const b = Math.max(0, (num & 0xff) - Math.round((num & 0xff) * amount))
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

// ============================================================================
// generateMapTokens — 从 Seed 派生完整 Map
// ============================================================================

// 内部间距参数，不暴露为 SeedToken
const SIZE_UNIT = 4
const SIZE_STEP = 4

export function generateMapTokens(seed: SeedTokens): MapTokens {
  const { colorTextBase, colorBgBase } = seed

  // 间距阶梯：sizeX = SIZE_UNIT * (SIZE_STEP + 偏移)，下限为 0（CSS 不接受负值）
  const sizeXXS = Math.max(0, SIZE_UNIT * (SIZE_STEP - 3)) // 4
  const sizeXS = Math.max(0, SIZE_UNIT * (SIZE_STEP - 2)) // 8
  const sizeSM = SIZE_UNIT * (SIZE_STEP - 1) // 12
  const sizeBase = SIZE_UNIT * SIZE_STEP // 16
  const sizeMD = SIZE_UNIT * (SIZE_STEP + 1) // 20
  const sizeLG = SIZE_UNIT * (SIZE_STEP + 2) // 24
  const sizeXL = SIZE_UNIT * (SIZE_STEP + 4) // 32
  const sizeXXL = SIZE_UNIT * (SIZE_STEP + 8) // 48

  // 从 seed 派生语义化颜色
  const colorText = alpha(colorTextBase, 0.88)
  const colorTextSecondary = alpha(colorTextBase, 0.65)
  const colorTextTertiary = alpha(colorTextBase, 0.45)
  const colorTextQuaternary = alpha(colorTextBase, 0.25)
  const colorFill = alpha(colorTextBase, 0.15)
  const colorFillSecondary = alpha(colorTextBase, 0.06)
  const colorFillTertiary = alpha(colorTextBase, 0.04)
  const colorBorder = darken(colorBgBase, 0.15)
  const colorBorderSecondary = darken(colorBgBase, 0.06)

  return {
    ...seed,

    // 文字色
    colorText,
    colorTextSecondary,
    colorTextTertiary,
    colorTextQuaternary,
    colorTextDisabled: colorTextQuaternary,
    colorTextPlaceholder: colorTextQuaternary,
    colorTextHeading: colorText,
    colorTextLabel: colorTextSecondary,
    colorTextDescription: colorTextTertiary,

    // 背景衍生色
    colorBgContainer: colorBgBase,
    colorBgElevated: colorBgBase,
    colorBgLayout: darken(colorBgBase, 0.04),
    colorBgSpotlight: alpha(colorTextBase, 0.85),
    colorBgMask: alpha(colorTextBase, 0.45),

    // 边框色
    colorBorder,
    colorBorderSecondary,

    // 填充色
    colorFill,
    colorFillSecondary,
    colorFillTertiary,
    colorFillQuaternary: alpha(colorTextBase, 0.02),
    colorFillContent: colorFillSecondary,
    colorFillContentHover: colorFill,

    // Primary 变体
    colorPrimaryHover: lighten(seed.colorPrimary, 0.2),
    colorPrimaryActive: darken(seed.colorPrimary, 0.1),
    colorPrimaryBg: lighten(seed.colorPrimary, 0.9),
    colorPrimaryBgHover: lighten(seed.colorPrimary, 0.8),
    colorPrimaryBorder: lighten(seed.colorPrimary, 0.6),
    colorPrimaryBorderHover: lighten(seed.colorPrimary, 0.4),
    colorPrimaryText: seed.colorPrimary,
    colorPrimaryTextHover: lighten(seed.colorPrimary, 0.2),
    colorPrimaryTextActive: darken(seed.colorPrimary, 0.1),

    // Success 变体
    colorSuccessBg: lighten(seed.colorSuccess, 0.9),
    colorSuccessBorder: lighten(seed.colorSuccess, 0.5),
    colorSuccessText: seed.colorSuccess,
    colorSuccessHover: lighten(seed.colorSuccess, 0.2),
    colorSuccessActive: darken(seed.colorSuccess, 0.1),

    // Warning 变体
    colorWarningBg: lighten(seed.colorWarning, 0.9),
    colorWarningBorder: lighten(seed.colorWarning, 0.5),
    colorWarningText: seed.colorWarning,
    colorWarningHover: lighten(seed.colorWarning, 0.2),
    colorWarningActive: darken(seed.colorWarning, 0.1),

    // Error 变体
    colorErrorBg: lighten(seed.colorError, 0.9),
    colorErrorBorder: lighten(seed.colorError, 0.5),
    colorErrorText: seed.colorError,
    colorErrorHover: lighten(seed.colorError, 0.2),
    colorErrorActive: darken(seed.colorError, 0.1),

    // Info 变体
    colorInfoBg: lighten(seed.colorInfo, 0.9),
    colorInfoBorder: lighten(seed.colorInfo, 0.5),
    colorInfoText: seed.colorInfo,
    colorInfoHover: lighten(seed.colorInfo, 0.2),
    colorInfoActive: darken(seed.colorInfo, 0.1),

    // 通用
    colorWhite: '#ffffff',
    colorLink: seed.colorPrimary,
    colorLinkHover: lighten(seed.colorPrimary, 0.2),
    colorLinkActive: darken(seed.colorPrimary, 0.1),
    colorBgContainerDisabled: alpha(colorTextBase, 0.04),
    colorBgTextHover: alpha(colorTextBase, 0.06),
    colorTextLightSolid: '#ffffff',
    fontSize: seed.fontSizeBase,
    lineHeight: seed.lineHeightBase,

    // 字号阶梯（下限 1px，CSS 不接受更小的正值）
    fontSizeSM: Math.max(1, seed.fontSizeBase - 2),
    fontSizeLG: seed.fontSizeBase + 2,
    fontSizeXL: seed.fontSizeBase + 4,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,

    // 行高
    lineHeightSM: 1.6666666666666667,
    lineHeightLG: 1.5,
    lineHeightHeading1: 1.2105263157894737,
    lineHeightHeading2: 1.2666666666666666,
    lineHeightHeading3: 1.3333333333333333,
    lineHeightHeading4: 1.4,
    lineHeightHeading5: 1.5,

    // 控件高度
    controlHeight: 32,
    controlHeightSM: 24,
    controlHeightLG: 40,
    controlHeightXS: 16,

    // Padding
    paddingXXS: sizeXXS,
    paddingXS: sizeXS,
    paddingSM: sizeSM,
    padding: sizeBase,
    paddingMD: sizeMD,
    paddingLG: sizeLG,
    paddingXL: sizeXL,

    // Margin
    marginXXS: sizeXXS,
    marginXS: sizeXS,
    marginSM: sizeSM,
    margin: sizeBase,
    marginMD: sizeMD,
    marginLG: sizeLG,
    marginXL: sizeXL,
    marginXXL: sizeXXL,

    // 补充 token
    arrowBg: colorBgBase,
    borderRadiusXS: seed.borderRadiusSM,
    colorFillAlter: alpha(colorTextBase, 0.02),
    colorSplit: colorBorderSecondary,
    controlItemBgHover: alpha(colorTextBase, 0.04),
    // 控件内边距使用固定值，不与间距系统绑定（Ant Design 中为独立设计常量）
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    lineWidthBold: 2,
    zIndexBase: 0,
    zIndexPopup: 1050,

    skeletonColorBase: colorFillSecondary,
    skeletonColorHighlight: colorFill,

    timelineTitleSpan: 80,

    // Typography weights
    fontWeightStrong: 600,

    // Popover 专属 token
    popoverTitleMinWidth: 177,
    popoverInnerPadding: 12,
    popoverTitleMarginBottom: sizeXS, // 复用 marginXS (8px)
  }
}

// ============================================================================
// CSS 变量注入
// ============================================================================

// Token 名称前缀（camelCase）匹配：以这些前缀开头的属性值不加 px 单位
const UNITLESS_PREFIXES = ['lineHeight', 'fontWeight', 'opacity', 'zIndex', 'columns', 'ratio', 'scale']

function isUnitless(key: string): boolean {
  return UNITLESS_PREFIXES.some((prefix) => key.startsWith(prefix))
}

function toCssValue(key: string, value: number | string): string {
  if (typeof value === 'number') {
    return isUnitless(key) ? String(value) : `${value}px`
  }
  return value
}

function toKebab(key: string): string {
  return key
    .replace(/XXL/g, '-xxl')
    .replace(/XXS/g, '-xxs')
    .replace(/XL/g, '-xl')
    .replace(/XS/g, '-xs')
    .replace(/SM/g, '-sm')
    .replace(/LG/g, '-lg')
    .replace(/MD/g, '-md')
    .replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`)
    .replace(/([a-z])(\d)/g, '$1-$2')
    .replace(/--+/g, '-')
    .replace(/^-/, '')
}

export function tokensToCssVars(tokens: MapTokens, prefix = 'hmfw'): string {
  const entries: string[] = []

  for (const [key, value] of Object.entries(tokens)) {
    if (typeof value === 'string' || typeof value === 'number') {
      const cssKey = `--${prefix}-${toKebab(key)}`
      const cssValue = toCssValue(key, value)
      entries.push(`  ${cssKey}: ${cssValue};`)
    }
  }

  return `:root {\n${entries.join('\n')}\n}`
}

export function injectCssVars(tokens: MapTokens, prefix = 'hmfw'): void {
  if (typeof document === 'undefined') return

  const id = `${prefix}-theme-vars`
  let style = document.getElementById(id) as HTMLStyleElement | null
  if (!style) {
    style = document.createElement('style')
    style.id = id
    document.head.appendChild(style)
  }
  style.textContent = tokensToCssVars(tokens, prefix)
}

/**
 * 将 token 注入到指定 DOM 元素的 style 上（局部主题覆盖）。
 * 公开 API，供需要局部主题隔离的高级场景使用。
 */
export function injectScopedCssVars(el: HTMLElement, tokens: Partial<MapTokens>, prefix = 'hmfw'): void {
  for (const [key, value] of Object.entries(tokens)) {
    if (typeof value === 'string' || typeof value === 'number') {
      const cssKey = `--${prefix}-${toKebab(key)}`
      const cssValue = toCssValue(key, value)
      el.style.setProperty(cssKey, cssValue)
    }
  }
}
