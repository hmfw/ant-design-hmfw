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
import type { TitleLevel, TitleClassNames, TitleStyles } from './types'

export default defineComponent({
  name: 'TypographyTitle',
  props: {
    ...baseTypographyProps,
    level: {
      type: Number as PropType<TitleLevel>,
      default: 1,
    },
    classNames: {
      type: Object as PropType<TitleClassNames>,
      default: undefined,
    },
    styles: {
      type: Object as PropType<TitleStyles>,
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
      const Tag = `h${props.level}` as any

      const ellipsisCfg = getEllipsisConfig(props.ellipsis)
      const tooltipProps = isEllipsis.value ? resolveEllipsisTooltipProps(ellipsisCfg.tooltip, text) : null

      const node = (
        <Tag
          ref={elRef}
          class={cls(getTypographyClass(prefixCls, props, `${prefixCls}-h${props.level}`), props.classNames?.root)}
          style={{ ...getEllipsisStyle(props), ...props.styles?.root }}
        >
          {children}
          {copyNode}
        </Tag>
      )

      if (tooltipProps) {
        return <Tooltip {...tooltipProps}>{node}</Tooltip>
      }
      return node
    }
  },
})
