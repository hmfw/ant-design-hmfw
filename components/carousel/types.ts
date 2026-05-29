export type CarouselEffect = 'scrollx' | 'fade'
export type CarouselDotPosition = 'top' | 'bottom' | 'left' | 'right'

export interface CarouselProps {
  autoplay?: boolean
  autoplaySpeed?: number
  dots?: boolean
  dotPosition?: CarouselDotPosition
  effect?: CarouselEffect
  infinite?: boolean
}
