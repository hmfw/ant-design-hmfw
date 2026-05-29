import { defineComponent, ref, computed, watch, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'

export interface CollapseItem {
  key: string
  label: string
  children?: unknown
  disabled?: boolean
  showArrow?: boolean
  extra?: string
}

export const Collapse = defineComponent({
  name: 'Collapse',
  props: {
    activeKey: [String, Array] as PropType<string | string[]>,
    defaultActiveKey: [String, Array] as PropType<string | string[]>,
    accordion: Boolean,
    bordered: { type: Boolean, default: true },
    ghost: Boolean,
    size: { type: String as PropType<'small' | 'middle' | 'large'>, default: 'middle' },
    expandIconPosition: { type: String as PropType<'start' | 'end'>, default: 'start' },
    items: Array as PropType<CollapseItem[]>,
    destroyInactivePanel: Boolean,
  },
  emits: ['update:activeKey', 'change'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('collapse')

    const normalize = (v: string | string[] | undefined): string[] => {
      if (!v) return []
      return Array.isArray(v) ? v : [v]
    }

    const innerKeys = ref<string[]>(normalize(props.defaultActiveKey ?? props.activeKey))

    const isControlled = computed(() => props.activeKey !== undefined)
    const currentKeys = computed(() =>
      isControlled.value ? normalize(props.activeKey) : innerKeys.value,
    )

    watch(() => props.activeKey, (v) => {
      if (v !== undefined) innerKeys.value = normalize(v)
    })

    const toggle = (key: string) => {
      const keys = currentKeys.value
      let next: string[]
      if (props.accordion) {
        next = keys.includes(key) ? [] : [key]
      } else {
        next = keys.includes(key) ? keys.filter((k) => k !== key) : [...keys, key]
      }
      innerKeys.value = next
      const emitVal = props.accordion ? (next[0] ?? '') : next
      emit('update:activeKey', emitVal)
      emit('change', emitVal)
    }

    return () => {
      const items = props.items ?? []

      return (
        <div class={cls(prefixCls, {
          [`${prefixCls}-borderless`]: !props.bordered,
          [`${prefixCls}-ghost`]: props.ghost,
          [`${prefixCls}-${props.size}`]: props.size !== 'middle',
          [`${prefixCls}-icon-position-end`]: props.expandIconPosition === 'end',
        })}>
          {items.map((item) => {
            const isOpen = currentKeys.value.includes(item.key)
            const shouldRender = isOpen || !props.destroyInactivePanel

            return (
              <div
                key={item.key}
                class={cls(`${prefixCls}-item`, {
                  [`${prefixCls}-item-active`]: isOpen,
                  [`${prefixCls}-item-disabled`]: item.disabled,
                })}
              >
                <div
                  class={`${prefixCls}-header`}
                  onClick={() => !item.disabled && toggle(item.key)}
                  role="button"
                  aria-expanded={isOpen}
                >
                  {item.showArrow !== false && (
                    <span class={cls(`${prefixCls}-expand-icon`, {
                      [`${prefixCls}-expand-icon-active`]: isOpen,
                    })}>
                      ▶
                    </span>
                  )}
                  <span class={`${prefixCls}-header-text`}>{item.label}</span>
                  {item.extra && (
                    <span class={`${prefixCls}-extra`}>{item.extra}</span>
                  )}
                </div>
                {shouldRender && (
                  <div
                    class={cls(`${prefixCls}-content`, {
                      [`${prefixCls}-content-active`]: isOpen,
                      [`${prefixCls}-content-inactive`]: !isOpen,
                    })}
                    role="region"
                  >
                    <div class={`${prefixCls}-content-box`}>
                      {item.children as any ?? slots[item.key]?.()}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
          {slots.default?.()}
        </div>
      )
    }
  },
})

export const CollapsePanel = defineComponent({
  name: 'CollapsePanel',
  props: {
    header: String,
    disabled: Boolean,
    showArrow: { type: Boolean, default: true },
    extra: String,
    forceRender: Boolean,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('collapse')
    return () => (
      <div class={`${prefixCls}-item`}>
        <div class={`${prefixCls}-header`}>
          {props.showArrow && <span class={`${prefixCls}-expand-icon`}>▶</span>}
          <span class={`${prefixCls}-header-text`}>{props.header}</span>
          {props.extra && <span class={`${prefixCls}-extra`}>{props.extra}</span>}
        </div>
        <div class={`${prefixCls}-content ${prefixCls}-content-active`}>
          <div class={`${prefixCls}-content-box`}>{slots.default?.()}</div>
        </div>
      </div>
    )
  },
})
