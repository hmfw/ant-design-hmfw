import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  watch,
  nextTick,
  type Ref,
  type PropType,
  type VNode,
  type CSSProperties,
} from 'vue'
import { CheckOutlined } from '../icon'
import { cls } from '../_utils'
import { useLocale } from '../config-provider'
import { Tooltip } from '../tooltip'
import type {
  TypographyType,
  CopyableConfig,
  EllipsisConfig,
  EllipsisTooltipConfig,
} from './types'

// 内联 Copy 图标（图标系统暂无 CopyOutlined）
const CopyIcon = () =>
  (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" focusable="false">
      <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" />
    </svg>
  )

// 共享装饰类 props（Text/Title/Paragraph/Link 通用）
export const baseTypographyProps = {
  type: {
    type: String as PropType<TypographyType>,
    default: undefined,
  },
  disabled: { type: Boolean, default: false },
  mark: { type: Boolean, default: false },
  code: { type: Boolean, default: false },
  keyboard: { type: Boolean, default: false },
  underline: { type: Boolean, default: false },
  delete: { type: Boolean, default: false },
  strong: { type: Boolean, default: false },
  italic: { type: Boolean, default: false },
  /** 是否可复制，对象形式可配置复制内容/回调/tooltip 文案 */
  copyable: {
    type: [Boolean, Object] as PropType<boolean | CopyableConfig>,
    default: false,
  },
  /** 省略：true 单行省略，或 { rows, tooltip, onEllipsis } 完整配置 */
  ellipsis: {
    type: [Boolean, Object] as PropType<boolean | EllipsisConfig>,
    default: false,
  },
}

export interface BaseProps {
  type?: TypographyType
  disabled?: boolean
  mark?: boolean
  code?: boolean
  keyboard?: boolean
  underline?: boolean
  delete?: boolean
  strong?: boolean
  italic?: boolean
  copyable?: boolean | CopyableConfig
  ellipsis?: boolean | EllipsisConfig
}

/** 解析 ellipsis prop 的行数：true → 1，{ rows } → rows，false → 0 */
function getEllipsisRows(ellipsis: boolean | EllipsisConfig | undefined): number {
  if (!ellipsis) return 0
  if (ellipsis === true) return 1
  return ellipsis.rows && ellipsis.rows > 0 ? ellipsis.rows : 1
}

/** 提取 ellipsis 对象配置，true/false/undefined 时返回空对象 */
export function getEllipsisConfig(
  ellipsis: boolean | EllipsisConfig | undefined,
): EllipsisConfig {
  if (!ellipsis || ellipsis === true) return {}
  return ellipsis
}

// 计算根元素 class
export function getTypographyClass(
  prefixCls: string,
  props: BaseProps,
  extra?: string,
): string {
  const rows = getEllipsisRows(props.ellipsis)
  return cls(
    prefixCls,
    extra,
    {
      [`${prefixCls}-${props.type}`]: !!props.type,
      [`${prefixCls}-disabled`]: props.disabled,
      [`${prefixCls}-ellipsis`]: rows === 1,
      [`${prefixCls}-ellipsis-multiple-line`]: rows > 1,
    },
  )
}

/** 多行省略需要内联设置 -webkit-line-clamp，返回 style 对象或 undefined */
export function getEllipsisStyle(props: BaseProps): CSSProperties | undefined {
  const rows = getEllipsisRows(props.ellipsis)
  if (rows > 1) {
    return { '-webkit-line-clamp': String(rows) } as CSSProperties
  }
  return undefined
}

// 依次包裹文本装饰标签
export function wrapDecorations(props: BaseProps, children: any): any {
  let node = children
  if (props.code) node = <code>{node}</code>
  if (props.mark) node = <mark>{node}</mark>
  if (props.keyboard) node = <kbd>{node}</kbd>
  if (props.underline) node = <u>{node}</u>
  if (props.delete) node = <del>{node}</del>
  if (props.strong) node = <strong>{node}</strong>
  if (props.italic) node = <i>{node}</i>
  return node
}

// 从 VNode 树递归提取纯文本（用于 copyable 默认复制内容）
export function extractText(nodes: any): string {
  if (nodes == null || typeof nodes === 'boolean') return ''
  if (typeof nodes === 'string' || typeof nodes === 'number') return String(nodes)
  if (Array.isArray(nodes)) return nodes.map(extractText).join('')
  // VNode
  const children = (nodes as VNode).children
  if (typeof children === 'string') return children
  if (Array.isArray(children)) return children.map(extractText).join('')
  return ''
}

async function copyToClipboard(text: string): Promise<void> {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }
  // 回退方案
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  try {
    document.execCommand('copy')
  } finally {
    document.body.removeChild(textarea)
  }
}

// 渲染 copyable 复制按钮（返回 VNode 或 null）
export function useCopyable(prefixCls: string) {
  const copied = ref(false)
  const locale = useLocale()
  let timer: ReturnType<typeof setTimeout> | undefined

  const renderCopy = (props: BaseProps, getText: () => string) => {
    if (!props.copyable) return null
    const config: CopyableConfig =
      typeof props.copyable === 'object' ? props.copyable : {}

    // 文案优先级：用户自定义 tooltips > locale > 默认（aria-label 用）
    const typoLocale = locale.value.Typography
    const customTooltips = Array.isArray(config.tooltips) ? config.tooltips : null
    const copyText = customTooltips
      ? customTooltips[0]
      : typoLocale?.copy ?? 'Copy'
    const copiedText = customTooltips
      ? customTooltips[1]
      : typoLocale?.copied ?? 'Copied'

    // 自定义图标支持
    const beforeIcon = config.icon?.[0] ?? <CopyIcon />
    const afterIcon = config.icon?.[1] ?? <CheckOutlined />

    const onClick = async (e: MouseEvent) => {
      e.stopPropagation()
      const text = config.text ?? getText()
      try {
        await copyToClipboard(text)
        copied.value = true
        config.onCopy?.(e)
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          copied.value = false
        }, 3000)
      } catch {
        // 忽略复制失败
      }
    }

    const button = (
      <button
        type="button"
        class={cls(`${prefixCls}-copy`, {
          [`${prefixCls}-copy-success`]: copied.value,
        })}
        aria-label={copied.value ? copiedText : copyText}
        title={copied.value ? copiedText : copyText}
        onClick={onClick}
      >
        {copied.value ? afterIcon : beforeIcon}
      </button>
    )

    // tooltips 显式为 false 时不包 Tooltip
    if (config.tooltips === false) {
      return button
    }

    return (
      <Tooltip title={copied.value ? copiedText : copyText}>
        {button}
      </Tooltip>
    )
  }

  return { renderCopy }
}

/**
 * useEllipsisDetect：检测多行/单行省略状态变化并触发 onEllipsis 回调。
 * 同时返回 isEllipsis ref，供 tooltip 渲染判断。
 *
 * 检测策略：
 * - 单行省略：比较 scrollWidth 与 clientWidth
 * - 多行省略：比较 scrollHeight 与 clientHeight
 * - 监听 ResizeObserver（容器/内容尺寸变化）
 */
export function useEllipsisDetect(
  el: Ref<HTMLElement | null>,
  props: BaseProps,
) {
  const isEllipsis = ref(false)

  const enabled = computed(() => !!props.ellipsis)
  const config = computed(() => getEllipsisConfig(props.ellipsis))
  const rows = computed(() => getEllipsisRows(props.ellipsis))

  let ro: ResizeObserver | null = null
  let lastValue = false

  const measure = () => {
    if (!enabled.value) {
      if (lastValue) {
        lastValue = false
        isEllipsis.value = false
        config.value.onEllipsis?.(false)
      }
      return
    }
    const node = el.value
    if (!node) return
    let truncated = false
    if (rows.value <= 1) {
      truncated = node.scrollWidth > node.clientWidth + 1
    } else {
      truncated = node.scrollHeight > node.clientHeight + 1
    }
    if (truncated !== lastValue) {
      lastValue = truncated
      isEllipsis.value = truncated
      config.value.onEllipsis?.(truncated)
    } else {
      isEllipsis.value = truncated
    }
  }

  const setup = () => {
    teardown()
    if (!enabled.value) return
    const node = el.value
    if (!node) return
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => measure())
      ro.observe(node)
    }
    nextTick(measure)
  }

  const teardown = () => {
    if (ro) {
      ro.disconnect()
      ro = null
    }
  }

  onMounted(() => setup())
  onBeforeUnmount(() => teardown())

  // 当 ellipsis / rows 变化时，重新设置观察器
  watch(
    () => [enabled.value, rows.value],
    () => {
      setup()
      nextTick(measure)
    },
  )

  return { isEllipsis, measure }
}

/**
 * 将 ellipsis.tooltip 配置标准化为 Tooltip props
 * - false / undefined → null（不渲染）
 * - true → { title: 节点文本 }
 * - string/number → { title: 值 }
 * - 对象 → 直接展开为 Tooltip props
 */
export function resolveEllipsisTooltipProps(
  tooltip: EllipsisTooltipConfig | undefined,
  fallbackText: string,
): Record<string, unknown> | null {
  if (tooltip === false || tooltip === undefined) return null
  if (tooltip === true) return { title: fallbackText }
  if (typeof tooltip === 'string' || typeof tooltip === 'number') {
    return { title: tooltip }
  }
  if (typeof tooltip === 'object') {
    return { title: fallbackText, ...tooltip }
  }
  return null
}
