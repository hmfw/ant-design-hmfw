import { defineComponent, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { TypographyType } from './types'

export default defineComponent({
  name: 'TypographyText',
  props: {
    type: {
      type: String as PropType<TypographyType>,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    mark: {
      type: Boolean,
      default: false,
    },
    code: {
      type: Boolean,
      default: false,
    },
    keyboard: {
      type: Boolean,
      default: false,
    },
    underline: {
      type: Boolean,
      default: false,
    },
    delete: {
      type: Boolean,
      default: false,
    },
    strong: {
      type: Boolean,
      default: false,
    },
    italic: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('typography')

    const classes = computed(() => {
      const type = props.type
      return cls(
        prefixCls,
        {
          [`${prefixCls}-${type}`]: !!type,
          [`${prefixCls}-disabled`]: props.disabled,
        }
      )
    })

    return () => {
      let children: any = slots.default?.()

      if (props.mark) {
        children = <mark>{children}</mark>
      }

      if (props.code) {
        children = <code>{children}</code>
      }

      if (props.keyboard) {
        children = <kbd>{children}</kbd>
      }

      if (props.underline) {
        children = <u>{children}</u>
      }

      if (props.delete) {
        children = <del>{children}</del>
      }

      if (props.strong) {
        children = <strong>{children}</strong>
      }

      if (props.italic) {
        children = <i>{children}</i>
      }

      return <span class={classes.value}>{children}</span>
    }
  },
})
