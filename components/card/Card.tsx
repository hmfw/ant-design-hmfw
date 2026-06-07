import { defineComponent, computed, ref, watch, type PropType, Fragment, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { CardType, CardVariant, CardLoadingConfig, TabItem } from './types'

// 判断子节点中是否包含 Card.Grid
function containsGrid(children: VNode[]): boolean {
  return children.some((child) => {
    if (!child) return false
    if (child.type === Fragment && Array.isArray(child.children)) {
      return containsGrid(child.children as VNode[])
    }
    return (child.type as any)?.name === 'CardGrid'
  })
}

export const Card = defineComponent({
  name: 'Card',
  props: {
    title: String,
    bordered: {
      type: Boolean,
      default: true,
    },
    variant: {
      type: String as PropType<CardVariant>,
      default: undefined,
    },
    hoverable: Boolean,
    loading: {
      type: [Boolean, Object] as PropType<boolean | CardLoadingConfig>,
      default: false,
    },
    size: {
      type: String as PropType<'default' | 'small'>,
      default: 'default',
    },
    type: {
      type: String as PropType<CardType>,
      default: undefined,
    },
    bodyStyle: Object as PropType<Record<string, string>>,
    headStyle: Object as PropType<Record<string, string>>,
    tabList: Array as PropType<TabItem[]>,
    activeTabKey: String,
    defaultActiveTabKey: String,
    onTabChange: Function as PropType<(key: string) => void>,
  },
  emits: ['update:activeTabKey', 'tabChange'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('card')

    // 标签页受控/非受控逻辑
    const innerActiveKey = ref(props.defaultActiveTabKey ?? props.tabList?.[0]?.key)

    watch(
      () => props.activeTabKey,
      (val) => {
        if (val !== undefined) {
          innerActiveKey.value = val
        }
      },
      { immediate: true },
    )

    const handleTabChange = (key: string) => {
      if (props.activeTabKey === undefined) {
        innerActiveKey.value = key
      }
      emit('update:activeTabKey', key)
      emit('tabChange', key)
      props.onTabChange?.(key)
    }

    // variant 优先于 bordered：'borderless' → 无边框；'outlined' → 有边框
    const mergedBordered = computed(() => {
      if (props.variant) return props.variant === 'outlined'
      return props.bordered
    })

    const isLoading = computed(() => {
      return props.loading === true || (typeof props.loading === 'object' && !!props.loading)
    })

    const classes = computed(() =>
      cls(prefixCls, {
        [`${prefixCls}-bordered`]: mergedBordered.value,
        [`${prefixCls}-hoverable`]: props.hoverable,
        [`${prefixCls}-loading`]: isLoading.value,
        [`${prefixCls}-small`]: props.size === 'small',
        [`${prefixCls}-type-${props.type}`]: !!props.type,
      }),
    )

    return () => {
      const hasHead = props.title || slots.title || slots.extra
      const hasTabs = props.tabList && props.tabList.length > 0

      const coverNode = slots.cover && <div class={`${prefixCls}-cover`}>{slots.cover()}</div>

      // 解析 loading 配置
      const loadingConfig =
        typeof props.loading === 'object' ? props.loading : { avatar: false, paragraph: { rows: 3 } }
      const showAvatar = typeof props.loading === 'object' && loadingConfig.avatar
      const paragraphRows = typeof props.loading === 'object' ? (loadingConfig.paragraph?.rows ?? 3) : 3

      // 标签页节点
      const tabsNode = hasTabs && (
        <div class={`${prefixCls}-head-tabs`}>
          <div class={`${prefixCls}-tabs-nav`}>
            {props.tabList!.map((tab) => (
              <div
                key={tab.key}
                class={cls(`${prefixCls}-tab`, {
                  [`${prefixCls}-tab-active`]: tab.key === innerActiveKey.value,
                  [`${prefixCls}-tab-disabled`]: tab.disabled,
                })}
                onClick={() => !tab.disabled && handleTabChange(tab.key)}
              >
                {tab.label}
              </div>
            ))}
          </div>
          {slots.tabBarExtraContent && <div class={`${prefixCls}-tabs-extra`}>{slots.tabBarExtraContent()}</div>}
        </div>
      )

      const headNode = (hasHead || hasTabs) && (
        <div class={`${prefixCls}-head`} style={props.headStyle}>
          {hasHead && (
            <div class={`${prefixCls}-head-wrapper`}>
              {(props.title || slots.title) && (
                <div class={`${prefixCls}-head-title`}>{slots.title ? slots.title() : props.title}</div>
              )}
              {slots.extra && <div class={`${prefixCls}-extra`}>{slots.extra()}</div>}
            </div>
          )}
          {tabsNode}
        </div>
      )

      const defaultChildren = slots.default?.() ?? []
      const hasGrid = Array.isArray(defaultChildren) && containsGrid(defaultChildren)

      const bodyNode = (
        <div class={`${prefixCls}-body`} style={props.bodyStyle}>
          {isLoading.value ? (
            <div class={`${prefixCls}-loading-content`}>
              {showAvatar && <div class={`${prefixCls}-loading-avatar`} />}
              <div class={`${prefixCls}-loading-detail`}>
                {Array.from({ length: paragraphRows }).map((_, i) => (
                  <div key={i} class={`${prefixCls}-loading-block`} />
                ))}
              </div>
            </div>
          ) : (
            defaultChildren
          )}
        </div>
      )

      const actionsNode = slots.actions && <ul class={`${prefixCls}-actions`}>{slots.actions()}</ul>

      return (
        <div class={cls(classes.value, { [`${prefixCls}-contain-grid`]: hasGrid })}>
          {coverNode}
          {headNode}
          {bodyNode}
          {actionsNode}
        </div>
      )
    }
  },
})

export const CardGrid = defineComponent({
  name: 'CardGrid',
  props: {
    hoverable: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('card')
    return () => (
      <div
        class={cls(`${prefixCls}-grid`, {
          [`${prefixCls}-grid-hoverable`]: props.hoverable,
        })}
      >
        {slots.default?.()}
      </div>
    )
  },
})

export const CardMeta = defineComponent({
  name: 'CardMeta',
  props: {
    title: String,
    description: String,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('card')
    const metaPrefixCls = `${prefixCls}-meta`

    return () => (
      <div class={metaPrefixCls}>
        {slots.avatar && <div class={`${metaPrefixCls}-avatar`}>{slots.avatar()}</div>}
        <div class={`${metaPrefixCls}-detail`}>
          {(props.title || slots.title) && (
            <div class={`${metaPrefixCls}-title`}>{slots.title ? slots.title() : props.title}</div>
          )}
          {(props.description || slots.description) && (
            <div class={`${metaPrefixCls}-description`}>
              {slots.description ? slots.description() : props.description}
            </div>
          )}
        </div>
      </div>
    )
  },
})
