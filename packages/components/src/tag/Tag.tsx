import { defineComponent, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { TagColor } from './types'

const PRESET_COLORS = [
  'magenta', 'red', 'volcano', 'orange', 'gold',
  'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple',
  'success', 'processing', 'error', 'warning', 'default',
]

export const Tag = defineComponent({
  name: 'Tag',
  props: {
    color: String as PropType<TagColor>,
    closable: Boolean,
    closeIcon: Object,
    bordered: {
      type: Boolean,
      default: true,
    },
    icon: Object,
  },
  emits: ['close'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('tag')

    const isPresetColor = computed(() =>
      props.color ? PRESET_COLORS.includes(props.color) : false,
    )

    const classes = computed(() =>
      cls(prefixCls, {
        [`${prefixCls}-${props.color}`]: isPresetColor.value || undefined,
        [`${prefixCls}-has-color`]: (props.color && !isPresetColor.value) || undefined,
        [`${prefixCls}-borderless`]: !props.bordered || undefined,
      }),
    )

    const tagStyle = computed(() => {
      if (props.color && !isPresetColor.value) {
        return { backgroundColor: props.color }
      }
      return {}
    })

    const handleClose = (e: MouseEvent) => {
      e.stopPropagation()
      emit('close', e)
    }

    return () => {
      const IconComp = props.icon as any
      const CloseIconComp = props.closeIcon as any

      return (
        <span class={classes.value} style={tagStyle.value}>
          {props.icon && <IconComp class={`${prefixCls}-icon`} />}
          {slots.default?.()}
          {props.closable && (
            <span
              class={`${prefixCls}-close-icon`}
              onClick={handleClose}
              role="button"
              aria-label="close"
            >
              {CloseIconComp ? <CloseIconComp /> : '×'}
            </span>
          )}
        </span>
      )
    }
  },
})

export const CheckableTag = defineComponent({
  name: 'CheckableTag',
  props: {
    checked: Boolean,
  },
  emits: ['change', 'update:checked'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('tag')

    const classes = computed(() =>
      cls(prefixCls, `${prefixCls}-checkable`, {
        [`${prefixCls}-checkable-checked`]: props.checked,
      }),
    )

    const handleClick = () => {
      const next = !props.checked
      emit('update:checked', next)
      emit('change', next)
    }

    return () => (
      <span class={classes.value} onClick={handleClick}>
        {slots.default?.()}
      </span>
    )
  },
})
