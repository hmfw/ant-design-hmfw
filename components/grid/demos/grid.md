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

### 对齐方式

通过 Row 的 `align` 和 `justify` 属性控制子元素的对齐方式。

<DemoBlock title="对齐方式" :source="GridAlignSource">
  <GridAlign />
</DemoBlock>

### 偏移

通过 `offset` 属性设置列偏移量。

<DemoBlock title="偏移" :source="GridOffsetSource">
  <GridOffset />
</DemoBlock>

### 栅格排序

通过 `order`、`push`、`pull` 属性调整栅格顺序。

<DemoBlock title="栅格排序" :source="GridOrderSource">
  <GridOrder />
</DemoBlock>

### 响应式布局

通过 `xs`、`sm`、`md`、`lg`、`xl`、`xxl`、`xxxl` 属性设置不同断点下的列宽（随视口变宽逐级增加列数）。

<DemoBlock title="响应式布局" :source="GridResponsiveSource">
  <GridResponsive />
</DemoBlock>

### Flex 布局

使用 `flex` 属性实现灵活的列宽分配。

<DemoBlock title="Flex 布局" :source="GridFlexSource">
  <GridFlex />
</DemoBlock>

### Flex 拉伸

通过 `align="stretch"` 让列拉伸至等高（flex 布局的默认行为）。

<DemoBlock title="Flex 拉伸" :source="GridFlexStretchSource">
  <GridFlexStretch />
</DemoBlock>

### 响应式 Flex 与断点重置

响应式对象支持 `flex` 字段在不同断点切换 flex 取值；`offset`、`order`、`pull`、`push` 传 `0` 可重置上级断点的对应设置。

<DemoBlock title="响应式 Flex" :source="GridResponsiveFlexSource">
  <GridResponsiveFlex />
</DemoBlock>

### 断点监听

`useBreakpoint()` 返回响应式断点表，可在 JS 中获取当前命中的断点，配合响应式 props 使用。

<DemoBlock title="断点监听" :source="GridUseBreakpointSource">
  <GridUseBreakpoint />
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

| 参数   | 说明                   | 类型                                                                                                                                                            | 默认值 |
| ------ | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| flex   | flex 布局属性          | `number \| 'auto' \| 'none' \| string`                                                                                                                          | -      |
| span   | 栅格占位格数，0 时隐藏 | `number \| string`                                                                                                                                              | -      |
| offset | 栅格左侧的间隔格数     | `number \| string`                                                                                                                                              | `0`    |
| order  | 栅格顺序               | `number \| string`                                                                                                                                              | `0`    |
| push   | 栅格向右移动格数       | `number \| string`                                                                                                                                              | `0`    |
| pull   | 栅格向左移动格数       | `number \| string`                                                                                                                                              | `0`    |
| xs     | `<576px` 响应式栅格    | `number \| { flex?: FlexType, span?: number \| string, offset?: number \| string, order?: number \| string, push?: number \| string, pull?: number \| string }` | -      |
| sm     | `≥576px` 响应式栅格    | `number \| { flex?: FlexType, span?: number \| string, offset?: number \| string, order?: number \| string, push?: number \| string, pull?: number \| string }` | -      |
| md     | `≥768px` 响应式栅格    | `number \| { flex?: FlexType, span?: number \| string, offset?: number \| string, order?: number \| string, push?: number \| string, pull?: number \| string }` | -      |
| lg     | `≥992px` 响应式栅格    | `number \| { flex?: FlexType, span?: number \| string, offset?: number \| string, order?: number \| string, push?: number \| string, pull?: number \| string }` | -      |
| xl     | `≥1200px` 响应式栅格   | `number \| { flex?: FlexType, span?: number \| string, offset?: number \| string, order?: number \| string, push?: number \| string, pull?: number \| string }` | -      |
| xxl    | `≥1600px` 响应式栅格   | `number \| { flex?: FlexType, span?: number \| string, offset?: number \| string, order?: number \| string, push?: number \| string, pull?: number \| string }` | -      |
| xxxl   | `≥1920px` 响应式栅格   | `number \| { flex?: FlexType, span?: number \| string, offset?: number \| string, order?: number \| string, push?: number \| string, pull?: number \| string }` | -      |

### useBreakpoint

| 名称          | 说明                                                            | 类型                   |
| ------------- | --------------------------------------------------------------- | ---------------------- |
| useBreakpoint | 返回响应式断点表，`{ xs, sm, md, lg, xl, xxl, xxxl } → boolean` | `() => Ref<ScreenMap>` |

---

**关于样式定制**：Row 和 Col 是单元素透传组件，可直接使用原生 `class` 和 `style` attribute 进行样式定制，无需语义化 className API。

## 设计 Token

Grid 为纯布局组件：全部样式均为结构性值（flex 百分比、媒体查询断点），不消费颜色、圆角、间距等设计 Token，因此无需主题定制。如需调整栅格样式，直接通过原生 `class` / `style` 覆盖即可。
