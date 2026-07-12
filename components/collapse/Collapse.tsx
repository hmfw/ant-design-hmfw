import {
  defineComponent,
  ref,
  computed,
  watch,
  provide,
  inject,
  Transition,
  cloneVNode,
  Fragment,
  type PropType,
  type VNode,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import type { ComponentSize } from '../config-provider'
import { cls } from '../_utils'
import { RightOutlined } from '@hmfw/icons'
import type { CollapseItem, CollapsibleType, ExpandIconProps, CollapseClassNames, CollapseStyles } from './types'

// 折叠动画钩子
const collapseMotion = {
  onBeforeEnter(el: Element) {
    const element = el as HTMLElement
    element.style.height = '0'
    element.style.opacity = '0'
  },
  onEnter(el: Element) {
    const element = el as HTMLElement
    // 获取内容的实际高度
    const height = element.scrollHeight
    // 强制浏览器重排以应用初始状态
    element.offsetHeight
    // 设置目标高度和透明度
    element.style.height = `${height}px`
    element.style.opacity = '1'
  },
  onAfterEnter(el: Element) {
    const element = el as HTMLElement
    element.style.height = ''
    element.style.opacity = ''
  },
  onBeforeLeave(el: Element) {
    const element = el as HTMLElement
    element.style.height = `${element.offsetHeight}px`
    element.style.opacity = '1'
  },
  onLeave(el: Element) {
    const element = el as HTMLElement
    // 强制浏览器重排以应用初始高度
    element.offsetHeight
    element.style.height = '0'
    element.style.opacity = '0'
  },
  onAfterLeave(el: Element) {
    const element = el as HTMLElement
    element.style.height = ''
    element.style.opacity = ''
  },
}

const COLLAPSE_CONTEXT_KEY = Symbol('collapse-context')

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
      // Always emit array for consistency with ant-design v6
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
    })

    const renderExpandIcon = (isActive: boolean, panelKey: string) => {
      if (props.expandIcon) {
        return props.expandIcon({ isActive, panelKey })
      }
      return <RightOutlined class="hmfw-icon" style={{ transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)' }} />
    }

    return () => {
      const items = props.items ?? []
      // 插槽模式下，Vue 会把 <CollapsePanel key="1"> 的 key 存到 vnode.key，
      // 子组件无法通过 attrs 读取，因此在父级把 vnode.key 透传给 panelKey 属性。
      const normalizePanelKey = (vnode: VNode, fallbackIndex: number): VNode => {
        const resolvedKey = vnode.key != null ? String(vnode.key) : String(fallbackIndex)
        return cloneVNode(vnode, { panelKey: resolvedKey })
      }
      const rawChildren = slots.default?.() ?? []
      let panelIndex = 0
      const panelChildren = rawChildren.flatMap((vnode) => {
        // 处理 v-for 包裹的 Fragment
        if (vnode.type === Fragment && Array.isArray(vnode.children)) {
          return (vnode.children as VNode[]).map((child) => normalizePanelKey(child, panelIndex++))
        }
        return [normalizePanelKey(vnode, panelIndex++)]
      })

      const renderPanel = (
        key: string,
        label: string | VNode,
        children: unknown,
        options: {
          disabled?: boolean
          showArrow?: boolean
          extra?: string | VNode
          collapsible?: CollapsibleType
          style?: Record<string, any>
          forceRender?: boolean
        } = {},
      ) => {
        const isOpen = currentKeys.value.includes(key)
        const shouldRender = isOpen || !props.destroyInactivePanel || options.forceRender

        const effectiveCollapsible = options.collapsible ?? props.collapsible
        const isDisabled = options.disabled || effectiveCollapsible === 'disabled'
        const canClickHeader = !isDisabled && effectiveCollapsible !== 'icon'
        const canClickIcon =
          !isDisabled &&
          (effectiveCollapsible === 'icon' || effectiveCollapsible === 'header' || effectiveCollapsible === undefined)

        // 如果 forceRender，内容始终渲染但用 CSS 隐藏；否则用 Transition 处理
        const useTransition = !options.forceRender

        return (
          <div
            key={key}
            class={cls(`${prefixCls}-item`, props.classNames?.item, {
              [`${prefixCls}-item-active`]: isOpen,
              [`${prefixCls}-item-disabled`]: isDisabled,
            })}
            style={{ ...options.style, ...props.styles?.item }}
          >
            <div
              class={cls(`${prefixCls}-header`, props.classNames?.header)}
              onClick={() => canClickHeader && toggle(key)}
              role="button"
              aria-expanded={isOpen}
              aria-disabled={isDisabled}
              style={{ cursor: canClickHeader ? 'pointer' : 'default', ...props.styles?.header }}
            >
              {options.showArrow !== false && (
                <span
                  class={cls(`${prefixCls}-expand-icon`, props.classNames?.icon, {
                    [`${prefixCls}-expand-icon-active`]: isOpen,
                  })}
                  onClick={(e) => {
                    if (effectiveCollapsible === 'icon' && canClickIcon) {
                      e.stopPropagation()
                      toggle(key)
                    }
                  }}
                  style={{
                    cursor: canClickIcon && effectiveCollapsible === 'icon' ? 'pointer' : 'inherit',
                    ...props.styles?.icon,
                  }}
                >
                  {renderExpandIcon(isOpen, key)}
                </span>
              )}
              <span
                class={cls(`${prefixCls}-header-text`, props.classNames?.headerText)}
                style={props.styles?.headerText}
              >
                {label}
              </span>
              {options.extra && (
                <span class={cls(`${prefixCls}-extra`, props.classNames?.extra)} style={props.styles?.extra}>
                  {options.extra}
                </span>
              )}
            </div>
            {useTransition ? (
              <Transition
                name={`${prefixCls}-motion`}
                onBeforeEnter={collapseMotion.onBeforeEnter}
                onEnter={collapseMotion.onEnter}
                onAfterEnter={collapseMotion.onAfterEnter}
                onBeforeLeave={collapseMotion.onBeforeLeave}
                onLeave={collapseMotion.onLeave}
                onAfterLeave={collapseMotion.onAfterLeave}
              >
                {shouldRender && isOpen && (
                  <div
                    class={cls(`${prefixCls}-content`, props.classNames?.content)}
                    role="region"
                    style={props.styles?.content}
                  >
                    <div class={cls(`${prefixCls}-content-box`, props.classNames?.body)} style={props.styles?.body}>
                      {children as any}
                    </div>
                  </div>
                )}
              </Transition>
            ) : (
              shouldRender && (
                <div
                  class={cls(`${prefixCls}-content`, props.classNames?.content, {
                    [`${prefixCls}-content-hidden`]: !isOpen,
                  })}
                  role="region"
                  style={{
                    height: isOpen ? undefined : '0',
                    opacity: isOpen ? undefined : '0',
                    ...props.styles?.content,
                  }}
                >
                  <div class={cls(`${prefixCls}-content-box`, props.classNames?.body)} style={props.styles?.body}>
                    {children as any}
                  </div>
                </div>
              )
            )}
          </div>
        )
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
          {items.map((item) =>
            renderPanel(item.key, item.label, item.children, {
              disabled: item.disabled,
              showArrow: item.showArrow,
              extra: item.extra,
              collapsible: item.collapsible,
              style: item.style,
              forceRender: item.forceRender,
            }),
          )}
          {panelChildren}
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
    extra: [String, Object] as PropType<string | VNode>,
    forceRender: Boolean,
    collapsible: String as PropType<CollapsibleType>,
    panelKey: String,
    classNames: Object as PropType<CollapseClassNames>,
    styles: Object as PropType<CollapseStyles>,
  },
  setup(props, { slots, attrs }) {
    const context = inject<any>(COLLAPSE_CONTEXT_KEY, null)

    if (!context) {
      // Standalone mode (not inside Collapse) - just render static
      const prefixCls = usePrefixCls('collapse')
      return () => (
        <div class={cls(`${prefixCls}-item`, props.classNames?.item)} style={props.styles?.item}>
          <div class={cls(`${prefixCls}-header`, props.classNames?.header)} style={props.styles?.header}>
            {props.showArrow && (
              <span class={cls(`${prefixCls}-expand-icon`, props.classNames?.icon)} style={props.styles?.icon}>
                <RightOutlined class="hmfw-icon" />
              </span>
            )}
            <span
              class={cls(`${prefixCls}-header-text`, props.classNames?.headerText)}
              style={props.styles?.headerText}
            >
              {props.header}
            </span>
            {props.extra && (
              <span class={cls(`${prefixCls}-extra`, props.classNames?.extra)} style={props.styles?.extra}>
                {props.extra}
              </span>
            )}
          </div>
          <div
            class={cls(`${prefixCls}-content ${prefixCls}-content-active`, props.classNames?.content)}
            style={props.styles?.content}
          >
            <div class={cls(`${prefixCls}-content-box`, props.classNames?.body)} style={props.styles?.body}>
              {slots.default?.()}
            </div>
          </div>
        </div>
      )
    }

    // Integrated mode - use context
    const key = computed(() => props.panelKey ?? (attrs.key as string) ?? '')
    const isOpen = computed(() => context.activeKeys.value.includes(key.value))
    const prefixCls = context.prefixCls

    // 合并 context 和 props 的 classNames/styles，props 优先
    const mergedClassNames = computed(() => ({
      ...context.classNames?.value,
      ...props.classNames,
    }))
    const mergedStyles = computed(() => ({
      ...context.styles?.value,
      ...props.styles,
    }))

    const effectiveCollapsible = computed(() => props.collapsible ?? context.collapsible.value)
    const isDisabled = computed(() => props.disabled || effectiveCollapsible.value === 'disabled')
    const canClickHeader = computed(() => !isDisabled.value && effectiveCollapsible.value !== 'icon')
    const canClickIcon = computed(() => !isDisabled.value && effectiveCollapsible.value !== 'disabled')

    const shouldRender = computed(() => isOpen.value || !context.destroyInactivePanel.value || props.forceRender)

    // 如果 forceRender，内容始终渲染但用 CSS 隐藏；否则用 Transition 处理
    const useTransition = computed(() => !props.forceRender)

    const renderExpandIcon = () => {
      if (context.expandIcon.value) {
        return context.expandIcon.value({ isActive: isOpen.value, panelKey: key.value })
      }
      return <RightOutlined class="hmfw-icon" style={{ transform: isOpen.value ? 'rotate(90deg)' : 'rotate(0deg)' }} />
    }

    return () => (
      <div
        class={cls(`${prefixCls}-item`, mergedClassNames.value.item, {
          [`${prefixCls}-item-active`]: isOpen.value,
          [`${prefixCls}-item-disabled`]: isDisabled.value,
        })}
        style={mergedStyles.value.item}
      >
        <div
          class={cls(`${prefixCls}-header`, mergedClassNames.value.header)}
          onClick={() => canClickHeader.value && context.toggle(key.value)}
          role="button"
          aria-expanded={isOpen.value}
          aria-disabled={isDisabled.value}
          style={{ cursor: canClickHeader.value ? 'pointer' : 'default', ...mergedStyles.value.header }}
        >
          {props.showArrow && (
            <span
              class={cls(`${prefixCls}-expand-icon`, mergedClassNames.value.icon, {
                [`${prefixCls}-expand-icon-active`]: isOpen.value,
              })}
              onClick={(e) => {
                if (effectiveCollapsible.value === 'icon' && canClickIcon.value) {
                  e.stopPropagation()
                  context.toggle(key.value)
                }
              }}
              style={{
                cursor: canClickIcon.value && effectiveCollapsible.value === 'icon' ? 'pointer' : 'inherit',
                ...mergedStyles.value.icon,
              }}
            >
              {renderExpandIcon()}
            </span>
          )}
          <span
            class={cls(`${prefixCls}-header-text`, mergedClassNames.value.headerText)}
            style={mergedStyles.value.headerText}
          >
            {props.header}
          </span>
          {props.extra && (
            <span class={cls(`${prefixCls}-extra`, mergedClassNames.value.extra)} style={mergedStyles.value.extra}>
              {props.extra}
            </span>
          )}
        </div>
        {useTransition.value ? (
          <Transition
            name={`${prefixCls}-motion`}
            onBeforeEnter={collapseMotion.onBeforeEnter}
            onEnter={collapseMotion.onEnter}
            onAfterEnter={collapseMotion.onAfterEnter}
            onBeforeLeave={collapseMotion.onBeforeLeave}
            onLeave={collapseMotion.onLeave}
            onAfterLeave={collapseMotion.onAfterLeave}
          >
            {shouldRender.value && isOpen.value && (
              <div
                class={cls(`${prefixCls}-content`, mergedClassNames.value.content)}
                role="region"
                style={mergedStyles.value.content}
              >
                <div
                  class={cls(`${prefixCls}-content-box`, mergedClassNames.value.body)}
                  style={mergedStyles.value.body}
                >
                  {slots.default?.()}
                </div>
              </div>
            )}
          </Transition>
        ) : (
          shouldRender.value && (
            <div
              class={cls(`${prefixCls}-content`, mergedClassNames.value.content, {
                [`${prefixCls}-content-hidden`]: !isOpen.value,
              })}
              role="region"
              style={{
                height: isOpen.value ? undefined : '0',
                opacity: isOpen.value ? undefined : '0',
                ...mergedStyles.value.content,
              }}
            >
              <div class={cls(`${prefixCls}-content-box`, mergedClassNames.value.body)} style={mergedStyles.value.body}>
                {slots.default?.()}
              </div>
            </div>
          )
        )}
      </div>
    )
  },
})
