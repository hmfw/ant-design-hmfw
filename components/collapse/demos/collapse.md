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

折叠面板支持 `small`、`middle`（默认）、`large` 三种尺寸。

<DemoBlock title="不同尺寸" :source="CollapseSizeSource">
  <CollapseSize />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="CollapseClassNamesSource">
  <CollapseClassNames />
</DemoBlock>

## API

### Collapse Props

| 参数                 | 说明                                                                             | 类型                                                          | 默认值     |
| -------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------- |
| activeKey (v-model)  | 当前激活 tab 面板的 key                                                          | `string[] \| string`                                          | -          |
| defaultActiveKey     | 初始化选中面板的 key                                                             | `string[] \| string`                                          | -          |
| accordion            | 手风琴模式                                                                       | `boolean`                                                     | `false`    |
| bordered             | 带边框风格的折叠面板                                                             | `boolean`                                                     | `true`     |
| ghost                | 使折叠面板透明且无边框                                                           | `boolean`                                                     | `false`    |
| size                 | 设置折叠面板大小                                                                 | `'small' \| 'middle' \| 'large'`                              | `'middle'` |
| expandIconPosition   | 设置图标位置                                                                     | `'start' \| 'end'`                                            | `'start'`  |
| collapsible          | 设置可折叠触发区域                                                               | `'header' \| 'icon' \| 'disabled'`                            | `'header'` |
| expandIcon           | 自定义展开图标                                                                   | `(props: { isActive?: boolean, panelKey?: string }) => VNode` | -          |
| destroyInactivePanel | 销毁折叠隐藏的面板                                                               | `boolean`                                                     | `false`    |
| items                | 面板数据                                                                         | `CollapseItem[]`                                              | -          |
| classNames           | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `CollapseClassNames`                                          | -          |
| styles               | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `CollapseStyles`                                              | -          |

### Collapse Events

| 事件名           | 说明           | 回调参数                   |
| ---------------- | -------------- | -------------------------- |
| change           | 切换面板的回调 | `(keys: string[]) => void` |
| update:activeKey | 切换面板的回调 | `(keys: string[]) => void` |

### CollapseItem

| 参数        | 说明                                                                             | 类型                               | 默认值  |
| ----------- | -------------------------------------------------------------------------------- | ---------------------------------- | ------- |
| key         | 对应 activeKey                                                                   | `string`                           | -       |
| label       | 面板头内容                                                                       | `string`                           | -       |
| children    | 面板内容                                                                         | `any`                              | -       |
| disabled    | 禁用后的面板展开与否将无法通过用户交互改变                                       | `boolean`                          | `false` |
| showArrow   | 是否展示箭头                                                                     | `boolean`                          | `true`  |
| extra       | 自定义渲染每个面板右上角的内容                                                   | `string \| VNode`                  | -       |
| collapsible | 设置可折叠触发区域                                                               | `'header' \| 'icon' \| 'disabled'` | -       |
| forceRender | 被隐藏时是否渲染 DOM 结构                                                        | `boolean`                          | `false` |
| style       | 自定义面板样式                                                                   | `CSSProperties`                    | -       |
| classNames  | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `CollapseClassNames`               | -       |
| styles      | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `CollapseStyles`                   | -       |

### CollapsePanel Props

| 参数        | 说明                                                                             | 类型                               | 默认值  |
| ----------- | -------------------------------------------------------------------------------- | ---------------------------------- | ------- |
| key         | 对应 activeKey                                                                   | `string`                           | -       |
| header      | 面板头内容                                                                       | `string`                           | -       |
| disabled    | 禁用后的面板展开与否将无法通过用户交互改变                                       | `boolean`                          | `false` |
| showArrow   | 是否展示箭头                                                                     | `boolean`                          | `true`  |
| extra       | 自定义渲染每个面板右上角的内容                                                   | `string \| VNode`                  | -       |
| collapsible | 设置可折叠触发区域                                                               | `'header' \| 'icon' \| 'disabled'` | -       |
| forceRender | 被隐藏时是否渲染 DOM 结构                                                        | `boolean`                          | `false` |
| classNames  | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `CollapseClassNames`               | -       |
| styles      | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `CollapseStyles`                   | -       |

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 Collapse 的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface CollapseClassNames {
  root?: string // 最外层容器 div.hmfw-collapse
  item?: string // 折叠面板项 div.hmfw-collapse-item
  header?: string // 面板头部 div.hmfw-collapse-header
  icon?: string // 展开/收起图标 span.hmfw-collapse-icon
  headerText?: string // 头部文本 span.hmfw-collapse-header-text
  extra?: string // 头部右侧额外内容 div.hmfw-collapse-extra
  content?: string // 内容区域（带动画的外层）div.hmfw-collapse-content
  body?: string // 内容盒子（实际内容容器）div.hmfw-collapse-content-box
}

interface CollapseStyles {
  root?: CSSProperties
  item?: CSSProperties
  header?: CSSProperties
  icon?: CSSProperties
  headerText?: CSSProperties
  extra?: CSSProperties
  content?: CSSProperties
  body?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-collapse">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-collapse-item">
    <!-- ↑ classNames.item / styles.item 应用于此 -->
    <div class="hmfw-collapse-header">
      <!-- ↑ classNames.header / styles.header 应用于此 -->
      <span class="hmfw-collapse-icon">
        <!-- ↑ classNames.icon / styles.icon 应用于此 -->
        <RightOutlined />
      </span>
      <span class="hmfw-collapse-header-text">
        <!-- ↑ classNames.headerText / styles.headerText 应用于此 -->
        面板标题
      </span>
      <div class="hmfw-collapse-extra">
        <!-- ↑ classNames.extra / styles.extra 应用于此（仅 extra prop 存在时） -->
        额外内容
      </div>
    </div>
    <div class="hmfw-collapse-content">
      <!-- ↑ classNames.content / styles.content 应用于此（仅展开或 forceRender 时） -->
      <div class="hmfw-collapse-content-box">
        <!-- ↑ classNames.body / styles.body 应用于此 -->
        面板内容
      </div>
    </div>
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- Collapse 级别 classNames -->
  <Collapse
    :default-active-key="['1']"
    :class-names="{
      header: 'my-header',
      icon: 'my-icon',
      body: 'my-body',
    }"
  >
    <CollapsePanel key="1" header="自定义样式面板"> 面板内容 </CollapsePanel>
  </Collapse>

  <!-- CollapsePanel 级别 classNames（优先级更高） -->
  <Collapse>
    <CollapsePanel
      key="1"
      header="面板级样式"
      :class-names="{
        item: 'my-item',
        header: 'my-header-override',
      }"
    >
      CollapsePanel 的 classNames 会覆盖 Collapse 传递的同名 key
    </CollapsePanel>
  </Collapse>
</template>

<style scoped>
:deep(.my-header) {
  background: linear-gradient(to right, #52c41a, #389e0d);
  color: white;
  border-radius: 6px;
}

:deep(.my-icon) {
  color: white;
  font-size: 16px;
}

:deep(.my-body) {
  background-color: #f6ffed;
  border-left: 3px solid #52c41a;
  padding: 16px;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- Collapse 级别 styles -->
  <Collapse
    :default-active-key="['1']"
    :styles="{
      header: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', borderRadius: '8px' },
      icon: { color: 'white', fontSize: '16px' },
      body: { backgroundColor: '#f0f5ff', padding: '16px' },
    }"
  >
    <CollapsePanel key="1" header="内联样式面板"> 面板内容 </CollapsePanel>
  </Collapse>

  <!-- CollapsePanel 级别 styles -->
  <Collapse>
    <CollapsePanel
      key="1"
      header="面板级内联样式"
      :styles="{
        header: { fontWeight: 600, fontSize: '16px' },
        body: { padding: '20px', backgroundColor: '#e6f7ff' },
      }"
    >
      CollapsePanel 的 styles 会覆盖 Collapse 传递的同名 key
    </CollapsePanel>
  </Collapse>
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- Collapse 通过 `provide` / `inject` 将 `classNames` 和 `styles` 传递给子组件 CollapsePanel
- CollapsePanel 自己的 `classNames` / `styles` props 优先级**高于** Collapse 传递的值（用于单独定制某个面板）
- `icon` 仅在 `showArrow` 为 `true` 时渲染
- `extra` 仅在设置了 `extra` prop 时渲染
- `content` 和 `body` 在面板收起时：
  - `destroyInactivePanel` 为 `true` 时不渲染
  - `forceRender` 为 `true` 时渲染但隐藏（`display: none`）
  - 默认使用 `<Transition>` 渲染但隐藏（`height: 0; overflow: hidden`）
- `headerText` 应用于 `header` prop 或 `label` 字段的文本节点；若使用 slot 自定义 header，需自行包裹容器控制样式

## 设计 Token

Collapse 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                    | 说明         | 默认值                                  |
| ----------------------------- | ------------ | --------------------------------------- |
| `--hmfw-border-radius-lg`     | 大号圆角     | `8px`                                   |
| `--hmfw-color-bg-container`   | 容器背景色   | `#ffffff`                               |
| `--hmfw-color-border`         | 边框色       | `#d9d9d9`                               |
| `--hmfw-color-fill-alter`     | 交替填充色   | `rgba(0,0,0,0.02)` _(注：Token 未定义)_ |
| `--hmfw-color-text`           | 主文本色     | `rgba(0,0,0,0.88)`                      |
| `--hmfw-color-text-disabled`  | 禁用文本色   | `rgba(0,0,0,0.25)`                      |
| `--hmfw-color-text-secondary` | 次要文本色   | `rgba(0,0,0,0.65)`                      |
| `--hmfw-font-size-base`       | 基础字号     | `14px`                                  |
| `--hmfw-font-size-lg`         | 大号字号     | `16px`                                  |
| `--hmfw-font-size-sm`         | 小号字号     | `12px`                                  |
| `--hmfw-motion-duration-mid`  | 中速动画时长 | `0.2s`                                  |
| `--hmfw-motion-ease-in-out`   | 缓入缓出曲线 | `cubic-bezier(0.645, 0.045, 0.355, 1)`  |
| `--hmfw-padding`              | 标准内边距   | `12px`                                  |
| `--hmfw-padding-lg`           | 大号内边距   | `24px`                                  |
| `--hmfw-padding-sm`           | 小号内边距   | `8px`                                   |
