import { Descriptions as InternalDescriptions } from './Descriptions'
import { DescriptionsItem } from './DescriptionsItem'

type DescriptionsType = typeof InternalDescriptions & {
  Item: typeof DescriptionsItem
}

const Descriptions = InternalDescriptions as DescriptionsType
Descriptions.Item = DescriptionsItem

export { Descriptions, DescriptionsItem }
export type { DescriptionsProps, DescriptionsItemProps } from './types'
