/**
 * Trigger 全局事件管理器。
 *
 * 页面可能存在多个 Trigger 实例（Select、Tooltip、Dropdown …），
 * 都需要监听 document（mousedown / keydown）和 window（resize / scroll）。
 * 若每个实例独立 addEventListener，N 个实例 = N 倍回调开销。
 *
 * 此模块对每种事件类型仅注册一次 DOM 事件，内部分发到实例回调，
 * 当没有任何订阅者时自动解绑，零开销。
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type EventCallback = (...args: any[]) => void

interface Entry {
  source: EventTarget
  type: string
  options?: AddEventListenerOptions
  native: EventListener
  callbacks: Set<EventCallback>
}

const entries: Entry[] = []

function entryKey(source: EventTarget, type: string, options?: AddEventListenerOptions): string {
  const capture = options?.capture ?? false
  return `${type}::${capture}::${source === document ? 'doc' : 'win'}`
}

/**
 * 订阅全局事件，返回取消订阅函数。
 * 对同一 (source, type, capture) 组合只注册一次原生 DOM 事件。
 */
export function subscribeGlobal(
  source: EventTarget,
  type: string,
  cb: EventCallback,
  options?: AddEventListenerOptions,
): () => void {
  const key = entryKey(source, type, options)
  let entry = entries.find((e) => entryKey(e.source, e.type, e.options) === key)

  if (!entry) {
    const native: EventListener = (e: Event) => {
      // 从 entries 中重新查找（此回调在 unsubscribe 时可能已被删除）
      const current = entries.find((en) => entryKey(en.source, en.type, en.options) === key)
      if (!current) return
      current.callbacks.forEach((c) => {
        try {
          c(e)
        } catch {
          /* 单个回调出错不影响其他实例 */
        }
      })
    }
    source.addEventListener(type, native, options)
    entry = { source, type, options, native, callbacks: new Set() }
    entries.push(entry)
  }

  entry.callbacks.add(cb)

  return () => {
    const idx = entries.findIndex((e) => entryKey(e.source, e.type, e.options) === key)
    if (idx === -1) return
    const en = entries[idx]
    en.callbacks.delete(cb)
    if (en.callbacks.size === 0) {
      en.source.removeEventListener(en.type, en.native, en.options)
      entries.splice(idx, 1)
    }
  }
}
