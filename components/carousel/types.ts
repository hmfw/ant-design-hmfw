import type { CSSProperties, VNode } from 'vue'

export type CarouselEffect = 'scrollx' | 'fade'

/** @deprecated Use `dotPlacement` instead */
export type CarouselDotPosition = 'top' | 'bottom' | 'left' | 'right'

export type CarouselDotPlacement = 'top' | 'bottom' | 'start' | 'end'

export interface CarouselDotsConfig {
  className?: string
}

export interface CarouselAutoplayConfig {
  /** Display progress bar on dots (v5.24.0+) */
  dotDuration?: boolean
}

export interface CarouselRef {
  goTo: (slide: number, dontAnimate?: boolean) => void
  next: () => void
  prev: () => void
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
  /** Whether to scroll automatically */
  autoplay?: boolean | CarouselAutoplayConfig
  /** Delay between each auto scroll (in milliseconds) */
  autoplaySpeed?: number
  /** Whether to show the dots at the bottom of the gallery */
  dots?: boolean | CarouselDotsConfig
  /**
   * The position of the dots
   * @deprecated Use `dotPlacement` instead
   */
  dotPosition?: CarouselDotPosition
  /** The position of the dots, which can be one of `top` `bottom` `start` `end` */
  dotPlacement?: CarouselDotPlacement
  /** Transition effect */
  effect?: CarouselEffect
  /** Whether to use fade transition (takes priority over effect) */
  fade?: boolean
  /** Infinitely wrap around contents */
  infinite?: boolean
  /** Animation speed in milliseconds */
  speed?: number
  /** Transition interpolation function name */
  easing?: string
  /** Initial slide index */
  initialSlide?: number
  /** Whether to show switch arrows */
  arrows?: boolean
  /** Custom previous arrow */
  prevArrow?: VNode
  /** Custom next arrow */
  nextArrow?: VNode
  /** Whether to wait for the animation when switching */
  waitForAnimate?: boolean
  /** Adjust the height of the carousel for the current slide */
  adaptiveHeight?: boolean
  /** Root class name */
  rootClassName?: string
  /** 语义化类名 */
  classNames?: CarouselClassNames
  /** 语义化样式 */
  styles?: CarouselStyles
}
