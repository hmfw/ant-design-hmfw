import { Card as InternalCard } from './Card'
import { CardGrid } from './CardGrid'
import { CardMeta } from './CardMeta'

type CardType = typeof InternalCard & {
  Grid: typeof CardGrid
  Meta: typeof CardMeta
}

const Card = InternalCard as CardType
Card.Grid = CardGrid
Card.Meta = CardMeta

export { Card, CardGrid, CardMeta }
export type {
  CardProps,
  CardMetaProps,
  CardGridProps,
  CardType as CardTypeProp,
  CardVariant,
  CardClassNames,
  CardStyles,
  CardLoadingConfig,
  TabItem,
  CardTabChangeHandler,
} from './types'
