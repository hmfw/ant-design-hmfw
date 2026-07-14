import { defineComponent, computed, inject, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { RightOutlined } from '@hmfw/icons'
import type { CollapsibleType, CollapseClassNames, CollapseStyles } from './types'
import { COLLAPSE_CONTEXT_KEY, deriveCollapsibleState, renderPanelNode, type CollapseContext } from './Collapse'

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
    const context = inject<CollapseContext | null>(COLLAPSE_CONTEXT_KEY, null)

    if (!context) {
      // Standalone 模式（未包裹在 Collapse 内）— 渲染静态不可交互面板
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

    // Integrated 模式 — 复用 renderPanelNode
    const key = computed(() => props.panelKey ?? (attrs.key as string) ?? '')
    const isOpen = computed(() => context.activeKeys.value.includes(key.value))
    const prefixCls = context.prefixCls

    // 合并 context 和 props 的 classNames/styles，props 优先
    const mergedClassNames = computed<CollapseClassNames>(() => ({
      ...context.classNames.value,
      ...props.classNames,
    }))
    const mergedStyles = computed<CollapseStyles>(() => ({
      ...context.styles.value,
      ...props.styles,
    }))

    // 使用共享函数计算派生状态，包裹为 computed 保持响应式
    const collapsibleState = computed(() =>
      deriveCollapsibleState(props.disabled ?? false, props.collapsible ?? context.collapsible.value),
    )

    const shouldRender = computed(() => isOpen.value || !context.destroyInactivePanel.value || props.forceRender)
    const useTransition = computed(() => !props.forceRender)

    const renderExpandIcon = () => {
      if (context.expandIcon.value) {
        return context.expandIcon.value({ isActive: isOpen.value, panelKey: key.value })
      }
      return <RightOutlined class="hmfw-icon" />
    }

    return () =>
      renderPanelNode({
        key: key.value,
        prefixCls,
        isOpen: isOpen.value,
        collapsibleState: collapsibleState.value,
        showArrow: props.showArrow,
        useTransition: useTransition.value,
        shouldRender: shouldRender.value,
        label: props.header!,
        children: slots.default?.(),
        extra: props.extra,
        classNames: mergedClassNames.value,
        styles: mergedStyles.value,
        renderExpandIcon,
        onToggle: () => context.toggle(key.value),
      })
  },
})
