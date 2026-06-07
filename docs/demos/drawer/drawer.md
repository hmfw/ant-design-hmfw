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

### 额外操作与页脚

通过 `extra` 插槽在右上角放置操作区，`footer` 插槽放置页脚。`size` 可选 `default`（378px）与 `large`（736px）两种预设。

<DemoBlock title="额外操作与页脚" :source="DrawerExtraFooterSource">
  <DrawerExtraFooter />
</DemoBlock>

### 加载中

通过 `loading` 在内容未就绪时展示骨架屏。

<DemoBlock title="加载中" :source="DrawerLoadingSource">
  <DrawerLoading />
</DemoBlock>

## API

### Drawer Props

| 参数                   | 说明                                                               | 类型                                                  | 默认值    |
| ---------------------- | ------------------------------------------------------------------ | ----------------------------------------------------- | --------- |
| open (v-model)         | 抽屉是否可见                                                       | `boolean`                                             | `false`   |
| defaultOpen            | 非受控时的默认可见状态                                             | `boolean`                                             | `false`   |
| title                  | 标题                                                               | `string \| number \| VNode \| slot`                   | -         |
| placement              | 抽屉的方向                                                         | `'top' \| 'right' \| 'bottom' \| 'left'`              | `'right'` |
| size                   | 预设尺寸，`default` 为 378px、`large` 为 736px，也可传数字或字符串 | `'default' \| 'large' \| number \| string`            | -         |
| width                  | 宽度，placement 为 `left`/`right` 时生效（`size` 优先）            | `number \| string`                                    | `378`     |
| height                 | 高度，placement 为 `top`/`bottom` 时生效（`size` 优先）            | `number \| string`                                    | `378`     |
| closable               | 是否显示关闭按钮                                                   | `boolean`                                             | `true`    |
| closeIcon              | 自定义关闭图标                                                     | `IconComponent`                                       | -         |
| mask                   | 是否展示遮罩                                                       | `boolean`                                             | `true`    |
| maskClosable           | 点击蒙层是否允许关闭                                               | `boolean`                                             | `true`    |
| keyboard               | 是否支持按 Esc 关闭                                                | `boolean`                                             | `true`    |
| loading                | 是否展示骨架屏                                                     | `boolean`                                             | `false`   |
| zIndex                 | 设置 z-index                                                       | `number`                                              | `1000`    |
| destroyOnHidden        | 关闭时是否销毁抽屉内的子元素                                       | `boolean`                                             | `false`   |
| destroyOnClose         | `destroyOnHidden` 的旧称                                           | `boolean`                                             | `false`   |
| forceRender            | 预渲染抽屉内的内容                                                 | `boolean`                                             | `false`   |
| focusTriggerAfterClose | 关闭后是否将焦点返回触发元素                                       | `boolean`                                             | `true`    |
| getContainer           | 挂载节点，`false` 时渲染在当前位置                                 | `string \| HTMLElement \| () => HTMLElement \| false` | `body`    |
| rootClassName          | 根容器（含遮罩）的类名                                             | `string`                                              | -         |
| rootStyle              | 根容器（含遮罩）的样式                                             | `CSSProperties`                                       | -         |
| contentWrapperStyle    | 抽屉内容包裹层的样式                                               | `CSSProperties`                                       | -         |
| bodyStyle              | 抽屉内容部分的样式                                                 | `CSSProperties`                                       | -         |
| headerStyle            | 抽屉头部的样式                                                     | `CSSProperties`                                       | -         |
| footerStyle            | 抽屉页脚的样式                                                     | `CSSProperties`                                       | -         |
| maskStyle              | 遮罩的样式                                                         | `CSSProperties`                                       | -         |

### Drawer Slots

| 插槽名  | 说明             |
| ------- | ---------------- |
| default | 抽屉主体内容     |
| title   | 自定义标题       |
| extra   | 右上角的操作区域 |
| footer  | 抽屉的页脚       |

### Drawer Events

| 事件名          | 说明                                  | 回调参数                  |
| --------------- | ------------------------------------- | ------------------------- |
| update:open     | 可见状态变化时的回调                  | `(open: boolean) => void` |
| close           | 点击遮罩层、关闭按钮或按 Esc 时的回调 | `(e?: Event) => void`     |
| afterOpenChange | 切换抽屉时动画结束后的回调            | `(open: boolean) => void` |
