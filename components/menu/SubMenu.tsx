import { defineComponent, type PropType, type VNode } from 'vue'

/**
 * Menu.SubMenu 子组件 — 用于 JSX 声明式写法
 *
 * 该组件本身不渲染任何 DOM，由父级 Menu 通过 slot 解析并统一渲染。
 */
export const SubMenu = defineComponent({
  name: 'SubMenu',
  props: {
    key: { type: String, required: true },
    label: String,
    title: String,
    icon: Object as PropType<VNode | (() => VNode)>,
    disabled: Boolean,
    popupClassName: String,
    popupOffset: Array as unknown as PropType<[number, number]>,
    theme: String as PropType<'light' | 'dark'>,
  },
  setup() {
    return () => null
  },
})
