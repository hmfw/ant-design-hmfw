import { defineComponent, ref, watch, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { TabsType, TabsSize, TabsPosition, TabItem } from './types'

export const Tabs = defineComponent({
  name: 'Tabs',
  props: {
    activeKey: String,
    defaultActiveKey: String,
    type: {
      type: String as PropType<TabsType>,
      default: 'line',
    },
    size: String as PropType<TabsSize>,
    tabPosition: {
      type: String as PropType<TabsPosition>,
      default: 'top',
    },
    centered: Boolean,
    items: Array as PropType<TabItem[]>,
  },
  emits: ['update:activeKey', 'change', 'tabClick'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('tabs')
    const innerKey = ref(props.defaultActiveKey ?? props.items?.[0]?.key ?? '')

    watch(() => props.activeKey, (v) => { if (v !== undefined) innerKey.value = v })

    const currentKey = computed(() =>
      props.activeKey !== undefined ? props.activeKey : innerKey.value,
    )

    const handleTabClick = (key: string) => {
      innerKey.value = key
      emit('update:activeKey', key)
      emit('change', key)
      emit('tabClick', key)
    }

    return () => {
      const items = props.items ?? []

      const sizeClass = props.size ? `${prefixCls}-${props.size}` : ''
      const posClass = props.tabPosition !== 'top' ? `${prefixCls}-${props.tabPosition}` : ''

      return (
        <div class={cls(prefixCls, `${prefixCls}-${props.type}`, sizeClass, posClass, {
          [`${prefixCls}-centered`]: props.centered,
        })}>
          <div class={`${prefixCls}-nav`}>
            <div class={`${prefixCls}-nav-list`} role="tablist" aria-orientation={props.tabPosition === 'left' || props.tabPosition === 'right' ? 'vertical' : 'horizontal'}>
              {items.map((item) => (
                <div
                  key={item.key}
                  id={`tab-${item.key}`}
                  class={cls(`${prefixCls}-tab`, {
                    [`${prefixCls}-tab-active`]: item.key === currentKey.value,
                    [`${prefixCls}-tab-disabled`]: item.disabled,
                  })}
                  role="tab"
                  aria-selected={item.key === currentKey.value}
                  aria-controls={`tabpanel-${item.key}`}
                  aria-disabled={item.disabled || undefined}
                  tabindex={item.disabled ? -1 : item.key === currentKey.value ? 0 : -1}
                  onClick={() => !item.disabled && handleTabClick(item.key)}
                >
                  <div class={`${prefixCls}-tab-btn`}>{item.label}</div>
                </div>
              ))}
            </div>
            <div class={`${prefixCls}-ink-bar`} />
          </div>
          <div class={`${prefixCls}-content-holder`}>
            <div class={`${prefixCls}-content`}>
              {items.map((item) => (
                <div
                  key={item.key}
                  id={`tabpanel-${item.key}`}
                  class={cls(`${prefixCls}-tabpane`, {
                    [`${prefixCls}-tabpane-active`]: item.key === currentKey.value,
                    [`${prefixCls}-tabpane-hidden`]: item.key !== currentKey.value,
                  })}
                  role="tabpanel"
                  aria-labelledby={`tab-${item.key}`}
                  tabindex={item.key === currentKey.value ? 0 : -1}
                  hidden={item.key !== currentKey.value || undefined}
                >
                  {item.key === currentKey.value && (item.children ?? slots[item.key]?.())}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  },
})
