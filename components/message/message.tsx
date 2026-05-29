import { createApp, ref, type App } from 'vue'
import { cls } from '../_utils'

export type MessageType = 'success' | 'error' | 'warning' | 'info' | 'loading'

interface MessageItem {
  id: number
  type: MessageType
  content: string
  duration: number
}

const ICONS: Record<MessageType, string> = {
  success: '✓',
  error: '✕',
  warning: '⚠',
  info: 'ℹ',
  loading: '⟳',
}

let container: HTMLElement | null = null
let app: App | null = null
const messages = ref<MessageItem[]>([])
let idCounter = 0

function ensureContainer() {
  if (container) return
  container = document.createElement('div')
  container.className = 'hmfw-message-container'
  document.body.appendChild(container)

  app = createApp({
    setup() {
      return () => (
        <div class="hmfw-message-container-inner">
          {messages.value.map((msg) => (
            <div key={msg.id} class={cls('hmfw-message-notice', `hmfw-message-${msg.type}`)}>
              <span class="hmfw-message-icon">{ICONS[msg.type]}</span>
              <span class="hmfw-message-content">{msg.content}</span>
            </div>
          ))}
        </div>
      )
    },
  })
  app.mount(container)
}

function show(type: MessageType, content: string, duration = 3): Promise<void> {
  if (typeof document === 'undefined') return Promise.resolve()
  ensureContainer()
  const id = ++idCounter
  messages.value.push({ id, type, content, duration })
  return new Promise((resolve) => {
    setTimeout(() => {
      messages.value = messages.value.filter((m) => m.id !== id)
      resolve()
    }, duration * 1000)
  })
}

export const message = {
  success: (content: string, duration?: number) => show('success', content, duration),
  error: (content: string, duration?: number) => show('error', content, duration),
  warning: (content: string, duration?: number) => show('warning', content, duration),
  info: (content: string, duration?: number) => show('info', content, duration),
  loading: (content: string, duration?: number) => show('loading', content, duration),
}
