# Modal 对话框

模态对话框。

## 何时使用

- 需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
- 需要一个简洁的确认框询问用户时，可以使用静态方法 `Modal.confirm()` / `Modal.info()` / `Modal.success()` / `Modal.error()` / `Modal.warning()`。

## 代码演示

### 基础用法

第一个对话框。

<DemoBlock title="基础用法" :source="ModalBasicSource">
  <ModalBasic />
</DemoBlock>

### 自定义页脚

更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。

<DemoBlock title="自定义页脚" :source="ModalCustomFooterSource">
  <ModalCustomFooter />
</DemoBlock>

### 居中展示

垂直居中展示对话框。

<DemoBlock title="居中展示" :source="ModalCenteredSource">
  <ModalCentered />
</DemoBlock>

### 静态方法（confirm / info / success / error / warning）

不需要在模板中维护 open 状态，直接调用即可。`onOk` 返回 Promise 时按钮自动显示 loading。

<DemoBlock title="静态方法" :source="ModalConfirmSource">
  <ModalConfirm />
</DemoBlock>

### 细粒度样式控制

使用 `classNames` 和 `styles` 属性可以精确控制对话框各部分的样式。

<DemoBlock title="classNames 和 styles" :source="ModalClassNamesSource">
  <ModalClassNames />
</DemoBlock>

### 自定义渲染容器

使用 `modalRender` 可以自定义对话框的渲染容器。

<DemoBlock title="modalRender" :source="ModalRenderSource">
  <ModalRender />
</DemoBlock>

### 自定义图标

静态方法支持使用 VNode 作为自定义图标，或通过 `null` 隐藏图标。

<DemoBlock title="自定义图标" :source="ModalCustomIconSource">
  <ModalCustomIcon />
</DemoBlock>

## API

### Modal Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open (v-model) | 对话框是否可见 | `boolean` | `false` |
| defaultOpen | 非受控初始可见状态 | `boolean` | `false` |
| title | 标题 | `string \| number \| VNode \| () => VNode \| slot` | - |
| width | 宽度 | `number \| string` | `520` |
| centered | 垂直居中展示 | `boolean` | `false` |
| closable | 是否显示右上角关闭按钮 | `boolean` | `true` |
| closeIcon | 自定义关闭图标 | `IconComponent` | `CloseOutlined` |
| mask | 是否展示遮罩 | `boolean` | `true` |
| maskClosable | 点击遮罩是否允许关闭 | `boolean` | `true` |
| keyboard | 是否支持 Esc 键关闭 | `boolean` | `true` |
| footer | 底部内容；`null` / `false` 隐藏 | `boolean \| null \| slot` | `true` |
| okText | 确认按钮文字 | `string` | locale.okText |
| cancelText | 取消按钮文字 | `string` | locale.cancelText |
| okType | 确认按钮类型，支持 `'danger'` 简写 | `LegacyButtonType` | `'primary'` |
| okButtonProps | 透传到 OK Button 的 props | `ButtonProps` | - |
| cancelButtonProps | 透传到 Cancel Button 的 props | `ButtonProps` | - |
| confirmLoading | 确定按钮 loading；同时阻止取消/Esc/遮罩关闭 | `boolean` | `false` |
| loading | 整个对话框 body 显示骨架屏 | `boolean` | `false` |
| destroyOnHidden | 关闭后销毁 body 内的子元素（5.25+ 命名） | `boolean` | `false` |
| destroyOnClose | `destroyOnHidden` 的兼容别名 | `boolean` | `false` |
| forceRender | 强制渲染对话框 | `boolean` | `false` |
| zIndex | 层级 | `number` | `1000` |
| wrapClassName | 应用到包裹层 `.hmfw-modal-wrap` 的 class | `string` | - |
| rootClassName | 应用到根元素 `.hmfw-modal-root` 的 class | `string` | - |
| focusTriggerAfterClose | 关闭后是否将焦点还给打开前的元素 | `boolean` | `true` |
| bodyStyle | body 内联样式 | `CSSProperties` | - |
| maskStyle | mask 内联样式 | `CSSProperties` | - |
| classNames | 细粒度控制各部分的 class | `{ header?: string; body?: string; footer?: string; mask?: string; wrapper?: string; content?: string }` | - |
| styles | 细粒度控制各部分的 style | `{ header?: CSSProperties; body?: CSSProperties; footer?: CSSProperties; mask?: CSSProperties; wrapper?: CSSProperties; content?: CSSProperties }` | - |
| modalRender | 自定义渲染对话框容器 | `(node: VNode) => VNode` | - |

### Modal Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:open | 可见状态变化时的回调 | `(open: boolean) => void` |
| ok | 点击确定按钮 | `(e: MouseEvent) => void` |
| cancel | 点击遮罩 / 关闭按钮 / 取消按钮 / Esc 时触发 | `(e?: MouseEvent \| KeyboardEvent) => void` |
| afterClose | 关闭动画结束后触发 | `() => void` |
| afterOpenChange | 显示/隐藏切换的动画结束后触发 | `(open: boolean) => void` |

### Modal Slots

| 名称 | 说明 |
| --- | --- |
| default | 对话框内容 |
| title | 标题 |
| footer | 底部内容；优先级高于 `footer` prop |

### 静态方法

> `Modal.info(config)` / `Modal.success(config)` / `Modal.error(config)` / `Modal.warning(config)` / `Modal.confirm(config)`，均返回 `{ destroy, update }`。

`Modal.destroyAll()` 关闭所有通过静态方法创建的对话框。

#### ModalFuncProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string \| number \| VNode \| () => VNode` | - |
| content | 内容 | `string \| number \| VNode \| () => VNode` | - |
| icon | 自定义图标，传 `null` 隐藏；支持 VNode | `IconComponent \| VNode \| null` | 按 `type` 自动选择 |
| type | 类型；决定默认图标和 `okCancel` 默认值 | `'info' \| 'success' \| 'error' \| 'warning' \| 'confirm'` | `'confirm'` |
| okCancel | 是否显示取消按钮（默认仅 `confirm` 显示） | `boolean` | - |
| okText / cancelText / okType | 同 Modal Props | - | - |
| okButtonProps / cancelButtonProps | 同 Modal Props | - | - |
| centered / width / mask / maskClosable / keyboard / closable / zIndex | 同 Modal Props | - | - |
| className | 应用到 `.hmfw-modal-root` 的 class | `string` | - |
| wrapClassName | 应用到 `.hmfw-modal-wrap` 的 class | `string` | - |
| onOk | 点击 OK；返回 Promise 时按钮 loading 直到 resolve | `() => any \| Promise<any>` | - |
| onCancel | 点击 Cancel | `() => void` | - |
| afterClose | 销毁后回调 | `() => void` | - |
