import {
  defineComponent,
  ref,
  computed,
  watch,
  provide,
  Transition,
  cloneVNode,
  Fragment,
  type PropType,
  type VNode,
  type ComputedRef,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import type { ComponentSize } from '../config-provider'
import { cls } from '../_utils'
import { RightOutlined } from '@hmfw/icons'
import type { CollapseItem, CollapsibleType, ExpandIconProps, CollapseClassNames, CollapseStyles } from './types'

// ============================================================
// 常量
// ============================================================
const CLOSED_HEIGHT = '0'
const CLOSED_OPACITY = '0'
const OPEN_OPACITY = '1'
export const ICON_ROTATE_OPEN = 'rotate(90deg)'
export const ICON_ROTATE_CLOSED = 'rotate(0deg)'

// ============================================================
// Context 类型 & Key（Panel 子组件通过 inject 获取）
// ============================================================
export interface CollapseContext {
  activeKeys: ComputedRef<string[]>
  toggle: (key: string) => void
  prefixCls: string
  expandIconPosition: ComputedRef<'start' | 'end'>
  collapsible: ComputedRef<CollapsibleType | undefined>
  destroyInactivePanel: ComputedRef<boolean>
  expandIcon: ComputedRef<((props: ExpandIconProps) => VNode) | undefined>
  classNames: ComputedRef<CollapseClassNames | undefined>
  styles: ComputedRef<CollapseStyles | undefined>
}

export const COLLAPSE_CONTEXT_KEY = Symbol('collapse-context')

// ============================================================
// 折叠动画钩子
// ============================================================
const collapseMotion = {
  onBeforeEnter(el: Element) {
    const element = el as HTMLElement
    element.style.height = CLOSED_HEIGHT
    element.style.opacity = CLOSED_OPACITY
  },
  onEnter(el: Element) {
    const element = el as HTMLElement
    const height = element.scrollHeight
    // 强制浏览器重排以应用初始状态
    element.style.height = `${height}px`
    element.style.opacity = OPEN_OPACITY
  },
  onAfterEnter(el: Element) {
    const element = el as HTMLElement
    element.style.height = ''
    element.style.opacity = ''
  },
  onBeforeLeave(el: Element) {
    const element = el as HTMLElement
    element.style.height = `${element.offsetHeight}px`
    element.style.opacity = OPEN_OPACITY
  },
  onLeave(el: Element) {
    const element = el as HTMLElement
    // 强制浏览器重排以应用初始高度
    element.style.height = CLOSED_HEIGHT
    element.style.opacity = CLOSED_OPACITY
  },
  onAfterLeave(el: Element) {
    const element = el as HTMLElement
    element.style.height = ''
    element.style.opacity = ''
  },
}

// ============================================================
// 共享：根据 disabled + collapsible 计算派生状态
// ============================================================
export interface CollapsibleState {
  effectiveCollapsible: CollapsibleType | undefined
  isDisabled: boolean
  canClickHeader: boolean
  canClickIcon: boolean
}

export function deriveCollapsibleState(disabled: boolean, collapsible: CollapsibleType | undefined): CollapsibleState {
  const effectiveCollapsible = collapsible
  const isDisabled = disabled || effectiveCollapsible === 'disabled'
  const canClickHeader = !isDisabled && effectiveCollapsible !== 'icon'
  const canClickIcon = !isDisabled // !isDisabled 已蕴含 effectiveCollapsible !== 'disabled'
  return { effectiveCollapsible, isDisabled, canClickHeader, canClickIcon }
}

// ============================================================
// 共享：面板节点渲染（Items 模式与 Panel 模式共用唯一模板）
// ============================================================
interface PanelRenderOptions {
  key: string
  prefixCls: string
  isOpen: boolean
  collapsibleState: CollapsibleState
  showArrow: boolean
  useTransition: boolean
  shouldRender: boolean
  label: string | VNode
  children: unknown
  extra?: string | VNode
  classNames?: CollapseClassNames
  styles?: CollapseStyles
  customStyle?: Record<string, any>
  renderExpandIcon: () => VNode
  onToggle: () => void
}

export function renderPanelNode(options: PanelRenderOptions): VNode {
  const {
    key,
    prefixCls,
    isOpen,
    collapsibleState: cs,
    showArrow,
    useTransition,
    shouldRender,
    label,
    children,
    extra,
    classNames,
    styles,
    customStyle,
    renderExpandIcon,
    onToggle,
  } = options

  const handleHeaderClick = () => {
    if (cs.canClickHeader) onToggle()
  }

  const handleHeaderKeydown = (e: KeyboardEvent) => {
    if (!cs.canClickHeader) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle()
    }
  }

  const handleIconClick = (e: MouseEvent) => {
    if (cs.effectiveCollapsible === 'icon' && cs.canClickIcon) {
      e.stopPropagation()
      onToggle()
    }
  }

  return (
    <div
      key={key}
      class={cls(`${prefixCls}-item`, classNames?.item, {
        [`${prefixCls}-item-active`]: isOpen,
        [`${prefixCls}-item-disabled`]: cs.isDisabled,
      })}
      style={{ ...customStyle, ...styles?.item }}
    >
      <div
        class={cls(`${prefixCls}-header`, classNames?.header)}
        onClick={handleHeaderClick}
        onKeydown={handleHeaderKeydown}
        role="button"
        tabindex={cs.isDisabled ? -1 : 0}
        aria-expanded={isOpen}
        aria-disabled={cs.isDisabled}
        style={{ cursor: cs.canClickHeader ? 'pointer' : 'default', ...styles?.header }}
      >
        {showArrow && (
          <span
            class={cls(`${prefixCls}-expand-icon`, classNames?.icon, {
              [`${prefixCls}-expand-icon-active`]: isOpen,
            })}
            onClick={handleIconClick}
            style={{
              transform: isOpen ? ICON_ROTATE_OPEN : ICON_ROTATE_CLOSED,
              cursor: cs.canClickIcon && cs.effectiveCollapsible === 'icon' ? 'pointer' : 'inherit',
              ...styles?.icon,
            }}
          >
            {renderExpandIcon()}
          </span>
        )}
        <span class={cls(`${prefixCls}-header-text`, classNames?.headerText)} style={styles?.headerText}>
          {label}
        </span>
        {extra && (
          <span class={cls(`${prefixCls}-extra`, classNames?.extra)} style={styles?.extra}>
            {extra}
          </span>
        )}
      </div>
      {shouldRender && useTransition && (
        <Transition
          name={`${prefixCls}-motion`}
          onBeforeEnter={collapseMotion.onBeforeEnter}
          onEnter={collapseMotion.onEnter}
          onAfterEnter={collapseMotion.onAfterEnter}
          onBeforeLeave={collapseMotion.onBeforeLeave}
          onLeave={collapseMotion.onLeave}
          onAfterLeave={collapseMotion.onAfterLeave}
        >
          {isOpen && (
            <div class={cls(`${prefixCls}-content`, classNames?.content)} role="region" style={styles?.content}>
              <div class={cls(`${prefixCls}-content-box`, classNames?.body)} style={styles?.body}>
                {children as any}
              </div>
            </div>
          )}
        </Transition>
      )}
      {shouldRender && !useTransition && (
        <div
          class={cls(`${prefixCls}-content`, classNames?.content, {
            [`${prefixCls}-content-hidden`]: !isOpen,
          })}
          role="region"
          style={{
            height: isOpen ? undefined : CLOSED_HEIGHT,
            opacity: isOpen ? undefined : CLOSED_OPACITY,
            ...styles?.content,
          }}
        >
          <div class={cls(`${prefixCls}-content-box`, classNames?.body)} style={styles?.body}>
            {children as any}
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================================
// Collapse 组件
// ============================================================
export const Collapse = defineComponent({
  name: 'Collapse',
  props: {
    activeKey: [String, Array] as PropType<string | string[]>,
    defaultActiveKey: [String, Array] as PropType<string | string[]>,
    accordion: Boolean,
    bordered: { type: Boolean, default: true },
    ghost: Boolean,
    size: { type: String as PropType<ComponentSize>, default: 'middle' },
    expandIconPosition: { type: String as PropType<'start' | 'end'>, default: 'start' },
    items: Array as PropType<CollapseItem[]>,
    destroyInactivePanel: Boolean,
    collapsible: String as PropType<CollapsibleType>,
    expandIcon: Function as PropType<(props: ExpandIconProps) => VNode>,
    classNames: Object as PropType<CollapseClassNames>,
    styles: Object as PropType<CollapseStyles>,
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
    const currentKeys = computed(() => (isControlled.value ? normalize(props.activeKey) : innerKeys.value))

    watch(
      () => props.activeKey,
      (v) => {
        if (v !== undefined) innerKeys.value = normalize(v)
      },
    )

    const toggle = (key: string) => {
      const keys = currentKeys.value
      let next: string[]
      if (props.accordion) {
        next = keys.includes(key) ? [] : [key]
      } else {
        next = keys.includes(key) ? keys.filter((k) => k !== key) : [...keys, key]
      }
      innerKeys.value = next
      emit('update:activeKey', next)
      emit('change', next)
    }

    // Provide context for Panel children
    provide(COLLAPSE_CONTEXT_KEY, {
      activeKeys: currentKeys,
      toggle,
      prefixCls,
      expandIconPosition: computed(() => props.expandIconPosition),
      collapsible: computed(() => props.collapsible),
      destroyInactivePanel: computed(() => props.destroyInactivePanel),
      expandIcon: computed(() => props.expandIcon),
      classNames: computed(() => props.classNames),
      styles: computed(() => props.styles),
    } satisfies CollapseContext)

    // 共享的展开图标渲染函数
    const renderExpandIcon = (isActive: boolean, panelKey: string) => {
      if (props.expandIcon) {
        return props.expandIcon({ isActive, panelKey })
      }
      return <RightOutlined class="hmfw-icon" />
    }

    // Items 模式：渲染单个面板（在 setup 级别定义，复用 renderPanelNode）
    const renderItemPanel = (item: CollapseItem) => {
      const key = item.key
      const isOpen = currentKeys.value.includes(key)
      const collapsibleState = deriveCollapsibleState(item.disabled ?? false, item.collapsible ?? props.collapsible)
      const shouldRender = isOpen || !props.destroyInactivePanel || (item.forceRender ?? false)
      const useTransition = !item.forceRender
      const showArrow = item.showArrow !== false

      // 合并 classNames/styles：Collapse 级别 → Item 级别（Item 优先）
      const mergedClassNames: CollapseClassNames = {
        ...props.classNames,
        ...item.classNames,
      }
      const mergedStyles: CollapseStyles = {
        ...props.styles,
        ...item.styles,
      }

      return renderPanelNode({
        key,
        prefixCls,
        isOpen,
        collapsibleState,
        showArrow,
        useTransition,
        shouldRender,
        label: item.label,
        children: item.children,
        extra: item.extra,
        classNames: mergedClassNames,
        styles: mergedStyles,
        customStyle: item.style as Record<string, any> | undefined,
        renderExpandIcon: () => renderExpandIcon(isOpen, key),
        onToggle: () => toggle(key),
      })
    }

    // 从插槽 vnode 提取 key，透传给 CollapsePanel 的 panelKey
    const normalizePanelKey = (vnode: VNode, fallbackIndex: number): VNode => {
      const resolvedKey = vnode.key != null ? String(vnode.key) : String(fallbackIndex)
      return cloneVNode(vnode, { panelKey: resolvedKey })
    }

    return () => {
      const items = props.items ?? []

      // 插槽子节点处理：key 透传 + Fragment 展开
      const rawChildren = slots.default?.() ?? []
      let panelIndex = 0
      const panelChildren: VNode[] = []
      for (const vnode of rawChildren) {
        if (vnode.type === Fragment && Array.isArray(vnode.children)) {
          for (const child of vnode.children as VNode[]) {
            panelChildren.push(normalizePanelKey(child, panelIndex++))
          }
        } else {
          panelChildren.push(normalizePanelKey(vnode, panelIndex++))
        }
      }

      return (
        <div
          class={cls(prefixCls, props.classNames?.root, `${prefixCls}-${props.size}`, {
            [`${prefixCls}-borderless`]: !props.bordered,
            [`${prefixCls}-ghost`]: props.ghost,
            [`${prefixCls}-icon-position-end`]: props.expandIconPosition === 'end',
          })}
          style={props.styles?.root}
        >
          {items.map((item) => renderItemPanel(item))}
          {panelChildren}
        </div>
      )
    }
  },
})
