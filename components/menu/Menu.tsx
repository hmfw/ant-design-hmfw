import { defineComponent, ref, toRef, computed, provide, inject, Transition, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'

import { LAYOUT_SIDER_KEY, type LayoutSiderContext } from '../layout'
import type {
  ItemType,
  MenuMode,
  MenuTheme,
  MenuExpandIcon,
  MenuTriggerSubMenuAction,
  MenuTooltipConfig,
  MenuClassNames,
  MenuStyles,
  MenuProps,
} from './types'

// ---- Composables ----
import { useMenuSelection } from './composables/useMenuSelection'
import { useMenuOpenState } from './composables/useMenuOpenState'
import { useMenuKeyboard } from './composables/useMenuKeyboard'
import { useMenuOverflow } from './composables/useMenuOverflow'
import { MENU_CONTEXT_KEY, type MenuContext } from './types'
import { useMenuRender } from './composables/useMenuRender'

// Props 定义（使用 satisfies 确保与 MenuProps 类型一致）
const menuProps = {
  items: { type: Array as PropType<ItemType[]>, default: undefined },
  mode: { type: String as PropType<MenuMode>, default: 'vertical' },
  selectedKeys: { type: Array as PropType<string[]>, default: undefined },
  openKeys: { type: Array as PropType<string[]>, default: undefined },
  inlineCollapsed: { type: Boolean, default: undefined },
  theme: { type: String as PropType<MenuTheme>, default: 'light' },
  multiple: { type: Boolean, default: undefined },
  selectable: { type: Boolean, default: true },
  inlineIndent: { type: Number, default: 24 },
  expandIcon: { type: [Object, Function, Boolean] as PropType<MenuExpandIcon>, default: undefined },
  triggerSubMenuAction: { type: String as PropType<MenuTriggerSubMenuAction>, default: 'hover' },
  tooltip: { type: [Object, Boolean] as PropType<MenuTooltipConfig>, default: undefined },
  overflowedIndicator: { type: Object as PropType<VNode>, default: undefined },
  classNames: { type: Object as PropType<MenuClassNames>, default: undefined },
  styles: { type: Object as PropType<MenuStyles>, default: undefined },
} satisfies Record<keyof MenuProps, any>

export const Menu = defineComponent({
  name: 'Menu',
  props: menuProps,
  emits: ['update:selectedKeys', 'update:openKeys', 'select', 'deselect', 'openChange', 'click'],
  setup(props, { emit, slots }) {
    const prefixCls = usePrefixCls('menu')
    const rootRef = ref<HTMLUListElement>()

    // ---- Layout.Sider 折叠上下文 ----
    const siderContext = inject<LayoutSiderContext | null>(LAYOUT_SIDER_KEY, null)

    // FIX: 用户显式传 false 时必须生效，不受 Sider 上下文干扰
    const mergedInlineCollapsed = computed(() => {
      if (props.inlineCollapsed !== undefined) {
        return props.inlineCollapsed
      }
      return siderContext?.siderCollapsed ?? false
    })

    const mode = computed(() => props.mode)

    // ---- 选中状态 (Composable) ----

    const { currentSelected, handleSelect, handleDeselect } = useMenuSelection(
      {
        selectedKeys: toRef(props, 'selectedKeys'),
        multiple: props.multiple,
        selectable: props.selectable,
      },
      emit,
    )

    // ---- 展开状态 (Composable) ----
    const { currentOpen, handleOpenChange, handleOpenImmediate } = useMenuOpenState(
      {
        openKeys: toRef(props, 'openKeys'),
        mode: toRef(props, 'mode'),
        triggerSubMenuAction: toRef(props, 'triggerSubMenuAction'),
      },
      emit,
    )

    // ---- 键盘导航 (Composable) ----
    const { handleKeyDown } = useMenuKeyboard({
      rootRef,
      prefixCls,
      mode,
      currentOpen,
      handleOpenChange,
    })

    // ---- 水平溢出检测 (Composable) ----
    const menuItemsForOverflow = computed(() => props.items ?? [])
    const { visibleItems, overflowedItems, showOverflow } = useMenuOverflow(
      { mode, rootRef, prefixCls },
      menuItemsForOverflow,
    )

    // ---- 渲染工具 (Composable) ----
    const { renderItems } = useMenuRender()

    // ---- Context (供子组件访问) ----
    provide(MENU_CONTEXT_KEY, {
      get selectedKeys() {
        return currentSelected.value
      },
      get openKeys() {
        return currentOpen.value
      },
      get mode() {
        return props.mode
      },
      get theme() {
        return props.theme
      },
      get inlineIndent() {
        return props.inlineIndent
      },
      get inlineCollapsed() {
        return mergedInlineCollapsed.value
      },
      get firstLevel() {
        return true
      },
      get triggerSubMenuAction() {
        return props.triggerSubMenuAction
      },
      get selectable() {
        return props.selectable
      },
      get classNames() {
        return props.classNames
      },
      get styles() {
        return props.styles
      },
      get expandIcon() {
        return props.expandIcon
      },
      get tooltip() {
        return props.tooltip
      },
      prefixCls,
      onSelect: handleSelect,
      onDeselect: handleDeselect,
      onOpenChange: handleOpenChange,
    } as MenuContext)

    // ====================== 渲染根元素 ======================
    return () => {
      // 受控模式下 emit 不触发同步时，溢出项可能存在瞬时闪烁，showOverflow 强制触发重新计算
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      showOverflow.value
      const menuCls = cls(
        prefixCls,
        `${prefixCls}-root`,
        `${prefixCls}-${props.mode}`,
        `${prefixCls}-${props.theme}`,
        {
          [`${prefixCls}-inline-collapsed`]: mergedInlineCollapsed.value,
          [`${prefixCls}-overflow`]: showOverflow.value,
        },
        props.classNames?.root,
      )

      // 内容渲染：优先 slot，否则 items prop
      const slotChildren = slots.default?.()
      const hasSlotContent = slotChildren && slotChildren.length > 0

      return (
        <ul ref={rootRef} class={menuCls} style={props.styles?.root} role="menu" tabindex={0} onKeydown={handleKeyDown}>
          {hasSlotContent ? slotChildren : renderItems(visibleItems.value)}

          {/* 水平菜单溢出指示器（仅 items prop 模式支持） */}
          {!hasSlotContent && showOverflow.value && (
            <li
              class={cls(`${prefixCls}-submenu`, `${prefixCls}-overflowed-submenu`)}
              style={{ position: 'relative' }}
              onMouseenter={() => {
                if (props.triggerSubMenuAction === 'hover') {
                  handleOpenImmediate('__overflow__', true)
                }
              }}
              onMouseleave={() => {
                if (props.triggerSubMenuAction === 'hover') {
                  handleOpenChange('__overflow__', false)
                }
              }}
              onClick={() => {
                if (props.triggerSubMenuAction === 'click') {
                  handleOpenChange('__overflow__', !currentOpen.value.includes('__overflow__'))
                }
              }}
            >
              <div
                class={cls(`${prefixCls}-submenu-title`)}
                role="button"
                tabindex={0}
                aria-expanded={currentOpen.value.includes('__overflow__')}
                aria-haspopup="true"
                data-menu-key="__overflow__"
                data-menu-label="更多"
              >
                {props.overflowedIndicator || <span class={`${prefixCls}-overflowed-indicator`}>•••</span>}
              </div>
              <Transition name={`${prefixCls}-popup-zoom`}>
                {currentOpen.value.includes('__overflow__') && (
                  <ul
                    class={cls(
                      `${prefixCls}-sub`,
                      `${prefixCls}-${props.mode}`,
                      `${prefixCls}-${props.theme}`,
                      props.classNames?.sub,
                    )}
                    style={props.styles?.sub}
                  >
                    {renderItems(overflowedItems.value)}
                  </ul>
                )}
              </Transition>
            </li>
          )}
        </ul>
      )
    }
  },
})
