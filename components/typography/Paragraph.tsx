import { defineComponent, ref } from 'vue'
import { usePrefixCls } from '../config-provider'
import { Tooltip } from '../tooltip'
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

export default defineComponent({
  name: 'TypographyParagraph',
  props: baseTypographyProps,
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
      const tooltipProps = isEllipsis.value
        ? resolveEllipsisTooltipProps(ellipsisCfg.tooltip, text)
        : null

      const node = (
        <p
          ref={elRef}
          class={getTypographyClass(prefixCls, props)}
          style={getEllipsisStyle(props)}
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
