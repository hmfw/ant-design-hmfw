import { Collapse as _Collapse } from './Collapse'
import { CollapsePanel } from './CollapsePanel'

export const Collapse = Object.assign(_Collapse, { Panel: CollapsePanel })
export { CollapsePanel }
export type {
  CollapseItem,
  CollapsibleType,
  CollapsePanelProps,
  ExpandIconProps,
  CollapseClassNames,
  CollapseStyles,
} from './types'
