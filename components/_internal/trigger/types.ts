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
  /** 箭头尖端对齐触发器中心（Dropdown 的 arrow.pointAtCenter）。 */
  arrowPointAtCenter?: boolean
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
  mouseEnterDelay?: number
  mouseLeaveDelay?: number
  disabled?: boolean
  destroyOnHidden?: boolean
  forceRender?: boolean
  /** 弹层最小宽度匹配触发器宽度（Select 的 dropdownMatchSelectWidth）。true 使用触发器宽度，number 指定固定最小宽度。 */
  matchWidth?: boolean | number
  gap?: number
  /** 弹层层级。不传时回退到主题 Token `--hmfw-z-index-popup`（默认 1050）。 */
  zIndex?: number
  closeOnEscape?: boolean
  closeOnOutsideClick?: boolean
  /** 监听弹层内容尺寸变化并自动重新定位（Tooltip 的 ResizeObserver）。 */
  observePopupResize?: boolean
  /** 变化时强制重新定位（Tooltip 的 fresh）。 */
  fresh?: boolean | number
  /** 持续跟踪触发元素位置变化，每帧自动重新定位（适用于触发元素有动画/过渡的场景）。 */
  trackPosition?: boolean
  /**
   * 触发器根元素的额外类名（合并到子节点上）
   */
  triggerClass?: string
  /**
   * 触发器根元素的行内样式（合并到子节点上）
   */
  triggerStyle?: CSSProperties
  /** 弹层 wrapper 的 class，支持字符串或接收实际方位返回字符串的函数。 */
  popupClass?: string | ((placement: Placement) => string)
  /** 隐藏态 class，默认 hmfw-trigger-popup-hidden。 */
  hiddenClass?: string
  /** 弹层 wrapper 的行内样式。 */
  popupStyle?: CSSProperties
}

/**
 * 开关状态变化的来源。
 * - `trigger`：由触发器自身的交互引起（hover / click / focus / contextMenu / Esc / 外点）
 * - `popup`：由弹层内部主动关闭（如 Dropdown 点击菜单项后收起）
 */
export type TriggerOpenSource = 'trigger' | 'popup'

/** openChange 事件的第二个参数。 */
export interface TriggerOpenChangeInfo {
  source: TriggerOpenSource
}

/** openChange 事件的回调签名。 */
export type TriggerOpenChangeHandler = (open: boolean, info: TriggerOpenChangeInfo) => void

/** afterOpenChange 事件的回调签名（DOM 已更新，CSS 过渡未必完成）。 */
export type TriggerAfterOpenChangeHandler = (open: boolean) => void

/** popup 插槽回传的上下文。 */
export interface PopupSlotContext {
  /** 翻转后实际方位，供箭头方向等使用。 */
  placement: Placement
  /** 弹层当前是否可见（受控/非受控合并后的真实状态），供 aria-hidden 等使用。 */
  visible: boolean
}

export type PopupRender = (ctx: PopupSlotContext) => VNode | VNode[]
