import { defineComponent, ref, watch, computed, isVNode, type PropType, type VNode, CSSProperties } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { PlusOutlined, CloseOutlined } from '@hmfw/icons'
import type {
  TabsType,
  TabsSize,
  TabsPosition,
  TabItem,
  TabBarExtraContent,
  AnimatedConfig,
  TabsProps,
  TabsClassNames,
  TabsStyles,
} from './types'
import { useInkBar } from './useInkBar'
import { useKeyboardNav } from './useKeyboardNav'

// Props 定义（使用 satisfies 确保与 TabsProps 类型一致）
const tabsProps = {
  activeKey: { type: String, default: undefined },
  items: { type: Array as PropType<TabItem[]>, default: undefined },
  type: { type: String as PropType<TabsType>, default: 'line' },
  size: { type: String as PropType<TabsSize>, default: undefined },
  tabPosition: { type: String as PropType<TabsPosition>, default: 'top' },
  centered: { type: Boolean, default: false },
  animated: { type: [Boolean, Object] as PropType<boolean | AnimatedConfig>, default: true },
  tabBarExtraContent: { type: [Object, Function] as PropType<VNode | TabBarExtraContent>, default: undefined },
  tabBarGutter: { type: Number, default: undefined },
  tabBarStyle: { type: Object, default: undefined },
  hideAdd: { type: Boolean, default: false },
  addIcon: { type: Object as PropType<VNode>, default: undefined },
  removeIcon: { type: Object as PropType<VNode>, default: undefined },
  destroyInactiveTabPane: { type: Boolean, default: false },
  classNames: { type: Object as PropType<TabsClassNames>, default: undefined },
  styles: { type: Object as PropType<TabsStyles>, default: undefined },
} satisfies Record<keyof TabsProps, any>

/**
 * 判断一个值是否为 TabBarExtraContent 对象（而非 VNode）。
 * 通过检查 VNode 内部标记 __v_isVNode 避免误判。
 */
function isTabBarExtraContent(value: unknown): value is TabBarExtraContent {
  if (isVNode(value)) return false
  if (typeof value !== 'object' || value === null) return false
  const obj = value as Record<string, unknown>
  // 排除 VNode 内部属性，避免带 left/right 属性的 VNode 被误判
  if ('__v_isVNode' in obj) return false
  return 'left' in obj || 'right' in obj
}

export const Tabs = defineComponent({
  name: 'Tabs',
  props: tabsProps,
  emits: ['update:activeKey', 'change', 'tabClick', 'edit'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('tabs')
    const navListRef = ref<HTMLElement | null>(null)

    /**
     * 获取初始激活 key：使用第一个 item 的 key，items 为空时返回空字符串
     */
    const getInitialKey = (): string => {
      const items = props.items ?? []
      return items[0]?.key ?? ''
    }

    const innerKey = ref(getInitialKey())

    // 受控/非受控切换：受控时同步 activeKey，非受控时 currentKey 降级使用 innerKey
    watch(
      () => props.activeKey,
      (v) => {
        if (v !== undefined) {
          innerKey.value = v
        }
        // 当 activeKey 变为 undefined（受控→非受控切换），innerKey 保持上一次同步的值，
        // currentKey 通过 computed 自动降级为非受控模式，用户可自由切换 tab
      },
    )

    const currentKey = computed(() => props.activeKey ?? innerKey.value)

    const animatedConfig = computed(() => {
      if (typeof props.animated === 'boolean') {
        return { inkBar: props.animated, tabPane: props.animated }
      }
      return { inkBar: true, tabPane: false, ...props.animated }
    })

    // Ink bar 位置/尺寸管理（数据驱动：tabSizes → indicatorStyle → 模板绑定）
    const { indicatorStyle } = useInkBar({
      navListRef,
      prefixCls,
      type: () => props.type,
      tabPosition: () => props.tabPosition,
      currentKey,
    })

    /**
     * 激活指定 key 的 tab（不触发 tabClick 事件）。
     * 供键盘导航等内部逻辑使用，与用户点击行为分离。
     */
    const activateTab = (key: string) => {
      innerKey.value = key
      emit('update:activeKey', key)
      emit('change', key)
    }

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

    // 键盘导航（通过 composable 封装）
    const { handleKeyDown } = useKeyboardNav({
      items: () => props.items ?? [],
      prefixCls,
      navListRef,
      onActivate: activateTab,
    })

    // ===== 渲染辅助函数 =====

    /**
     * 渲染单个 tab 标签
     */
    const renderTab = (item: TabItem, index: number, items: TabItem[], isEditable: boolean, isVertical: boolean) => {
      const isActive = item.key === currentKey.value
      const showClose = isEditable && item.closable !== false

      const tabBarGutterStyle =
        props.tabBarGutter !== undefined
          ? isVertical
            ? { marginBottom: `${props.tabBarGutter}px` }
            : { marginRight: `${props.tabBarGutter}px` }
          : {}

      const tabCls = cls(
        `${prefixCls}-tab`,
        {
          [`${prefixCls}-tab-active`]: isActive,
          [`${prefixCls}-tab-disabled`]: item.disabled,
        },
        props.classNames?.tab,
        isActive && props.classNames?.tabActive,
      )

      const tabStyle: CSSProperties = {
        ...(index < items.length - 1 ? tabBarGutterStyle : undefined),
        ...props.styles?.tab,
        ...(isActive ? props.styles?.tabActive : undefined),
      }

      return (
        <div
          key={item.key}
          id={`tab-${item.key}`}
          class={tabCls}
          style={tabStyle}
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
              <span class={cls(`${prefixCls}-tab-icon`, props.classNames?.tabIcon)} style={props.styles?.tabIcon}>
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
    }

    /**
     * 渲染 tab 内容面板
     */
    const renderTabPane = (item: TabItem) => {
      const isActive = item.key === currentKey.value
      const shouldDestroy =
        (props.destroyInactiveTabPane || item.destroyInactiveTabPane) && !isActive && !item.forceRender
      const shouldRender = isActive || item.forceRender || !shouldDestroy

      const tabpaneCls = cls(
        `${prefixCls}-tabpane`,
        {
          [`${prefixCls}-tabpane-active`]: isActive,
          [`${prefixCls}-tabpane-hidden`]: !isActive,
        },
        props.classNames?.tabpane,
      )

      return (
        <div
          key={item.key}
          id={`tabpanel-${item.key}`}
          class={tabpaneCls}
          style={props.styles?.tabpane}
          role="tabpanel"
          aria-labelledby={`tab-${item.key}`}
          tabindex={isActive ? 0 : -1}
          hidden={!isActive || undefined}
        >
          {shouldRender && !shouldDestroy && (item.children ?? slots[item.key]?.())}
        </div>
      )
    }

    /**
     * 渲染 tab bar 额外内容（左侧/右侧），自动识别 VNode 和 { left, right } 对象形式
     */
    const renderExtraContent = () => {
      if (!props.tabBarExtraContent) return { left: null, right: null }

      // { left, right } 对象形式
      if (isTabBarExtraContent(props.tabBarExtraContent)) {
        return {
          left: props.tabBarExtraContent.left ? (
            <div class={`${prefixCls}-extra-content-left`}>{props.tabBarExtraContent.left}</div>
          ) : null,
          right: props.tabBarExtraContent.right ? (
            <div class={`${prefixCls}-extra-content-right`}>{props.tabBarExtraContent.right}</div>
          ) : null,
        }
      }

      // 单个 VNode，默认靠右
      return {
        left: null,
        right: <div class={`${prefixCls}-extra-content`}>{props.tabBarExtraContent}</div>,
      }
    }

    return () => {
      const items = props.items ?? []
      const isEditable = props.type === 'editable-card'
      const isVertical = props.tabPosition === 'left' || props.tabPosition === 'right'

      const sizeClass = props.size ? `${prefixCls}-${props.size}` : ''
      const posClass = `${prefixCls}-${props.tabPosition}`

      const extraContent = renderExtraContent()

      const tabsCls = cls(
        prefixCls,
        `${prefixCls}-${props.type}`,
        sizeClass,
        posClass,
        {
          [`${prefixCls}-centered`]: props.centered,
        },
        props.classNames?.root,
      )

      return (
        <div class={tabsCls} style={props.styles?.root}>
          {/* Tab 导航栏 */}
          <div
            class={cls(`${prefixCls}-nav`, props.classNames?.nav)}
            style={{ ...props.tabBarStyle, ...props.styles?.nav }}
          >
            {extraContent.left}
            <div class={`${prefixCls}-nav-wrap`}>
              <div
                ref={navListRef}
                class={`${prefixCls}-nav-list`}
                role="tablist"
                aria-orientation={isVertical ? 'vertical' : 'horizontal'}
              >
                {items.map((item, index) => renderTab(item, index, items, isEditable, isVertical))}
                {isEditable && !props.hideAdd && (
                  <button type="button" class={`${prefixCls}-nav-add`} aria-label="add" onClick={handleAdd}>
                    {props.addIcon || <PlusOutlined class="hmfw-icon" />}
                  </button>
                )}
                {props.type === 'line' && (
                  <div
                    class={cls(
                      `${prefixCls}-ink-bar`,
                      {
                        [`${prefixCls}-ink-bar-animated`]: animatedConfig.value.inkBar,
                      },
                      props.classNames?.inkBar,
                    )}
                    style={{ ...indicatorStyle.value, ...props.styles?.inkBar }}
                  />
                )}
              </div>
            </div>
            {extraContent.right}
          </div>

          {/* Tab 内容区域 */}
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
              {items.map(renderTabPane)}
            </div>
          </div>
        </div>
      )
    }
  },
})
