import { defineComponent, computed, type PropType, type CSSProperties } from 'vue'
import { cls } from '../_utils/cls'
import { usePrefixCls } from '../config-provider/context'
import type { IconComponent } from '@hmfw/icons'

export default defineComponent({
  name: 'Icon',
  props: {
    component: {
      type: [Object, Function] as PropType<IconComponent>,
      default: undefined,
    },
    spin: {
      type: Boolean,
      default: false,
    },
    rotate: {
      type: Number,
      default: undefined,
    },
    style: {
      type: [String, Object] as PropType<string | CSSProperties>,
      default: undefined,
    },
    class: {
      type: String,
      default: undefined,
    },
  },
  setup(props) {
    const prefixCls = usePrefixCls('icon')

    const classes = computed(() => cls(prefixCls, props.spin && `${prefixCls}-spin`, props.class))

    const iconStyle = computed<CSSProperties>(() => {
      const base: CSSProperties = typeof props.style === 'string' ? {} : (props.style ?? {})
      if (props.rotate !== undefined) {
        return { ...base, transform: `rotate(${props.rotate}deg)` }
      }
      return base
    })

    return () => {
      const Comp = props.component
      if (!Comp) return null

      return (
        <span role="img" aria-hidden="true" class={classes.value} style={iconStyle.value}>
          <Comp />
        </span>
      )
    }
  },
})
