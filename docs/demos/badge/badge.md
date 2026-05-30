# Badge 徽标数

图标右上角的圆形徽标数字。

## 何时使用

- 当需要在图标或文字旁边展示数字或状态时
- 用于消息提醒、待办事项等场景

## 代码演示


### 基本用法

简单的徽章展示，当 count 为 0 时，默认不显示。

<DemoBlock title="基本用法" :source="BadgeBasicSource">
  <BadgeBasic />
</DemoBlock>

### 状态点

用于表示状态的小圆点。

<DemoBlock title="状态点" :source="BadgeStatusSource">
  <BadgeStatus />
</DemoBlock>

### 自定义颜色

可以自定义徽标的颜色。

<DemoBlock title="自定义颜色" :source="BadgeCustomColorSource">
  <BadgeCustomColor />
</DemoBlock>

### 缎带

使用 `Badge.Ribbon` 展示缎带样式标记。

<DemoBlock title="缎带" :source="BadgeRibbonSource">
  <BadgeRibbon />
</DemoBlock>

## API

### Badge Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| count | 展示的数字 | `number \| string` | - |
| dot | 不展示数字，只有一个小红点 | `boolean` | `false` |
| overflowCount | 展示封顶的数字值 | `number` | `99` |
| showZero | 当数值为 0 时，是否展示 Badge | `boolean` | `false` |
| status | 设置 Badge 为状态点 | `'success' \| 'processing' \| 'default' \| 'error' \| 'warning'` | - |
| color | 自定义小圆点的颜色 | `string` | - |
| offset | 设置状态点的位置偏移 | `[number, number]` | - |
| size | 徽标大小 | `'default' \| 'small'` | `'default'` |
| text | 在设置了 status 的前提下有效，设置状态点的文本 | `string` | - |
| title | 鼠标悬停时的提示文字 | `string` | - |

### Badge.Ribbon Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 缎带内容 | `string` | - |
| color | 缎带颜色（预设色或自定义色值） | `string` | - |
| placement | 缎带位置 | `'start' \| 'end'` | `'end'` |
