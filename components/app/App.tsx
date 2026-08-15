import { defineComponent, provide, h, Fragment, type PropType, type CSSProperties } from 'vue'
import { APP_KEY } from './context'
import { createMessage } from '../message/createMessage'
import { createNotification } from '../notification/createNotification'
import { Modal } from '../modal'
import { cls } from '../_utils/cls'
import type { AppConfig, AppProps } from './types'
import type { ConfigOptions as MessageConfigOptions } from '../message/types'
import type { ConfigOptions as NotificationConfigOptions } from '../notification/types'

// 提取 props 定义，使用 satisfies 确保与 AppProps 接口一致
const appProps = {
  message: { type: Object as PropType<MessageConfigOptions>, default: undefined },
  notification: { type: Object as PropType<NotificationConfigOptions>, default: undefined },
  component: { type: [String, Boolean] as PropType<string | false>, default: 'div' },
  style: { type: Object as PropType<CSSProperties>, default: undefined },
  className: { type: String, default: undefined },
  rootClassName: { type: String, default: undefined },
  prefixCls: { type: String, default: undefined },
} satisfies Record<keyof AppProps, any>

export const App = defineComponent({
  name: 'App',
  props: appProps,
  setup(props, { slots }) {
    /**
     * 提供 App 全局上下文，子组件通过 useApp() 获取实例
     *
     * message/notification 通过工厂函数创建独立实例，支持配置传递。
     * modal 方法直接调用 Modal 静态方法（Modal.confirm/info/success/warning/error），
     * 返回 { destroy, update } 控制句柄，支持后续操作。
     */
    const appConfig: AppConfig = {
      message: createMessage(props.message),
      notification: createNotification(props.notification),
      modal: {
        confirm: (props) => Modal.confirm(props),
        info: (props) => Modal.info(props),
        success: (props) => Modal.success(props),
        warning: (props) => Modal.warning(props),
        error: (props) => Modal.error(props),
      },
    }

    // 通过 Vue provide/inject 机制注入，使子组件可通过 useApp() 访问
    provide(APP_KEY, appConfig)

    return () => {
      const content = slots.default?.()

      // component={false} 时不创建容器 DOM 节点，直接渲染为 Fragment
      if (props.component === false) {
        return h(Fragment, null, content)
      }

      // 渲染为指定的容器元素（默认 div），应用样式属性
      return h(
        props.component as string,
        {
          class: cls(props.className, props.rootClassName),
          style: props.style,
        },
        content,
      )
    }
  },
})
