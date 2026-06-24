// 精简版类型文件，仅保留 Icon 包装器需要的类型
// IconComponent 从 @hmfw/icons 重导出以统一来源
import type { CSSProperties } from 'vue'

export type { IconComponent } from '@hmfw/icons'

export interface IconProps {
  component?: import('@hmfw/icons').IconComponent
  spin?: boolean
  rotate?: number
  twoToneColor?: string
  style?: string | CSSProperties
  class?: string
}
