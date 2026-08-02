import type { CSSProperties } from 'vue'
import type { message } from '../message'
import type { notification } from '../notification'
import type { ModalFuncProps, ModalFuncReturn } from '../modal/types'
import type { ConfigOptions as MessageConfigOptions } from '../message/types'
import type { ConfigOptions as NotificationConfigOptions } from '../notification/types'

export interface AppProps {
  /** App 内 Message 的全局配置 */
  message?: MessageConfigOptions
  /** App 内 Notification 的全局配置 */
  notification?: NotificationConfigOptions
  /** 设置渲染元素，为 false 则不创建 DOM 节点 */
  component?: string | false
  /** 容器内联样式 */
  style?: CSSProperties
  /** 容器 class */
  className?: string
  /** 根容器 class */
  rootClassName?: string
  /** 自定义前缀 */
  prefixCls?: string
}

export interface AppConfig {
  message: typeof message
  notification: typeof notification
  modal: {
    confirm: (props: ModalFuncProps) => ModalFuncReturn
    info: (props: ModalFuncProps) => ModalFuncReturn
    success: (props: ModalFuncProps) => ModalFuncReturn
    warning: (props: ModalFuncProps) => ModalFuncReturn
    error: (props: ModalFuncProps) => ModalFuncReturn
  }
}
