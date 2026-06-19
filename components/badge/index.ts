import { Badge as InternalBadge } from './Badge'
import { Ribbon } from './Ribbon'

type BadgeType = typeof InternalBadge & {
  Ribbon: typeof Ribbon
}

const Badge = InternalBadge as BadgeType
Badge.Ribbon = Ribbon

export { Badge, Ribbon }
export type {
  BadgeProps,
  BadgeStatus,
  BadgeSize,
  BadgeClassNames,
  BadgeStyles,
  RibbonProps,
  RibbonPlacement,
} from './types'
