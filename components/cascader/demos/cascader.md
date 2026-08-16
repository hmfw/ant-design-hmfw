# Cascader 级联选择

级联选择框。

## 何时使用

- 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。
- 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。
- 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。

## 代码演示

### 基础用法

省市区级联。

<DemoBlock title="基础用法" :source="CascaderBasicSource">
  <CascaderBasic />
</DemoBlock>

### Hover 展开

通过 `expandTrigger` 设置为 `hover` 时，鼠标移入即展开下级菜单。

<DemoBlock title="Hover 展开" :source="CascaderHoverSource">
  <CascaderHover />
</DemoBlock>

### 可搜索

可以直接搜索选项并选择。

<DemoBlock title="可搜索" :source="CascaderSearchSource">
  <CascaderSearch />
</DemoBlock>

### 选择即改变

当 `changeOnSelect` 为 `true` 时，点选每级菜单选项值都会发生变化。

<DemoBlock title="选择即改变" :source="CascaderChangeOnSelectSource">
  <CascaderChangeOnSelect />
</DemoBlock>

### 多选

通过 `multiple` 属性开启多选模式。多选支持父子联动（对齐 AntD）：勾选父节点会联动勾选全部后代；某节点的所有子节点勾选后父节点自动勾选（部分勾选时父节点为半选态）。

<DemoBlock title="多选" :source="CascaderMultipleSource">
  <CascaderMultiple />
</DemoBlock>

### 高级功能

展示搜索高亮、showCheckedStrategy 和自定义 displayRender（支持 VNode）。

<DemoBlock title="高级功能" :source="CascaderAdvancedSource">
  <CascaderAdvanced />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="CascaderClassNamesSource">
  <CascaderClassNames />
</DemoBlock>

### 默认值

通过 `defaultValue` 指定初始选中项（非受控），与受控 `value` 形成对比。

<DemoBlock title="默认值" :source="CascaderDefaultValueSource">
  <CascaderDefaultValue />
</DemoBlock>

### 禁用选项

通过 `CascaderOption.disabled` 禁用指定选项，被禁用的节点不可点选也不可展开。

<DemoBlock title="禁用选项" :source="CascaderDisabledOptionSource">
  <CascaderDisabledOption />
</DemoBlock>

### 尺寸

提供 `small` / `middle` / `large` 三种尺寸。

<DemoBlock title="尺寸" :source="CascaderSizeSource">
  <CascaderSize />
</DemoBlock>

### 动态加载选项

通过 `loadData` 在点击节点时异步加载子选项，配合 `isLeaf` 标记叶子节点。

<DemoBlock title="动态加载选项" :source="CascaderLazySource">
  <CascaderLazy />
</DemoBlock>

### 自定义字段名

通过 `fieldNames` 对接后端 `id` / `name` 等字段结构，无需前端转换数据。

<DemoBlock title="自定义字段名" :source="CascaderFieldNamesSource">
  <CascaderFieldNames />
</DemoBlock>

### 校验状态

通过 `status` 设置 `error` / `warning` 校验状态。

<DemoBlock title="校验状态" :source="CascaderStatusSource">
  <CascaderStatus />
</DemoBlock>

## API

### Cascader Props

| 参数                | 说明                                                                                                                                                                                               | 类型                                                                        | 默认值                                                     |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------- |
| value(v-model)      | 指定选中项                                                                                                                                                                                         | `(string \| number)[]` \| `(string \| number)[][]` (multiple)               | -                                                          |
| defaultValue        | 默认的选中项                                                                                                                                                                                       | `(string \| number)[]` \| `(string \| number)[][]` (multiple)               | `[]`                                                       |
| options             | 可选项数据源                                                                                                                                                                                       | `CascaderOption[]`                                                          | `[]`                                                       |
| disabled            | 禁用                                                                                                                                                                                               | `boolean`                                                                   | `false`                                                    |
| placeholder         | 输入框占位文本                                                                                                                                                                                     | `string`                                                                    | `'请选择'`                                                 |
| allowClear          | 是否支持清除                                                                                                                                                                                       | `boolean`                                                                   | `true`                                                     |
| size                | 输入框大小                                                                                                                                                                                         | `'small' \| 'middle' \| 'large'`                                            | `'middle'`                                                 |
| status              | 设置校验状态                                                                                                                                                                                       | `'error' \| 'warning' \| ''`                                                | `''`                                                       |
| expandTrigger       | 次级菜单的展开方式                                                                                                                                                                                 | `'click' \| 'hover'`                                                        | `'click'`                                                  |
| multiple            | 支持多选                                                                                                                                                                                           | `boolean`                                                                   | `false`                                                    |
| showSearch          | 在选择框中显示搜索框                                                                                                                                                                               | `boolean`                                                                   | `false`                                                    |
| changeOnSelect      | 当此项为 true 时，点选每级菜单选项值都会发生变化                                                                                                                                                   | `boolean`                                                                   | `false`                                                    |
| displayRender       | 选择后展示的渲染函数                                                                                                                                                                               | `(labels: string[], selectedOptions?: CascaderOption[]) => string \| VNode` | -                                                          |
| fieldNames          | 自定义 options 中 label value children 的字段                                                                                                                                                      | `{ label?: string; value?: string; children?: string }`                     | `{ label: 'label', value: 'value', children: 'children' }` |
| open(v-model)       | 控制浮层显隐                                                                                                                                                                                       | `boolean`                                                                   | -                                                          |
| defaultOpen         | 默认展开浮层                                                                                                                                                                                       | `boolean`                                                                   | `false`                                                    |
| notFoundContent     | 当下拉列表为空时显示的内容                                                                                                                                                                         | `string`                                                                    | `'无匹配结果'`                                             |
| loadData            | 用于动态加载选项                                                                                                                                                                                   | `(selectedOptions: CascaderOption[]) => void`                               | -                                                          |
| showCheckedStrategy | 多选时勾选值的折叠策略（对齐 AntD：`value` 存储按策略去重后的勾选集，面板勾选状态渲染时再传导补齐）。`SHOW_PARENT`：父路径被选中或某节点所有子节点选中时折叠为父路径；`SHOW_CHILD`：仅保留叶子路径 | `'SHOW_PARENT' \| 'SHOW_CHILD'`                                             | `'SHOW_PARENT'`                                            |
| maxTagCount         | 最多显示多少个 tag                                                                                                                                                                                 | `number`                                                                    | -                                                          |
| maxTagPlaceholder   | 隐藏 tag 时显示的内容                                                                                                                                                                              | `string \| ((omittedValues: string[][]) => string)`                         | -                                                          |
| maxTagTextLength    | 最大显示的 tag 文本长度                                                                                                                                                                            | `number`                                                                    | -                                                          |
| classNames          | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style)                                                                                                                   | `CascaderClassNames`                                                        | -                                                          |
| styles              | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style)                                                                                                                   | `CascaderStyles`                                                            | -                                                          |
| virtual             | 是否启用虚拟滚动（大数据量时开启以提升性能）                                                                                                                                                       | `boolean`                                                                   | `false`                                                    |
| listHeight          | 下拉菜单容器高度（px）                                                                                                                                                                             | `number`                                                                    | `180`                                                      |
| listItemHeight      | 菜单项高度（px）                                                                                                                                                                                   | `number`                                                                    | `32`                                                       |

### CascaderOption

| 参数     | 说明                                         | 类型               |
| -------- | -------------------------------------------- | ------------------ |
| value    | 选项的值                                     | `string \| number` |
| label    | 选项的标签                                   | `string`           |
| disabled | 是否禁用                                     | `boolean`          |
| children | 子选项                                       | `CascaderOption[]` |
| isLeaf   | 标记是否为叶子节点，设置了 `loadData` 时有效 | `boolean`          |

### Cascader Events

| 事件名       | 说明                 | 回调参数                                                                                           |
| ------------ | -------------------- | -------------------------------------------------------------------------------------------------- |
| update:value | 选择完成后的回调     | `(value: string[] \| string[][]) => void`                                                          |
| update:open  | 浮层显隐变化时的回调 | `(open: boolean) => void`                                                                          |
| change       | 选择完成后的回调     | `(value: string[] \| string[][], selectedOptions: CascaderOption[] \| CascaderOption[][]) => void` |
| search       | 输入框搜索时的回调   | `(searchText: string) => void`                                                                     |
| clear        | 点击清除按钮时的回调 | `() => void`                                                                                       |

### Cascader Methods

| 方法名 | 说明     | 参数 |
| ------ | -------- | ---- |
| focus  | 获取焦点 | -    |
| blur   | 失去焦点 | -    |

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 Cascader 的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface CascaderClassNames {
  root?: string // 根容器
  selector?: string // 选择器容器
  selectionItem?: string // 已选项标签
  selectionItemContent?: string // 已选项内容
  selectionItemRemove?: string // 已选项删除按钮
  selectionPlaceholder?: string // 占位符
  searchInput?: string // 搜索输入框
  suffix?: string // 后缀区域
  clear?: string // 清除按钮
  arrow?: string // 箭头图标
  dropdown?: string // 下拉弹层容器
  menus?: string // 多列菜单容器
  menu?: string // 单列菜单
  menuItem?: string // 菜单项
  menuItemContent?: string // 菜单项内容
  menuItemCheckbox?: string // 菜单项复选框（多选模式）
  menuItemExpandIcon?: string // 菜单项展开图标
  menuItemHighlight?: string // 搜索高亮文本
  menuItemEmpty?: string // 空状态提示
}

interface CascaderStyles {
  root?: CSSProperties
  selector?: CSSProperties
  selectionItem?: CSSProperties
  selectionItemContent?: CSSProperties
  selectionItemRemove?: CSSProperties
  selectionPlaceholder?: CSSProperties
  searchInput?: CSSProperties
  suffix?: CSSProperties
  clear?: CSSProperties
  arrow?: CSSProperties
  dropdown?: CSSProperties
  menus?: CSSProperties
  menu?: CSSProperties
  menuItem?: CSSProperties
  menuItemContent?: CSSProperties
  menuItemCheckbox?: CSSProperties
  menuItemExpandIcon?: CSSProperties
  menuItemHighlight?: CSSProperties
  menuItemEmpty?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-cascader">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-cascader-selector">
    <!-- ↑ classNames.selector / styles.selector 应用于此 -->
    <span class="hmfw-cascader-selection-item">
      <!-- ↑ classNames.selectionItem / styles.selectionItem 应用于此（多选模式） -->
      <span class="hmfw-cascader-selection-item-content">浙江 / 杭州</span>
      <!-- ↑ classNames.selectionItemContent / styles.selectionItemContent 应用于此 -->
      <span class="hmfw-cascader-selection-item-remove">×</span>
      <!-- ↑ classNames.selectionItemRemove / styles.selectionItemRemove 应用于此 -->
    </span>
    <span class="hmfw-cascader-selection-placeholder">请选择</span>
    <!-- ↑ classNames.selectionPlaceholder / styles.selectionPlaceholder 应用于此 -->
    <input class="hmfw-cascader-search-input" />
    <!-- ↑ classNames.searchInput / styles.searchInput 应用于此（搜索模式） -->
  </div>
  <div class="hmfw-cascader-suffix">
    <!-- ↑ classNames.suffix / styles.suffix 应用于此 -->
    <span class="hmfw-cascader-clear">×</span>
    <!-- ↑ classNames.clear / styles.clear 应用于此 -->
    <span class="hmfw-cascader-arrow">▾</span>
    <!-- ↑ classNames.arrow / styles.arrow 应用于此 -->
  </div>
  <!-- Teleport 到 body -->
  <div class="hmfw-cascader-dropdown">
    <!-- ↑ classNames.dropdown / styles.dropdown 应用于此 -->
    <div class="hmfw-cascader-menus">
      <!-- ↑ classNames.menus / styles.menus 应用于此 -->
      <div class="hmfw-cascader-menu">
        <!-- ↑ classNames.menu / styles.menu 应用于此 -->
        <div class="hmfw-cascader-menu-item">
          <!-- ↑ classNames.menuItem / styles.menuItem 应用于此 -->
          <span class="hmfw-cascader-menu-item-checkbox">☑</span>
          <!-- ↑ classNames.menuItemCheckbox / styles.menuItemCheckbox 应用于此（多选） -->
          <div class="hmfw-cascader-menu-item-content">浙江</div>
          <!-- ↑ classNames.menuItemContent / styles.menuItemContent 应用于此 -->
          <span class="hmfw-cascader-menu-item-expand-icon">›</span>
          <!-- ↑ classNames.menuItemExpandIcon / styles.menuItemExpandIcon 应用于此 -->
        </div>
        <div class="hmfw-cascader-menu-item-empty">无匹配结果</div>
        <!-- ↑ classNames.menuItemEmpty / styles.menuItemEmpty 应用于此 -->
      </div>
    </div>
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <Cascader
    :options="cityOptions"
    :class-names="{
      root: 'my-cascader-root',
      selector: 'my-selector',
      dropdown: 'my-dropdown',
      menuItem: 'my-menu-item',
    }"
  />
</template>

<style scoped>
:deep(.my-cascader-root) {
  border: 2px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
  border-radius: 8px;
}

:deep(.my-selector) {
  padding: 6px 12px;
}

:deep(.my-menu-item) {
  font-weight: 500;
}
</style>

<style>
/* dropdown 通过 Teleport 渲染，必须使用 :global() */
:global(.my-dropdown) {
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <Cascader
    :options="cityOptions"
    :styles="{
      root: { borderRadius: '20px', borderColor: '#722ed1' },
      selector: { padding: '8px 16px' },
      dropdown: { borderRadius: '12px', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)' },
      menuItem: { padding: '10px 16px' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `dropdown`、`menus`、`menu`、`menuItem` 等通过 `Teleport to="body"` 渲染，样式必须使用 `:global()` 而非 `:deep()`
- `clear` 仅在 `allowClear` 启用且有选中值时显示
- `selectionPlaceholder` 仅在无选中值时显示
- `selectionItem`、`selectionItemContent`、`selectionItemRemove` 在多选模式下对应每个标签
- `searchInput` 在 `showSearch` 启用时显示
- `menuItemCheckbox` 仅在多选模式下显示
- `menuItemExpandIcon` 在有子节点时显示
- `menuItemHighlight` 在搜索模式下用于高亮匹配文本
- `menuItemEmpty` 在搜索无结果时显示

## 设计 Token

Cascader 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

### 全局 Token

| Token 名称                             | 说明                                        | 默认值                 |
| -------------------------------------- | ------------------------------------------- | ---------------------- |
| `--hmfw-color-primary`                 | 主题色（悬停边框、选中项、checkbox 选中态） | `#1677ff`              |
| `--hmfw-color-bg-container`            | 容器背景色                                  | `#ffffff`              |
| `--hmfw-color-bg-container-disabled`   | 禁用背景色                                  | `rgba(0,0,0,0.04)`     |
| `--hmfw-color-border`                  | 边框颜色                                    | `#d9d9d9`              |
| `--hmfw-color-border-secondary`        | 次要边框颜色（列分隔线、dropdown 边框）     | `#f0f0f0`              |
| `--hmfw-color-error`                   | 错误状态颜色（status、搜索高亮）            | `#ff4d4f`              |
| `--hmfw-color-error-bg`                | 错误背景色（搜索高亮背景）                  | `#fff2f0`              |
| `--hmfw-color-fill-secondary`          | 次要填充色（多选标签背景）                  | `rgba(0,0,0,0.06)`     |
| `--hmfw-color-primary-bg`              | 主题背景色（选中菜单项背景）                | `#e6f4ff`              |
| `--hmfw-color-text`                    | 主文本颜色                                  | `rgba(0,0,0,0.88)`     |
| `--hmfw-color-text-secondary`          | 次要文本颜色                                | `rgba(0,0,0,0.65)`     |
| `--hmfw-color-text-disabled`           | 禁用文本颜色                                | `rgba(0,0,0,0.25)`     |
| `--hmfw-color-text-placeholder`        | 占位符文本颜色                              | `rgba(0,0,0,0.25)`     |
| `--hmfw-color-text-light-solid`        | 反色文字（checkbox 选中勾号）               | `#ffffff`              |
| `--hmfw-color-warning`                 | 警告状态颜色                                | `#faad14`              |
| `--hmfw-control-outline`               | 聚焦外发光                                  | `rgba(22,119,255,0.1)` |
| `--hmfw-control-item-bg-hover`         | 菜单项悬浮背景                              | `rgba(0,0,0,0.04)`     |
| `--hmfw-control-height`                | 控件高度（middle）                          | `32px`                 |
| `--hmfw-control-height-sm`             | 控件高度（small）                           | `24px`                 |
| `--hmfw-control-height-lg`             | 控件高度（large）                           | `40px`                 |
| `--hmfw-control-padding-horizontal`    | 控件水平内边距                              | `12px`                 |
| `--hmfw-control-padding-horizontal-sm` | 控件水平内边距（small）                     | `8px`                  |
| `--hmfw-font-size`                     | 基础字号                                    | `14px`                 |
| `--hmfw-font-size-sm`                  | 小字号                                      | `12px`                 |
| `--hmfw-font-size-lg`                  | 大字号                                      | `16px`                 |
| `--hmfw-border-radius`                 | 基础圆角                                    | `6px`                  |
| `--hmfw-border-radius-sm`              | 小圆角（多选标签）                          | `4px`                  |
| `--hmfw-padding-xxs`                   | 极小间距（菜单上下内边距）                  | `4px`                  |
| `--hmfw-padding-xs`                    | 小间距（多选标签水平内边距）                | `8px`                  |
| `--hmfw-padding-sm`                    | 小中间距（菜单项水平内边距）                | `12px`                 |
| `--hmfw-margin-xxs`                    | 极小外边距（标签间距、清除按钮间距）        | `4px`                  |
| `--hmfw-margin-xs`                     | 小外边距（checkbox、展开图标间距）          | `8px`                  |
| `--hmfw-motion-duration-fast`          | 快速过渡时长                                | `0.1s`                 |
| `--hmfw-motion-duration-mid`           | 中速过渡时长                                | `0.2s`                 |

### 组件 Token

组件专属变量定义在 `.hmfw-cascader` 与 `.hmfw-cascader-dropdown` 上（弹层经 Teleport 渲染到 body，与根节点平级，需在两处同时定义才能被弹层内元素继承），可直接覆盖以定制单个组件的尺寸与样式。默认值对齐 Ant Design v6 的 `prepareComponentToken` 派生规则。

| Token 名称                               | 说明                 | 默认值                                                                 |
| ---------------------------------------- | -------------------- | ---------------------------------------------------------------------- |
| `--hmfw-cascader-control-width`          | 根控件宽度           | `184px`（对齐 AntD controlWidth）                                      |
| `--hmfw-cascader-control-item-width`     | 单列菜单宽度         | `111px`（对齐 AntD controlItemWidth）                                  |
| `--hmfw-cascader-dropdown-height`        | 下拉菜单高度         | `180px`（对齐 AntD dropdownHeight）                                    |
| `--hmfw-cascader-option-padding`         | 菜单项内边距         | 派生自 `(control-height − font-size × line-height) / 2` + `padding-sm` |
| `--hmfw-cascader-checkbox-border-radius` | 多选 checkbox 圆角   | `2px`（对齐 AntD checkbox 内部值）                                     |
| `--hmfw-cascader-multiple-padding`       | 多选模式选择器内边距 | `2px var(--hmfw-padding-xxs)`                                          |
