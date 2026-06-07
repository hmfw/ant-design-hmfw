// DrawerManager: 管理多个 Drawer 的 zIndex，确保层级正确
// 每个 Drawer 占用 2 层：遮罩层和内容层

class DrawerManager {
  private drawers: Map<number, number> = new Map() // uid -> zIndex
  private uidCounter = 0

  /**
   * 注册一个新的 Drawer 实例
   * @returns uid - Drawer 的唯一标识符
   */
  register(): number {
    const uid = ++this.uidCounter
    // 计算新的 zIndex：基于当前已打开的 Drawer 数量
    const currentCount = this.drawers.size
    const zIndex = currentCount
    this.drawers.set(uid, zIndex)
    return uid
  }

  /**
   * 注销 Drawer 实例
   * @param uid - Drawer 的唯一标识符
   */
  unregister(uid: number): void {
    this.drawers.delete(uid)
  }

  /**
   * 获取指定 Drawer 的 zIndex 偏移量
   * @param uid - Drawer 的唯一标识符
   * @param baseZIndex - 基础 zIndex 值
   * @returns 计算后的 zIndex
   */
  getZIndex(uid: number, baseZIndex: number): number {
    const offset = this.drawers.get(uid) ?? 0
    // 每个 Drawer 占用 2 层：遮罩层 + 内容层
    return baseZIndex + offset * 2
  }

  /**
   * 获取当前已注册的 Drawer 数量
   */
  get size(): number {
    return this.drawers.size
  }
}

// 全局单例
export const drawerManager = new DrawerManager()
