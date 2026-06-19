import type { VNode, VNodeChild, CSSProperties } from 'vue'

export type NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading'

/** 提示内容，支持字符串、数字、VNode 或返回 VNode 的渲染函数 */
export type MessageContent = string | number | VNode | (() => VNodeChild)

export interface ArgsProps {
  /** 提示内容 */
  content: MessageContent
  /** 自动关闭的延时，单位秒。设为 0 时不自动关闭 */
  duration?: number
  /** 提示类型 */
  type?: NoticeType
  /** 自定义图标 */
  icon?: MessageContent
  /** 当前提示的唯一标识，相同 key 会更新已有提示 */
  key?: string | number
  /** 自定义内联样式 */
  style?: CSSProperties
  /** 自定义 CSS class */
  className?: string
  /** 语义化结构 class，可对提示内部各子节点应用自定义 class */
  classNames?: MessageClassNames
  /** 语义化结构 style，可对提示内部各子节点应用内联样式 */
  styles?: MessageStyles
  /** 关闭时触发的回调函数 */
  onClose?: () => void
  /** 点击时触发的回调函数 */
  onClick?: (e: MouseEvent) => void
  /** 悬停时是否暂停计时器，默认 true */
  pauseOnHover?: boolean
}

/** 语义化结构 className，可对提示内部各子节点应用自定义 class */
export interface MessageClassNames {
  /** 单条提示的最外层容器（控制进出场动画与定位） */
  wrapper?: string
  /** 提示卡片主体（背景、圆角、阴影、内边距） */
  notice?: string
  /** 状态图标容器 */
  icon?: string
  /** 提示文本内容容器 */
  title?: string
}

/** 语义化结构 style，可对提示内部各子节点应用内联样式 */
export interface MessageStyles {
  wrapper?: CSSProperties
  notice?: CSSProperties
  icon?: CSSProperties
  title?: CSSProperties
}

export type JointContent = MessageContent | ArgsProps

export interface ConfigOptions {
  /** 距离顶部的距离 */
  top?: string | number
  /** 默认自动关闭延时，单位秒 */
  duration?: number
  /** 提示组件 class 前缀 */
  prefixCls?: string
  /** 配置渲染节点的输出位置，默认 document.body */
  getContainer?: () => HTMLElement
  /** 最大显示数，超过限制时关闭最早的提示 */
  maxCount?: number
  /** 是否开启 RTL 模式 */
  rtl?: boolean
  /** 悬停时是否暂停计时器，默认 true */
  pauseOnHover?: boolean
}

/** 调用方法的返回值：可作为函数调用以手动关闭，同时是 thenable，关闭后 resolve(true) */
export interface MessageType extends PromiseLike<boolean> {
  (): void
}

export type TypeOpen = (
  content: JointContent,
  /** 持续时间（秒），也可直接传入 onClose 回调 */
  duration?: number | (() => void),
  /** 关闭时触发的回调函数 */
  onClose?: () => void,
) => MessageType

export interface MessageInstance {
  info: TypeOpen
  success: TypeOpen
  error: TypeOpen
  warning: TypeOpen
  loading: TypeOpen
  open: (args: ArgsProps) => MessageType
  destroy: (key?: string | number) => void
}

export interface MessageApi extends MessageInstance {
  /** 全局配置 message（top / duration / maxCount / getContainer / pauseOnHover） */
  config: (options: ConfigOptions) => void
}
