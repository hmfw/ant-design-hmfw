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

### 幽灵模式

幽灵模式使折叠面板透明且无边框，适合嵌入有背景色的容器中使用。

<DemoBlock title="幽灵模式" :source="CollapseGhostSource">
  <CollapseGhost />
</DemoBlock>

### 图标位置

通过 `expandIconPosition` 可以设置展开图标的位置，支持 `start`（默认）和 `end`。

<DemoBlock title="图标位置" :source="CollapseIconPositionSource">
  <CollapseIconPosition />
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

### 销毁未激活面板

通过 `destroyInactivePanel` 可在面板收起时销毁 DOM，配合 `forceRender` 可为特定面板保留 DOM。

<DemoBlock title="销毁未激活面板" :source="CollapseDestroyInactiveSource">
  <CollapseDestroyInactive />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="CollapseClassNamesSource">
  <CollapseClassNames />
</DemoBlock>

### 面板级别定制

Item/Panel 级别的 `classNames`、`styles`、`collapsible`、`disabled` 等属性优先级高于 Collapse 级别。

<DemoBlock title="面板级别定制" :source="CollapsePanelLevelSource">
  <CollapsePanelLevel />
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

### 语义化 DOM

将鼠标移到右侧任一节点上，左侧预览区会框出它对应的 DOM 元素。点击图钉可固定高亮，点击信息图标查看该节点的 `classNames` / `styles` 写法模板。

<CollapseSemantic />

### DOM 结构与 className 映射

```html
<div class="hmfw-collapse">
  <!-- ↑ classNames.root / styles.root -->
  <div class="hmfw-collapse-item">
    <!-- ↑ classNames.item / styles.item -->
    <div class="hmfw-collapse-header">
      <!-- ↑ classNames.header / styles.header -->
      <span class="hmfw-collapse-icon">
        <!-- ↑ showArrow 为 true 时渲染，classNames.icon / styles.icon -->
        <RightOutlined />
      </span>
      <span class="hmfw-collapse-header-text">
        <!-- ↑ classNames.headerText / styles.headerText -->
        面板标题
      </span>
      <div class="hmfw-collapse-extra">
        <!-- ↑ 设置 extra 时渲染，classNames.extra / styles.extra -->
        额外内容
      </div>
    </div>
    <div class="hmfw-collapse-content">
      <!-- ↑ 展开或 forceRender 时渲染，classNames.content / styles.content -->
      <div class="hmfw-collapse-content-box">
        <!-- ↑ classNames.body / styles.body -->
        面板内容
      </div>
    </div>
  </div>
</div>
```

### 用法

`classNames` 追加自定义类，`styles` 写内联样式，二者可同时作用于同一节点：

```vue
<template>
  <!-- classNames：追加自定义类 -->
  <Collapse :default-active-key="['1']" :class-names="{ header: 'my-header', icon: 'my-icon', body: 'my-body' }">
    <CollapsePanel key="1" header="自定义样式面板"> 面板内容 </CollapsePanel>
  </Collapse>

  <!-- styles：内联样式，优先级高于 classNames -->
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

  <!-- 组合：classNames 与 styles 混用（Panel 级优先级高于 Collapse 级） -->
  <Collapse :default-active-key="['1']">
    <CollapsePanel
      key="1"
      header="面板级定制"
      :class-names="{ header: 'my-header' }"
      :styles="{ body: { padding: '20px', backgroundColor: '#e6f7ff' } }"
    >
      面板内容
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

### 注意事项

- `styles` 内联样式优先级高于 `classNames`，二者可同时作用于同一节点
- 各语义化类名会与组件内置类名（如 `.hmfw-collapse-item-active`）合并，不会互相覆盖
- Collapse 的 `classNames` / `styles` 会经 provide/inject 下发给 CollapsePanel；CollapsePanel 自身同名 key 的值优先级更高，可单独定制某个面板
- `content` / `body` 在面板收起时的渲染：`destroyInactivePanel` 为 `true` 时不渲染，`forceRender` 为 `true` 时渲染但隐藏，默认经 `<Transition>` 渲染并折叠高度
- `headerText` 作用于 `header` prop 或 `label` 字段的文本节点；若用 slot 自定义 header，需自行包裹容器控制样式

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
