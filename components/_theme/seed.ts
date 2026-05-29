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

  // Size
  sizeUnit: number
  sizeStep: number

  // Motion
  motionDurationFast: string
  motionDurationMid: string
  motionDurationSlow: string
  motionEaseInOut: string
  motionEaseOut: string

  // Shadow
  boxShadow: string
  boxShadowSecondary: string
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

  sizeUnit: 4,
  sizeStep: 4,

  motionDurationFast: '0.1s',
  motionDurationMid: '0.2s',
  motionDurationSlow: '0.3s',
  motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',

  boxShadow: `0 1px 2px 0 rgba(0,0,0,0.03), 0 1px 6px -1px rgba(0,0,0,0.02), 0 2px 4px 0 rgba(0,0,0,0.02)`,
  boxShadowSecondary: `0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)`,
}
