import { defineComponent } from 'vue'
import { usePrefixCls } from '../config-provider'
import {
  baseTypographyProps,
  getTypographyClass,
  wrapDecorations,
  extractText,
  useCopyable,
} from './Base'

export default defineComponent({
  name: 'TypographyLink',
  props: {
    ...baseTypographyProps,
    href: { type: String, default: undefined },
    target: { type: String, default: undefined },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('typography')
    const { renderCopy } = useCopyable(prefixCls)

    return () => {
      const raw = slots.default?.()
      const children = wrapDecorations(props, raw)
      const copyNode = renderCopy(props, () => extractText(raw))

      return (
        <a
          class={getTypographyClass(prefixCls, props, `${prefixCls}-link`)}
          href={props.disabled ? undefined : props.href}
          target={props.target}
          aria-disabled={props.disabled || undefined}
        >
          {children}
          {copyNode}
        </a>
      )
    }
  },
})
