# Skeleton 骨架屏

在需要等待加载内容的位置提供一个占位图形组合。

## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下
- 图文信息内容较多的列表/卡片中
- 只在第一次加载数据的时候使用

## 代码演示


### 基础用法

最简单的占位效果。

<DemoBlock title="基础用法" :source="SkeletonBasicSource">
  <SkeletonBasic />
</DemoBlock>

### 动画效果

显示动画效果。

<DemoBlock title="动画效果" :source="SkeletonActiveSource">
  <SkeletonActive />
</DemoBlock>

### 包含子组件

加载占位图包含子组件。

<DemoBlock title="包含子组件" :source="SkeletonWithChildrenSource">
  <SkeletonWithChildren />
</DemoBlock>

### 按钮/输入框骨架

独立的按钮和输入框骨架。

<DemoBlock title="按钮/输入框骨架" :source="SkeletonButtonInputSource">
  <SkeletonButtonInput />
</DemoBlock>

### 头像骨架

独立的头像骨架。

<DemoBlock title="头像骨架" :source="SkeletonAvatarSource">
  <SkeletonAvatar />
</DemoBlock>

### 图片/节点骨架

独立的图片和自定义节点骨架。

<DemoBlock title="图片/节点骨架" :source="SkeletonImageNodeSource">
  <SkeletonImageNode />
</DemoBlock>

## API

### Skeleton Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 是否展示动画效果 | `boolean` | `false` |
| avatar | 是否显示头像占位图 | `boolean \| SkeletonAvatarProps` | `false` |
| paragraph | 是否显示段落占位图 | `boolean \| SkeletonParagraphProps` | `true` |
| title | 是否显示标题占位图 | `boolean \| SkeletonTitleProps` | `true` |
| loading | 为 true 时，显示占位图，反之则直接展示子组件 | `boolean` | `true` |
| round | 为 true 时，段落和标题显示圆角 | `boolean` | `false` |

### SkeletonAvatarProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 大小 | `'large' \| 'default' \| 'small' \| number` | `'large'` |
| shape | 形状 | `'circle' \| 'square'` | `'circle'` |

### SkeletonTitleProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 标题宽度 | `string \| number` | - |

### SkeletonParagraphProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rows | 段落行数 | `number` | `3` (无头像时) / `2` (有头像时) |
| width | 段落宽度，可传数组分别指定每行宽度 | `string \| number \| Array<string \| number>` | - |

### Skeleton.Button Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 是否展示动画效果 | `boolean` | `false` |
| size | 大小 | `'large' \| 'default' \| 'small'` | `'default'` |
| shape | 形状 | `'default' \| 'circle' \| 'round'` | `'default'` |
| block | 将按钮宽度调整为其父宽度 | `boolean` | `false` |

### Skeleton.Input Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 是否展示动画效果 | `boolean` | `false` |
| size | 大小 | `'large' \| 'default' \| 'small'` | `'default'` |
| block | 将输入框宽度调整为其父宽度 | `boolean` | `false` |

### Skeleton.Avatar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 是否展示动画效果 | `boolean` | `false` |
| size | 大小 | `'large' \| 'default' \| 'small' \| number` | `'default'` |
| shape | 形状 | `'circle' \| 'square'` | `'circle'` |

### Skeleton.Image Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 是否展示动画效果 | `boolean` | `false` |

### Skeleton.Node Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 是否展示动画效果 | `boolean` | `false` |

<script setup lang="ts">
import SkeletonBasic from './SkeletonBasic.vue'
import SkeletonActive from './SkeletonActive.vue'
import SkeletonWithChildren from './SkeletonWithChildren.vue'
import SkeletonButtonInput from './SkeletonButtonInput.vue'
import SkeletonAvatar from './SkeletonAvatar.vue'
import SkeletonImageNode from './SkeletonImageNode.vue'

import SkeletonBasicSource from './SkeletonBasic.vue?raw'
import SkeletonActiveSource from './SkeletonActive.vue?raw'
import SkeletonWithChildrenSource from './SkeletonWithChildren.vue?raw'
import SkeletonButtonInputSource from './SkeletonButtonInput.vue?raw'
import SkeletonAvatarSource from './SkeletonAvatar.vue?raw'
import SkeletonImageNodeSource from './SkeletonImageNode.vue?raw'
</script>

