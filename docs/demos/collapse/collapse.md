# Collapse 折叠面板

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁
- 手风琴是一种特殊的折叠面板，只允许单个内容区域展开

## 代码演示


### 基本用法

可以同时展开多个面板。

<DemoBlock title="基本用法" :source="CollapseBasicSource">
  <CollapseBasic />
</DemoBlock>

### 手风琴模式

手风琴模式，每次只能展开一个面板。

<DemoBlock title="手风琴模式" :source="CollapseAccordionSource">
  <CollapseAccordion />
</DemoBlock>

### 无边框

无边框风格。

<DemoBlock title="无边框" :source="CollapseBorderlessSource">
  <CollapseBorderless />
</DemoBlock>

### 可折叠触发区域

通过 `collapsible` 属性，可以设置面板的可折叠触发区域。

<DemoBlock title="可折叠触发区域" :source="CollapseCollapsibleSource">
  <CollapseCollapsible />
</DemoBlock>

### 自定义展开图标

通过 `expandIcon` 可以自定义展开图标。

<DemoBlock title="自定义展开图标" :source="CollapseCustomIconSource">
  <CollapseCustomIcon />
</DemoBlock>

### 额外内容

可以在面板右上角添加额外内容。

<DemoBlock title="额外内容" :source="CollapseExtraSource">
  <CollapseExtra />
</DemoBlock>

### 不同尺寸

提供三种尺寸：small、middle（默认）、large。

<DemoBlock title="不同尺寸" :source="CollapseSizeSource">
  <CollapseSize />
</DemoBlock>

## API

### Collapse Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey (v-model) | 当前激活 tab 面板的 key | `string[] \| string` | - |
| defaultActiveKey | 初始化选中面板的 key | `string[] \| string` | - |
| accordion | 手风琴模式 | `boolean` | `false` |
| bordered | 带边框风格的折叠面板 | `boolean` | `true` |
| ghost | 使折叠面板透明且无边框 | `boolean` | `false` |
| size | 设置折叠面板大小 | `'small' \| 'middle' \| 'large'` | `'middle'` |
| expandIconPosition | 设置图标位置 | `'start' \| 'end'` | `'start'` |
| collapsible | 设置可折叠触发区域 | `'header' \| 'icon' \| 'disabled'` | `'header'` |
| expandIcon | 自定义展开图标 | `(props: { isActive?: boolean, panelKey?: string }) => VNode` | - |
| destroyInactivePanel | 销毁折叠隐藏的面板 | `boolean` | `false` |
| items | 面板数据 | `CollapseItem[]` | - |

### Collapse Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 切换面板的回调 | `(keys: string[]) => void` |
| update:activeKey | 切换面板的回调 | `(keys: string[]) => void` |

### CollapseItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 对应 activeKey | `string` | - |
| label | 面板头内容 | `string` | - |
| children | 面板内容 | `any` | - |
| disabled | 禁用后的面板展开与否将无法通过用户交互改变 | `boolean` | `false` |
| showArrow | 是否展示箭头 | `boolean` | `true` |
| extra | 自定义渲染每个面板右上角的内容 | `string \| VNode` | - |
| collapsible | 设置可折叠触发区域 | `'header' \| 'icon' \| 'disabled'` | - |
| forceRender | 被隐藏时是否渲染 DOM 结构 | `boolean` | `false` |
| style | 自定义面板样式 | `CSSProperties` | - |

### CollapsePanel Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 对应 activeKey | `string` | - |
| header | 面板头内容 | `string` | - |
| disabled | 禁用后的面板展开与否将无法通过用户交互改变 | `boolean` | `false` |
| showArrow | 是否展示箭头 | `boolean` | `true` |
| extra | 自定义渲染每个面板右上角的内容 | `string \| VNode` | - |
| collapsible | 设置可折叠触发区域 | `'header' \| 'icon' \| 'disabled'` | - |
| forceRender | 被隐藏时是否渲染 DOM 结构 | `boolean` | `false` |

<script setup>
import CollapseBasic from './CollapseBasic.vue'
import CollapseBasicSource from './CollapseBasic.vue?raw'
import CollapseAccordion from './CollapseAccordion.vue'
import CollapseAccordionSource from './CollapseAccordion.vue?raw'
import CollapseBorderless from './CollapseBorderless.vue'
import CollapseBorderlessSource from './CollapseBorderless.vue?raw'
import CollapseCollapsible from './CollapseCollapsible.vue'
import CollapseCollapsibleSource from './CollapseCollapsible.vue?raw'
import CollapseCustomIcon from './CollapseCustomIcon.vue'
import CollapseCustomIconSource from './CollapseCustomIcon.vue?raw'
import CollapseExtra from './CollapseExtra.vue'
import CollapseExtraSource from './CollapseExtra.vue?raw'
import CollapseSize from './CollapseSize.vue'
import CollapseSizeSource from './CollapseSize.vue?raw'
</script>

