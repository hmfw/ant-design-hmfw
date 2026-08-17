# Mentions 提及

提及组件，用于在文本输入中 @ 用户或实体。

## 何时使用

在评论、聊天等场景中，需要提及某些用户或实体时使用。

在 @hmfw/ant-design 中我们提供了以下特性：

- 多前缀支持：支持自定义触发字符（@、#、$ 等）。
- 异步加载：支持远程搜索和动态加载选项。
- 虚拟滚动：内置虚拟滚动，轻松处理大量选项。
- 自动高度：支持根据内容自动调整高度。
- 完整状态：支持禁用、只读、错误、警告等状态。

## 代码演示

### 基本使用

基础的提及用法，支持键盘操作。

<DemoBlock title="基本使用" :source="MentionsBasicSource">
  <MentionsBasic />
</DemoBlock>

### 尺寸

三种大小的提及框。

通过设置 `size` 为 `large` `small` 分别把提及框设为大、小尺寸。若不设置 `size`，则尺寸为中。

<DemoBlock title="尺寸" :source="MentionsSizeSource">
  <MentionsSize />
</DemoBlock>

### 禁用和只读

通过 `disabled` 禁用组件，通过 `readOnly` 设置为只读状态。

<DemoBlock title="禁用和只读" :source="MentionsDisabledSource">
  <MentionsDisabled />
</DemoBlock>

### 校验状态

使用 `status` 为 Mentions 添加状态，可选 `error` 或 `warning`。

<DemoBlock title="校验状态" :source="MentionsStatusSource">
  <MentionsStatus />
</DemoBlock>

### 自定义前缀

通过 `prefix` 自定义触发字符，可以是单个字符或字符数组。

<DemoBlock title="自定义前缀" :source="MentionsPrefixSource">
  <MentionsPrefix />
</DemoBlock>

### 自定义分隔符

通过 `split` 自定义选项之间的分隔符。

<DemoBlock title="自定义分隔符" :source="MentionsSplitSource">
  <MentionsSplit />
</DemoBlock>

### 行数控制

通过 `rows` 设置固定行数。

<DemoBlock title="行数控制" :source="MentionsRowsSource">
  <MentionsRows />
</DemoBlock>

### 自动高度

通过 `autoSize` 自动调整高度，可以指定最小和最大行数。

<DemoBlock title="自动高度" :source="MentionsAutoSizeSource">
  <MentionsAutoSize />
</DemoBlock>

### 清除按钮

通过 `allowClear` 添加清除按钮，聚焦且有内容时显示。

<DemoBlock title="清除按钮" :source="MentionsAllowClearSource">
  <MentionsAllowClear />
</DemoBlock>

### 异步加载

配合 `onSearch` 实现异步数据加载。

<DemoBlock title="异步加载" :source="MentionsAsyncSource">
  <MentionsAsync />
</DemoBlock>

### 弹出位置

通过 `placement` 控制弹出层位置。

<DemoBlock title="弹出位置" :source="MentionsPlacementSource">
  <MentionsPlacement />
</DemoBlock>

### 虚拟滚动

内置虚拟滚动，轻松处理大量数据。

<DemoBlock title="虚拟滚动" :source="MentionsVirtualSource">
  <MentionsVirtual />
</DemoBlock>

### 自定义过滤

通过 `filterOption` 自定义搜索逻辑。

<DemoBlock title="自定义过滤" :source="MentionsFilterOptionSource">
  <MentionsFilterOption />
</DemoBlock>

### 表单集成

在表单中使用 Mentions 组件。

<DemoBlock title="表单集成" :source="MentionsFormSource">
  <MentionsForm />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对 root、textarea、suffix、popup 四个子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="MentionsSemanticSource">
  <MentionsSemantic />
</DemoBlock>

## API

### Mentions Props

| 参数            | 说明                                                                             | 类型                                                | 默认值       |
| --------------- | -------------------------------------------------------------------------------- | --------------------------------------------------- | ------------ |
| value           | 输入框的值                                                                       | `string`                                            | -            |
| options         | 提及选项                                                                         | `MentionOption[]`                                   | `[]`         |
| prefix          | 触发字符                                                                         | `string \| string[]`                                | `'@'`        |
| split           | 选项之间的分隔符                                                                 | `string`                                            | `' '`        |
| placeholder     | 输入框占位文本                                                                   | `string`                                            | -            |
| disabled        | 是否禁用                                                                         | `boolean`                                           | `false`      |
| readOnly        | 是否只读                                                                         | `boolean`                                           | `false`      |
| allowClear      | 是否显示清除按钮                                                                 | `boolean`                                           | `false`      |
| autoSize        | 自适应内容高度                                                                   | `boolean \| { minRows?: number; maxRows?: number }` | `false`      |
| rows            | 输入框行数                                                                       | `number`                                            | `1`          |
| loading         | 加载状态                                                                         | `boolean`                                           | `false`      |
| notFoundContent | 无匹配项时的内容                                                                 | `string`                                            | `'无匹配项'` |
| filterOption    | 自定义过滤逻辑                                                                   | `(input: string, option: MentionOption) => boolean` | -            |
| status          | 设置校验状态                                                                     | `'error' \| 'warning'`                              | -            |
| size            | 输入框大小                                                                       | `'small' \| 'middle' \| 'large'`                    | `'middle'`   |
| placement       | 弹出层位置                                                                       | `'top' \| 'bottom'`                                 | `'bottom'`   |
| virtual         | 是否使用虚拟滚动                                                                 | `boolean`                                           | `false`      |
| listHeight      | 下拉列表高度（虚拟滚动时生效）                                                   | `number`                                            | `250`        |
| listItemHeight  | 下拉列表项高度（虚拟滚动时生效）                                                 | `number`                                            | `32`         |
| classNames      | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `MentionSemanticClassNames`                         | -            |
| styles          | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `MentionSemanticStyles`                             | -            |

### Mentions Events

| 事件名     | 说明                   | 回调参数                                          |
| ---------- | ---------------------- | ------------------------------------------------- |
| change     | 输入框内容变化时的回调 | `(value: string) => void`                         |
| search     | 搜索时的回调           | `(text: string, prefix: string) => void`          |
| select     | 选中选项时的回调       | `(option: MentionOption, prefix: string) => void` |
| openChange | 弹出层显示隐藏时的回调 | `(open: boolean) => void`                         |
| focus      | 获得焦点时的回调       | `(e: FocusEvent) => void`                         |
| blur       | 失去焦点时的回调       | `(e: FocusEvent) => void`                         |
| clear      | 点击清除按钮时的回调   | `() => void`                                      |

### MentionOption

| 参数     | 说明           | 类型      | 默认值  |
| -------- | -------------- | --------- | ------- |
| value    | 选项唯一标识   | `string`  | -       |
| label    | 选项显示文本   | `string`  | -       |
| disabled | 是否禁用该选项 | `boolean` | `false` |

### Mentions Methods

| 方法名 | 说明     | 类型         |
| ------ | -------- | ------------ |
| focus  | 获取焦点 | `() => void` |
| blur   | 失去焦点 | `() => void` |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对提及组件的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface MentionSemanticClassNames {
  root?: string // 根容器（包含输入框和后缀元素）
  textarea?: string // 文本输入域
  suffix?: string // 后缀元素（包含清除按钮等）
  popup?: string // 下拉弹出层
}

interface MentionSemanticStyles {
  root?: CSSProperties
  textarea?: CSSProperties
  suffix?: CSSProperties
  popup?: CSSProperties
}
```

### 语义化 DOM

将鼠标移到右侧任一节点上，左侧预览区会框出它对应的 DOM 元素。点击图钉可固定高亮，点击信息图标查看该节点的用法示例。

<MentionsSemantic />

### DOM 结构与 className 映射

```html
<!-- 基础结构 -->
<div class="hmfw-mentions hmfw-input-affix-wrapper hmfw-input-affix-wrapper-middle">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <textarea class="hmfw-mentions" placeholder="输入 @ 提及" rows="1"></textarea>
  <!-- ↑ classNames.textarea / styles.textarea 应用于此 -->
</div>

<!-- 带清除按钮（allowClear + 聚焦且有内容） -->
<div class="hmfw-mentions hmfw-input-affix-wrapper hmfw-input-affix-wrapper-middle hmfw-input-affix-wrapper-focused">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <textarea class="hmfw-mentions">@alice</textarea>
  <span class="hmfw-input-clear-icon" role="button" aria-label="clear">
    <!-- ↑ classNames.suffix / styles.suffix 应用于此 -->
    <span role="img" aria-label="close-circle" class="hmfw-icon">
      <svg>...</svg>
    </span>
  </span>
</div>

<!-- 禁用状态：root 上追加 hmfw-input-affix-wrapper-disabled -->
<div class="hmfw-mentions hmfw-input-affix-wrapper hmfw-input-affix-wrapper-middle hmfw-input-affix-wrapper-disabled">
  <textarea class="hmfw-mentions" disabled></textarea>
</div>

<!-- 错误状态：root 上追加 hmfw-input-affix-wrapper-status-error -->
<div
  class="hmfw-mentions hmfw-input-affix-wrapper hmfw-input-affix-wrapper-middle hmfw-input-affix-wrapper-status-error"
>
  <textarea class="hmfw-mentions"></textarea>
</div>

<!-- 聚焦状态：root 上追加 hmfw-input-affix-wrapper-focused -->
<div class="hmfw-mentions hmfw-input-affix-wrapper hmfw-input-affix-wrapper-middle hmfw-input-affix-wrapper-focused">
  <textarea class="hmfw-mentions"></textarea>
</div>

<!-- 弹出层（通过 Trigger 组件挂载到 body） -->
<div class="hmfw-trigger-popup">
  <div class="hmfw-mentions-dropdown">
    <!-- ↑ classNames.popup / styles.popup 应用于此 -->
    <div role="listbox">
      <!-- 有匹配项 -->
      <div class="hmfw-mentions-dropdown-item" role="option" aria-selected="false">Alice</div>
      <div class="hmfw-mentions-dropdown-item hmfw-mentions-dropdown-item-active" role="option" aria-selected="true">
        <!-- ↑ 激活项追加 -active 类 -->
        Bob
      </div>
      <div class="hmfw-mentions-dropdown-item hmfw-mentions-dropdown-item-disabled" role="option" aria-disabled="true">
        <!-- ↑ 禁用项追加 -disabled 类 -->
        Charlie
      </div>
    </div>
  </div>
</div>

<!-- 弹出层（无匹配项） -->
<div class="hmfw-trigger-popup">
  <div class="hmfw-mentions-dropdown">
    <div class="hmfw-mentions-dropdown-empty" role="listbox">无匹配项</div>
  </div>
</div>

<!-- 虚拟滚动：内部带虚拟列表容器 -->
<div class="hmfw-trigger-popup">
  <div class="hmfw-mentions-dropdown">
    <!-- ↑ classNames.popup / styles.popup 应用于此 -->
    <div role="listbox">
      <div class="hmfw-virtual-list" style="height: 250px">
        <!-- ↑ 虚拟列表实际高度 = listHeight -->
        <div class="hmfw-virtual-list-holder" style="height: 3200px">
          <!-- ↑ 虚拟占位高度 = 总选项数 × listItemHeight -->
        </div>
        <div class="hmfw-virtual-list-scrollbar">...</div>
        <div class="hmfw-mentions-dropdown-item" style="position: absolute; top: 0px">
          <!-- ↑ 可见项通过绝对定位渲染在可视区域 -->
          Option 1
        </div>
        <div class="hmfw-mentions-dropdown-item" style="position: absolute; top: 32px">Option 2</div>
        <!-- ... 只渲染可视区域的项 ... -->
      </div>
    </div>
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义输入框样式 -->
  <Mentions :options="options" :class-names="{ textarea: 'my-textarea' }" />

  <!-- 自定义后缀（清除按钮）样式 -->
  <Mentions :options="options" allowClear :class-names="{ suffix: 'my-suffix' }" />

  <!-- 自定义弹出层样式 -->
  <Mentions :options="options" :class-names="{ popup: 'my-popup' }" />

  <!-- 自定义根节点样式 -->
  <Mentions :options="options" :class-names="{ root: 'my-mentions-root' }" />

  <!-- 组合使用 -->
  <Mentions
    :options="options"
    allowClear
    :class-names="{
      root: 'my-mentions-root',
      textarea: 'my-textarea',
      suffix: 'my-suffix',
      popup: 'my-popup',
    }"
  />
</template>

<style scoped>
:deep(.my-textarea) {
  font-weight: 500;
  letter-spacing: 0.05em;
}

:deep(.my-suffix) {
  color: #faad14;
}

:deep(.my-popup) {
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.2);
}

:deep(.my-mentions-root) {
  border-radius: 8px;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制输入框 -->
  <Mentions
    :options="options"
    :styles="{
      textarea: { fontWeight: 500, fontSize: '16px' },
    }"
  />

  <!-- 自定义边框颜色 -->
  <Mentions
    :options="options"
    :styles="{
      root: { borderColor: '#1677ff', borderWidth: '2px' },
    }"
  />

  <!-- 自定义后缀（清除按钮）样式 -->
  <Mentions
    :options="options"
    allowClear
    :styles="{
      suffix: { color: '#faad14', fontSize: '14px' },
    }"
  />

  <!-- 组合使用 -->
  <Mentions
    :options="options"
    allowClear
    :styles="{
      root: { borderRadius: '8px' },
      textarea: { lineHeight: '1.8' },
      suffix: { color: '#ff4d4f' },
      popup: { boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- 语义节点与 Ant Design v6 一致，包含 `root` / `textarea` / `suffix` / `popup` 四个
- `classNames.root` 会与组件内置的状态类名（如 `.hmfw-input-affix-wrapper-focused`、`.hmfw-input-affix-wrapper-disabled`）合并
- 弹出层通过 Trigger 组件挂载到 body，`classNames.popup` / `styles.popup` 应用于弹出层内的下拉容器
- `suffix` 节点包含清除按钮等后缀元素，仅在 `allowClear` 为 `true` 且有内容时渲染
- 虚拟滚动模式下，弹出层内的选项通过虚拟列表渲染，只渲染可视区域的选项以优化性能
- 下拉选项和空状态的样式可以通过 CSS 选择器 `.hmfw-mentions-dropdown-item` 和 `.hmfw-mentions-dropdown-empty` 自定义

## 设计 Token

Mentions 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                      | 说明         | 默认值                                   |
| ------------------------------- | ------------ | ---------------------------------------- |
| `--hmfw-color-bg-container`     | 容器背景色   | `#ffffff`                                |
| `--hmfw-color-border`           | 边框色       | `#d9d9d9`                                |
| `--hmfw-color-error`            | 错误状态色   | `#ff4d4f`                                |
| `--hmfw-color-warning`          | 警告状态色   | `#faad14`                                |
| `--hmfw-color-primary`          | 主题色       | `#1677ff`                                |
| `--hmfw-color-primary-hover`    | 主题色悬停态 | `#4096ff`                                |
| `--hmfw-color-text`             | 主文本色     | `rgba(0,0,0,0.88)`                       |
| `--hmfw-color-text-placeholder` | 占位文本色   | `rgba(0,0,0,0.25)`                       |
| `--hmfw-color-text-disabled`    | 禁用文本色   | `rgba(0,0,0,0.25)`                       |
| `--hmfw-color-bg-elevated`      | 弹出层背景色 | `#ffffff`                                |
| `--hmfw-font-family`            | 字体族       | `-apple-system, BlinkMacSystemFont, ...` |
| `--hmfw-font-size`              | 标准字号     | `14px`                                   |
| `--hmfw-font-size-lg`           | 大号字号     | `16px`                                   |
| `--hmfw-font-size-sm`           | 小号字号     | `12px`                                   |
| `--hmfw-line-height`            | 标准行高     | `1.5714285714285714`                     |
| `--hmfw-line-height-sm`         | 小号行高     | `22px`                                   |
| `--hmfw-border-radius`          | 基础圆角     | `6px`                                    |
| `--hmfw-border-radius-lg`       | 大号圆角     | `8px`                                    |
| `--hmfw-padding-xs`             | 超小内边距   | `8px`                                    |
| `--hmfw-padding-sm`             | 小号内边距   | `12px`                                   |
| `--hmfw-padding-xxs`            | 最小内边距   | `4px`                                    |
| `--hmfw-box-shadow-secondary`   | 次级阴影     | `0 6px 16px 0 rgba(0,0,0,0.08)`          |
| `--hmfw-motion-duration-mid`    | 中速动画时长 | `0.2s`                                   |
