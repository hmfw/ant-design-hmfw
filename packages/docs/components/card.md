# Card 卡片

通用卡片容器。

## 何时使用

- 最基础的卡片容器，可承载文字、列表、图片、段落等内容
- 常用于后台概览页面

## 代码演示

<script setup>
import CardBasic from '../demos/card/CardBasic.vue'
import CardBasicSource from '../demos/card/CardBasic.vue?raw'
import CardCover from '../demos/card/CardCover.vue'
import CardCoverSource from '../demos/card/CardCover.vue?raw'
import CardLoading from '../demos/card/CardLoading.vue'
import CardLoadingSource from '../demos/card/CardLoading.vue?raw'
</script>

### 基础卡片

包含标题、内容、操作区域。

<DemoBlock title="基础卡片" :source="CardBasicSource">
  <CardBasic />
</DemoBlock>

### 带封面

可以配合 cover 插槽展示封面图片。

<DemoBlock title="带封面" :source="CardCoverSource">
  <CardCover />
</DemoBlock>

### 加载中

数据读入前会有文本块样式。

<DemoBlock title="加载中" :source="CardLoadingSource">
  <CardLoading />
</DemoBlock>

## API

### Card Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 卡片标题 | `string` | - |
| extra | 卡片右上角的操作区域 | `string \| slot` | - |
| bordered | 是否有边框 | `boolean` | `true` |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | `boolean` | `false` |
| size | 卡片的尺寸 | `'default' \| 'small'` | `'default'` |
| hoverable | 鼠标移过时可浮起 | `boolean` | `false` |
| bodyStyle | 内容区域自定义样式 | `CSSProperties` | - |

### Card Slots

| 名称 | 说明 |
| --- | --- |
| default | 卡片内容 |
| title | 卡片标题 |
| extra | 卡片右上角的操作区域 |
| cover | 卡片封面 |
| actions | 卡片操作组 |

### CardMeta Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题内容 | `string` | - |
| description | 描述内容 | `string` | - |
| avatar | 头像/图标 | `string \| slot` | - |
