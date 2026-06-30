import {
  defineComponent,
  ref,
  watch,
  computed,
  onMounted,
  onUnmounted,
  nextTick,
  isVNode,
  type PropType,
  type VNode,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { PlusOutlined, CloseOutlined } from '@hmfw/icons'
import type { TabsType, TabsSize, TabsPosition, TabItem, TabBarExtraContent, AnimatedConfig } from './types'

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
    animated: {
      type: [Boolean, Object] as PropType<boolean | AnimatedConfig>,
      default: true,
    },
    tabBarExtraContent: [Object, Function] as PropType<VNode | TabBarExtraContent>,
    tabBarGutter: Number,
    tabBarStyle: Object as PropType<Record<string, unknown>>,
    hideAdd: Boolean,
    addIcon: Object as PropType<VNode>,
    removeIcon: Object as PropType<VNode>,
    destroyInactiveTabPane: Boolean,
    classNames: Object as PropType<import('./types').TabsClassNames>,
    styles: Object as PropType<import('./types').TabsStyles>,
  },
  emits: ['update:activeKey', 'change', 'tabClick', 'edit'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('tabs')
    const innerKey = ref(props.defaultActiveKey ?? props.items?.[0]?.key ?? '')
    const navListRef = ref<HTMLElement | null>(null)
    const inkBarRef = ref<HTMLElement | null>(null)

    watch(
      () => props.activeKey,
      (v) => {
        if (v !== undefined) innerKey.value = v
      },
    )

    const currentKey = computed(() => (props.activeKey !== undefined ? props.activeKey : innerKey.value))

    const animatedConfig = computed(() => {
      if (typeof props.animated === 'boolean') {
        return { inkBar: props.animated, tabPane: props.animated }
      }
      return { inkBar: true, tabPane: false, ...props.animated }
    })

    const updateInkBar = () => {
      if (!navListRef.value || !inkBarRef.value || props.type !== 'line') return

      const activeTab = navListRef.value.querySelector(`.${prefixCls}-tab-active`) as HTMLElement
      if (!activeTab) return

      const isVertical = props.tabPosition === 'left' || props.tabPosition === 'right'

      if (isVertical) {
        inkBarRef.value.style.top = `${activeTab.offsetTop}px`
        inkBarRef.value.style.height = `${activeTab.offsetHeight}px`
        inkBarRef.value.style.width = '2px'
        inkBarRef.value.style.left = props.tabPosition === 'left' ? 'auto' : '0'
        inkBarRef.value.style.right = props.tabPosition === 'left' ? '0' : 'auto'
      } else {
        // 计算 activeTab 相对于 nav-wrap 的偏移（考虑 centered 模式下 nav-list 的偏移）
        const navListOffsetLeft = navListRef.value.offsetLeft
        inkBarRef.value.style.left = `${navListOffsetLeft + activeTab.offsetLeft}px`
        inkBarRef.value.style.width = `${activeTab.offsetWidth}px`
        inkBarRef.value.style.height = '2px'
        inkBarRef.value.style.top = 'auto'
        inkBarRef.value.style.bottom = '0'
      }
    }

    watch(currentKey, () => {
      nextTick(updateInkBar)
    })

    onMounted(() => {
      updateInkBar()
      // 监听窗口大小变化以重新计算 ink-bar 位置（centered 模式下很重要）
      window.addEventListener('resize', updateInkBar)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', updateInkBar)
    })

    const handleTabClick = (key: string, event: MouseEvent) => {
      innerKey.value = key
      emit('update:activeKey', key)
      emit('change', key)
      emit('tabClick', key, event)
    }

    const handleAdd = (event: MouseEvent) => {
      emit('edit', event, 'add')
    }

    const handleRemove = (key: string, event: MouseEvent) => {
      event.stopPropagation()
      emit('edit', key, 'remove')
    }

    const handleKeyDown = (key: string, event: KeyboardEvent, index: number) => {
      const items = props.items ?? []
      let targetIndex = index

      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault()
        targetIndex = index - 1
        if (targetIndex < 0) targetIndex = items.length - 1
      } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault()
        targetIndex = index + 1
        if (targetIndex >= items.length) targetIndex = 0
      } else if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        if (!items[index].disabled) {
          handleTabClick(key, event as unknown as MouseEvent)
        }
        return
      } else {
        return
      }

      // Find next non-disabled tab
      let attempts = 0
      while (items[targetIndex]?.disabled && attempts < items.length) {
        targetIndex = event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? targetIndex - 1 : targetIndex + 1
        if (targetIndex < 0) targetIndex = items.length - 1
        if (targetIndex >= items.length) targetIndex = 0
        attempts++
      }

      if (!items[targetIndex]?.disabled) {
        const targetTab = navListRef.value?.querySelectorAll(`.${prefixCls}-tab`)[targetIndex] as HTMLElement
        targetTab?.focus()
      }
    }

    return () => {
      const items = props.items ?? []
      const isEditable = props.type === 'editable-card'

      const sizeClass = props.size ? `${prefixCls}-${props.size}` : ''
      const posClass = props.tabPosition !== 'top' ? `${prefixCls}-${props.tabPosition}` : ''

      const isVertical = props.tabPosition === 'left' || props.tabPosition === 'right'

      const tabBarGutterStyle =
        props.tabBarGutter !== undefined
          ? isVertical
            ? { marginBottom: `${props.tabBarGutter}px` }
            : { marginRight: `${props.tabBarGutter}px` }
          : {}

      const renderExtraContent = () => {
        if (!props.tabBarExtraContent) return { left: null, right: null }

        // 判断是否为 { left, right } 对象形式（排除 VNode）
        if (
          !isVNode(props.tabBarExtraContent) &&
          typeof props.tabBarExtraContent === 'object' &&
          ('left' in props.tabBarExtraContent || 'right' in props.tabBarExtraContent)
        ) {
          const extra = props.tabBarExtraContent as TabBarExtraContent
          return {
            left: extra.left ? <div class={`${prefixCls}-extra-content-left`}>{extra.left}</div> : null,
            right: extra.right ? <div class={`${prefixCls}-extra-content-right`}>{extra.right}</div> : null,
          }
        }

        // 单个 VNode，默认靠右
        return {
          left: null,
          right: <div class={`${prefixCls}-extra-content`}>{props.tabBarExtraContent}</div>,
        }
      }

      return (
        <div
          class={cls(
            prefixCls,
            `${prefixCls}-${props.type}`,
            sizeClass,
            posClass,
            {
              [`${prefixCls}-centered`]: props.centered,
            },
            props.classNames?.root,
          )}
          style={props.styles?.root}
        >
          <div
            class={cls(`${prefixCls}-nav`, props.classNames?.nav)}
            style={{ ...(props.tabBarStyle as any), ...props.styles?.nav }}
          >
            {renderExtraContent().left}
            <div class={`${prefixCls}-nav-wrap`}>
              <div
                ref={navListRef}
                class={`${prefixCls}-nav-list`}
                role="tablist"
                aria-orientation={isVertical ? 'vertical' : 'horizontal'}
              >
                {items.map((item, index) => {
                  const isActive = item.key === currentKey.value
                  const showClose = isEditable && item.closable !== false

                  return (
                    <div
                      key={item.key}
                      id={`tab-${item.key}`}
                      class={cls(
                        `${prefixCls}-tab`,
                        {
                          [`${prefixCls}-tab-active`]: isActive,
                          [`${prefixCls}-tab-disabled`]: item.disabled,
                        },
                        props.classNames?.tab,
                        isActive && props.classNames?.tabActive,
                      )}
                      style={{
                        ...(index < items.length - 1 ? tabBarGutterStyle : undefined),
                        ...props.styles?.tab,
                        ...(isActive ? props.styles?.tabActive : undefined),
                      }}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`tabpanel-${item.key}`}
                      aria-disabled={item.disabled || undefined}
                      tabindex={item.disabled ? -1 : isActive ? 0 : -1}
                      onClick={(e) => !item.disabled && handleTabClick(item.key, e)}
                      onKeydown={(e) => handleKeyDown(item.key, e, index)}
                    >
                      <div class={`${prefixCls}-tab-btn`}>
                        {item.icon && (
                          <span
                            class={cls(`${prefixCls}-tab-icon`, props.classNames?.tabIcon)}
                            style={props.styles?.tabIcon}
                          >
                            {item.icon}
                          </span>
                        )}
                        {item.label}
                        {showClose && (
                          <button
                            type="button"
                            class={`${prefixCls}-tab-remove`}
                            aria-label="remove"
                            tabindex={-1}
                            onClick={(e) => handleRemove(item.key, e)}
                          >
                            {item.closeIcon || props.removeIcon || <CloseOutlined class="hmfw-icon" />}
                          </button>
                        )}
                      </div>
                    </div>
                  )
                })}
                {isEditable && !props.hideAdd && (
                  <button type="button" class={`${prefixCls}-nav-add`} aria-label="add" onClick={handleAdd}>
                    {props.addIcon || <PlusOutlined class="hmfw-icon" />}
                  </button>
                )}
              </div>
              {props.type === 'line' && (
                <div
                  ref={inkBarRef}
                  class={cls(
                    `${prefixCls}-ink-bar`,
                    {
                      [`${prefixCls}-ink-bar-animated`]: animatedConfig.value.inkBar,
                    },
                    props.classNames?.inkBar,
                  )}
                  style={props.styles?.inkBar}
                />
              )}
            </div>
            {renderExtraContent().right}
          </div>
          <div class={`${prefixCls}-content-holder`}>
            <div
              class={cls(
                `${prefixCls}-content`,
                {
                  [`${prefixCls}-content-animated`]: animatedConfig.value.tabPane,
                },
                props.classNames?.content,
              )}
              style={props.styles?.content}
            >
              {items.map((item) => {
                const isActive = item.key === currentKey.value
                const shouldRender = isActive || item.forceRender || !props.destroyInactiveTabPane
                const shouldDestroy = props.destroyInactiveTabPane && !isActive && !item.forceRender

                return (
                  <div
                    key={item.key}
                    id={`tabpanel-${item.key}`}
                    class={cls(
                      `${prefixCls}-tabpane`,
                      {
                        [`${prefixCls}-tabpane-active`]: isActive,
                        [`${prefixCls}-tabpane-hidden`]: !isActive,
                      },
                      props.classNames?.tabpane,
                    )}
                    style={props.styles?.tabpane}
                    role="tabpanel"
                    aria-labelledby={`tab-${item.key}`}
                    tabindex={isActive ? 0 : -1}
                    hidden={!isActive || undefined}
                  >
                    {shouldRender && !shouldDestroy && (item.children ?? slots[item.key]?.())}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )
    }
  },
})
