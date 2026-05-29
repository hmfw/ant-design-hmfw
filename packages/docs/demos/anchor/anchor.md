# Anchor 锚点

用于跳转到页面指定位置。


## 何时使用

- 需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转时
- 需要固定在页面某个位置时

## 代码演示

### 基础用法（垂直）

最简单的用法，垂直方向展示锚点列表。

<DemoBlock title="基础用法（垂直）" :source="AnchorBasicSource">
  <AnchorBasic />
</DemoBlock>

### 水平锚点

通过 `direction="horizontal"` 设置水平方向锚点。

<DemoBlock title="水平锚点" :source="AnchorHorizontalSource">
  <AnchorHorizontal />
</DemoBlock>

### 固定锚点

通过 `affix` 属性让锚点固定在页面某个位置。

<DemoBlock title="固定锚点" :source="AnchorAffixSource">
  <AnchorAffix />
</DemoBlock>

## API

### Anchor Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 数据化配置选项内容 | `AnchorLinkItem[]` | `[]` |
| affix | 固定模式 | `boolean` | `true` |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | `number` | `0` |
| direction | 锚点方向 | `'vertical' \| 'horizontal'` | `'vertical'` |
| bounds | 锚点区域边界 | `number` | `5` |

### AnchorLinkItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| href | 锚点链接 | `string` | - |
| title | 文字内容 | `string` | - |
| children | 子节点 | `AnchorLinkItem[]` | - |

### Anchor Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 锚点改变时触发 | `(currentActiveLink: string) => void` |
| click | 点击锚点时触发 | `(e: Event, link: AnchorLinkItem) => void` |
