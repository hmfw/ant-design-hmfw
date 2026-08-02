import { createMessage } from './createMessage'

export type {
  ArgsProps,
  ConfigOptions,
  JointContent,
  MessageApi,
  MessageClassNames,
  MessageContent,
  MessageInstance,
  MessageStyles,
  MessageType,
  NoticeType,
  TypeOpen,
} from './types'

export { createMessage }

/**
 * 全局单例 message 实例（向后兼容）
 * 在 App 组件内部通过 useApp() 获取的是独立实例
 */
export const message = createMessage()
