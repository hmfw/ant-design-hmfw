import { defineComponent, computed, type PropType, type CSSProperties } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { ComponentSize } from '../config-provider'
import type { DividerType, DividerOrientation, DividerVariant, DividerClassNames, DividerStyles } from './types'

export default defineComponent({
  name: 'Divider',
  props: {
    type: {
      type: String as PropType<DividerType>,
      default: 'horizontal',
    },
    dashed: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String as PropType<DividerVariant>,
      default: undefined,
    },
    orientation: {
      type: String as PropType<DividerOrientation>,
      default: 'center',
    },
    orientationMargin: {
      type: [String, Number],
      default: undefined,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<ComponentSize>,
      default: undefined,
    },
    classNames: {
      type: Object as PropType<DividerClassNames>,
      default: undefined,
    },
    styles: {
      type: Object as PropType<DividerStyles>,
      default: undefined,
    },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('divider')

    const hasChildren = computed(() => !!slots.default)

    /** 是否为带文字的水平分割线（垂直分割线不支持文字） */
    const isHorizontalWithText = computed(() => hasChildren.value && props.type === 'horizontal')

    /**
     * 合并后的分割线样式：`variant` 优先级高于 `dashed`。
     * `dashed` 等价于 `variant="dashed"`，仅为便捷属性。
     */
    const mergedVariant = computed<DividerVariant>(() => {
      if (props.variant) return props.variant
      return props.dashed ? 'dashed' : 'solid'
    })

    const classes = computed(() =>
      cls(
        prefixCls,
        `${prefixCls}-${props.type}`,
        {
          [`${prefixCls}-with-text`]: isHorizontalWithText.value,
          [`${prefixCls}-with-text-${props.orientation}`]: isHorizontalWithText.value,
          [`${prefixCls}-${mergedVariant.value}`]: mergedVariant.value !== 'solid',
          [`${prefixCls}-plain`]: props.plain,
          [`${prefixCls}-sm`]: props.size === 'small' && props.type === 'horizontal',
          [`${prefixCls}-md`]: props.size === 'middle' && props.type === 'horizontal',
        },
        props.classNames?.root,
      ),
    )

    /** 带文字时的内边距样式：仅在 orientation 为 left/right 且设置了 orientationMargin 时生效 */
    const textStyle = computed(() => {
      const style: CSSProperties = {}
      if (!isHorizontalWithText.value || props.orientationMargin === undefined) return style

      if (props.orientation === 'left') {
        style.marginLeft =
          typeof props.orientationMargin === 'number' ? `${props.orientationMargin}px` : props.orientationMargin
      } else if (props.orientation === 'right') {
        style.marginRight =
          typeof props.orientationMargin === 'number' ? `${props.orientationMargin}px` : props.orientationMargin
      }

      return style
    })

    return () => {
      const children = slots.default?.()

      if (props.type === 'vertical') {
        return <div class={classes.value} style={props.styles?.root} role="separator" />
      }

      if (isHorizontalWithText.value) {
        return (
          <div class={classes.value} style={props.styles?.root} role="separator">
            <div class={`${prefixCls}-rail ${prefixCls}-rail-start`} />
            <span
              class={cls(`${prefixCls}-inner-text`, props.classNames?.text)}
              style={{ ...textStyle.value, ...props.styles?.text }}
            >
              {children}
            </span>
            <div class={`${prefixCls}-rail ${prefixCls}-rail-end`} />
          </div>
        )
      }

      return <div class={classes.value} style={props.styles?.root} role="separator" />
    }
  },
})
