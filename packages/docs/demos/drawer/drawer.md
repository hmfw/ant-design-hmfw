# Drawer 抽屉

屏幕边缘滑出的浮层面板。

## 何时使用

- 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出
- 当需要在当前任务流中插入临时任务，创建或预览附加内容时

## 代码演示


### 基础用法

基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。

<DemoBlock title="基础用法" :source="DrawerBasicSource">
  <DrawerBasic />
</DemoBlock>

### 四个方向

抽屉可以从上、右、下、左四个方向滑出。

<DemoBlock title="四个方向" :source="DrawerPlacementSource">
  <DrawerPlacement />
</DemoBlock>

## API

### Drawer Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open (v-model) | 抽屉是否可见 | `boolean` | `false` |
| title | 标题 | `string \| slot` | - |
| placement | 抽屉的方向 | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` |
| width | 宽度 | `number \| string` | `378` |
| height | 高度，在 placement 为 top 或 bottom 时使用 | `number \| string` | `378` |
| closable | 是否显示左上角的关闭按钮 | `boolean` | `true` |
| mask | 是否展示遮罩 | `boolean` | `true` |
| maskClosable | 点击蒙层是否允许关闭 | `boolean` | `true` |
| footer | 抽屉的页脚 | `string \| slot` | - |
| extra | 抽屉右上角的操作区域 | `string \| slot` | - |
| destroyOnClose | 关闭时销毁 Drawer 里的子元素 | `boolean` | `false` |

### Drawer Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:open | 可见状态变化时的回调 | `(open: boolean) => void` |
| close | 点击遮罩层或右上角叉或取消按钮的回调 | `(e: MouseEvent) => void` |
| afterOpenChange | 切换抽屉时动画结束后的回调 | `(open: boolean) => void` |
