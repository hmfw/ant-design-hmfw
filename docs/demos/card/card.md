# Card 卡片

通用卡片容器。

## 何时使用

- 最基础的卡片容器，可承载文字、列表、图片、段落等内容
- 常用于后台概览页面

## 代码演示


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

### 带头像的加载状态

可以通过对象配置骨架屏，支持头像和自定义段落行数。

<DemoBlock title="带头像的加载状态" :source="CardLoadingAvatarSource">
  <CardLoadingAvatar />
</DemoBlock>

### 网格卡片

通过 `Card.Grid` 在卡片内部划分等宽网格。

<DemoBlock title="网格卡片" :source="CardGridSource">
  <CardGrid />
</DemoBlock>

### 内部卡片

通过 `type="inner"` 用于卡片内部嵌套展示。

<DemoBlock title="内部卡片" :source="CardInnerSource">
  <CardInner />
</DemoBlock>

### 带标签页的卡片

可以在卡片头部集成标签页。

<DemoBlock title="带标签页的卡片" :source="CardTabsSource">
  <CardTabs />
</DemoBlock>

## API

### Card Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 卡片标题 | `string` | - |
| extra | 卡片右上角的操作区域 | `string \| slot` | - |
| bordered | 是否有边框 | `boolean` | `true` |
| variant | 边框变体（优先于 `bordered`） | `'borderless' \| 'outlined'` | - |
| type | 卡片类型，可设为 `inner` | `'inner'` | - |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | `boolean \| { avatar?: boolean; paragraph?: { rows?: number } }` | `false` |
| size | 卡片的尺寸 | `'default' \| 'small'` | `'default'` |
| hoverable | 鼠标移过时可浮起 | `boolean` | `false` |
| bodyStyle | 内容区域自定义样式 | `CSSProperties` | - |
| headStyle | 标题区域自定义样式 | `CSSProperties` | - |
| tabList | 标签页列表 | `Array<{ key: string; label: string; disabled?: boolean }>` | - |
| activeTabKey | 当前激活标签的 key | `string` | - |
| defaultActiveTabKey | 默认激活标签的 key | `string` | - |
| onTabChange | 标签切换回调 | `(key: string) => void` | - |

### Card Slots

| 名称 | 说明 |
| --- | --- |
| default | 卡片内容 |
| title | 卡片标题 |
| extra | 卡片右上角的操作区域 |
| cover | 卡片封面 |
| actions | 卡片操作组 |
| tabBarExtraContent | 标签栏额外内容 |

### Card Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| tabChange | 标签切换时触发 | `(key: string) => void` |
| update:activeTabKey | 标签切换时触发（支持 v-model） | `(key: string) => void` |

### Card.Grid Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| hoverable | 鼠标移过时可浮起 | `boolean` | `true` |

### CardMeta Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题内容 | `string` | - |
| description | 描述内容 | `string` | - |
| avatar | 头像/图标 | `string \| slot` | - |

<script setup>
import CardBasic from './CardBasic.vue'
import CardCover from './CardCover.vue'
import CardLoading from './CardLoading.vue'
import CardLoadingAvatar from './CardLoadingAvatar.vue'
import CardGrid from './CardGrid.vue'
import CardInner from './CardInner.vue'
import CardTabs from './CardTabs.vue'

import CardBasicSource from './CardBasic.vue?raw'
import CardCoverSource from './CardCover.vue?raw'
import CardLoadingSource from './CardLoading.vue?raw'
import CardLoadingAvatarSource from './CardLoadingAvatar.vue?raw'
import CardGridSource from './CardGrid.vue?raw'
import CardInnerSource from './CardInner.vue?raw'
import CardTabsSource from './CardTabs.vue?raw'
</script>

