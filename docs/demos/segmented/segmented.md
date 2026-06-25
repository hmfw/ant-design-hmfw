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

### 细粒度样式控制

通过 `classNames` / `styles` 对 root、group、thumb、item 等子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="SegmentedClassNamesSource">
  <SegmentedClassNames />
</DemoBlock>

## API

### Segmented Props

| 参数            | 说明                                                                             | 类型                                        | 默认值         |
| --------------- | -------------------------------------------------------------------------------- | ------------------------------------------- | -------------- |
| value (v-model) | 当前选中的值                                                                     | `string \| number`                          | -              |
| defaultValue    | 默认选中的值                                                                     | `string \| number`                          | -              |
| options         | 数据化配置选项内容                                                               | `string[] \| number[] \| SegmentedOption[]` | `[]`           |
| disabled        | 是否禁用                                                                         | `boolean`                                   | `false`        |
| block           | 将宽度调整为父元素宽度                                                           | `boolean`                                   | `false`        |
| size            | 控件大小                                                                         | `'large' \| 'middle' \| 'small'`            | `'middle'`     |
| vertical        | 垂直方向                                                                         | `boolean`                                   | `false`        |
| orientation     | 方向(优先级高于 vertical)                                                        | `'horizontal' \| 'vertical'`                | `'horizontal'` |
| shape           | 形状                                                                             | `'default' \| 'round'`                      | `'default'`    |
| name            | 为所有 radio input 设置 name 属性                                                | `string`                                    | -              |
| classNames      | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SegmentedClassNames`                       | -              |
| styles          | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SegmentedStyles`                           | -              |

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

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对分段控制器的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface SegmentedClassNames {
  root?: string // 根节点
  group?: string // 选项组容器
  thumb?: string // 动画滑块
  item?: string // 选项（label 元素）
  itemSelected?: string // 选中状态的选项
  itemDisabled?: string // 禁用状态的选项
  itemInput?: string // 隐藏的 radio input
  itemLabel?: string // 选项内容包裹层
  itemIcon?: string // 选项图标
  itemText?: string // 选项文本
}

interface SegmentedStyles {
  root?: CSSProperties
  group?: CSSProperties
  thumb?: CSSProperties
  item?: CSSProperties
  itemSelected?: CSSProperties
  itemDisabled?: CSSProperties
  itemInput?: CSSProperties
  itemLabel?: CSSProperties
  itemIcon?: CSSProperties
  itemText?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-segmented">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-segmented-group">
    <!-- ↑ classNames.group / styles.group 应用于此 -->

    <div class="hmfw-segmented-thumb">
      <!-- ↑ classNames.thumb / styles.thumb 应用于此（动画滑块） -->
    </div>

    <label class="hmfw-segmented-item hmfw-segmented-item-selected">
      <!-- ↑ classNames.item / styles.item 应用于此 -->
      <!-- ↑ 选中状态时叠加 classNames.itemSelected / styles.itemSelected -->

      <input type="radio" class="hmfw-segmented-item-input" />
      <!-- ↑ classNames.itemInput / styles.itemInput 应用于此（隐藏的 radio） -->

      <div class="hmfw-segmented-item-label">
        <!-- ↑ classNames.itemLabel / styles.itemLabel 应用于此 -->
        <span class="hmfw-segmented-item-icon">
          <!-- ↑ classNames.itemIcon / styles.itemIcon 应用于此 -->
          <!-- 图标内容 -->
        </span>
        <span class="hmfw-segmented-item-text">
          <!-- ↑ classNames.itemText / styles.itemText 应用于此 -->
          选项文本
        </span>
      </div>
    </label>

    <label class="hmfw-segmented-item hmfw-segmented-item-disabled">
      <!-- ↑ 禁用状态时叠加 classNames.itemDisabled / styles.itemDisabled -->
      <!-- ... -->
    </label>
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义根容器和滑块 -->
  <Segmented
    v-model:value="value"
    :options="['选项一', '选项二', '选项三']"
    :class-names="{
      root: 'custom-root',
      thumb: 'custom-thumb',
    }"
  />

  <!-- 自定义选项状态 -->
  <Segmented
    v-model:value="value"
    :options="options"
    :class-names="{
      item: 'custom-item',
      itemSelected: 'custom-item-selected',
      itemDisabled: 'custom-item-disabled',
    }"
  />

  <!-- 自定义图标和文本 -->
  <Segmented
    v-model:value="value"
    :options="iconOptions"
    :class-names="{
      itemIcon: 'custom-icon',
      itemText: 'custom-text',
    }"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from '@hmfw/ant-design'

const value = ref('选项一')
const options = [
  { value: 'option1', label: '启用选项' },
  { value: 'option2', label: '禁用选项', disabled: true },
]
</script>

<style scoped>
:deep(.custom-root) {
  background: linear-gradient(135deg, #f0f5ff 0%, #e6f4ff 100%);
  border: 2px solid #1677ff;
  padding: 4px;
}

:deep(.custom-thumb) {
  background: linear-gradient(135deg, #1677ff 0%, #4096ff 100%);
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.3);
}

:deep(.custom-item-selected) {
  color: #ffffff;
  font-weight: 600;
}

:deep(.custom-item-disabled) {
  opacity: 0.4;
  text-decoration: line-through;
}

:deep(.custom-icon) {
  font-size: 18px;
  filter: drop-shadow(0 0 2px rgba(22, 119, 255, 0.4));
}

:deep(.custom-text) {
  font-weight: 500;
  letter-spacing: 0.5px;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 渐变背景和自定义滑块 -->
  <Segmented
    v-model:value="value"
    :options="['Morning', 'Afternoon', 'Evening']"
    :styles="{
      root: {
        borderRadius: '16px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        border: 'none',
        padding: '4px',
      },
      thumb: {
        borderRadius: '12px',
        background: '#ffffff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      },
      itemText: {
        color: '#ffffff',
        fontWeight: 500,
      },
    }"
  />

  <!-- 组合使用（垂直模式） -->
  <Segmented
    v-model:value="value"
    :options="iconOptions"
    vertical
    :styles="{
      itemIcon: { fontSize: '20px' },
      itemLabel: { padding: '8px 16px' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `itemSelected` 和 `itemDisabled` 是条件节点，仅在选项处于对应状态时应用
- 选项的状态类名会**叠加**在 `item` 上：`classNames.item` + `classNames.itemSelected`（选中时）或 `classNames.itemDisabled`（禁用时）
- 选项的状态样式会**合并**：`styles.item` + `styles.itemSelected`（选中时）或 `styles.itemDisabled`（禁用时），后者优先
- `thumb` 是动画滑块，建议自定义其背景色、圆角、阴影等样式以匹配主题
- 每个选项还支持独立的 `className` 和 `style` 属性（见 `SegmentedOption` 配置），这些样式会与 `classNames.item` / `styles.item` 合并

## 设计 Token

Segmented 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                             | 说明           | 默认值                                 |
| -------------------------------------- | -------------- | -------------------------------------- |
| `--hmfw-color-bg-elevated`             | 浮层背景色     | `#ffffff`                              |
| `--hmfw-color-bg-layout`               | 布局背景色     | `#f5f5f5`                              |
| `--hmfw-color-fill`                    | 填充色         | `rgba(0,0,0,0.15)`                     |
| `--hmfw-color-fill-secondary`          | 次级填充色     | `rgba(0,0,0,0.06)`                     |
| `--hmfw-color-primary`                 | 主题色         | `#1677ff`                              |
| `--hmfw-color-text`                    | 主文本色       | `rgba(0,0,0,0.88)`                     |
| `--hmfw-color-text-disabled`           | 禁用文本色     | `rgba(0,0,0,0.25)`                     |
| `--hmfw-color-text-label`              | 标签文本色     | `rgba(0,0,0,0.65)`                     |
| `--hmfw-font-size-base`                | 标准字号       | `14px`                                 |
| `--hmfw-font-size-lg`                  | 大号字号       | `16px`                                 |
| `--hmfw-border-radius`                 | 基础圆角       | `6px`                                  |
| `--hmfw-border-radius-sm`              | 小号圆角       | `4px`                                  |
| `--hmfw-border-radius-lg`              | 大号圆角       | `8px`                                  |
| `--hmfw-border-radius-xs`              | 超小圆角       | `2px`                                  |
| `--hmfw-control-height`                | 控件高度       | `32px`                                 |
| `--hmfw-control-height-sm`             | 小号控件高度   | `24px`                                 |
| `--hmfw-control-height-lg`             | 大号控件高度   | `40px`                                 |
| `--hmfw-control-padding-horizontal`    | 控件水平内边距 | `12px`                                 |
| `--hmfw-control-padding-horizontal-sm` | 小号控件内边距 | `8px`                                  |
| `--hmfw-line-width-bold`               | 粗线宽         | `2px`                                  |
| `--hmfw-margin-sm`                     | 小号外边距     | `8px`                                  |
| `--hmfw-motion-duration-mid`           | 中速动画时长   | `0.2s`                                 |
| `--hmfw-motion-duration-slow`          | 慢速动画时长   | `0.3s`                                 |
| `--hmfw-motion-ease-in-out`            | 缓入缓出曲线   | `cubic-bezier(0.645, 0.045, 0.355, 1)` |

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
import SegmentedClassNames from './SegmentedClassNames.vue'

const SegmentedBasicSource = \`<template>
  <Segmented v-model:value="value" :options="options" />
  <p>当前选中：{{ value }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from '@hmfw/ant-design'

const value = ref('Daily')
const options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']
<\/script>\`

const SegmentedBlockSource = \`<template>
  <Segmented v-model:value="value" :options="options" block />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from '@hmfw/ant-design'

const value = ref('Map')
const options = ['Map', 'Transit', 'Satellite']
<\/script>\`

const SegmentedDisabledSource = \`<template>
  <Segmented v-model:value="value" :options="options" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from '@hmfw/ant-design'

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
import { Segmented } from '@hmfw/ant-design'

const value = ref('Daily')
const options = ['Daily', 'Weekly', 'Monthly']
<\/script>\`

const SegmentedVerticalSource = \`<template>
  <Segmented v-model:value="value" :options="options" vertical />
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from '@hmfw/ant-design'
import { HomeOutlined, UserOutlined, SettingOutlined } from '@hmfw/ant-design'

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
import { Segmented } from '@hmfw/ant-design'

const value = ref('Daily')
const options = ['Daily', 'Weekly', 'Monthly']
<\/script>\`

const SegmentedWithIconSource = \`<template>
  <Segmented v-model:value="value" :options="options" />
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from '@hmfw/ant-design'
import { HomeOutlined, UserOutlined, SettingOutlined } from '@hmfw/ant-design'

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
import { Segmented, Icon } from '@hmfw/ant-design'
import { PictureOutlined, BarsOutlined } from '@hmfw/ant-design'

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
import { Segmented } from '@hmfw/ant-design'

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
