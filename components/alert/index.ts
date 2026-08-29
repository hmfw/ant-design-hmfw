export { Alert } from './Alert'
export type {
  // 1. 基础枚举（无依赖）
  AlertType,
  AlertVariant,

  // 2. 回调类型（无依赖）
  AlertCloseHandler,
  AlertAfterCloseHandler,

  // 3. 配置对象（被依赖的在前）
  AlertClosableConfig,
  AlertClosable, // 依赖 Config

  // 4. 最终 Props（依赖以上所有）
  AlertProps,
} from './types'
