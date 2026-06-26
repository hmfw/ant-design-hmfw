import { defineComponent, type PropType, type VNode } from 'vue'

/**
 * Menu.Item 子组件 — 用于 JSX 声明式写法
 *
 * ```tsx
 * <Menu mode="inline">
 *   <Menu.Item key="1" icon={<MailOutlined />}>导航一</Menu.Item>
 *   <Menu.SubMenu key="sub" title="子菜单">
 *     <Menu.Item key="2">选项一</Menu.Item>
 *   </Menu.SubMenu>
 * </Menu>
 * ```
 *
 * 该组件本身不渲染任何 DOM，由父级 Menu 通过 slot 解析并统一渲染。
 */
export const MenuItem = defineComponent({
  name: 'MenuItem',
  props: {
    key: { type: String, required: true },
    label: String,
    icon: Object as PropType<VNode | (() => VNode)>,
    disabled: Boolean,
    danger: Boolean,
    title: String,
    /** 附加信息，如快捷键提示 */
    extra: [String, Object] as PropType<string | VNode>,
  },
  setup() {
    return () => null
  },
})
