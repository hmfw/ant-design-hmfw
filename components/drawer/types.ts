import type { CSSProperties, VNode } from 'vue'
import type { IconComponent } from '@hmfw/icons'

export type DrawerPlacement = 'top' | 'right' | 'bottom' | 'left'
export type DrawerSize = 'default' | 'large' | number | string
export type DrawerContent = string | number | VNode | (() => VNode | string)
export type DrawerGetContainer = string | HTMLElement | (() => HTMLElement) | false

export interface DrawerProps {
  /** 抽屉是否可见（受控） */
  open?: boolean
  /** 非受控时的默认可见状态 */
  defaultOpen?: boolean
  /** 标题 */
  title?: DrawerContent
  /** 抽屉的方向 */
  placement?: DrawerPlacement
  /** 预设尺寸（default 378px / large 736px），也可传数字或字符串 */
  size?: DrawerSize
  /** 宽度，placement 为 left/right 时生效（size 优先） */
  width?: number | string
  /** 高度，placement 为 top/bottom 时生效（size 优先） */
  height?: number | string
  /** 是否显示关闭按钮 */
  closable?: boolean
  /** 自定义关闭图标 */
  closeIcon?: IconComponent
  /** 点击蒙层是否允许关闭 */
  maskClosable?: boolean
  /** 是否展示遮罩 */
  mask?: boolean
  /** 是否支持按 Esc 关闭 */
  keyboard?: boolean
  /** 是否展示骨架屏 */
  loading?: boolean
  /** 设置 z-index */
  zIndex?: number
  /** destroyOnHidden 的旧称 */
  destroyOnClose?: boolean
  /** 关闭时是否销毁抽屉内的子元素 */
  destroyOnHidden?: boolean
  /** 预渲染抽屉内的内容 */
  forceRender?: boolean
  /** 关闭后是否将焦点返回触发元素 */
  focusTriggerAfterClose?: boolean
  /** 挂载节点，false 时渲染在当前位置 */
  getContainer?: DrawerGetContainer
  /** 语义化结构 class */
  classNames?: DrawerClassNames
  /** 语义化结构 style */
  styles?: DrawerStyles
}

export interface DrawerClassNames {
  root?: string // 最外层容器（含遮罩）
  mask?: string // 遮罩层
  wrapper?: string // 抽屉内容包裹层
  content?: string // 抽屉内容区
  header?: string // 头部区域
  title?: string // 标题
  extra?: string // 右上角扩展区域
  body?: string // 主体内容区
  footer?: string // 页脚区域
}

export interface DrawerStyles {
  root?: CSSProperties // 最外层容器（含遮罩）
  mask?: CSSProperties
  wrapper?: CSSProperties
  content?: CSSProperties
  header?: CSSProperties
  title?: CSSProperties
  extra?: CSSProperties
  body?: CSSProperties
  footer?: CSSProperties
}
