# Select 选择器

下拉选择器。

<script setup>
import SelectBasic from '../demos/select/SelectBasic.vue'
import SelectBasicSource from '../demos/select/SelectBasic.vue?raw'
import SelectMultiple from '../demos/select/SelectMultiple.vue'
import SelectMultipleSource from '../demos/select/SelectMultiple.vue?raw'
import SelectSearch from '../demos/select/SelectSearch.vue'
import SelectSearchSource from '../demos/select/SelectSearch.vue?raw'
</script>

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

## 代码演示

### 基础用法

基本使用。

<DemoBlock title="基础用法" :source="SelectBasicSource">
  <SelectBasic />
</DemoBlock>

### 多选

通过 `mode="multiple"` 开启多选模式。

<DemoBlock title="多选" :source="SelectMultipleSource">
  <SelectMultiple />
</DemoBlock>

### 搜索

通过 `show-search` 开启搜索功能。

<DemoBlock title="搜索" :source="SelectSearchSource">
  <SelectSearch />
</DemoBlock>

## API

### Select Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value(v-model) | 指定当前选中的条目 | `string \| number \| (string \| number)[]` | - |
| defaultValue | 指定默认选中的条目 | `string \| number \| (string \| number)[]` | - |
| options | 数据化配置选项内容 | `SelectOption[]` | `[]` |
| disabled | 是否禁用 | `boolean` | `false` |
| placeholder | 选择框默认文字 | `string` | - |
| allowClear | 支持清除 | `boolean` | `false` |
| size | 选择框大小 | `'small' \| 'middle' \| 'large'` | `'middle'` |
| mode | 设置 Select 的模式为多选或标签 | `'multiple' \| 'tags'` | - |
| showSearch | 使单选模式可搜索 | `boolean` | `false` |
| maxTagCount | 最多显示多少个 tag，响应式模式会对性能产生损耗 | `number` | - |
| status | 设置校验状态 | `'error' \| 'warning'` | - |
| open | 是否展开下拉菜单 | `boolean` | - |
| loading | 加载中状态 | `boolean` | `false` |

### SelectOption

| 参数 | 说明 | 类型 |
|------|------|------|
| value | 选项的值 | `string \| number` |
| label | 选项的标签 | `string` |
| disabled | 是否禁用该选项 | `boolean` |

### Select Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:value | 选中 option，或 input 的 value 变化时，调用此函数 | `(value: string \| number \| (string \| number)[]) => void` |
| change | 选中 option，或 input 的 value 变化时，调用此函数 | `(value: string \| number \| (string \| number)[], option: SelectOption \| SelectOption[]) => void` |
| search | 文本框值变化时回调 | `(value: string) => void` |
| focus | 获得焦点时回调 | `(event: FocusEvent) => void` |
| blur | 失去焦点时回调 | `(event: FocusEvent) => void` |
| clear | 清除内容时回调 | `() => void` |
