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
import type { LinkClassNames, LinkStyles } from './types'

export default defineComponent({
  name: 'TypographyLink',
  props: {
    ...baseTypographyProps,
    href: { type: String, default: undefined },
    target: { type: String, default: undefined },
    classNames: {
      type: Object as PropType<LinkClassNames>,
      default: undefined,
    },
    styles: {
      type: Object as PropType<LinkStyles>,
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
        <a
          ref={elRef}
          class={cls(getTypographyClass(prefixCls, props, `${prefixCls}-link`), props.classNames?.root)}
          style={{ ...getEllipsisStyle(props), ...props.styles?.root }}
          href={props.disabled ? undefined : props.href}
          target={props.target}
          aria-disabled={props.disabled || undefined}
        >
          {children}
          {copyNode}
        </a>
      )

      if (tooltipProps) {
        return <Tooltip {...tooltipProps}>{node}</Tooltip>
      }
      return node
    }
  },
})
