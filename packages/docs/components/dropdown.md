# Dropdown 下拉菜单

向下弹出的列表。

<script setup>
import DropdownBasic from '../demos/dropdown/DropdownBasic.vue'
import DropdownBasicSource from '../demos/dropdown/DropdownBasic.vue?raw'
import DropdownTrigger from '../demos/dropdown/DropdownTrigger.vue'
import DropdownTriggerSource from '../demos/dropdown/DropdownTrigger.vue?raw'
import DropdownDanger from '../demos/dropdown/DropdownDanger.vue'
import DropdownDangerSource from '../demos/dropdown/DropdownDanger.vue?raw'
import DropdownPlacement from '../demos/dropdown/DropdownPlacement.vue'
import DropdownPlacementSource from '../demos/dropdown/DropdownPlacement.vue?raw'
</script>

## 何时使用

- 当页面上的操作命令过多时，用此组件可以收纳操作元素
- 点击或移入触点，会出现一个下拉菜单，可从中选择操作项

## 代码演示

### 基础用法

最简单的下拉菜单。

<DemoBlock title="基础用法" :source="DropdownBasicSource">
  <DropdownBasic />
</DemoBlock>

### 触发方式

通过 `trigger` 属性设置触发方式，支持 `hover` 和 `click`。

<DemoBlock title="触发方式" :source="DropdownTriggerSource">
  <DropdownTrigger />
</DemoBlock>

### 危险选项与分割线

通过 `danger` 属性标记危险操作，通过 `type: 'divider'` 添加分割线。

<DemoBlock title="危险选项与分割线" :source="DropdownDangerSource">
  <DropdownDanger />
</DemoBlock>

### 弹出位置

通过 `placement` 属性设置弹出位置。

<DemoBlock title="弹出位置" :source="DropdownPlacementSource">
  <DropdownPlacement />
</DemoBlock>

## API

### Dropdown Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 菜单配置项 | `DropdownItem[]` | `[]` |
| trigger | 触发方式 | `'hover' \| 'click'` | `'hover'` |
| placement | 弹出位置 | `'bottomLeft' \| 'bottomCenter' \| 'bottomRight' \| 'topLeft' \| 'topCenter' \| 'topRight'` | `'bottomLeft'` |
| disabled | 是否禁用 | `boolean` | `false` |

### DropdownItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 唯一标识 | `string` | - |
| label | 菜单项标题 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| danger | 是否危险样式 | `boolean` | `false` |
| type | 菜单项类型，`'divider'` 为分割线 | `'divider'` | - |

### Dropdown Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击菜单项时触发 | `({ key: string }) => void` |

### Dropdown Slots

| 名称 | 说明 |
| --- | --- |
| default | 触发下拉的元素 |
