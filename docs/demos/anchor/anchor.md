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

### 使用 Anchor.Link

使用 `Anchor.Link` 组件作为子组件。

<DemoBlock title="使用 Anchor.Link" :source="AnchorLinkSource">
  <AnchorLinkDemo />
</DemoBlock>

### 水平锚点

通过 `direction="horizontal"` 设置水平方向锚点。

<DemoBlock title="水平锚点" :source="AnchorHorizontalSource">
  <AnchorHorizontal />
</DemoBlock>

### 自定义目标偏移

通过 `targetOffset` 设置全局偏移，或在 `Anchor.Link` 上设置单独偏移。

<DemoBlock title="自定义目标偏移" :source="AnchorTargetOffsetSource">
  <AnchorTargetOffset />
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
| targetOffset | 滚动偏移量，影响锚点高亮判断 | `number` | `offsetTop` |
| direction | 锚点方向 | `'vertical' \| 'horizontal'` | `'vertical'` |
| bounds | 锚点区域边界 | `number` | `5` |
| replace | 是否替换浏览器历史记录 | `boolean` | `false` |
| getCurrentAnchor | 自定义高亮的锚点 | `(activeLink: string) => string` | - |
| getContainer | 指定滚动的容器 | `() => HTMLElement \| Window` | `() => window` |

### AnchorLinkItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 唯一标识 | `string` | - |
| href | 锚点链接 | `string` | - |
| title | 文字内容 | `string` | - |
| target | 链接打开方式 | `string` | - |
| targetOffset | 该锚点的滚动偏移量 | `number` | - |
| children | 子节点 | `AnchorLinkItem[]` | - |

### Anchor.Link Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| href | 锚点链接 | `string` | - |
| title | 文字内容 | `string` | - |
| target | 链接打开方式 | `string` | - |
| replace | 是否替换浏览器历史记录 | `boolean` | `false` |
| targetOffset | 该锚点的滚动偏移量 | `number` | - |

### Anchor Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 锚点改变时触发 | `(currentActiveLink: string) => void` |
| click | 点击锚点时触发 | `(e: MouseEvent, link: { title: string; href: string }) => void` |

