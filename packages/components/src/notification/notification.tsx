import { createApp, defineComponent, ref, computed, type PropType } from 'vue'
import { cls } from '../_utils'
import type { NotificationConfig, NotificationPlacement, NotificationType } from './types'

const iconMap: Record<NotificationType, string> = {
  success: '✓',
  info: 'ℹ',
  warning: '⚠',
  error: '✕',
}

interface NoticeItem extends NotificationConfig {
  id: string
  visible: boolean
}

const NotificationContainer = defineComponent({
  name: 'NotificationContainer',
  props: {
    placement: {
      type: String as PropType<NotificationPlacement>,
      default: 'topRight',
    },
  },
  setup(props) {
    const notices = ref<NoticeItem[]>([])

    const add = (config: NotificationConfig) => {
      const id = config.key ?? `notice-${Date.now()}-${Math.random()}`
      const existing = notices.value.findIndex((n) => n.id === id)
      if (existing >= 0) {
        notices.value[existing] = { ...config, id, visible: true }
        return
      }
      notices.value.push({ ...config, id, visible: true })
      const duration = config.duration ?? 4.5
      if (duration > 0) {
        setTimeout(() => remove(id), duration * 1000)
      }
    }

    const remove = (id: string) => {
      const item = notices.value.find((n) => n.id === id)
      if (item) {
        item.visible = false
        item.onClose?.()
        setTimeout(() => {
          notices.value = notices.value.filter((n) => n.id !== id)
        }, 300)
      }
    }

    const clear = () => { notices.value = [] }

    const positionStyle = computed(() => {
      const p = props.placement
      const style: Record<string, string> = {
        position: 'fixed',
        zIndex: '1010',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        maxWidth: '384px',
        width: '384px',
      }
      if (p === 'topRight' || p === 'bottomRight') { style.right = '24px' }
      if (p === 'topLeft' || p === 'bottomLeft') { style.left = '24px' }
      if (p === 'top' || p === 'bottom') { style.left = '50%'; style.transform = 'translateX(-50%)' }
      if (p.startsWith('top') || p === 'top') { style.top = '24px' }
      if (p.startsWith('bottom') || p === 'bottom') { style.bottom = '24px' }
      return style
    })

    return { notices, add, remove, clear, positionStyle }
  },
  render() {
    return (
      <div style={this.positionStyle}>
        {this.notices.map((notice) => (
          <div
            key={notice.id}
            class={cls('hmfw-notification-notice', {
              'hmfw-notification-notice-closing': !notice.visible,
            })}
            style={notice.style}
            onClick={() => notice.onClick?.()}
          >
            <div class="hmfw-notification-notice-content">
              {notice.type && (
                <span class={cls('hmfw-notification-notice-icon', `hmfw-notification-notice-icon-${notice.type}`)}>
                  {iconMap[notice.type]}
                </span>
              )}
              <div class="hmfw-notification-notice-message-wrapper">
                <div class="hmfw-notification-notice-message">{notice.message}</div>
                {notice.description && (
                  <div class="hmfw-notification-notice-description">{notice.description}</div>
                )}
              </div>
            </div>
            <button
              class="hmfw-notification-notice-close"
              onClick={(e) => { e.stopPropagation(); this.remove(notice.id) }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    )
  },
})

type ContainerInstance = InstanceType<typeof NotificationContainer>

const containers = new Map<NotificationPlacement, { app: ReturnType<typeof createApp>; instance: ContainerInstance }>()

function getContainer(placement: NotificationPlacement = 'topRight') {
  if (containers.has(placement)) return containers.get(placement)!.instance

  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)
  const app = createApp(NotificationContainer, { placement })
  const instance = app.mount(mountNode) as ContainerInstance
  containers.set(placement, { app, instance })
  return instance
}

function open(config: NotificationConfig) {
  const placement = config.placement ?? 'topRight'
  const container = getContainer(placement)
  container.add(config)
}

function destroy(key?: string) {
  if (key) {
    containers.forEach(({ instance }) => instance.remove(key))
  } else {
    containers.forEach(({ app, instance }) => {
      instance.clear()
      app.unmount()
    })
    containers.clear()
  }
}

export const notification = {
  open,
  success: (config: Omit<NotificationConfig, 'type'>) => open({ ...config, type: 'success' }),
  info: (config: Omit<NotificationConfig, 'type'>) => open({ ...config, type: 'info' }),
  warning: (config: Omit<NotificationConfig, 'type'>) => open({ ...config, type: 'warning' }),
  error: (config: Omit<NotificationConfig, 'type'>) => open({ ...config, type: 'error' }),
  destroy,
}
