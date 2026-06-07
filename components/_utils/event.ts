type EventHandler<T extends Event = Event> = (event: T) => void

export function on<T extends Event>(
  el: EventTarget,
  event: string,
  handler: EventHandler<T>,
  options?: boolean | AddEventListenerOptions,
): () => void {
  el.addEventListener(event, handler as EventListener, options)
  return () => el.removeEventListener(event, handler as EventListener, options)
}

export function once<T extends Event>(el: EventTarget, event: string, handler: EventHandler<T>): void {
  const wrapper = (e: Event) => {
    handler(e as T)
    el.removeEventListener(event, wrapper)
  }
  el.addEventListener(event, wrapper)
}

const KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  TAB: 'Tab',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
} as const

export { KEYS }
