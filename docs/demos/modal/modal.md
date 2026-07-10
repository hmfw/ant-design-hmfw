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

| 参数                   | 说明                                                                             | 类型                                                                                                                                               | 默认值            |
| ---------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| open (v-model)         | 对话框是否可见                                                                   | `boolean`                                                                                                                                          | `false`           |
| defaultOpen            | 非受控初始可见状态                                                               | `boolean`                                                                                                                                          | `false`           |
| title                  | 标题                                                                             | `string \| number \| VNode \| () => VNode \| slot`                                                                                                 | -                 |
| width                  | 宽度                                                                             | `number \| string`                                                                                                                                 | `520`             |
| centered               | 垂直居中展示                                                                     | `boolean`                                                                                                                                          | `false`           |
| closable               | 是否显示右上角关闭按钮                                                           | `boolean`                                                                                                                                          | `true`            |
| closeIcon              | 自定义关闭图标                                                                   | `IconComponent`                                                                                                                                    | `CloseOutlined`   |
| mask                   | 是否展示遮罩                                                                     | `boolean`                                                                                                                                          | `true`            |
| maskClosable           | 点击遮罩是否允许关闭                                                             | `boolean`                                                                                                                                          | `true`            |
| keyboard               | 是否支持 Esc 键关闭                                                              | `boolean`                                                                                                                                          | `true`            |
| footer                 | 底部内容；`null` / `false` 隐藏                                                  | `boolean \| null \| slot`                                                                                                                          | `true`            |
| okText                 | 确认按钮文字                                                                     | `string`                                                                                                                                           | locale.okText     |
| cancelText             | 取消按钮文字                                                                     | `string`                                                                                                                                           | locale.cancelText |
| okType                 | 确认按钮类型，支持 `'danger'` 简写                                               | `LegacyButtonType`                                                                                                                                 | `'primary'`       |
| okButtonProps          | 透传到 OK Button 的 props                                                        | `ButtonProps`                                                                                                                                      | -                 |
| cancelButtonProps      | 透传到 Cancel Button 的 props                                                    | `ButtonProps`                                                                                                                                      | -                 |
| confirmLoading         | 确定按钮 loading；同时阻止取消/Esc/遮罩关闭                                      | `boolean`                                                                                                                                          | `false`           |
| loading                | 整个对话框 body 显示骨架屏                                                       | `boolean`                                                                                                                                          | `false`           |
| destroyOnHidden        | 关闭后销毁 body 内的子元素（5.25+ 命名）                                         | `boolean`                                                                                                                                          | `false`           |
| destroyOnClose         | `destroyOnHidden` 的兼容别名                                                     | `boolean`                                                                                                                                          | `false`           |
| forceRender            | 强制渲染对话框                                                                   | `boolean`                                                                                                                                          | `false`           |
| zIndex                 | 层级                                                                             | `number`                                                                                                                                           | `1000`            |
| wrapClassName          | 应用到包裹层 `.hmfw-modal-wrap` 的 class                                         | `string`                                                                                                                                           | -                 |
| focusTriggerAfterClose | 关闭后是否将焦点还给打开前的元素                                                 | `boolean`                                                                                                                                          | `true`            |
| bodyStyle              | body 内联样式                                                                    | `CSSProperties`                                                                                                                                    | -                 |
| maskStyle              | mask 内联样式                                                                    | `CSSProperties`                                                                                                                                    | -                 |
| classNames             | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `{ header?: string; body?: string; footer?: string; mask?: string; wrapper?: string; content?: string }`                                           | -                 |
| styles                 | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `{ header?: CSSProperties; body?: CSSProperties; footer?: CSSProperties; mask?: CSSProperties; wrapper?: CSSProperties; content?: CSSProperties }` | -                 |
| modalRender            | 自定义渲染对话框容器                                                             | `(node: VNode) => VNode`                                                                                                                           | -                 |

### Modal Events

| 事件名          | 说明                                        | 回调参数                                    |
| --------------- | ------------------------------------------- | ------------------------------------------- |
| update:open     | 可见状态变化时的回调                        | `(open: boolean) => void`                   |
| ok              | 点击确定按钮                                | `(e: MouseEvent) => void`                   |
| cancel          | 点击遮罩 / 关闭按钮 / 取消按钮 / Esc 时触发 | `(e?: MouseEvent \| KeyboardEvent) => void` |
| afterClose      | 关闭动画结束后触发                          | `() => void`                                |
| afterOpenChange | 显示/隐藏切换的动画结束后触发               | `(open: boolean) => void`                   |

### Modal Slots

| 名称    | 说明                               |
| ------- | ---------------------------------- |
| default | 对话框内容                         |
| title   | 标题                               |
| footer  | 底部内容；优先级高于 `footer` prop |

### 静态方法

> `Modal.info(config)` / `Modal.success(config)` / `Modal.error(config)` / `Modal.warning(config)` / `Modal.confirm(config)`，均返回 `{ destroy, update }`。

`Modal.destroyAll()` 关闭所有通过静态方法创建的对话框。

#### ModalFuncProps

| 参数                                                                  | 说明                                              | 类型                                                       | 默认值             |
| --------------------------------------------------------------------- | ------------------------------------------------- | ---------------------------------------------------------- | ------------------ |
| title                                                                 | 标题                                              | `string \| number \| VNode \| () => VNode`                 | -                  |
| content                                                               | 内容                                              | `string \| number \| VNode \| () => VNode`                 | -                  |
| icon                                                                  | 自定义图标，传 `null` 隐藏；支持 VNode            | `IconComponent \| VNode \| null`                           | 按 `type` 自动选择 |
| type                                                                  | 类型；决定默认图标和 `okCancel` 默认值            | `'info' \| 'success' \| 'error' \| 'warning' \| 'confirm'` | `'confirm'`        |
| okCancel                                                              | 是否显示取消按钮（默认仅 `confirm` 显示）         | `boolean`                                                  | -                  |
| okText / cancelText / okType                                          | 同 Modal Props                                    | -                                                          | -                  |
| okButtonProps / cancelButtonProps                                     | 同 Modal Props                                    | -                                                          | -                  |
| centered / width / mask / maskClosable / keyboard / closable / zIndex | 同 Modal Props                                    | -                                                          | -                  |
| className                                                             | 应用到 `.hmfw-modal-root` 的 class                | `string`                                                   | -                  |
| wrapClassName                                                         | 应用到 `.hmfw-modal-wrap` 的 class                | `string`                                                   | -                  |
| onOk                                                                  | 点击 OK；返回 Promise 时按钮 loading 直到 resolve | `() => any \| Promise<any>`                                | -                  |
| onCancel                                                              | 点击 Cancel                                       | `() => void`                                               | -                  |
| afterClose                                                            | 销毁后回调                                        | `() => void`                                               | -                  |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对对话框的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface ModalClassNames {
  mask?: string // 遮罩层
  wrapper?: string // 容器包裹层
  content?: string // 内容容器
  header?: string // 标题区域
  body?: string // 内容区域
  footer?: string // 底部操作区
}

interface ModalStyles {
  mask?: CSSProperties // 遮罩层
  wrapper?: CSSProperties // 容器包裹层
  content?: CSSProperties // 内容容器
  header?: CSSProperties // 标题区域
  body?: CSSProperties // 内容区域
  footer?: CSSProperties // 底部操作区
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-modal-root">
  <!-- 遮罩层 -->
  <div class="hmfw-modal-mask">
    <!-- ↑ classNames.mask / styles.mask 应用于此 -->
  </div>

  <!-- 容器包裹层 -->
  <div class="hmfw-modal-wrap">
    <!-- ↑ classNames.wrapper / styles.wrapper 应用于此 -->

    <!-- 对话框外层容器 -->
    <div class="hmfw-modal">
      <!-- ↑ classNames.content / styles.content 应用于此 -->

      <!-- 对话框内容包裹 -->
      <div class="hmfw-modal-content">
        <!-- 关闭按钮 -->
        <button class="hmfw-modal-close">
          <span class="hmfw-modal-close-x">
            <svg>×</svg>
          </span>
        </button>

        <!-- 标题区域 -->
        <div class="hmfw-modal-header">
          <!-- ↑ classNames.header / styles.header 应用于此 -->
          <div class="hmfw-modal-title">标题文字</div>
        </div>

        <!-- 内容区域 -->
        <div class="hmfw-modal-body">
          <!-- ↑ classNames.body / styles.body 应用于此 -->
          对话框内容
        </div>

        <!-- 底部操作区 -->
        <div class="hmfw-modal-footer">
          <!-- ↑ classNames.footer / styles.footer 应用于此 -->
          <button>取消</button>
          <button>确定</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

### 使用 classNames

```vue
<template>
  <!-- 自定义遮罩和内容容器 -->
  <Modal
    v-model:open="visible1"
    title="自定义样式"
    :class-names="{
      mask: 'my-modal-mask',
      content: 'my-modal-content',
    }"
  >
    <p>对话框内容</p>
  </Modal>

  <!-- 自定义头部和底部 -->
  <Modal
    v-model:open="visible2"
    title="渐变头部"
    :class-names="{
      header: 'my-modal-header',
      footer: 'my-modal-footer',
    }"
  >
    <p>对话框内容</p>
  </Modal>

  <!-- 自定义 body 区域 -->
  <Modal
    v-model:open="visible3"
    title="自定义内容区"
    :class-names="{
      body: 'my-modal-body',
    }"
  >
    <p>对话框内容</p>
  </Modal>

  <!-- 组合使用 -->
  <Modal
    v-model:open="visible4"
    title="完整自定义"
    :class-names="{
      mask: 'my-mask',
      wrapper: 'my-wrapper',
      content: 'my-content',
      header: 'my-header',
      body: 'my-body',
      footer: 'my-footer',
    }"
  >
    <p>完全自定义的对话框</p>
  </Modal>
</template>

<style scoped>
:deep(.my-modal-mask) {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
}

:deep(.my-modal-content) {
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

:deep(.my-modal-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px 16px 0 0;
  padding: 20px 24px;
}

:deep(.my-modal-body) {
  background: #f0f5ff;
  padding: 32px 24px;
  font-size: 16px;
}

:deep(.my-modal-footer) {
  background: #fafafa;
  border-top: 2px solid #e8e8e8;
  padding: 16px 24px;
  border-radius: 0 0 16px 16px;
}
</style>
```

### 使用 styles

```vue
<template>
  <!-- 内联样式控制遮罩 -->
  <Modal
    v-model:open="visible1"
    title="自定义遮罩"
    :styles="{
      mask: {
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(4px)',
      },
    }"
  >
    <p>对话框内容</p>
  </Modal>

  <!-- 自定义内容容器 -->
  <Modal
    v-model:open="visible2"
    title="圆角对话框"
    :styles="{
      content: {
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      },
    }"
  >
    <p>对话框内容</p>
  </Modal>

  <!-- 自定义头部和底部 -->
  <Modal
    v-model:open="visible3"
    title="渐变头部"
    :styles="{
      header: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '20px 24px',
      },
      footer: {
        background: '#fafafa',
        borderTop: '2px solid #e8e8e8',
      },
    }"
  >
    <p>对话框内容</p>
  </Modal>

  <!-- 组合使用 -->
  <Modal
    v-model:open="visible4"
    title="完整自定义"
    :styles="{
      mask: { background: 'rgba(0, 0, 0, 0.8)' },
      content: { borderRadius: '16px' },
      header: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
      },
      body: {
        background: '#f0f5ff',
        padding: '32px 24px',
        fontSize: '16px',
      },
      footer: { background: '#fafafa' },
    }"
  >
    <p>完全自定义的对话框</p>
  </Modal>
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `mask` / `wrapper` / `content` 影响对话框的外层结构，`header` / `body` / `footer` 影响内容区域
- 当同时设置 `bodyStyle` prop 和 `styles.body` 时，两者会合并（`styles.body` 优先）
- 当同时设置 `maskStyle` prop 和 `styles.mask` 时，两者会合并（`styles.mask` 优先）
- `wrapper` 是对话框的定位容器，修改其样式可能影响居中效果，建议谨慎使用
- 静态方法（`Modal.confirm` 等）创建的对话框暂不支持 `classNames` / `styles`，可使用 `className` / `wrapClassName` 配合全局样式

## 设计 Token

| Token 名称                    | 说明       | 默认值             |
| ----------------------------- | ---------- | ------------------ |
| `--hmfw-color-primary`        | 主题色     | `#1677ff`          |
| `--hmfw-color-success`        | 成功状态色 | `#52c41a`          |
| `--hmfw-color-warning`        | 警告状态色 | `#faad14`          |
| `--hmfw-color-error`          | 错误状态色 | `#ff4d4f`          |
| `--hmfw-color-text`           | 主文本色   | `rgba(0,0,0,0.88)` |
| `--hmfw-color-text-secondary` | 次要文本色 | `rgba(0,0,0,0.65)` |
| `--hmfw-color-border`         | 边框色     | `#d9d9d9`          |
| `--hmfw-font-size-base`       | 基础字号   | `14px`             |
| `--hmfw-border-radius-lg`     | 大号圆角   | `8px`              |
