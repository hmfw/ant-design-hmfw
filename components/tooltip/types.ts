import type { VNode, CSSProperties } from 'vue'

export type TooltipPlacement =
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

export type TooltipTrigger = 'hover' | 'click' | 'focus' | 'contextMenu'

/** AntD v6 箭头配置 —— `boolean` 控制显隐，对象形式用于 `pointAtCenter`。 */
export type TooltipArrow = boolean | { pointAtCenter?: boolean }

/** 标题可为纯文本、VNode 或渲染函数（对齐 AntD 的 `RenderFunction`）。 */
export type TooltipTitle = string | number | VNode | (() => VNode | string | number)

/** Tooltip 语义化类名 */
export interface TooltipClassNames {
  /** 最外层弹层容器 */
  root?: string
  /** 内容包裹层 */
  content?: string
  /** 箭头元素 */
  arrow?: string
  /** 内部内容区域 */
  inner?: string
}

/** Tooltip 语义化样式 */
export interface TooltipStyles {
  /** 最外层弹层容器 */
  root?: CSSProperties
  /** 内容包裹层 */
  content?: CSSProperties
  /** 箭头元素 */
  arrow?: CSSProperties
  /** 内部内容区域 */
  inner?: CSSProperties
}

export interface TooltipProps {
  title?: TooltipTitle
  /** AntD 遗留的 `title` 别名；行为一致。 */
  overlay?: TooltipTitle
  placement?: TooltipPlacement
  trigger?: TooltipTrigger | TooltipTrigger[]
  open?: boolean
  defaultOpen?: boolean
  color?: string
  arrow?: TooltipArrow
  mouseEnterDelay?: number
  mouseLeaveDelay?: number
  disabled?: boolean
  /** 隐藏时销毁弹层 DOM（AntD 5.25+）。 */
  destroyOnHidden?: boolean
  /** 弹层溢出视口时自动翻转方位。 */
  autoAdjustOverflow?: boolean
  /** 弹层的自定义 z-index。 */
  zIndex?: number
  /** 指定弹层挂载容器的函数。 */
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
  /** 强制重新计算位置的标记，当该值变化时触发位置更新（适用于触发元素位置动态变化的场景）。 */
  fresh?: boolean | number
  /** 触发器外层 wrapper 的 display，默认 inline-block。用于不破坏宿主布局（如菜单项可设为 `contents`）。 */
  triggerDisplay?: string
  /** @internal 覆盖默认的 `hmfw-tooltip` 前缀（供 Popover/Popconfirm 等封装组件复用）。 */
  customPrefixCls?: string
  /** @internal 合并到弹层元素上的额外内联样式（供封装组件透传 `overlayStyle`）。 */
  popupStyle?: Record<string, string>
  /** 语义化类名 */
  classNames?: TooltipClassNames
  /** 语义化样式 */
  styles?: TooltipStyles
}
