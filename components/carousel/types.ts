import type { VNode } from 'vue'

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
  /** Root class name */
  rootClassName?: string
}
