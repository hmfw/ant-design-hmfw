# Tabs 标签页

选项卡切换组件。

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

Ant Design 依次提供了三级选项卡，分别用于不同的场景。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。
- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。

## 代码演示

### 基本

默认选中第一项。

<DemoBlock title="基本" :source="TabsBasicSource">
  <TabsBasic />
</DemoBlock>

### 图标

有图标的标签。

<DemoBlock title="图标" :source="TabsIconSource">
  <TabsIcon />
</DemoBlock>

### 居中

标签居中展示。

<DemoBlock title="居中" :source="TabsCenteredSource">
  <TabsCentered />
</DemoBlock>

### 大小

大中小三种大小的标签页，提供了 large 和 small 两个尺寸。

<DemoBlock title="大小" :source="TabsSizeSource">
  <TabsSize />
</DemoBlock>

### 位置

有四个位置，tabPosition=top|bottom|left|right。

<DemoBlock title="位置" :source="TabsPositionSource">
  <TabsPosition />
</DemoBlock>

### 卡片式页签

另一种样式的页签，不提供对应的垂直样式。

<DemoBlock title="卡片式页签" :source="TabsCardSource">
  <TabsCard />
</DemoBlock>

### 新增和关闭页签

只有卡片样式的页签支持新增和关闭选项。使用 closable={false} 禁止关闭。

<DemoBlock title="新增和关闭页签" :source="TabsEditableSource">
  <TabsEditable />
</DemoBlock>

### 附加内容

可以在页签右边添加附加操作。

<DemoBlock title="附加内容" :source="TabsExtraSource">
  <TabsExtra />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="TabsClassNamesSource">
  <TabsClassNames />
</DemoBlock>

### 禁用选项

禁用指定的 tab 页签。

<DemoBlock title="禁用选项" :source="TabsDisabledSource">
  <TabsDisabled />
</DemoBlock>

### 动画配置

通过 animated 属性控制墨条和内容切换的动画效果。

<DemoBlock title="动画配置" :source="TabsAnimatedSource">
  <TabsAnimated />
</DemoBlock>

### 左右附加内容

通过 `tabBarExtraContent` 的对象形式在标签栏左右两侧放置额外元素。

<DemoBlock title="左右附加内容" :source="TabsExtraLRSource">
  <TabsExtraLR />
</DemoBlock>

### 自定义图标

自定义添加/删除按钮的图标。

<DemoBlock title="自定义图标" :source="TabsCustomIconSource">
  <TabsCustomIcon />
</DemoBlock>

### 强制渲染与销毁

通过 `forceRender` 和 `destroyInactiveTabPane` 控制非激活 tab 的 DOM 行为。

<DemoBlock title="强制渲染与销毁" :source="TabsForceRenderSource">
  <TabsForceRender />
</DemoBlock>

### 间距与样式

通过 `tabBarGutter`、`tabBarStyle`、`hideAdd` 精细控制标签栏布局。

<DemoBlock title="间距与样式" :source="TabsGutterSource">
  <TabsGutter />
</DemoBlock>

### 受控模式

通过 `v-model:activeKey` 实现完全受控的标签页，适用于需要外部管理激活状态的场景。

<DemoBlock title="受控模式" :source="TabsControlledSource">
  <TabsControlled />
</DemoBlock>

### 额外操作

在标签栏右侧添加操作按钮，常用于批量操作或更多功能入口。

<DemoBlock title="额外操作" :source="TabsExtraActionsSource">
  <TabsExtraActions />
</DemoBlock>

### 嵌套标签页

在 Tab 内容中嵌套使用 Tabs 组件，实现多层级内容组织。

<DemoBlock title="嵌套标签页" :source="TabsNestSource">
  <TabsNest />
</DemoBlock>

## API

### Tabs

| 参数                   | 说明                                                                              | 类型                                     | 默认值     |
| ---------------------- | --------------------------------------------------------------------------------- | ---------------------------------------- | ---------- |
| activeKey(v-model)     | 当前激活 tab 面板的 key                                                           | string                                   | 第一个面板 |
| type                   | 页签的基本样式，可选 `line`、`card`、`editable-card` 类型                         | string                                   | `line`     |
| size                   | 大小，提供 `large` 和 `small` 两种大小                                            | string                                   | -          |
| tabPosition            | 页签位置，可选值有 `top` `right` `bottom` `left`                                  | string                                   | `top`      |
| centered               | 标签居中展示                                                                      | boolean                                  | false      |
| items                  | 配置选项卡内容                                                                    | TabItem[]                                | []         |
| animated               | 是否使用动画切换 Tabs，可以是布尔值或对象 `{ inkBar: boolean, tabPane: boolean }` | boolean \| AnimatedConfig                | true       |
| tabBarExtraContent     | tab bar 上额外的元素                                                              | VNode \| { left?: VNode, right?: VNode } | -          |
| tabBarGutter           | tabs 之间的间隙                                                                   | number                                   | -          |
| tabBarStyle            | tab bar 的样式对象                                                                | object                                   | -          |
| hideAdd                | 是否隐藏加号图标，在 `type="editable-card"` 时有效                                | boolean                                  | false      |
| addIcon                | 自定义添加按钮图标                                                                | VNode                                    | -          |
| removeIcon             | 自定义删除按钮图标                                                                | VNode                                    | -          |
| destroyInactiveTabPane | 被隐藏时是否销毁 DOM 结构                                                         | boolean                                  | false      |
| classNames             | 语义化 className（[语义化 className 与 style](#语义化-classname-与-style)）       | TabsClassNames                           | -          |
| styles                 | 语义化 style（[语义化 className 与 style](#语义化-classname-与-style)）           | TabsStyles                               | -          |

### Tabs 事件

| 事件名称 | 说明                                                   | 回调参数                                                             |
| -------- | ------------------------------------------------------ | -------------------------------------------------------------------- |
| change   | 切换面板的回调                                         | (activeKey: string) => void                                          |
| tabClick | tab 被点击的回调                                       | (key: string, event: MouseEvent) => void                             |
| edit     | 新增和删除页签的回调，在 `type="editable-card"` 时有效 | (targetKey: string \| MouseEvent, action: 'add' \| 'remove') => void |

### TabItem

| 参数                   | 说明                                               | 类型            | 默认值 |
| ---------------------- | -------------------------------------------------- | --------------- | ------ |
| key                    | 对应 activeKey                                     | string          | -      |
| label                  | 选项卡头显示文字                                   | string \| VNode | -      |
| children               | 选项卡内容                                         | any             | -      |
| disabled               | 禁用某一项                                         | boolean         | false  |
| closable               | 是否显示关闭按钮，在 `type="editable-card"` 时有效 | boolean         | true   |
| icon                   | 选项卡头显示图标                                   | VNode           | -      |
| closeIcon              | 自定义关闭图标，在 `type="editable-card"` 时有效   | VNode           | -      |
| forceRender            | 被隐藏时是否渲染 DOM 结构                          | boolean         | false  |
| destroyInactiveTabPane | 被隐藏时是否销毁 DOM 结构                          | boolean         | false  |

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对Tabs的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface TabsClassNames {
  root?: string // 根节点 div.hmfw-tabs
  nav?: string // 标签栏容器 div.hmfw-tabs-nav
  tab?: string // 单个标签 div.hmfw-tabs-tab
  tabActive?: string // 激活标签 div.hmfw-tabs-tab-active（与 tab 叠加）
  tabIcon?: string // 标签图标 span.hmfw-tabs-tab-icon
  inkBar?: string // 墨条 div.hmfw-tabs-ink-bar（仅 line 类型）
  content?: string // 内容容器 div.hmfw-tabs-content
  tabpane?: string // 内容面板 div.hmfw-tabs-tabpane
}

interface TabsStyles {
  root?: CSSProperties // 根节点 div.hmfw-tabs
  nav?: CSSProperties // 标签栏容器 div.hmfw-tabs-nav
  tab?: CSSProperties // 单个标签 div.hmfw-tabs-tab
  tabActive?: CSSProperties // 激活标签 div.hmfw-tabs-tab-active
  tabIcon?: CSSProperties // 标签图标 span.hmfw-tabs-tab-icon
  inkBar?: CSSProperties // 墨条 div.hmfw-tabs-ink-bar
  content?: CSSProperties // 内容容器 div.hmfw-tabs-content
  tabpane?: CSSProperties // 内容面板 div.hmfw-tabs-tabpane
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-tabs">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-tabs-nav">
    <!-- ↑ classNames.nav / styles.nav 应用于此 -->
    <div class="hmfw-tabs-extra-content-left">左侧附加内容（可选）</div>
    <div class="hmfw-tabs-nav-wrap">
      <div class="hmfw-tabs-nav-list">
        <div class="hmfw-tabs-tab hmfw-tabs-tab-active">
          <!-- ↑ classNames.tab + classNames.tabActive / styles.tab + styles.tabActive 应用于此 -->
          <div class="hmfw-tabs-tab-btn">
            <span class="hmfw-tabs-tab-icon">图标</span>
            <!-- ↑ classNames.tabIcon / styles.tabIcon 应用于此 -->
            标签
          </div>
        </div>
      </div>
      <div class="hmfw-tabs-ink-bar" />
      <!-- ↑ classNames.inkBar / styles.inkBar 应用于此 -->
    </div>
    <div class="hmfw-tabs-extra-content">右侧附加内容（可选）</div>
  </div>
  <div class="hmfw-tabs-content-holder">
    <div class="hmfw-tabs-content">
      <!-- ↑ classNames.content / styles.content 应用于此 -->
      <div class="hmfw-tabs-tabpane">面板内容</div>
      <!-- ↑ classNames.tabpane / styles.tabpane 应用于此 -->
    </div>
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <Tabs
    :items="items"
    :classNames="{
      root: 'my-tabs-root',
      nav: 'my-tabs-nav',
      tab: 'my-tabs-tab',
      tabActive: 'my-tabs-tab-active',
      content: 'my-tabs-content',
    }"
  />
</template>

<style scoped>
:deep(.my-tabs-root) {
  border: 2px solid #1890ff;
  border-radius: 12px;
}

:deep(.my-tabs-nav) {
  background: #f0f0f0;
  padding: 8px;
}

:deep(.my-tabs-tab-active) {
  font-weight: 600;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <Tabs
    :items="items"
    :styles="{
      root: { border: '2px solid #1890ff', borderRadius: '12px' },
      nav: { background: '#667eea' },
      content: { padding: '16px' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `tabActive` 与 `tab` 同时应用于激活的标签上（两者叠加）
- `tabIcon` 仅在 `TabItem` 设置了 `icon` 时渲染
- `inkBar` 仅在 `type="line"`（默认）时渲染，`card` 类型无墨条
- `styles.nav` 会与 `tabBarStyle` 合并；`styles.tabActive` 会与 `styles.tab` 在激活标签上合并

## 设计 Token

| Token 名称                     | 说明       | 默认值             |
| ------------------------------ | ---------- | ------------------ |
| `--hmfw-color-primary`         | 主题色     | `#1677ff`          |
| `--hmfw-color-text`            | 主文本色   | `rgba(0,0,0,0.88)` |
| `--hmfw-color-text-secondary`  | 次要文本色 | `rgba(0,0,0,0.65)` |
| `--hmfw-color-text-disabled`   | 禁用文本色 | `rgba(0,0,0,0.25)` |
| `--hmfw-color-bg-container`    | 容器背景色 | `#ffffff`          |
| `--hmfw-color-border`          | 边框色     | `#d9d9d9`          |
| `--hmfw-color-fill-quaternary` | 四级填充色 | `rgba(0,0,0,0.02)` |
| `--hmfw-font-size-base`        | 基础字号   | `14px`             |
| `--hmfw-font-size-sm`          | 小号字号   | `12px`             |
| `--hmfw-font-size-lg`          | 大号字号   | `16px`             |
| `--hmfw-border-radius`         | 基础圆角   | `6px`              |
