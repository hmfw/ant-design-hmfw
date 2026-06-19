# Grid 栅格

24 栅格系统。

## 何时使用

- 需要对页面进行栅格化布局时
- 需要响应式布局时
- 需要等分或按比例分配空间时

## 代码演示

### 基础栅格

使用 `span` 属性设置列宽，总宽度为 24。

<DemoBlock title="基础栅格" :source="GridBasicSource">
  <GridBasic />
</DemoBlock>

### 区块间隔

通过 `gutter` 属性设置列间距，支持水平和垂直间距。

<DemoBlock title="区块间隔" :source="GridGutterSource">
  <GridGutter />
</DemoBlock>

### 偏移

通过 `offset` 属性设置列偏移量。

<DemoBlock title="偏移" :source="GridOffsetSource">
  <GridOffset />
</DemoBlock>

### 响应式布局

通过 `xs`、`sm`、`md`、`lg`、`xl`、`xxl` 属性设置不同断点下的列宽。

<DemoBlock title="响应式布局" :source="GridResponsiveSource">
  <GridResponsive />
</DemoBlock>

### Flex 布局

使用 `flex` 属性实现灵活的列宽分配。

<DemoBlock title="Flex 布局" :source="GridFlexSource">
  <GridFlex />
</DemoBlock>

## API

### Row Props

| 参数    | 说明                                       | 类型                                                                                                                 | 默认值    |
| ------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- | --------- |
| gutter  | 栅格间距，支持 `[水平, 垂直]` 和响应式对象 | `number \| string \| [number \| string, number \| string] \| { xs?: number, sm?: number, ... }`                      | `0`       |
| justify | 水平排列方式，支持响应式对象               | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly' \| { xs?: ..., sm?: ..., ... }` | `'start'` |
| align   | 垂直对齐方式，支持响应式对象               | `'top' \| 'middle' \| 'bottom' \| 'stretch' \| { xs?: ..., sm?: ..., ... }`                                          | `'top'`   |
| wrap    | 是否自动换行                               | `boolean`                                                                                                            | `true`    |

### Col Props

| 参数   | 说明                   | 类型                                                                                                          | 默认值 |
| ------ | ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------ |
| flex   | flex 布局属性          | `number \| 'auto' \| 'none' \| string`                                                                        | -      |
| span   | 栅格占位格数，0 时隐藏 | `number \| string`                                                                                            | -      |
| offset | 栅格左侧的间隔格数     | `number`                                                                                                      | `0`    |
| order  | 栅格顺序               | `number`                                                                                                      | `0`    |
| push   | 栅格向右移动格数       | `number`                                                                                                      | `0`    |
| pull   | 栅格向左移动格数       | `number`                                                                                                      | `0`    |
| xs     | `<576px` 响应式栅格    | `number \| { flex?: FlexType, span?: number, offset?: number, order?: number, push?: number, pull?: number }` | -      |
| sm     | `≥576px` 响应式栅格    | `number \| { flex?: FlexType, span?: number, offset?: number, order?: number, push?: number, pull?: number }` | -      |
| md     | `≥768px` 响应式栅格    | `number \| { flex?: FlexType, span?: number, offset?: number, order?: number, push?: number, pull?: number }` | -      |
| lg     | `≥992px` 响应式栅格    | `number \| { flex?: FlexType, span?: number, offset?: number, order?: number, push?: number, pull?: number }` | -      |
| xl     | `≥1200px` 响应式栅格   | `number \| { flex?: FlexType, span?: number, offset?: number, order?: number, push?: number, pull?: number }` | -      |
| xxl    | `≥1600px` 响应式栅格   | `number \| { flex?: FlexType, span?: number, offset?: number, order?: number, push?: number, pull?: number }` | -      |

---

**关于样式定制**：Row 和 Col 是单元素透传组件，可直接使用原生 `class` 和 `style` attribute 进行样式定制，无需语义化 className API。

## 设计 Token

Grid 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。
