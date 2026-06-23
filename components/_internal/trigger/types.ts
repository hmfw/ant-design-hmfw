import type { CSSProperties, VNode } from 'vue'

/** 全部 12 个弹出方位（Tooltip 的超集，向下兼容 Dropdown 的 6 个与简单组件的 bottomLeft）。 */
export type Placement =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight'
  | 'left'
  | 'leftTop'
  | 'leftBottom'
  | 'right'
  | 'rightTop'
  | 'rightBottom'

/** 触发方式。 */
export type TriggerAction = 'hover' | 'click' | 'focus' | 'contextMenu'

/** 一个矩形（相对视口，等同 getBoundingClientRect 的子集）。 */
export interface Rect {
  top: number
  left: number
  width: number
  height: number
}

/** computePosition 的输入选项。 */
export interface ComputeOptions {
  /** 触发器与弹层之间的间距，默认 4。 */
  gap?: number
  /** 是否在溢出时翻转到对侧方位，默认 true。 */
  autoAdjustOverflow?: boolean
  /** 页面横向滚动量，默认 window.scrollX。 */
  scrollX?: number
  /** 页面纵向滚动量，默认 window.scrollY。 */
  scrollY?: number
  /** 视口宽度，默认 window.innerWidth。 */
  viewportWidth?: number
  /** 视口高度，默认 window.innerHeight。 */
  viewportHeight?: number
  /** 箭头尖端对齐触发器中心（Dropdown 的 arrow.pointAtCenter）。 */
  arrowPointAtCenter?: boolean
  /** 箭头尖端距弹层边缘的距离，默认 20（arrowOffsetHorizontal 12 + 半箭头宽 8）。 */
  arrowTipOffset?: number
}

/** computePosition 的输出：文档坐标 + 翻转后实际生效的方位。 */
export interface ComputeResult {
  top: number
  left: number
  /** 翻转后实际方位；未翻转时等于入参 placement。 */
  placement: Placement
}

/** Trigger 组件 props 的类型描述（仅用于文档与类型推导，实际 props 在 Trigger.tsx 声明）。 */
export interface TriggerProps {
  open?: boolean
  defaultOpen?: boolean
  trigger?: TriggerAction | TriggerAction[]
  placement?: Placement
  autoAdjustOverflow?: boolean
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
  mouseEnterDelay?: number
  mouseLeaveDelay?: number
  disabled?: boolean
  destroyOnHidden?: boolean
  forceRender?: boolean
  /** 弹层宽度与触发器宽度一致（Select 的 dropdownMatchSelectWidth）。 */
  matchWidth?: boolean
  gap?: number
  zIndex?: number
  closeOnEscape?: boolean
  closeOnOutsideClick?: boolean
  popupClass?: string
  popupStyle?: CSSProperties
}

/** popup 插槽回传的上下文。 */
export interface PopupSlotContext {
  /** 翻转后实际方位，供箭头方向等使用。 */
  placement: Placement
}

export type PopupRender = (ctx: PopupSlotContext) => VNode | VNode[]
