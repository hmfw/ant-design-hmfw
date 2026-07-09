export interface VirtualListProps<T = any> {
  /** 数据源 */
  data: T[]
  /** 每项的高度（固定高度模式） */
  itemHeight?: number
  /** 容器高度，支持 number（px）或 CSS 字符串 */
  height: number | string
  /** 缓冲区大小（上下各渲染多少额外项） */
  buffer?: number
  /** 渲染每一项的函数 */
  renderItem: (item: T, index: number) => any
  /** 每项的唯一 key */
  itemKey?: string | ((item: T, index: number) => string | number)
  /** 滚动事件回调 */
  onScroll?: (scrollTop: number) => void
}

export interface VirtualListInstance {
  /** 滚动到指定索引 */
  scrollToIndex: (index: number, align?: 'top' | 'center' | 'bottom') => void
  /** 滚动到顶部 */
  scrollToTop: () => void
  /** 滚动到底部 */
  scrollToBottom: () => void
}
