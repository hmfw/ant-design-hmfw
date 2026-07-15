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

### 多层抽屉

在抽屉内部再打开新的抽屉，内置的 `DrawerManager` 会自动为后开的抽屉递增 `zIndex`（每层 +2，遮罩层 + 内容层），确保层级正确。

<DemoBlock title="多层抽屉" :source="DrawerMultiLayerSource">
  <DrawerMultiLayer />
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

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="DrawerClassNamesSource">
  <DrawerClassNames />
</DemoBlock>

## API

### Drawer Props

| 参数                   | 说明                                                                             | 类型                                                  | 默认值    |
| ---------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------- | --------- |
| open (v-model)         | 抽屉是否可见                                                                     | `boolean`                                             | `false`   |
| defaultOpen            | 非受控时的默认可见状态                                                           | `boolean`                                             | `false`   |
| title                  | 标题                                                                             | `string \| number \| VNode \| slot`                   | -         |
| placement              | 抽屉的方向                                                                       | `'top' \| 'right' \| 'bottom' \| 'left'`              | `'right'` |
| size                   | 预设尺寸，`default` 为 378px、`large` 为 736px，也可传数字或字符串               | `'default' \| 'large' \| number \| string`            | -         |
| width                  | 宽度，placement 为 `left`/`right` 时生效（`size` 优先）                          | `number \| string`                                    | `378`     |
| height                 | 高度，placement 为 `top`/`bottom` 时生效（`size` 优先）                          | `number \| string`                                    | `378`     |
| closable               | 是否显示关闭按钮                                                                 | `boolean`                                             | `true`    |
| closeIcon              | 自定义关闭图标                                                                   | `IconComponent`                                       | -         |
| mask                   | 是否展示遮罩                                                                     | `boolean`                                             | `true`    |
| maskClosable           | 点击蒙层是否允许关闭                                                             | `boolean`                                             | `true`    |
| keyboard               | 是否支持按 Esc 关闭                                                              | `boolean`                                             | `true`    |
| loading                | 是否展示骨架屏                                                                   | `boolean`                                             | `false`   |
| zIndex                 | 设置 z-index                                                                     | `number`                                              | `1000`    |
| destroyOnHidden        | 关闭时是否销毁抽屉内的子元素                                                     | `boolean`                                             | `false`   |
| destroyOnClose         | `destroyOnHidden` 的旧称                                                         | `boolean`                                             | `false`   |
| forceRender            | 预渲染抽屉内的内容                                                               | `boolean`                                             | `false`   |
| focusTriggerAfterClose | 关闭后是否将焦点返回触发元素                                                     | `boolean`                                             | `true`    |
| getContainer           | 挂载节点，`false` 时渲染在当前位置                                               | `string \| HTMLElement \| () => HTMLElement \| false` | `body`    |
| classNames             | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `DrawerClassNames`                                    | -         |
| styles                 | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `DrawerStyles`                                        | -         |

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

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对组件的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface DrawerClassNames {
  root?: string // 最外层容器（含遮罩）
  mask?: string // 遮罩层
  wrapper?: string // 抽屉内容包裹层
  content?: string // 抽屉内容区
  header?: string // 头部区域
  title?: string // 标题
  extra?: string // 右上角扩展区域
  body?: string // 主体内容区
  footer?: string // 页脚区域
}

interface DrawerStyles {
  root?: CSSProperties // 最外层容器（含遮罩）
  mask?: CSSProperties
  wrapper?: CSSProperties
  content?: CSSProperties
  header?: CSSProperties
  title?: CSSProperties
  extra?: CSSProperties
  body?: CSSProperties
  footer?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-drawer">
  <!-- ↑ classNames.root / styles.root 应用于此（最外层，含遮罩） -->
  <div class="hmfw-drawer-mask">
    <!-- ↑ classNames.mask / styles.mask 应用于此 -->
  </div>
  <div class="hmfw-drawer-content-wrapper">
    <!-- ↑ classNames.wrapper / styles.wrapper 应用于此 -->
    <div class="hmfw-drawer-content">
      <!-- ↑ classNames.content / styles.content 应用于此 -->
      <div class="hmfw-drawer-header">
        <!-- ↑ classNames.header / styles.header 应用于此 -->
        <div class="hmfw-drawer-header-title">
          <button class="hmfw-drawer-close">关闭按钮</button>
          <div class="hmfw-drawer-title">
            <!-- ↑ classNames.title / styles.title 应用于此 -->
            标题内容
          </div>
        </div>
        <div class="hmfw-drawer-extra">
          <!-- ↑ classNames.extra / styles.extra 应用于此 -->
          额外操作区
        </div>
      </div>
      <div class="hmfw-drawer-body">
        <!-- ↑ classNames.body / styles.body 应用于此 -->
        主体内容
      </div>
      <div class="hmfw-drawer-footer">
        <!-- ↑ classNames.footer / styles.footer 应用于此 -->
        页脚内容
      </div>
    </div>
  </div>
</div>
```

### 使用 classNames

```vue
<template>
  <Drawer
    v-model:open="open"
    title="自定义抽屉"
    :class-names="{
      mask: 'custom-mask',
      wrapper: 'custom-wrapper',
      header: 'custom-header',
      body: 'custom-body',
    }"
  >
    <p>抽屉内容</p>
  </Drawer>
</template>

<style scoped>
:deep(.custom-mask) {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.7) 0%, rgba(118, 75, 162, 0.7) 100%);
  backdrop-filter: blur(4px);
}

:deep(.custom-wrapper) {
  border-radius: 16px 0 0 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

:deep(.custom-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

:deep(.custom-body) {
  background: #f6ffed;
  padding: 32px;
}
</style>
```

### 使用 styles

```vue
<template>
  <Drawer
    v-model:open="open"
    title="动态样式"
    :styles="{
      mask: { background: 'rgba(0, 0, 0, 0.6)' },
      wrapper: { boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' },
      header: { background: '#1890ff', color: 'white' },
      body: { padding: '32px', background: '#f0f2f5' },
      footer: { background: '#fafafa', borderTop: '2px solid #1890ff' },
    }"
  >
    <p>抽屉内容</p>
    <template #footer>
      <Button type="primary">确定</Button>
    </template>
  </Drawer>
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- 各子节点样式统一通过 `styles`（`root` / `mask` / `wrapper` / `content` / `header` / `title` / `extra` / `body` / `footer`）设置；`root` 作用于最外层容器（含遮罩）
- 自定义 `header` 样式时，注意关闭按钮的颜色需要单独处理（如 `.hmfw-drawer-close`）
- 当 `placement` 为 `left` 时，`wrapper` 的圆角方向需要调整为右侧

---

## 设计 Token

| Token 名称                    | 说明         | 默认值             |
| ----------------------------- | ------------ | ------------------ |
| `--hmfw-color-border`         | 边框颜色     | `#d9d9d9`          |
| `--hmfw-color-text`           | 主文本颜色   | `rgba(0,0,0,0.88)` |
| `--hmfw-color-text-secondary` | 次级文本颜色 | `rgba(0,0,0,0.65)` |
| `--hmfw-font-size-base`       | 标准字号     | `14px`             |
