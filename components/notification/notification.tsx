import { createNotification } from './createNotification'

export type {
  ArgsProps,
  ConfigOptions,
  NotificationApi,
  NotificationContent,
  NotificationPlacement,
  NotificationType,
} from './types'

export { createNotification }

/**
 * 全局单例 notification 实例（向后兼容）
 * 在 App 组件内部通过 useApp() 获取的是独立实例
 */
export const notification = createNotification()
