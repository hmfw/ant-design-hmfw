import { defineComponent, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'

export type StepStatus = 'wait' | 'process' | 'finish' | 'error'

export interface StepItem {
  title: string
  description?: string
  status?: StepStatus
  icon?: string
  disabled?: boolean
  subTitle?: string
}

export const Steps = defineComponent({
  name: 'Steps',
  props: {
    current: { type: Number, default: 0 },
    direction: { type: String as PropType<'horizontal' | 'vertical'>, default: 'horizontal' },
    size: { type: String as PropType<'default' | 'small'>, default: 'default' },
    status: { type: String as PropType<StepStatus>, default: 'process' },
    type: { type: String as PropType<'default' | 'navigation' | 'inline'>, default: 'default' },
    labelPlacement: { type: String as PropType<'horizontal' | 'vertical'>, default: 'horizontal' },
    progressDot: Boolean,
    items: Array as PropType<StepItem[]>,
    initial: { type: Number, default: 0 },
  },
  emits: ['change'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('steps')

    const getStepStatus = (index: number, item: StepItem): StepStatus => {
      if (item.status) return item.status
      const adjustedIndex = index + props.initial
      if (adjustedIndex < props.current) return 'finish'
      if (adjustedIndex === props.current) return props.status
      return 'wait'
    }

    const getStepIcon = (index: number, status: StepStatus, item: StepItem) => {
      if (item.icon) return item.icon
      if (props.progressDot) return '•'
      if (status === 'finish') return '✓'
      if (status === 'error') return '✕'
      return String(index + props.initial + 1)
    }

    return () => {
      const items = props.items ?? []

      return (
        <div
          class={cls(prefixCls, `${prefixCls}-${props.direction}`, {
            [`${prefixCls}-${props.size}`]: props.size !== 'default',
            [`${prefixCls}-label-${props.labelPlacement}`]: props.labelPlacement !== 'horizontal',
            [`${prefixCls}-dot`]: props.progressDot,
            [`${prefixCls}-navigation`]: props.type === 'navigation',
            [`${prefixCls}-inline`]: props.type === 'inline',
          })}
          role="list"
          aria-label="步骤条"
        >
          {items.map((item, index) => {
            const status = getStepStatus(index, item)
            const icon = getStepIcon(index, status, item)
            const isClickable = !item.disabled && index !== props.current

            return (
              <div
                key={index}
                class={cls(`${prefixCls}-item`, `${prefixCls}-item-${status}`, {
                  [`${prefixCls}-item-disabled`]: item.disabled,
                  [`${prefixCls}-item-active`]: index + props.initial === props.current,
                })}
                role="listitem"
                aria-current={index + props.initial === props.current ? 'step' : undefined}
                aria-disabled={item.disabled || undefined}
                onClick={() => isClickable && emit('change', index + props.initial)}
              >
                <div class={`${prefixCls}-item-container`}>
                  <div class={`${prefixCls}-item-tail`} />
                  <div class={cls(`${prefixCls}-item-icon`, {
                    [`${prefixCls}-item-icon-${status}`]: true,
                  })}>
                    <span class={`${prefixCls}-icon`}>{icon}</span>
                  </div>
                  <div class={`${prefixCls}-item-content`}>
                    <div class={`${prefixCls}-item-title`}>
                      {item.title}
                      {item.subTitle && (
                        <span class={`${prefixCls}-item-subtitle`}>{item.subTitle}</span>
                      )}
                    </div>
                    {item.description && (
                      <div class={`${prefixCls}-item-description`}>{item.description}</div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )
    }
  },
})
