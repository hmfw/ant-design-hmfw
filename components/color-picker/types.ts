import type { CSSProperties } from 'vue'
import type { ComponentSize } from '../config-provider'

export type ColorFormat = 'hex' | 'rgb' | 'hsb'

/**
 * 颜色选择器语义化 className
 */
export interface ColorPickerClassNames {
  root?: string // 根容器
  trigger?: string // 触发器按钮
  colorBlock?: string // 触发器内的色块预览
  text?: string // 触发器内的文本
  panel?: string // 弹出面板容器
  saturation?: string // 饱和度/亮度选择器区域
  saturationCursor?: string // 饱和度/亮度选择器的光标
  hueSlider?: string // 色相滑块容器
  hueCursor?: string // 色相滑块光标
  inputContainer?: string // 输入容器
  preview?: string // 输入容器内的预览色块
  hexInput?: string // HEX 输入框
  formatLabel?: string // 格式标签（HEX）
  presets?: string // 预设颜色区域
  presetGroup?: string // 预设颜色组
  presetLabel?: string // 预设颜色组标签
  presetColors?: string // 预设颜色列表
  presetColor?: string // 单个预设颜色块
  clearBtn?: string // 清除按钮
}

/**
 * 颜色选择器语义化 style
 */
export interface ColorPickerStyles {
  root?: CSSProperties
  trigger?: CSSProperties
  colorBlock?: CSSProperties
  text?: CSSProperties
  panel?: CSSProperties
  saturation?: CSSProperties
  saturationCursor?: CSSProperties
  hueSlider?: CSSProperties
  hueCursor?: CSSProperties
  inputContainer?: CSSProperties
  preview?: CSSProperties
  hexInput?: CSSProperties
  formatLabel?: CSSProperties
  presets?: CSSProperties
  presetGroup?: CSSProperties
  presetLabel?: CSSProperties
  presetColors?: CSSProperties
  presetColor?: CSSProperties
  clearBtn?: CSSProperties
}

export interface ColorPickerProps {
  value?: string
  defaultValue?: string
  format?: ColorFormat
  disabled?: boolean
  size?: ComponentSize
  showText?: boolean
  allowClear?: boolean
  presets?: Array<{ label: string; colors: string[] }>
  classNames?: ColorPickerClassNames
  styles?: ColorPickerStyles
}
