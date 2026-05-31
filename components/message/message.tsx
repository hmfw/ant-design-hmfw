import { createApp, ref, isVNode, type App, type VNodeChild } from 'vue'
import { cls } from '../_utils'
import { Icon } from '../icon'
import {
  CheckCircleFilled,
  CloseCircleFilled,
  ExclamationCircleFilled,
  InfoCircleFilled,
  LoadingOutlined,
} from '../icon/icons'
import type { IconComponent } from '../icon/types'
import type {
  ArgsProps,
  ConfigOptions,
  JointContent,
  MessageApi,
  MessageContent,
  MessageType,
  NoticeType,
  TypeOpen,
} from './types'

export type {
  ArgsProps,
  ConfigOptions,
  JointContent,
  MessageApi,
  MessageContent,
  MessageInstance,
  MessageType,
  NoticeType,
  TypeOpen,
} from './types'

const TYPE_ICONS: Record<NoticeType, IconComponent> = {
  info: InfoCircleFilled,
  success: CheckCircleFilled,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled,
  loading: LoadingOutlined,
}

const DEFAULT_DURATION = 3
const DEFAULT_TOP = 8

interface NoticeItem extends ArgsProps {
  mergedKey: string | number
  /** 标记离场动画进行中，用于在渲染时附加 closing class */
  leaving: boolean
}

let container: HTMLElement | null = null
let mountNode: HTMLElement | null = null
let app: App | null = null
const notices = ref<NoticeItem[]>([])
const timers = new Map<string | number, ReturnType<typeof setTimeout>>()
const closeResolvers = new Map<string | number, () => void>()

let keyIndex = 0
let globalConfig: Required<Pick<ConfigOptions, 'duration' | 'top' | 'pauseOnHover'>> &
  ConfigOptions = {
  duration: DEFAULT_DURATION,
  top: DEFAULT_TOP,
  pauseOnHover: true,
}

function renderContent(node: MessageContent | undefined): VNodeChild {
  if (node == null) return null
  if (typeof node === 'function') return (node as () => VNodeChild)()
  return node as VNodeChild
}

function getIconNode(type?: NoticeType, icon?: MessageContent): VNodeChild {
  if (icon != null) return renderContent(icon)
  if (type) return <Icon component={TYPE_ICONS[type]} spin={type === 'loading'} />
  return null
}

function clearTimer(key: string | number) {
  const timer = timers.get(key)
  if (timer) {
    clearTimeout(timer)
    timers.delete(key)
  }
}

function startTimer(item: NoticeItem) {
  const duration = item.duration ?? globalConfig.duration
  // duration <= 0 时不自动关闭，对齐 AntD（修复原实现 duration:0 仍关闭的 Bug）
  if (duration <= 0) return
  clearTimer(item.mergedKey)
  timers.set(
    item.mergedKey,
    setTimeout(() => removeNotice(item.mergedKey), duration * 1000),
  )
}

function topStyle(): string {
  const { top } = globalConfig
  return typeof top === 'number' ? `${top}px` : String(top ?? DEFAULT_TOP)
}

function ensureContainer() {
  const target = globalConfig.getContainer?.() ?? document.body
  if (container && mountNode && mountNode.parentNode === target) {
    container.style.top = topStyle()
    return
  }
  // 容器不存在或挂载点变更，重建
  if (app) {
    app.unmount()
    mountNode?.parentNode?.removeChild(mountNode)
  }
  mountNode = document.createElement('div')
  target.appendChild(mountNode)

  app = createApp({
    setup() {
      return () => (
        <div class="hmfw-message" style={{ top: topStyle() }}>
          <div class="hmfw-message-list">
            {notices.value.map((item) => {
              const iconNode = getIconNode(item.type, item.icon)
              return (
                <div
                  key={item.mergedKey}
                  class={cls(
                    'hmfw-message-notice-wrapper',
                    item.leaving && 'hmfw-message-notice-wrapper-leave',
                  )}
                  onMouseenter={() => {
                    if (item.pauseOnHover ?? globalConfig.pauseOnHover) clearTimer(item.mergedKey)
                  }}
                  onMouseleave={() => {
                    if (item.pauseOnHover ?? globalConfig.pauseOnHover) startTimer(item)
                  }}
                >
                  <div
                    class={cls(
                      'hmfw-message-notice',
                      item.type && `hmfw-message-notice-${item.type}`,
                      item.className,
                    )}
                    style={item.style}
                    onClick={(e: MouseEvent) => item.onClick?.(e)}
                  >
                    <div class="hmfw-message-notice-content">
                      {iconNode != null && <span class="hmfw-message-notice-icon">{iconNode}</span>}
                      <span class="hmfw-message-notice-title">{renderContent(item.content)}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    },
  })
  app.mount(mountNode)
  container = mountNode.firstElementChild as HTMLElement
  if (container) container.style.top = topStyle()
}

function removeNotice(key: string | number) {
  const item = notices.value.find((n) => n.mergedKey === key)
  if (!item || item.leaving) return
  clearTimer(key)
  item.leaving = true
  notices.value = [...notices.value]
  // 等待离场动画结束后真正移除
  setTimeout(() => {
    notices.value = notices.value.filter((n) => n.mergedKey !== key)
    item.onClose?.()
    const resolve = closeResolvers.get(key)
    if (resolve) {
      resolve()
      closeResolvers.delete(key)
    }
  }, 200)
}

function wrapPromise(key: string | number): MessageType {
  let resolveFn: () => void
  const promise = new Promise<boolean>((resolve) => {
    resolveFn = () => resolve(true)
  })
  closeResolvers.set(key, resolveFn!)

  const result = (() => removeNotice(key)) as MessageType
  result.then = (onfulfilled, onrejected) => promise.then(onfulfilled, onrejected)
  return result
}

function open(config: ArgsProps): MessageType {
  if (typeof document === 'undefined') {
    const noop = (() => {}) as MessageType
    noop.then = () => Promise.resolve(true) as never
    return noop
  }
  ensureContainer()

  let mergedKey = config.key
  if (mergedKey == null) {
    keyIndex += 1
    mergedKey = `hmfw-message-${keyIndex}`
  }

  const existingIndex = notices.value.findIndex((n) => n.mergedKey === mergedKey)
  const item: NoticeItem = { ...config, mergedKey, leaving: false }

  if (existingIndex >= 0) {
    // 相同 key：更新内容并重置计时器
    notices.value.splice(existingIndex, 1, item)
    notices.value = [...notices.value]
  } else {
    notices.value = [...notices.value, item]
    // maxCount：超出时关闭最早的提示
    const { maxCount } = globalConfig
    if (maxCount && notices.value.length > maxCount) {
      const overflow = notices.value.slice(0, notices.value.length - maxCount)
      overflow.forEach((n) => removeNotice(n.mergedKey))
    }
  }

  startTimer(item)
  return wrapPromise(mergedKey)
}

function destroy(key?: string | number) {
  if (key != null) {
    removeNotice(key)
  } else {
    notices.value.forEach((n) => clearTimer(n.mergedKey))
    notices.value.forEach((n) => n.onClose?.())
    closeResolvers.forEach((resolve) => resolve())
    closeResolvers.clear()
    notices.value = []
  }
}

function normalizeArgs(
  type: NoticeType,
  jointContent: JointContent,
  duration?: number | (() => void),
  onClose?: () => void,
): ArgsProps {
  const config: ArgsProps =
    jointContent != null &&
    typeof jointContent === 'object' &&
    !isVNode(jointContent) &&
    'content' in jointContent
      ? { ...(jointContent as ArgsProps) }
      : { content: jointContent as MessageContent }

  let mergedDuration: number | undefined
  let mergedOnClose: (() => void) | undefined
  if (typeof duration === 'function') {
    mergedOnClose = duration
  } else {
    mergedDuration = duration
    mergedOnClose = onClose
  }

  return { duration: mergedDuration, onClose: mergedOnClose, ...config, type }
}

function makeTypeOpen(type: NoticeType): TypeOpen {
  return (jointContent, duration, onClose) =>
    open(normalizeArgs(type, jointContent, duration, onClose))
}

function config(options: ConfigOptions) {
  globalConfig = { ...globalConfig, ...options }
  if (container) container.style.top = topStyle()
}

export const message: MessageApi = {
  open,
  destroy,
  config,
  success: makeTypeOpen('success'),
  error: makeTypeOpen('error'),
  warning: makeTypeOpen('warning'),
  info: makeTypeOpen('info'),
  loading: makeTypeOpen('loading'),
}
