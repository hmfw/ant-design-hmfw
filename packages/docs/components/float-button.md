# FloatButton 悬浮按钮

悬浮按钮。

## 何时使用

- 用于网站上的全局功能
- 无论浏览到哪个位置，都可以看见的按钮

## 代码演示

<script setup>
import FloatButtonBasic from '../demos/float-button/FloatButtonBasic.vue'
import FloatButtonBasicSource from '../demos/float-button/FloatButtonBasic.vue?raw'
import FloatButtonGroupDemo from '../demos/float-button/FloatButtonGroup.vue'
import FloatButtonGroupDemoSource from '../demos/float-button/FloatButtonGroup.vue?raw'
import FloatButtonTypes from '../demos/float-button/FloatButtonTypes.vue'
import FloatButtonTypesSource from '../demos/float-button/FloatButtonTypes.vue?raw'
</script>

### 基础用法

最简单的用法。

<DemoBlock title="基础用法" :source="FloatButtonBasicSource">
  <FloatButtonBasic />
</DemoBlock>

### 按钮组

使用 FloatButtonGroup 可以将多个悬浮按钮组合在一起。

<DemoBlock title="按钮组" :source="FloatButtonGroupDemoSource">
  <FloatButtonGroupDemo />
</DemoBlock>

### 不同类型

提供 default 和 primary 两种类型。

<DemoBlock title="不同类型" :source="FloatButtonTypesSource">
  <FloatButtonTypes />
</DemoBlock>

## API

### FloatButton Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 设置按钮类型 | `'default' \| 'primary'` | `'default'` |
| shape | 设置按钮形状 | `'circle' \| 'square'` | `'circle'` |
| description | 文字及其他内容 | `string \| slot` | - |
| tooltip | 气泡提示的内容 | `string \| slot` | - |
| href | 点击跳转的地址 | `string` | - |
| badge | 带徽标数字的悬浮按钮 | `{ count?: number, dot?: boolean }` | - |

### FloatButton Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时的回调 | `(e: MouseEvent) => void` |

### FloatButtonGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| trigger | 触发方式，不设置时默认展示所有按钮 | `'click' \| 'hover'` | - |
| type | 设置按钮类型 | `'default' \| 'primary'` | `'default'` |
| shape | 设置按钮形状 | `'circle' \| 'square'` | `'circle'` |
| open | 受控展开 | `boolean` | - |
