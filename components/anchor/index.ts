import { Anchor as InternalAnchor } from './Anchor'
import { AnchorLink } from './AnchorLink'

export type { AnchorProps, AnchorLinkItem, AnchorLinkProps } from './types'

type InternalAnchorType = typeof InternalAnchor

interface CompoundedComponent extends InternalAnchorType {
  Link: typeof AnchorLink
}

const Anchor = InternalAnchor as CompoundedComponent
Anchor.Link = AnchorLink

export { Anchor, AnchorLink }
