import { defineComponent } from 'vue'

/**
 * Menu.ItemGroup 子组件 — 用于 JSX 声明式写法
 *
 * 该组件本身不渲染任何 DOM，由父级 Menu 通过 slot 解析并统一渲染。
 */
export const MenuItemGroup = defineComponent({
  name: 'MenuItemGroup',
  props: {
    key: String,
    label: String,
  },
  setup() {
    return () => null
  },
})
