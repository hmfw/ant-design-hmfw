export function isClient(): boolean {
  return typeof window !== 'undefined'
}

export function getScrollParent(el: HTMLElement): HTMLElement | Window {
  let parent: HTMLElement | null = el.parentElement
  while (parent) {
    const { overflow, overflowY, overflowX } = getComputedStyle(parent)
    if (/auto|scroll|overlay/.test(overflow + overflowY + overflowX)) {
      return parent
    }
    parent = parent.parentElement
  }
  return window
}

export function getOffset(el: HTMLElement): { top: number; left: number } {
  const rect = el.getBoundingClientRect()
  return {
    top: rect.top + (isClient() ? window.scrollY : 0),
    left: rect.left + (isClient() ? window.scrollX : 0),
  }
}

export function contains(parent: HTMLElement, child: Node): boolean {
  return parent === child || parent.contains(child)
}
