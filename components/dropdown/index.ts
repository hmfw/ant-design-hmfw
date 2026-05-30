import { Dropdown as InternalDropdown } from './Dropdown'
import { DropdownButton } from './DropdownButton'

export type { DropdownProps, DropdownPlacement, DropdownTrigger, DropdownArrowOptions } from './types'
export type { DropdownButtonProps } from './DropdownButton'

type DropdownType = typeof InternalDropdown & {
  Button: typeof DropdownButton
}

const Dropdown = InternalDropdown as DropdownType
Dropdown.Button = DropdownButton

export { Dropdown }

