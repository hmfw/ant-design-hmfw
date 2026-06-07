# Popconfirm 气泡确认框

点击元素，弹出气泡式的确认框。

## 何时使用

- 目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户
- 和 confirm 弹出的全屏居中模态对话框相比，交互形式更轻量

## 代码演示

### 基础用法

最简单的用法。

<DemoBlock title="基础用法" :source="PopconfirmBasicSource">
  <PopconfirmBasic />
</DemoBlock>

### 自定义按钮文字

自定义确认按钮和取消按钮的文字。

<DemoBlock title="自定义按钮文字" :source="PopconfirmCustomTextSource">
  <PopconfirmCustomText />
</DemoBlock>

### 不同位置

位置有十二个方向。

<DemoBlock title="不同位置" :source="PopconfirmPlacementSource">
  <PopconfirmPlacement />
</DemoBlock>

### 自定义图标

可以通过 `icon` 属性或插槽自定义图标，也可以设置为空字符串隐藏图标。

<DemoBlock title="自定义图标" :source="PopconfirmIconSource">
  <PopconfirmIcon />
</DemoBlock>

### 按钮类型

使用 `okType` 设置确认按钮的类型。`danger` 是 `primary + danger` 的简写形式。

<DemoBlock title="按钮类型" :source="PopconfirmDangerSource">
  <PopconfirmDanger />
</DemoBlock>

### 异步关闭

通过 `okButtonProps` 和 `cancelButtonProps` 可以控制按钮的 loading 状态，实现异步确认。

<DemoBlock title="异步关闭" :source="PopconfirmAsyncSource">
  <PopconfirmAsync />
</DemoBlock>

### 受控模式

使用 `v-model:open` 控制气泡框的显示隐藏，可以通过 `disabled` 禁用，也可以隐藏取消按钮。

<DemoBlock title="受控模式" :source="PopconfirmControlledSource">
  <PopconfirmControlled />
</DemoBlock>

### 触发方式

通过 `trigger` 设置触发行为，支持 `hover`、`click`、`focus`、`contextMenu`。

<DemoBlock title="触发方式" :source="PopconfirmTriggerSource">
  <PopconfirmTrigger />
</DemoBlock>

### 自定义配置

可以自定义 z-index、样式、箭头等配置。

<DemoBlock title="自定义配置" :source="PopconfirmCustomSource">
  <PopconfirmCustom />
</DemoBlock>

## API

### Popconfirm Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 确认框标题（空值时不渲染浮层） | `string \| number \| VNode \| () => VNode \| slot` | - |
| description | 确认框描述 | `string \| number \| VNode \| () => VNode \| slot` | - |
| icon | 提示图标，slot 优先级高于 prop | `string \| VNode \| () => VNode \| slot` | `'⚠'` |
| okText | 确认按钮文字 | `string` | locale 默认值 |
| cancelText | 取消按钮文字 | `string` | locale 默认值 |
| okType | 确认按钮类型，`'danger'` 是 `primary + danger` 的简写 | `ButtonType \| 'danger'` | `'primary'` |
| okButtonProps | 确认按钮的额外 props（loading/disabled 等） | `ButtonProps` | - |
| cancelButtonProps | 取消按钮的额外 props | `ButtonProps` | - |
| showCancel | 是否显示取消按钮 | `boolean` | `true` |
| trigger | 触发行为，可设单值或数组 | `'hover' \| 'click' \| 'focus' \| 'contextMenu'` | `'click'` |
| placement | 气泡框位置，溢出视口时自动翻转 | 12 个方向（同 Tooltip） | `'top'` |
| open (v-model) | 用于手动控制浮层显隐 | `boolean` | - |
| defaultOpen | 默认是否显示（非受控） | `boolean` | `false` |
| disabled | 禁用，禁用时点击触发器不会弹出 | `boolean` | `false` |
| arrow | 是否显示箭头，可对象配置 | `boolean \| { pointAtCenter?: boolean }` | `true` |
| mouseEnterDelay | 鼠标移入延时显示（trigger=hover），单位秒 | `number` | `0.1` |
| mouseLeaveDelay | 鼠标移出延时隐藏（trigger=hover），单位秒 | `number` | `0.1` |
| autoAdjustOverflow | 浮层超出视口时自动翻转方向 | `boolean` | `true` |
| zIndex | 自定义浮层 z-index | `number` | `1070` |
| destroyOnHidden | 隐藏时销毁浮层 DOM | `boolean` | `false` |
| getPopupContainer | 自定义浮层挂载容器（默认 `body`） | `(triggerNode: HTMLElement) => HTMLElement` | - |
| overlayStyle | 卡片外层样式 | `Record<string, string>` | - |
| overlayInnerStyle | 卡片内层样式 | `Record<string, string>` | - |

### Popconfirm Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 点击确认的回调（携带 MouseEvent） | `(e: MouseEvent) => void` |
| cancel | 点击取消的回调（携带 MouseEvent） | `(e: MouseEvent) => void` |
| update:open | 显示隐藏的回调（v-model） | `(open: boolean) => void` |
| openChange | 显示隐藏的回调 | `(open: boolean) => void` |
| afterOpenChange | 浮层动画结束时触发 | `(open: boolean) => void` |

### Popconfirm Slots

| 名称 | 说明 |
| --- | --- |
| default | 触发气泡确认框的元素 |
| title | 标题（与 `title` prop 二选一，slot 优先） |
| description | 描述（与 `description` prop 二选一，slot 优先） |
| icon | 图标（与 `icon` prop 二选一，slot 优先） |
