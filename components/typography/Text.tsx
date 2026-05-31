import { defineComponent } from 'vue'
import { usePrefixCls } from '../config-provider'
import {
  baseTypographyProps,
  getTypographyClass,
  getEllipsisStyle,
  wrapDecorations,
  extractText,
  useCopyable,
} from './Base'

export default defineComponent({
  name: 'TypographyText',
  props: baseTypographyProps,
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('typography')
    const { renderCopy } = useCopyable(prefixCls)

    return () => {
      const raw = slots.default?.()
      const children = wrapDecorations(props, raw)
      const copyNode = renderCopy(props, () => extractText(raw))

      return (
        <span class={getTypographyClass(prefixCls, props)} style={getEllipsisStyle(props)}>
          {children}
          {copyNode}
        </span>
      )
    }
  },
})
