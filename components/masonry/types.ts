import type { CSSProperties } from 'vue'
import type { Breakpoint } from '../grid/types'

export type MasonryItemType<T = any> = {
  key: string | number
  column?: number
  height?: number
  data: T
}

export interface MasonryClassNames {
  root?: string
  item?: string
}

export interface MasonryStyles {
  root?: CSSProperties
  item?: CSSProperties
}

export interface MasonryProps<ItemDataType = any> {
  /** 自定义类名前缀 */
  prefixCls?: string
  /** 根元素类名 */
  className?: string
  /** 根元素样式 */
  style?: CSSProperties
  /** 语义化类名 */
  classNames?: MasonryClassNames
  /** 语义化样式 */
  styles?: MasonryStyles
  /** 列间距 */
  gutter?: number | [number, number]
  /** 数据项 */
  items?: MasonryItemType<ItemDataType>[]
  /** 列数，支持响应式 */
  columns?: number | Partial<Record<Breakpoint, number>>
  /** 布局变化时触发 */
  onLayoutChange?: (sortInfo: { key: string | number; column: number }[]) => void
  /** 是否监听项目尺寸变化 */
  fresh?: boolean
}

export interface MasonryRef {
  nativeElement: HTMLDivElement
}
