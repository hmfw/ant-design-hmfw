# Segmented 分段控制器

分段控制器。

## 何时使用

- 用于展示多个选项并允许用户选择其中单个选项
- 当切换选中选项时,关联区域的内容会发生变化

## 代码演示

### 基础用法

基本分段控制器。

<DemoBlock title="基础用法" :source="SegmentedBasicSource">
  <SegmentedBasic />
</DemoBlock>

### Block 模式

block 属性使其适合父元素宽度。

<DemoBlock title="Block 模式" :source="SegmentedBlockSource">
  <SegmentedBlock />
</DemoBlock>

### 禁用

禁用某些选项。

<DemoBlock title="禁用" :source="SegmentedDisabledSource">
  <SegmentedDisabled />
</DemoBlock>

### 三种尺寸

提供 large、middle、small 三种尺寸。

<DemoBlock title="三种尺寸" :source="SegmentedSizeSource">
  <SegmentedSize />
</DemoBlock>

### 垂直方向

垂直布局的分段控制器。

<DemoBlock title="垂直方向" :source="SegmentedVerticalSource">
  <SegmentedVertical />
</DemoBlock>

### 圆角形状

胶囊型的分段控制器。

<DemoBlock title="圆角形状" :source="SegmentedShapeSource">
  <SegmentedShape />
</DemoBlock>

### 带图标

在选项中使用图标。

<DemoBlock title="带图标" :source="SegmentedWithIconSource">
  <SegmentedWithIcon />
</DemoBlock>

### 图标 + 文本

图标与文本同时存在时自动优化布局，间距统一。

<DemoBlock title="图标 + 文本" :source="SegmentedIconLabelSource">
  <SegmentedIconLabel />
</DemoBlock>

### 自定义选项样式

每个选项支持单独的 `className` 与 `style`。

<DemoBlock title="自定义选项样式" :source="SegmentedCustomStyleSource">
  <SegmentedCustomStyle />
</DemoBlock>

## API

### Segmented Props

| 参数            | 说明                              | 类型                                        | 默认值         |
| --------------- | --------------------------------- | ------------------------------------------- | -------------- |
| value (v-model) | 当前选中的值                      | `string \| number`                          | -              |
| defaultValue    | 默认选中的值                      | `string \| number`                          | -              |
| options         | 数据化配置选项内容                | `string[] \| number[] \| SegmentedOption[]` | `[]`           |
| disabled        | 是否禁用                          | `boolean`                                   | `false`        |
| block           | 将宽度调整为父元素宽度            | `boolean`                                   | `false`        |
| size            | 控件大小                          | `'large' \| 'middle' \| 'small'`            | `'middle'`     |
| vertical        | 垂直方向                          | `boolean`                                   | `false`        |
| orientation     | 方向(优先级高于 vertical)         | `'horizontal' \| 'vertical'`                | `'horizontal'` |
| shape           | 形状                              | `'default' \| 'round'`                      | `'default'`    |
| name            | 为所有 radio input 设置 name 属性 | `string`                                    | -              |

### SegmentedOption

| 参数      | 说明            | 类型                                    | 默认值  |
| --------- | --------------- | --------------------------------------- | ------- |
| value     | 选项值          | `string \| number`                      | -       |
| label     | 选项标签        | `string \| VNode`                       | -       |
| icon      | 选项图标        | `VNode`                                 | -       |
| disabled  | 是否禁用        | `boolean`                               | `false` |
| title     | HTML title 属性 | `string`                                | -       |
| tooltip   | 提示信息        | `string \| Omit<TooltipProps, 'title'>` | -       |
| className | 自定义类名      | `string`                                | -       |
| style     | 自定义内联样式  | `CSSProperties`                         | -       |

### Segmented Events

| 事件名       | 说明                 | 回调参数                            |
| ------------ | -------------------- | ----------------------------------- |
| update:value | 选项变化时的回调函数 | `(value: string \| number) => void` |
| change       | 选项变化时的回调函数 | `(value: string \| number) => void` |

<script setup>
import SegmentedBasic from './SegmentedBasic.vue'
import SegmentedBlock from './SegmentedBlock.vue'
import SegmentedDisabled from './SegmentedDisabled.vue'
import SegmentedSize from './SegmentedSize.vue'
import SegmentedVertical from './SegmentedVertical.vue'
import SegmentedShape from './SegmentedShape.vue'
import SegmentedWithIcon from './SegmentedWithIcon.vue'
import SegmentedIconLabel from './SegmentedIconLabel.vue'
import SegmentedCustomStyle from './SegmentedCustomStyle.vue'

const SegmentedBasicSource = \`<template>
  <Segmented v-model:value="value" :options="options" />
  <p>当前选中：{{ value }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('Daily')
const options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']
<\/script>\`

const SegmentedBlockSource = \`<template>
  <Segmented v-model:value="value" :options="options" block />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('Map')
const options = ['Map', 'Transit', 'Satellite']
<\/script>\`

const SegmentedDisabledSource = \`<template>
  <Segmented v-model:value="value" :options="options" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('Daily')
const options = [
  { value: 'Daily', label: '每日' },
  { value: 'Weekly', label: '每周', disabled: true },
  { value: 'Monthly', label: '每月' },
]
<\/script>\`

const SegmentedSizeSource = \`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Segmented v-model:value="value" :options="options" size="large" />
    <Segmented v-model:value="value" :options="options" />
    <Segmented v-model:value="value" :options="options" size="small" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('Daily')
const options = ['Daily', 'Weekly', 'Monthly']
<\/script>\`

const SegmentedVerticalSource = \`<template>
  <Segmented v-model:value="value" :options="options" vertical />
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from 'ant-design-hmfw'
import { HomeOutlined, UserOutlined, SettingOutlined } from 'ant-design-hmfw'

const value = ref('home')
const options = [
  { value: 'home', icon: h(Icon, { component: HomeOutlined }) },
  { value: 'user', icon: h(Icon, { component: UserOutlined }) },
  { value: 'settings', icon: h(Icon, { component: SettingOutlined }) },
]
<\/script>\`

const SegmentedShapeSource = \`<template>
  <Segmented v-model:value="value" :options="options" shape="round" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('Daily')
const options = ['Daily', 'Weekly', 'Monthly']
<\/script>\`

const SegmentedWithIconSource = \`<template>
  <Segmented v-model:value="value" :options="options" />
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from 'ant-design-hmfw'
import { HomeOutlined, UserOutlined, SettingOutlined } from 'ant-design-hmfw'

const value = ref('home')
const options = [
  { value: 'home', icon: h(Icon, { component: HomeOutlined }), tooltip: 'Home Page' },
  { value: 'user', icon: h(Icon, { component: UserOutlined }), tooltip: 'User Profile' },
  { value: 'settings', icon: h(Icon, { component: SettingOutlined }), tooltip: 'Settings' },
]
<\/script>\`

const SegmentedIconLabelSource = \`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Segmented v-model:value="value" :options="options" />
    <Segmented v-model:value="value" :options="options" size="large" />
    <Segmented v-model:value="value" :options="options" size="small" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from 'ant-design-hmfw'
import { PictureOutlined, BarsOutlined } from 'ant-design-hmfw'

const value = ref('list')
const options = [
  { value: 'list', label: '列表', icon: h(Icon, { component: BarsOutlined }) },
  { value: 'grid', label: '网格', icon: h(Icon, { component: PictureOutlined }) },
]
<\/script>\`

const SegmentedCustomStyleSource = \`<template>
  <Segmented v-model:value="value" :options="options" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('apple')
const options = [
  { value: 'apple', label: '苹果', style: { color: '#cf1322', fontWeight: 600 } },
  { value: 'orange', label: '橙子', style: { color: '#d46b08' } },
  { value: 'pear', label: '梨', className: 'demo-segmented-pear' },
]
<\/script>

<style>
.demo-segmented-pear {
  font-style: italic;
}
<\/style>\`
</script>
