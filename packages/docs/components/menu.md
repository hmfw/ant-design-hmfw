# Menu 导航菜单

为页面和功能提供导航的菜单列表。

## 何时使用

- 需要展示一个系统功能菜单时
- 需要展示多级导航时
- 需要顶部导航或侧边导航时

## 代码演示

### 顶部导航

水平的顶部导航菜单。

```vue
<template>
  <Menu
    mode="horizontal"
    :items="items"
    :selected-keys="selectedKeys"
    @select="onSelect"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu } from 'ant-design-hmfw'

const selectedKeys = ref(['home'])

const items = [
  { key: 'home', label: '首页', icon: 'home' },
  { key: 'user', label: '用户管理', icon: 'user' },
  {
    key: 'setting',
    label: '系统设置',
    icon: 'setting',
    children: [
      { key: 'setting-1', label: '基础设置' },
      { key: 'setting-2', label: '高级设置' },
    ],
  },
]

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}
</script>
```

### 内嵌菜单

垂直菜单，子菜单内嵌在菜单区域。

```vue
<template>
  <div style="width: 256px; border-right: 1px solid #f0f0f0;">
    <Menu
      mode="inline"
      :items="items"
      :selected-keys="selectedKeys"
      :default-open-keys="['sub1']"
      @select="onSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu } from 'ant-design-hmfw'

const selectedKeys = ref(['1'])

const items = [
  {
    key: 'sub1',
    label: '导航一',
    icon: 'home',
    children: [
      { key: '1', label: '选项一' },
      { key: '2', label: '选项二' },
      { key: '3', label: '选项三' },
    ],
  },
  {
    key: 'sub2',
    label: '导航二',
    icon: 'setting',
    children: [
      { key: '5', label: '选项五' },
      { key: '6', label: '选项六' },
    ],
  },
  { key: '9', label: '导航三', icon: 'user' },
]

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}
</script>
```

### 折叠菜单

内嵌菜单可以被折叠。

```vue
<template>
  <div>
    <Button
      type="primary"
      style="margin-bottom: 16px;"
      @click="collapsed = !collapsed"
    >
      {{ collapsed ? '展开' : '折叠' }}
    </Button>
    <div :style="{ width: collapsed ? '80px' : '256px', borderRight: '1px solid #f0f0f0', transition: 'width 0.2s' }">
      <Menu
        mode="inline"
        :items="items"
        :selected-keys="selectedKeys"
        :inline-collapsed="collapsed"
        @select="onSelect"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, Button } from 'ant-design-hmfw'

const collapsed = ref(false)
const selectedKeys = ref(['1'])

const items = [
  { key: '1', label: '导航一', icon: 'home' },
  { key: '2', label: '导航二', icon: 'user' },
  { key: '3', label: '导航三', icon: 'setting' },
]

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}
</script>
```

## API

### Menu Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 菜单内容 | `MenuItem[]` | `[]` |
| mode | 菜单类型 | `'horizontal' \| 'vertical' \| 'inline'` | `'vertical'` |
| theme | 主题颜色 | `'light' \| 'dark'` | `'light'` |
| selectedKeys | 当前选中的菜单项 key 数组 | `string[]` | - |
| defaultSelectedKeys | 初始选中的菜单项 key 数组 | `string[]` | `[]` |
| openKeys | 当前展开的 SubMenu 菜单项 key 数组 | `string[]` | - |
| defaultOpenKeys | 初始展开的 SubMenu 菜单项 key 数组 | `string[]` | `[]` |
| collapsed | 是否折叠（仅 inline 模式） | `boolean` | `false` |
| inlineCollapsed | inline 时菜单是否收起状态 | `boolean` | `false` |

### MenuItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 唯一标识 | `string` | - |
| label | 菜单项标题 | `string` | - |
| icon | 图标类型 | `string` | - |
| children | 子菜单项 | `MenuItem[]` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| type | 菜单项类型 | `'group' \| 'divider'` | - |

### Menu Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 被选中时调用 | `({ key: string, keyPath: string[], selectedKeys: string[] }) => void` |
| openChange | SubMenu 展开/关闭的回调 | `(openKeys: string[]) => void` |
| click | 点击菜单项触发的回调 | `({ key: string, keyPath: string[] }) => void` |
