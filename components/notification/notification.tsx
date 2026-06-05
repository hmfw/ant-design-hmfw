import { createApp, defineComponent, ref, computed, h, isVNode, type VNode } from 'vue'
import { cls } from '../_utils'
import { Icon } from '../icon'
import {
  CheckCircleFilled,
  CloseCircleFilled,
  ExclamationCircleFilled,
  InfoCircleFilled,
  CloseOutlined,
} from '../icon/icons'
import type {
  ArgsProps,
  ConfigOptions,
  NotificationPlacement,
  NotificationType,
  NotificationContent,
} from './types'

interface NoticeItem extends ArgsProps {
  id: string
  leaving: boolean
}

// Icon map for each notification type
const TypeIcon: Record<NotificationType, VNode> = {
  success: h(Icon, { component: CheckCircleFilled }),
  info: h(Icon, { component: InfoCircleFilled }),
  warning: h(Icon, { component: ExclamationCircleFilled }),
  error: h(Icon, { component: CloseCircleFilled }),
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

      // Update existing notice with the same key
      const existingIndex = notices.value.findIndex((n) => n.id === id)
      if (existingIndex >= 0) {
        clearTimer(id)
        notices.value.splice(existingIndex, 1, { ...config, id, leaving: false })
        const duration = config.duration ?? globalConfig.duration ?? 4.5
        startTimer(id, duration)
        return
      }

      // Add new notice
      notices.value.push({ ...config, id, leaving: false })

      // Check maxCount
      const maxCount = globalConfig.maxCount
      if (maxCount && notices.value.length > maxCount) {
        const overflow = notices.value.slice(0, notices.value.length - maxCount)
        overflow.forEach((item) => removeNotice(item.id))
      }

      const duration = config.duration ?? globalConfig.duration ?? 4.5
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
      }
    }

    const handleMouseLeave = (item: NoticeItem) => {
      const pauseOnHover = item.pauseOnHover ?? globalConfig.pauseOnHover ?? true
      if (pauseOnHover) {
        const duration = item.duration ?? globalConfig.duration ?? 4.5
        startTimer(item.id, duration)
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

    const positionStyle = computed(() => {
      const p = props.placement
      const style: Record<string, string> = {
        position: 'fixed',
        zIndex: 'var(--hmfw-z-index-popup, 1010)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '384px',
        width: '384px',
      }
      if (p === 'topRight' || p === 'bottomRight') {
        style.right = '24px'
      }
      if (p === 'topLeft' || p === 'bottomLeft') {
        style.left = '24px'
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
      renderContent,
      getIconNode,
      handleMouseEnter,
      handleMouseLeave,
    }
  },
  render() {
    return (
      <div class="hmfw-notification" style={this.positionStyle}>
        {this.notices.map((notice) => {
          const iconNode = this.getIconNode(notice)
          const hasIcon = iconNode !== null
          const closeIconNode = notice.closeIcon
            ? typeof notice.closeIcon === 'function'
              ? notice.closeIcon()
              : notice.closeIcon
            : h(Icon, { component: CloseOutlined })

          return (
            <div
              key={notice.id}
              class={cls(
                'hmfw-notification-notice',
                notice.type ? `hmfw-notification-notice-${notice.type}` : '',
                notice.leaving ? 'hmfw-notification-notice-leaving' : '',
                notice.className,
              )}
              style={notice.style}
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
                    )}
                  >
                    {iconNode}
                  </div>
                )}
                <div class="hmfw-notification-notice-message-wrapper">
                  {notice.message && (
                    <div class="hmfw-notification-notice-message">
                      {this.renderContent(notice.message)}
                    </div>
                  )}
                  {notice.description && (
                    <div class="hmfw-notification-notice-description">
                      {this.renderContent(notice.description)}
                    </div>
                  )}
                  {notice.btn && (
                    <div class="hmfw-notification-notice-btn">
                      {typeof notice.btn === 'function' ? notice.btn() : notice.btn}
                    </div>
                  )}
                </div>
              </div>
              <button
                type="button"
                class="hmfw-notification-notice-close"
                aria-label="Close"
                onClick={(e) => {
                  e.stopPropagation()
                  this.removeNotice(notice.id)
                }}
              >
                {closeIconNode}
              </button>
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

const globalConfig: ConfigOptions = {
  top: 24,
  bottom: 24,
  duration: 4.5,
  pauseOnHover: true,
}

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
  Object.assign(globalConfig, options)

  // Update existing containers' top/bottom positioning
  containers.forEach(({ instance }, placement) => {
    if (placement) {
      // Force re-render by updating the container (Vue reactivity will handle it)
      instance.$forceUpdate?.()
    }
  })
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
