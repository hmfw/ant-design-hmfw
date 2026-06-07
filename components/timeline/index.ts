import { Timeline as InternalTimeline, TimelineItem } from './Timeline'

type TimelineType = typeof InternalTimeline & {
  Item: typeof TimelineItem
}

const Timeline = InternalTimeline as TimelineType
Timeline.Item = TimelineItem

export { Timeline, TimelineItem }
export type {
  TimelineProps,
  TimelineItemProps,
  TimelineMode,
  TimelineOrientation,
  TimelineVariant,
  TimelineItemPlacement,
  TimelineItemColor,
} from './types'
