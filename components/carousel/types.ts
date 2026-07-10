import type { CSSProperties, VNode } from 'vue'

export type CarouselEffect = 'scrollx' | 'fade'

export type CarouselDotPlacement = 'top' | 'bottom' | 'left' | 'right' | 'start' | 'end'

export interface CarouselRef {
  /** 跳转到指定 slide */
  goTo: (slide: number, dontAnimate?: boolean) => void
  /** 切换到下一张 */
  next: () => void
  /** 切换到上一张 */
  prev: () => void
  /** 跳转到指定页 */
  goToPage: (page: number, dontAnimate?: boolean) => void
  /** 切换到下一页 */
  nextPage: () => void
  /** 切换到上一页 */
  prevPage: () => void
}

/**
 * Carousel 组件的语义化类名
 */
export interface CarouselClassNames {
  /** 根元素 */
  root?: string
  /** 可视区域容器 */
  list?: string
  /** 滑动轨道 */
  track?: string
  /** 单个幻灯片 */
  slide?: string
  /** 当前激活的幻灯片 */
  slideActive?: string
  /** 箭头按钮（左右共用） */
  arrow?: string
  /** 左箭头 */
  arrowLeft?: string
  /** 右箭头 */
  arrowRight?: string
  /** 指示器容器 */
  dots?: string
  /** 单个指示器 */
  dot?: string
  /** 当前激活的指示器 */
  dotActive?: string
}

/**
 * Carousel 组件的语义化样式
 */
export interface CarouselStyles {
  /** 根元素 */
  root?: CSSProperties
  /** 可视区域容器 */
  list?: CSSProperties
  /** 滑动轨道 */
  track?: CSSProperties
  /** 单个幻灯片 */
  slide?: CSSProperties
  /** 当前激活的幻灯片 */
  slideActive?: CSSProperties
  /** 箭头按钮（左右共用） */
  arrow?: CSSProperties
  /** 左箭头 */
  arrowLeft?: CSSProperties
  /** 右箭头 */
  arrowRight?: CSSProperties
  /** 指示器容器 */
  dots?: CSSProperties
  /** 单个指示器 */
  dot?: CSSProperties
  /** 当前激活的指示器 */
  dotActive?: CSSProperties
}

export interface CarouselProps {
  /** 是否自动切换 */
  autoplay?: boolean
  /** 自动切换间隔（ms） */
  delay?: number
  /** 是否显示指示点 */
  dots?: boolean
  /** 指示点位置，可选 `top` `bottom` `start` `end` */
  dotPlacement?: CarouselDotPlacement
  /** 切换效果 */
  effect?: CarouselEffect
  /** 是否使用渐显过渡（优先级高于 `effect`） */
  fade?: boolean
  /** 是否循环播放 */
  loop?: boolean
  /** 动画时长（ms） */
  speed?: number
  /** 过渡缓动函数 */
  easing?: string
  /** 初始 slide 索引 */
  initialSlide?: number
  /** 是否显示切换箭头 */
  arrows?: boolean
  /** 自定义前进箭头 */
  prevArrow?: VNode
  /** 自定义后退箭头 */
  nextArrow?: VNode
  /** 切换时是否等待动画完成 */
  waitForAnimate?: boolean
  /** 根据当前 slide 自动调整高度 */
  adaptiveHeight?: boolean
  /** 每屏显示的 slide 数量 */
  slidesPerView?: number
  /** 每次步进的 slide 数量 */
  slidesPerGroup?: number
  /** slide 之间的间距（px），仅在 `slidesPerView > 1` 时生效 */
  spaceBetween?: number
  /** 语义化类名 */
  classNames?: CarouselClassNames
  /** 语义化样式 */
  styles?: CarouselStyles
}

export interface CarouselEmits {
  /** 切换前触发 */
  beforeChange: (from: number, to: number) => void
  /** 切换完成时触发 */
  afterChange: (current: number) => void
}
