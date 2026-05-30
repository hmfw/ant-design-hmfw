import { Card as InternalCard, CardGrid, CardMeta } from './Card'

type CardType = typeof InternalCard & {
  Grid: typeof CardGrid
  Meta: typeof CardMeta
}

const Card = InternalCard as CardType
Card.Grid = CardGrid
Card.Meta = CardMeta

export { Card, CardGrid, CardMeta }
export type { CardProps, CardMetaProps, CardGridProps, CardType as CardTypeProp, CardVariant } from './types'
