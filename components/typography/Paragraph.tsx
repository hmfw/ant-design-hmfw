import { defineComponent, ref, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { Tooltip } from '../tooltip'
import { cls } from '../_utils'
import {
  baseTypographyProps,
  getTypographyClass,
  getEllipsisStyle,
  wrapDecorations,
  extractText,
  useCopyable,
  useEllipsisDetect,
  getEllipsisConfig,
  resolveEllipsisTooltipProps,
} from './Base'
import type { ParagraphClassNames, ParagraphStyles } from './types'

export default defineComponent({
  name: 'TypographyParagraph',
  props: {
    ...baseTypographyProps,
    classNames: {
      type: Object as PropType<ParagraphClassNames>,
      default: undefined,
    },
    styles: {
      type: Object as PropType<ParagraphStyles>,
      default: undefined,
    },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('typography')
    const { renderCopy } = useCopyable(prefixCls)
    const elRef = ref<HTMLElement | null>(null)
    const { isEllipsis } = useEllipsisDetect(elRef, props)

    return () => {
      const raw = slots.default?.()
      const children = wrapDecorations(props, raw)
      const text = extractText(raw)
      const copyNode = renderCopy(props, () => text)

      const ellipsisCfg = getEllipsisConfig(props.ellipsis)
      const tooltipProps = isEllipsis.value ? resolveEllipsisTooltipProps(ellipsisCfg.tooltip, text) : null

      const node = (
        <p
          ref={elRef}
          class={cls(getTypographyClass(prefixCls, props), props.classNames?.root)}
          style={{ ...getEllipsisStyle(props), ...props.styles?.root }}
        >
          {children}
          {copyNode}
        </p>
      )

      if (tooltipProps) {
        return <Tooltip {...tooltipProps}>{node}</Tooltip>
      }
      return node
    }
  },
})
