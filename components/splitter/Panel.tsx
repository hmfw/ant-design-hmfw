import { defineComponent, computed } from 'vue'
import { cls } from '../_utils/cls'
import type { InternalPanelProps, PanelProps } from './types'

const internalPanelProps = {
  prefixCls: { type: String, default: undefined },
  size: { type: [Number, String], default: undefined },
  min: { type: [Number, String], default: undefined },
  max: { type: [Number, String], default: undefined },
  collapsible: { type: [Boolean, Object], default: undefined },
  resizable: { type: Boolean, default: true },
  defaultSize: { type: [Number, String], default: undefined },
  destroyOnHidden: { type: Boolean, default: false },
  supportMotion: { type: Boolean, default: false },
} satisfies Record<keyof InternalPanelProps, any>

export const InternalPanel = defineComponent({
  name: 'InternalPanel',
  props: internalPanelProps,
  setup(props, { slots, attrs }) {
    const isCollapsed = computed(() => {
      const { size } = props
      return size === 0 || (typeof size === 'string' && Number.parseFloat(size) === 0)
    })

    const panelClassName = computed(() =>
      cls(
        `${props.prefixCls}-panel`,
        {
          [`${props.prefixCls}-panel-hidden`]: isCollapsed.value,
          [`${props.prefixCls}-panel-transition`]: props.supportMotion,
        },
        attrs.class,
      ),
    )

    const hasSize = computed(() => props.size !== undefined)

    const panelStyle = computed(() => ({
      ...(attrs.style as any),
      // 从 SSR 启动时使用 auto
      // 数字尺寸需补 px 单位（React 会自动补，Vue 不会，无单位的 flex-basis 非法）
      flexBasis: hasSize.value ? (typeof props.size === 'number' ? `${props.size}px` : props.size) : 'auto',
      flexGrow: hasSize.value ? 0 : 1,
    }))

    return () => {
      const children = slots.default?.()
      const shouldRender = !(props.destroyOnHidden && isCollapsed.value)

      return (
        <div class={panelClassName.value} style={panelStyle.value}>
          {shouldRender && children}
        </div>
      )
    }
  },
})

// Panel 占位组件（实际渲染由 Splitter 控制）
// 占位组件仅承载配置 props，内容由 Splitter 提取 vnode props 后经 InternalPanel 渲染
const panelProps = {
  className: { type: String, default: undefined },
  style: { type: Object, default: undefined },
  min: { type: [Number, String], default: undefined },
  max: { type: [Number, String], default: undefined },
  size: { type: [Number, String], default: undefined },
  collapsible: { type: [Boolean, Object], default: undefined },
  resizable: { type: Boolean, default: true },
  defaultSize: { type: [Number, String], default: undefined },
  destroyOnHidden: { type: Boolean, default: undefined },
} satisfies Record<keyof PanelProps, any>

const Panel = defineComponent({
  name: 'Panel',
  props: panelProps,
  setup(_, { slots }) {
    return () => slots.default?.()
  },
})

export default Panel
