import { FloatButton as InternalFloatButton } from './FloatButton'
import { FloatButtonGroup } from './FloatButtonGroup'
import { FloatButtonBackTop } from './FloatButtonBackTop'

type FloatButtonCompound = typeof InternalFloatButton & {
  Group: typeof FloatButtonGroup
  BackTop: typeof FloatButtonBackTop
}

const FloatButton = InternalFloatButton as FloatButtonCompound
FloatButton.Group = FloatButtonGroup
FloatButton.BackTop = FloatButtonBackTop

export { FloatButton, FloatButtonGroup, FloatButtonBackTop }
export type {
  FloatButtonProps,
  FloatButtonGroupProps,
  FloatButtonBackTopProps,
  FloatButtonType,
  FloatButtonShape,
  FloatButtonHTMLType,
  FloatButtonTrigger,
  FloatButtonGroupPlacement,
  FloatButtonBadgeProps,
  FloatButtonClassNames,
  FloatButtonStyles,
} from './types'
