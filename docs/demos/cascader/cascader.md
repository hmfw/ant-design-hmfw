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

通过 `multiple` 属性开启多选模式。

<DemoBlock title="多选" :source="CascaderMultipleSource">
  <CascaderMultiple />
</DemoBlock>

### 高级功能

展示搜索高亮、showCheckedStrategy 和自定义 displayRender（支持 VNode）。

<DemoBlock title="高级功能" :source="CascaderAdvancedSource">
  <CascaderAdvanced />
</DemoBlock>

<script setup>
import CascaderBasic from './CascaderBasic.vue'
import CascaderBasicSource from './CascaderBasic.vue?raw'
import CascaderHover from './CascaderHover.vue'
import CascaderHoverSource from './CascaderHover.vue?raw'
import CascaderSearch from './CascaderSearch.vue'
import CascaderSearchSource from './CascaderSearch.vue?raw'
import CascaderChangeOnSelect from './CascaderChangeOnSelect.vue'
import CascaderChangeOnSelectSource from './CascaderChangeOnSelect.vue?raw'
import CascaderMultiple from './CascaderMultiple.vue'
import CascaderMultipleSource from './CascaderMultiple.vue?raw'
import CascaderAdvanced from './CascaderAdvanced.vue'
import CascaderAdvancedSource from './CascaderAdvanced.vue?raw'
</script>

## API

### Cascader Props

| 参数                | 说明                                             | 类型                                                                        | 默认值                                                     |
| ------------------- | ------------------------------------------------ | --------------------------------------------------------------------------- | ---------------------------------------------------------- |
| value(v-model)      | 指定选中项                                       | `string[]` \| `string[][]` (multiple)                                       | -                                                          |
| defaultValue        | 默认的选中项                                     | `string[]` \| `string[][]` (multiple)                                       | `[]`                                                       |
| options             | 可选项数据源                                     | `CascaderOption[]`                                                          | `[]`                                                       |
| disabled            | 禁用                                             | `boolean`                                                                   | `false`                                                    |
| placeholder         | 输入框占位文本                                   | `string`                                                                    | `'请选择'`                                                 |
| allowClear          | 是否支持清除                                     | `boolean`                                                                   | `true`                                                     |
| size                | 输入框大小                                       | `'small' \| 'middle' \| 'large'`                                            | `'middle'`                                                 |
| status              | 设置校验状态                                     | `'error' \| 'warning'`                                                      | -                                                          |
| expandTrigger       | 次级菜单的展开方式                               | `'click' \| 'hover'`                                                        | `'click'`                                                  |
| multiple            | 支持多选                                         | `boolean`                                                                   | `false`                                                    |
| showSearch          | 在选择框中显示搜索框                             | `boolean`                                                                   | `false`                                                    |
| changeOnSelect      | 当此项为 true 时，点选每级菜单选项值都会发生变化 | `boolean`                                                                   | `false`                                                    |
| displayRender       | 选择后展示的渲染函数                             | `(labels: string[], selectedOptions?: CascaderOption[]) => string \| VNode` | -                                                          |
| fieldNames          | 自定义 options 中 label value children 的字段    | `{ label?: string; value?: string; children?: string }`                     | `{ label: 'label', value: 'value', children: 'children' }` |
| open(v-model)       | 控制浮层显隐                                     | `boolean`                                                                   | -                                                          |
| defaultOpen         | 默认展开浮层                                     | `boolean`                                                                   | `false`                                                    |
| notFoundContent     | 当下拉列表为空时显示的内容                       | `string`                                                                    | `'无匹配结果'`                                             |
| loadData            | 用于动态加载选项                                 | `(selectedOptions: CascaderOption[]) => void`                               | -                                                          |
| showCheckedStrategy | 多选时的选中策略                                 | `'SHOW_PARENT' \| 'SHOW_CHILD'`                                             | `'SHOW_PARENT'`                                            |
| maxTagCount         | 最多显示多少个 tag                               | `number`                                                                    | -                                                          |
| maxTagPlaceholder   | 隐藏 tag 时显示的内容                            | `string \| ((omittedValues: string[][]) => string)`                         | -                                                          |
| maxTagTextLength    | 最大显示的 tag 文本长度                          | `number`                                                                    | -                                                          |

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
