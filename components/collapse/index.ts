import { Collapse as _Collapse, CollapsePanel } from './Collapse'

export const Collapse = Object.assign(_Collapse, { Panel: CollapsePanel })
export { CollapsePanel }
export type { CollapseItem, CollapsibleType, CollapsePanelProps, ExpandIconProps } from './types'
