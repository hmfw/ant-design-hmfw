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

type EventCallback = (...args: any[]) => void

interface Entry {
  source: EventTarget
  type: string
  options?: AddEventListenerOptions
  native: EventListener
  callbacks: Set<EventCallback>
}

const entries: Entry[] = []

/**
 * 打开中的弹层栈（后进先出）。
 *
 * keydown 是全局广播事件，若每个实例各自处理 Escape，嵌套弹层
 * （Dropdown 内嵌 Select、Modal 内的 DatePicker 等）按一次 Esc 会整层塌陷。
 * 借这个栈让 Esc 只作用于最内层——与 Ant Design 行为一致。
 *
 * 用不透明的 token 而非组件实例，避免模块持有实例引用妨碍回收。
 */
const openStack: symbol[] = []

/** 弹层打开时入栈；重复入栈会先移除旧位置，保证栈内唯一且顺序反映最近打开顺序。 */
export function pushOpenStack(token: symbol): void {
  removeFromOpenStack(token)
  openStack.push(token)
}

/** 弹层关闭或实例卸载时出栈。 */
export function removeFromOpenStack(token: symbol): void {
  const idx = openStack.indexOf(token)
  if (idx !== -1) openStack.splice(idx, 1)
}

/** 判断给定 token 是否位于栈顶（即最内层弹层）。 */
export function isTopOfOpenStack(token: symbol): boolean {
  return openStack.length > 0 && openStack[openStack.length - 1] === token
}

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
