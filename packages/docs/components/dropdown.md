# Dropdown 下拉菜单

向下弹出的列表。

## 何时使用

- 当页面上的操作命令过多时，用此组件可以收纳操作元素
- 点击或移入触点，会出现一个下拉菜单，可从中选择操作项

## 代码演示

### 基础用法

最简单的下拉菜单。

```vue
<template>
  <Dropdown :items="items" @click="onMenuClick">
    <Button>
      下拉菜单
      <Icon type="down" />
    </Button>
  </Dropdown>
</template>

<script setup lang="ts">
import { Dropdown, Button, Icon } from 'ant-design-hmfw'

const items = [
  { key: '1', label: '菜单项一' },
  { key: '2', label: '菜单项二' },
  { key: '3', label: '菜单项三' },
]

const onMenuClick = ({ key }: { key: string }) => {
  console.log('点击了:', key)
}
</script>
```

### 触发方式

通过 `trigger` 属性设置触发方式，支持 `hover` 和 `click`。

```vue
<template>
  <Space>
    <Dropdown :items="items" trigger="hover">
      <Button>悬停触发</Button>
    </Dropdown>
    <Dropdown :items="items" trigger="click">
      <Button>点击触发</Button>
    </Dropdown>
  </Space>
</template>

<script setup lang="ts">
import { Dropdown, Button, Space } from 'ant-design-hmfw'

const items = [
  { key: '1', label: '菜单项一' },
  { key: '2', label: '菜单项二' },
  { key: '3', label: '菜单项三' },
]
</script>
```

### 危险选项与分割线

通过 `danger` 属性标记危险操作，通过 `type: 'divider'` 添加分割线。

```vue
<template>
  <Dropdown :items="items" trigger="click" @click="onMenuClick">
    <Button>操作菜单</Button>
  </Dropdown>
</template>

<script setup lang="ts">
import { Dropdown, Button } from 'ant-design-hmfw'

const items = [
  { key: 'edit', label: '编辑' },
  { key: 'copy', label: '复制' },
  { type: 'divider' },
  { key: 'delete', label: '删除', danger: true },
]

const onMenuClick = ({ key }: { key: string }) => {
  console.log('点击了:', key)
}
</script>
```

### 弹出位置

通过 `placement` 属性设置弹出位置。

```vue
<template>
  <Space wrap>
    <Dropdown :items="items" placement="bottomLeft">
      <Button>左下</Button>
    </Dropdown>
    <Dropdown :items="items" placement="bottomCenter">
      <Button>居中下</Button>
    </Dropdown>
    <Dropdown :items="items" placement="bottomRight">
      <Button>右下</Button>
    </Dropdown>
    <Dropdown :items="items" placement="topLeft">
      <Button>左上</Button>
    </Dropdown>
    <Dropdown :items="items" placement="topCenter">
      <Button>居中上</Button>
    </Dropdown>
    <Dropdown :items="items" placement="topRight">
      <Button>右上</Button>
    </Dropdown>
  </Space>
</template>

<script setup lang="ts">
import { Dropdown, Button, Space } from 'ant-design-hmfw'

const items = [
  { key: '1', label: '菜单项一' },
  { key: '2', label: '菜单项二' },
]
</script>
```

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
