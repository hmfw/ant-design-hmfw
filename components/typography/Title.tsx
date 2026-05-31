import { defineComponent, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import {
  baseTypographyProps,
  getTypographyClass,
  getEllipsisStyle,
  wrapDecorations,
  extractText,
  useCopyable,
} from './Base'
import type { TitleLevel } from './types'

export default defineComponent({
  name: 'TypographyTitle',
  props: {
    ...baseTypographyProps,
    level: {
      type: Number as PropType<TitleLevel>,
      default: 1,
    },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('typography')
    const { renderCopy } = useCopyable(prefixCls)

    return () => {
      const raw = slots.default?.()
      const children = wrapDecorations(props, raw)
      const copyNode = renderCopy(props, () => extractText(raw))
      const Tag = `h${props.level}` as any

      return (
        <Tag
          class={getTypographyClass(prefixCls, props, `${prefixCls}-h${props.level}`)}
          style={getEllipsisStyle(props)}
        >
          {children}
          {copyNode}
        </Tag>
      )
    }
  },
})
