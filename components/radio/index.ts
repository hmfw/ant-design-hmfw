import { Radio as RadioComponent, RadioGroup as RadioGroupComponent, RadioButton as RadioButtonComponent } from './Radio'

export type { RadioProps, RadioGroupProps, RadioValueType, RadioChangeEvent } from './types'

// Attach sub-components
const Radio = RadioComponent as typeof RadioComponent & {
  Group: typeof RadioGroupComponent
  Button: typeof RadioButtonComponent
}

Radio.Group = RadioGroupComponent
Radio.Button = RadioButtonComponent

export { Radio, RadioGroupComponent as RadioGroup, RadioButtonComponent as RadioButton }
export default Radio

