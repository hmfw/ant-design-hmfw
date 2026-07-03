import type { SeedTokens } from './seed'

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

  // Color warning variants
  colorWarningBg: string
  colorWarningBorder: string
  colorWarningText: string

  // Color error variants
  colorErrorBg: string
  colorErrorBorder: string
  colorErrorText: string
  colorErrorHover: string
  colorErrorActive: string

  // Additional tokens used by components
  colorWhite: string
  colorLink: string
  colorLinkHover: string
  colorLinkActive: string
  colorBgContainerDisabled: string
  colorBgHeader: string
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
}

function lighten(hex: string, amount: number): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const r = Math.min(255, (num >> 16) + Math.round((255 - (num >> 16)) * amount))
  const g = Math.min(255, ((num >> 8) & 0xff) + Math.round((255 - ((num >> 8) & 0xff)) * amount))
  const b = Math.min(255, (num & 0xff) + Math.round((255 - (num & 0xff)) * amount))
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

function darken(hex: string, amount: number): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const r = Math.max(0, (num >> 16) - Math.round((num >> 16) * amount))
  const g = Math.max(0, ((num >> 8) & 0xff) - Math.round(((num >> 8) & 0xff) * amount))
  const b = Math.max(0, (num & 0xff) - Math.round((num & 0xff) * amount))
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

export function generateMapTokens(seed: SeedTokens): MapTokens {
  const { sizeUnit, sizeStep } = seed

  // 间距阶梯，对齐 ant-design：sizeX = sizeUnit * (sizeStep + 偏移)
  // 偏移阶梯 -3/-2/-1/0/+1/+2/+4/+8，默认 sizeUnit=4、sizeStep=4 时得到 4/8/12/16/20/24/32/48
  const sizeXXS = sizeUnit * (sizeStep - 3) // 4
  const sizeXS = sizeUnit * (sizeStep - 2) // 8
  const sizeSM = sizeUnit * (sizeStep - 1) // 12
  const sizeBase = sizeUnit * sizeStep // 16
  const sizeMD = sizeUnit * (sizeStep + 1) // 20
  const sizeLG = sizeUnit * (sizeStep + 2) // 24
  const sizeXL = sizeUnit * (sizeStep + 4) // 32
  const sizeXXL = sizeUnit * (sizeStep + 8) // 48

  return {
    ...seed,

    colorText: 'rgba(0,0,0,0.88)',
    colorTextSecondary: 'rgba(0,0,0,0.65)',
    colorTextTertiary: 'rgba(0,0,0,0.45)',
    colorTextQuaternary: 'rgba(0,0,0,0.25)',
    colorTextDisabled: 'rgba(0,0,0,0.25)',
    colorTextPlaceholder: 'rgba(0,0,0,0.25)',
    colorTextHeading: 'rgba(0,0,0,0.88)',
    colorTextLabel: 'rgba(0,0,0,0.65)',
    colorTextDescription: 'rgba(0,0,0,0.45)',

    colorBgContainer: '#ffffff',
    colorBgElevated: '#ffffff',
    colorBgLayout: '#f5f5f5',
    colorBgSpotlight: 'rgba(0,0,0,0.85)',
    colorBgMask: 'rgba(0,0,0,0.45)',

    colorBorder: '#d9d9d9',
    colorBorderSecondary: '#f0f0f0',

    colorFill: 'rgba(0,0,0,0.15)',
    colorFillSecondary: 'rgba(0,0,0,0.06)',
    colorFillTertiary: 'rgba(0,0,0,0.04)',
    colorFillQuaternary: 'rgba(0,0,0,0.02)',
    colorFillContent: 'rgba(0,0,0,0.06)', // = colorFillSecondary
    colorFillContentHover: 'rgba(0,0,0,0.15)', // = colorFill

    colorPrimaryHover: lighten(seed.colorPrimary, 0.2),
    colorPrimaryActive: darken(seed.colorPrimary, 0.1),
    colorPrimaryBg: lighten(seed.colorPrimary, 0.9),
    colorPrimaryBgHover: lighten(seed.colorPrimary, 0.8),
    colorPrimaryBorder: lighten(seed.colorPrimary, 0.6),
    colorPrimaryBorderHover: lighten(seed.colorPrimary, 0.4),
    colorPrimaryText: seed.colorPrimary,
    colorPrimaryTextHover: lighten(seed.colorPrimary, 0.2),
    colorPrimaryTextActive: darken(seed.colorPrimary, 0.1),

    colorSuccessBg: lighten(seed.colorSuccess, 0.9),
    colorSuccessBorder: lighten(seed.colorSuccess, 0.5),
    colorSuccessText: seed.colorSuccess,

    colorWarningBg: lighten(seed.colorWarning, 0.9),
    colorWarningBorder: lighten(seed.colorWarning, 0.5),
    colorWarningText: seed.colorWarning,

    colorErrorBg: lighten(seed.colorError, 0.9),
    colorErrorBorder: lighten(seed.colorError, 0.5),
    colorErrorText: seed.colorError,
    colorErrorHover: lighten(seed.colorError, 0.2),
    colorErrorActive: darken(seed.colorError, 0.1),

    colorWhite: '#ffffff',
    colorLink: seed.colorPrimary,
    colorLinkHover: lighten(seed.colorPrimary, 0.2),
    colorLinkActive: darken(seed.colorPrimary, 0.1),
    colorBgContainerDisabled: 'rgba(0,0,0,0.04)',
    colorBgHeader: '#001529',
    colorBgTextHover: 'rgba(0,0,0,0.06)',
    colorTextLightSolid: '#ffffff',
    fontSize: seed.fontSizeBase,
    lineHeight: seed.lineHeightBase,

    fontSizeSM: seed.fontSizeBase - 2,
    fontSizeLG: seed.fontSizeBase + 2,
    fontSizeXL: seed.fontSizeBase + 4,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,

    lineHeightSM: 1.6666666666666667,
    lineHeightLG: 1.5,
    lineHeightHeading1: 1.2105263157894737,
    lineHeightHeading2: 1.2666666666666666,
    lineHeightHeading3: 1.3333333333333333,
    lineHeightHeading4: 1.4,
    lineHeightHeading5: 1.5,

    controlHeight: 32,
    controlHeightSM: 24,
    controlHeightLG: 40,
    controlHeightXS: 16,

    paddingXXS: sizeXXS,
    paddingXS: sizeXS,
    paddingSM: sizeSM,
    padding: sizeBase,
    paddingMD: sizeMD,
    paddingLG: sizeLG,
    paddingXL: sizeXL,

    marginXXS: sizeXXS,
    marginXS: sizeXS,
    marginSM: sizeSM,
    margin: sizeBase,
    marginMD: sizeMD,
    marginLG: sizeLG,
    marginXL: sizeXL,
    marginXXL: sizeXXL,
  }
}
