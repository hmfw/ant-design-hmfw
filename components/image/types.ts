import type { VNode, CSSProperties } from 'vue'

/** Image 组件语义化 className */
export interface ImageClassNames {
  /** 图片根容器 */
  root?: string
  /** img 元素 */
  img?: string
  /** hover 遮罩层 */
  mask?: string
  /** 遮罩内容（预览文本） */
  maskInfo?: string
  /** 预览弹层根容器 */
  preview?: string
  /** 预览遮罩层 */
  previewMask?: string
  /** 预览图片包裹容器 */
  previewWrap?: string
  /** 预览图片元素 */
  previewImg?: string
  /** 预览操作栏 */
  operations?: string
  /** 预览操作按钮 */
  operationBtn?: string
  /** 预览关闭按钮 */
  closeBtn?: string
  /** 预览切换按钮（左右箭头） */
  switchBtn?: string
  /** 预览图片计数 */
  count?: string
  /** 加载占位容器 */
  placeholder?: string
  /** 错误占位容器 */
  error?: string
}

/** Image 组件语义化 style */
export interface ImageStyles {
  root?: CSSProperties
  img?: CSSProperties
  mask?: CSSProperties
  maskInfo?: CSSProperties
  preview?: CSSProperties
  previewMask?: CSSProperties
  previewWrap?: CSSProperties
  previewImg?: CSSProperties
  operations?: CSSProperties
  operationBtn?: CSSProperties
  closeBtn?: CSSProperties
  switchBtn?: CSSProperties
  count?: CSSProperties
  placeholder?: CSSProperties
  error?: CSSProperties
}

/** 预览操作 transform 状态 */
export interface TransformType {
  x: number
  y: number
  rotate: number
  scale: number
  flipX: boolean
  flipY: boolean
}

export type TransformAction =
  | 'flipY'
  | 'flipX'
  | 'rotateLeft'
  | 'rotateRight'
  | 'zoomIn'
  | 'zoomOut'
  | 'close'
  | 'prev'
  | 'next'
  | 'wheel'
  | 'doubleClick'
  | 'move'
  | 'reset'

/** 预览图片信息 */
export interface ImgInfo {
  url: string
  alt?: string
  width?: number | string
  height?: number | string
}

/** 遮罩配置（对象形式） */
export interface MaskType {
  /** 是否启用遮罩（hover 提示层），false 等价于不展示遮罩 */
  enabled?: boolean
  /** 点击遮罩是否可关闭预览 */
  closable?: boolean
}

export type ImageContent = VNode | (() => VNode)

/** 预览配置（对象形式） */
export interface PreviewConfig {
  /** 受控：是否打开预览 */
  open?: boolean
  /** 预览开关变化回调 */
  onOpenChange?: (open: boolean) => void
  /** 自定义预览图片地址 */
  src?: string
  /** 自定义关闭图标 */
  closeIcon?: ImageContent | false
  /** 自定义 hover 遮罩内容（cover） */
  cover?: ImageContent
  /** 遮罩开关与可点击关闭配置 */
  mask?: boolean | MaskType
  /** 缩放每步倍率（1 + scaleStep） */
  scaleStep?: number
  /** 最小缩放 */
  minScale?: number
  /** 最大缩放 */
  maxScale?: number
  /** 是否可拖拽移动 */
  movable?: boolean
  /** 预览挂载容器；false 时原地渲染 */
  getContainer?: string | HTMLElement | (() => HTMLElement) | false
  /** 预览根节点 z-index */
  zIndex?: number
  /** 预览 transform 变化回调 */
  onTransform?: (info: { transform: TransformType; action: TransformAction }) => void
  /** 自定义预览内容渲染（info 含 transform、current、total、image） */
  imageRender?: (originalNode: VNode, info: ImageRenderInfoType) => VNode
  /** 自定义底部工具栏渲染（参考 AntD v6 preview.toolbarRender） */
  toolbarRender?: (originalNode: VNode, info: ToolbarRenderInfoType) => VNode
}

/** imageRender 信息 */
export interface ImageRenderInfoType {
  transform: TransformType
  /** 当前图片索引（PreviewGroup 场景） */
  current?: number
  /** 图片总数（PreviewGroup 场景） */
  total?: number
  /** 当前预览图片信息 */
  image: ImgInfo
}

/** toolbarRender / actionsRender 信息 */
export interface ToolbarRenderInfoType {
  transform: TransformType
  current?: number
  total?: number
  /** 当前预览图片信息 */
  image: ImgInfo
  actions: {
    onFlipY: () => void
    onFlipX: () => void
    onRotateLeft: () => void
    onRotateRight: () => void
    onZoomOut: () => void
    onZoomIn: () => void
    onReset: () => void
    onClose: () => void
    /** 按偏移切换图片（PreviewGroup 场景，-1 上一张 / 1 下一张） */
    onActive?: (offset: number) => void
  }
}

export interface ImageProps {
  src?: string
  alt?: string
  width?: number | string
  height?: number | string
  /** 是否开启预览，或预览配置对象 */
  preview?: boolean | PreviewConfig
  /** 加载失败时的替代图片地址 */
  fallback?: string
  /** 加载占位：true 显示骨架动画，或自定义 VNode */
  placeholder?: boolean | ImageContent
  /** 语义化结构 class */
  classNames?: ImageClassNames
  /** 语义化结构 style */
  styles?: ImageStyles
  /** 加载失败回调 */
  onError?: (e: Event) => void
}

export interface PreviewGroupProps {
  /** 是否开启预览，或预览配置对象 */
  preview?: boolean | PreviewConfig
  /** 预览图片项（无子组件时用） */
  items?: (string | ImgInfo)[]
  /** 受控：当前预览索引 */
  current?: number
  /** 切换预览图片回调 */
  onChange?: (current: number, prevCurrent: number) => void
}
