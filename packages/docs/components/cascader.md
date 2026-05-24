# Cascader 级联选择

级联选择框。

## 何时使用

- 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。
- 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。
- 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。

## 代码演示

### 基础用法

省市区级联。

```vue
<template>
  <Cascader
    v-model:value="value"
    :options="options"
    placeholder="请选择省市区"
    style="width: 300px;"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cascader } from 'ant-design-hmfw'

const value = ref<string[]>([])

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖区' },
          { value: 'yuhang', label: '余杭区' },
        ],
      },
      {
        value: 'ningbo',
        label: '宁波',
        children: [
          { value: 'haishu', label: '海曙区' },
          { value: 'jiangbei', label: '江北区' },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          { value: 'xuanwu', label: '玄武区' },
          { value: 'qinhuai', label: '秦淮区' },
        ],
      },
    ],
  },
]
</script>
```

### Hover 展开

通过 `expandTrigger` 设置为 `hover` 时，鼠标移入即展开下级菜单。

```vue
<template>
  <Cascader
    v-model:value="value"
    :options="options"
    expand-trigger="hover"
    placeholder="鼠标悬停展开"
    style="width: 300px;"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cascader } from 'ant-design-hmfw'

const value = ref<string[]>([])

const options = [
  {
    value: 'frontend',
    label: '前端',
    children: [
      {
        value: 'framework',
        label: '框架',
        children: [
          { value: 'vue', label: 'Vue' },
          { value: 'react', label: 'React' },
        ],
      },
      {
        value: 'language',
        label: '语言',
        children: [
          { value: 'ts', label: 'TypeScript' },
          { value: 'js', label: 'JavaScript' },
        ],
      },
    ],
  },
  {
    value: 'backend',
    label: '后端',
    children: [
      {
        value: 'node',
        label: 'Node.js',
        children: [
          { value: 'express', label: 'Express' },
          { value: 'koa', label: 'Koa' },
        ],
      },
    ],
  },
]
</script>
```

### 可搜索

可以直接搜索选项并选择。

```vue
<template>
  <Cascader
    v-model:value="value"
    :options="options"
    :show-search="true"
    placeholder="请搜索并选择"
    style="width: 300px;"
    @search="handleSearch"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cascader } from 'ant-design-hmfw'

const value = ref<string[]>([])

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖区' },
          { value: 'yuhang', label: '余杭区' },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          { value: 'xuanwu', label: '玄武区' },
        ],
      },
    ],
  },
]

const handleSearch = (searchText: string) => {
  console.log('搜索：', searchText)
}
</script>
```

### 选择即改变

当 `changeOnSelect` 为 `true` 时，点选每级菜单选项值都会发生变化。

```vue
<template>
  <div>
    <Cascader
      v-model:value="value"
      :options="options"
      :change-on-select="true"
      placeholder="选择即改变"
      style="width: 300px;"
      @change="handleChange"
    />
    <p style="margin-top: 8px;">当前值：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cascader } from 'ant-design-hmfw'

const value = ref<string[]>([])

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖区' },
        ],
      },
    ],
  },
]

const handleChange = (val: string[]) => {
  console.log('选中值：', val)
}
</script>
```

## API

### Cascader Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value(v-model) | 指定选中项 | `string[]` | - |
| defaultValue | 默认的选中项 | `string[]` | `[]` |
| options | 可选项数据源 | `CascaderOption[]` | `[]` |
| disabled | 禁用 | `boolean` | `false` |
| placeholder | 输入框占位文本 | `string` | `'请选择'` |
| allowClear | 是否支持清除 | `boolean` | `true` |
| size | 输入框大小 | `'small' \| 'middle' \| 'large'` | `'middle'` |
| status | 设置校验状态 | `'error' \| 'warning'` | - |
| expandTrigger | 次级菜单的展开方式 | `'click' \| 'hover'` | `'click'` |
| showSearch | 在选择框中显示搜索框 | `boolean` | `false` |
| changeOnSelect | 当此项为 true 时，点选每级菜单选项值都会发生变化 | `boolean` | `false` |
| displayRender | 选择后展示的渲染函数 | `(labels: string[]) => string` | - |
| fieldNames | 自定义 options 中 label value children 的字段 | `{ label?: string; value?: string; children?: string }` | `{ label: 'label', value: 'value', children: 'children' }` |

### CascaderOption

| 参数 | 说明 | 类型 |
|------|------|------|
| value | 选项的值 | `string` |
| label | 选项的标签 | `string` |
| disabled | 是否禁用 | `boolean` |
| children | 子选项 | `CascaderOption[]` |
| isLeaf | 标记是否为叶子节点，设置了 `loadData` 时有效 | `boolean` |

### Cascader Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:value | 选择完成后的回调 | `(value: string[]) => void` |
| change | 选择完成后的回调 | `(value: string[], selectedOptions: CascaderOption[]) => void` |
| search | 输入框搜索时的回调 | `(searchText: string) => void` |
| clear | 点击清除按钮时的回调 | `() => void` |
