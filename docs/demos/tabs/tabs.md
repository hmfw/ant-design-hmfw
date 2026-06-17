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

## API

### Tabs

| 参数                   | 说明                                                                              | 类型                                     | 默认值     |
| ---------------------- | --------------------------------------------------------------------------------- | ---------------------------------------- | ---------- |
| activeKey(v-model)     | 当前激活 tab 面板的 key                                                           | string                                   | -          |
| defaultActiveKey       | 初始化选中面板的 key，如果没有设置 activeKey                                      | string                                   | 第一个面板 |
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
| classNames             | 语义化 className（[详见下方](#语义化-classname)）                                 | TabsClassNames                           | -          |
| styles                 | 语义化 style（[详见下方](#语义化-style)）                                         | TabsStyles                               | -          |

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

## 语义化 className

通过 `classNames` 属性可以自定义 Tabs 各部分的 className。

### TabsClassNames

| 属性名    | 说明                                               | 类型     | 版本 |
| --------- | -------------------------------------------------- | -------- | ---- |
| root      | 根节点 `div.hmfw-tabs`                             | `string` | -    |
| nav       | 标签栏容器 `div.hmfw-tabs-nav`                     | `string` | -    |
| tab       | 单个标签 `div.hmfw-tabs-tab`                       | `string` | -    |
| tabActive | 激活标签 `div.hmfw-tabs-tab-active`（与 tab 叠加） | `string` | -    |
| tabIcon   | 标签图标 `span.hmfw-tabs-tab-icon`                 | `string` | -    |
| inkBar    | 墨条 `div.hmfw-tabs-ink-bar`（仅 line 类型）       | `string` | -    |
| content   | 内容容器 `div.hmfw-tabs-content`                   | `string` | -    |
| tabpane   | 内容面板 `div.hmfw-tabs-tabpane`                   | `string` | -    |

### DOM 结构

```html
<div class="hmfw-tabs">
  <!-- root -->
  <div class="hmfw-tabs-nav">
    <!-- nav -->
    <div class="hmfw-tabs-nav-wrap">
      <div class="hmfw-tabs-nav-list">
        <div class="hmfw-tabs-tab hmfw-tabs-tab-active">
          <!-- tab + tabActive -->
          <div class="hmfw-tabs-tab-btn">
            <span class="hmfw-tabs-tab-icon">图标</span>
            <!-- tabIcon -->
            标签
          </div>
        </div>
      </div>
      <div class="hmfw-tabs-ink-bar" />
      <!-- inkBar -->
    </div>
  </div>
  <div class="hmfw-tabs-content-holder">
    <div class="hmfw-tabs-content">
      <!-- content -->
      <div class="hmfw-tabs-tabpane">面板内容</div>
      <!-- tabpane -->
    </div>
  </div>
</div>
```

### 使用示例

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
```

**注意事项：**

- `tabActive` 与 `tab` 同时应用于激活的标签上（两者叠加）
- `tabIcon` 仅在 `TabItem` 设置了 `icon` 时渲染
- `inkBar` 仅在 `type="line"`（默认）时渲染，`card` 类型无墨条

## 语义化 style

通过 `styles` 属性可以自定义 Tabs 各部分的 style。

### TabsStyles

| 属性名    | 说明                                | 类型            | 版本 |
| --------- | ----------------------------------- | --------------- | ---- |
| root      | 根节点 `div.hmfw-tabs`              | `CSSProperties` | -    |
| nav       | 标签栏容器 `div.hmfw-tabs-nav`      | `CSSProperties` | -    |
| tab       | 单个标签 `div.hmfw-tabs-tab`        | `CSSProperties` | -    |
| tabActive | 激活标签 `div.hmfw-tabs-tab-active` | `CSSProperties` | -    |
| tabIcon   | 标签图标 `span.hmfw-tabs-tab-icon`  | `CSSProperties` | -    |
| inkBar    | 墨条 `div.hmfw-tabs-ink-bar`        | `CSSProperties` | -    |
| content   | 内容容器 `div.hmfw-tabs-content`    | `CSSProperties` | -    |
| tabpane   | 内容面板 `div.hmfw-tabs-tabpane`    | `CSSProperties` | -    |

### 使用示例

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

**说明：** `styles.nav` 会与 `tabBarStyle` 合并；`styles.tabActive` 会与 `styles.tab` 在激活标签上合并。

### 语义化 className 与 style

<DemoBlock title="语义化 className 与 style" :source="TabsClassNamesSource">
  <TabsClassNames />
</DemoBlock>
