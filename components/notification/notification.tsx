import { createApp, defineComponent, ref, reactive, computed, h, isVNode, type VNode } from 'vue'
import { cls } from '../_utils'
import {
  CheckCircleFilled,
  CloseCircleFilled,
  ExclamationCircleFilled,
  InfoCircleFilled,
  CloseOutlined,
} from '@hmfw/icons'
import type { ArgsProps, ConfigOptions, NotificationPlacement, NotificationType, NotificationContent } from './types'

interface NoticeItem extends ArgsProps {
  id: string
  leaving: boolean
  // 进度条与定时器暂停状态（pauseOnHover 时置为 true）
  paused: boolean
  // 实际生效的自动关闭时长（秒），用于驱动进度条动画时长
  resolvedDuration: number
}

// Icon map for each notification type
const TypeIcon: Record<NotificationType, VNode> = {
  success: h(CheckCircleFilled, { class: 'hmfw-icon' }),
  info: h(InfoCircleFilled, { class: 'hmfw-icon' }),
  warning: h(ExclamationCircleFilled, { class: 'hmfw-icon' }),
  error: h(CloseCircleFilled, { class: 'hmfw-icon' }),
}

const NotificationContainer = defineComponent({
  name: 'NotificationContainer',
  props: {
    placement: {
      type: String as () => NotificationPlacement,
      required: true,
    },
  },
  setup(props) {
    const notices = ref<NoticeItem[]>([])
    const timers = new Map<string, ReturnType<typeof setTimeout>>()

    const renderContent = (content: NotificationContent | undefined) => {
      if (content === undefined || content === null) return null
      if (typeof content === 'function') return content()
      if (isVNode(content)) return content
      return String(content)
    }

    const getIconNode = (item: NoticeItem) => {
      if (item.icon !== undefined) {
        return typeof item.icon === 'function' ? item.icon() : item.icon
      }
      return item.type ? TypeIcon[item.type] : null
    }

    const startTimer = (id: string, duration: number) => {
      if (duration <= 0) return
      const timer = setTimeout(() => removeNotice(id), duration * 1000)
      timers.set(id, timer)
    }

    const clearTimer = (id: string) => {
      const timer = timers.get(id)
      if (timer) {
        clearTimeout(timer)
        timers.delete(id)
      }
    }

    const add = (config: ArgsProps) => {
      const mergedKey = config.key ?? `notice-${Date.now()}-${Math.random()}`
      const id = String(mergedKey)
      const duration = config.duration ?? globalConfig.duration ?? 4.5

      // Update existing notice with the same key
      const existingIndex = notices.value.findIndex((n) => n.id === id)
      if (existingIndex >= 0) {
        clearTimer(id)
        notices.value.splice(existingIndex, 1, {
          ...config,
          id,
          leaving: false,
          paused: false,
          resolvedDuration: duration,
        })
        startTimer(id, duration)
        return
      }

      // Add new notice
      notices.value.push({ ...config, id, leaving: false, paused: false, resolvedDuration: duration })

      // Check maxCount
      const maxCount = globalConfig.maxCount
      if (maxCount && notices.value.length > maxCount) {
        const overflow = notices.value.slice(0, notices.value.length - maxCount)
        overflow.forEach((item) => removeNotice(item.id))
      }

      startTimer(id, duration)
    }

    const removeNotice = (id: string) => {
      const item = notices.value.find((n) => n.id === id)
      if (!item || item.leaving) return

      clearTimer(id)
      item.leaving = true

      // Trigger onClose callback
      item.onClose?.()

      // Remove from DOM after animation (300ms)
      setTimeout(() => {
        notices.value = notices.value.filter((n) => n.id !== id)
      }, 300)
    }

    const clear = () => {
      notices.value.forEach((n) => clearTimer(n.id))
      notices.value = []
      timers.clear()
    }

    const handleMouseEnter = (item: NoticeItem) => {
      const pauseOnHover = item.pauseOnHover ?? globalConfig.pauseOnHover ?? true
      if (pauseOnHover) {
        clearTimer(item.id)
        item.paused = true
      }
    }

    const handleMouseLeave = (item: NoticeItem) => {
      const pauseOnHover = item.pauseOnHover ?? globalConfig.pauseOnHover ?? true
      if (pauseOnHover) {
        item.paused = false
        startTimer(item.id, item.resolvedDuration)
      }
    }

    const topStyle = computed(() => {
      const p = props.placement
      const top = globalConfig.top ?? 24
      const bottom = globalConfig.bottom ?? 24
      if (p.startsWith('top') || p === 'top') {
        return typeof top === 'number' ? `${top}px` : top
      }
      if (p.startsWith('bottom') || p === 'bottom') {
        return typeof bottom === 'number' ? `${bottom}px` : bottom
      }
      return '24px'
    })

    const isRtl = computed(() => globalConfig.rtl ?? false)

    const positionStyle = computed(() => {
      const p = props.placement
      const rtl = isRtl.value
      const style: Record<string, string> = {
        position: 'fixed',
        zIndex: 'var(--hmfw-z-index-popup, 1010)',
        display: 'flex',
        flexDirection: 'column',
        // 通知之间的间距，对齐 AntD notificationMarginBottom = margin
        gap: 'var(--hmfw-margin)',
        // 容器宽度，对齐 AntD width = 384
        maxWidth: 'var(--hmfw-notification-width, 384px)',
        width: 'var(--hmfw-notification-width, 384px)',
        direction: rtl ? 'rtl' : 'ltr',
      }
      // 距边缘的偏移，对齐 AntD notificationMarginEdge = marginLG
      const edge = 'var(--hmfw-margin-lg)'
      // RTL 下 right/left 语义互换，使 topRight 仍贴靠视觉右侧
      const nearRight = p === 'topRight' || p === 'bottomRight'
      const nearLeft = p === 'topLeft' || p === 'bottomLeft'
      if (nearRight) {
        style[rtl ? 'left' : 'right'] = edge
      }
      if (nearLeft) {
        style[rtl ? 'right' : 'left'] = edge
      }
      if (p === 'top' || p === 'bottom') {
        style.left = '50%'
        style.transform = 'translateX(-50%)'
      }
      if (p.startsWith('top') || p === 'top') {
        style.top = topStyle.value
      }
      if (p.startsWith('bottom') || p === 'bottom') {
        style.bottom = topStyle.value
      }
      return style
    })

    return {
      notices,
      add,
      removeNotice,
      clear,
      positionStyle,
      isRtl,
      renderContent,
      getIconNode,
      handleMouseEnter,
      handleMouseLeave,
    }
  },
  render() {
    return (
      <div class={cls('hmfw-notification', this.isRtl ? 'hmfw-notification-rtl' : '')} style={this.positionStyle}>
        {this.notices.map((notice) => {
          const iconNode = this.getIconNode(notice)
          const hasIcon = iconNode !== null
          const closeIconNode = notice.closeIcon
            ? typeof notice.closeIcon === 'function'
              ? notice.closeIcon()
              : notice.closeIcon
            : h(CloseOutlined, { class: 'hmfw-icon' })
          // 进度条：仅在开启 showProgress 且会自动关闭（duration>0）时展示
          const showProgress =
            (notice.showProgress ?? globalConfig.showProgress ?? false) && notice.resolvedDuration > 0

          return (
            <div
              key={notice.id}
              class={cls(
                'hmfw-notification-notice',
                notice.type ? `hmfw-notification-notice-${notice.type}` : '',
                notice.leaving ? 'hmfw-notification-notice-leaving' : '',
                notice.className,
                notice.classNames?.notice,
              )}
              style={{ ...notice.style, ...notice.styles?.notice }}
              role={notice.role ?? 'alert'}
              onMouseenter={() => this.handleMouseEnter(notice)}
              onMouseleave={() => this.handleMouseLeave(notice)}
              onClick={() => notice.onClick?.()}
            >
              <div class="hmfw-notification-notice-content">
                {hasIcon && (
                  <div
                    class={cls(
                      'hmfw-notification-notice-icon',
                      notice.type ? `hmfw-notification-notice-icon-${notice.type}` : '',
                      notice.classNames?.icon,
                    )}
                    style={notice.styles?.icon}
                  >
                    {iconNode}
                  </div>
                )}
                <div class="hmfw-notification-notice-message-wrapper">
                  {notice.message && (
                    <div
                      class={cls('hmfw-notification-notice-message', notice.classNames?.message)}
                      style={notice.styles?.message}
                    >
                      {this.renderContent(notice.message)}
                    </div>
                  )}
                  {notice.description && (
                    <div
                      class={cls('hmfw-notification-notice-description', notice.classNames?.description)}
                      style={notice.styles?.description}
                    >
                      {this.renderContent(notice.description)}
                    </div>
                  )}
                  {notice.btn && (
                    <div class={cls('hmfw-notification-notice-btn', notice.classNames?.btn)} style={notice.styles?.btn}>
                      {typeof notice.btn === 'function' ? notice.btn() : notice.btn}
                    </div>
                  )}
                </div>
              </div>
              <button
                type="button"
                class={cls('hmfw-notification-notice-close', notice.classNames?.close)}
                style={notice.styles?.close}
                aria-label="Close"
                onClick={(e) => {
                  e.stopPropagation()
                  this.removeNotice(notice.id)
                }}
              >
                {closeIconNode}
              </button>
              {showProgress && (
                <div
                  class="hmfw-notification-notice-progress"
                  style={{
                    // 动画时长 = 实际自动关闭时长；hover 暂停时冻结动画
                    animationDuration: `${notice.resolvedDuration}s`,
                    animationPlayState: notice.paused ? 'paused' : 'running',
                  }}
                />
              )}
            </div>
          )
        })}
      </div>
    )
  },
})

type ContainerInstance = InstanceType<typeof NotificationContainer>

interface ContainerEntry {
  app: ReturnType<typeof createApp>
  instance: ContainerInstance
  container: HTMLElement
}

const containers = new Map<NotificationPlacement, ContainerEntry>()

// 使用 reactive 使容器内 computed（定位、rtl）能在 notification.config() 更新后自动重算
const globalConfig: ConfigOptions = reactive({
  top: 24,
  bottom: 24,
  duration: 4.5,
  pauseOnHover: true,
})

function getContainer(placement: NotificationPlacement) {
  if (containers.has(placement)) return containers.get(placement)!.instance

  const mountNode = globalConfig.getContainer?.() ?? document.body
  const container = document.createElement('div')
  mountNode.appendChild(container)

  const app = createApp(NotificationContainer, { placement })
  const instance = app.mount(container) as ContainerInstance

  containers.set(placement, { app, instance, container })
  return instance
}

function open(config: ArgsProps) {
  const placement = config.placement ?? globalConfig.placement ?? 'topRight'
  const container = getContainer(placement)
  container.add(config)
}

function destroy(key?: string) {
  if (key !== undefined) {
    containers.forEach(({ instance }) => instance.removeNotice(String(key)))
  } else {
    containers.forEach(({ app, instance, container }) => {
      instance.clear()
      app.unmount()
      container.parentNode?.removeChild(container)
    })
    containers.clear()
  }
}

function config(options: ConfigOptions) {
  // globalConfig 为 reactive，赋值后容器内依赖它的 computed（定位、rtl）会自动重算
  Object.assign(globalConfig, options)
}

export const notification = {
  open,
  success: (config: Omit<ArgsProps, 'type'>) => open({ ...config, type: 'success' }),
  info: (config: Omit<ArgsProps, 'type'>) => open({ ...config, type: 'info' }),
  warning: (config: Omit<ArgsProps, 'type'>) => open({ ...config, type: 'warning' }),
  error: (config: Omit<ArgsProps, 'type'>) => open({ ...config, type: 'error' }),
  destroy,
  config,
}
