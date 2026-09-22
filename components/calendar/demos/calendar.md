# Calendar 日历

按照日历形式展示数据的容器。

## 何时使用

当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。

## 代码演示

### 基础用法

一个通用的日历面板，支持年/月切换。

<DemoBlock title="基础用法" :source="CalendarBasicSource">
  <CalendarBasic />
</DemoBlock>

### 卡片模式

用于嵌套在空间有限的容器中。

<DemoBlock title="卡片模式" :source="CalendarMiniSource">
  <CalendarMini />
</DemoBlock>

### 自定义渲染

通过 `cellRender` 自定义单元格内容，可以实现通知事项日历、徽标显示等功能。

<DemoBlock title="自定义渲染" :source="CalendarCellRenderSource">
  <CalendarCellRender />
</DemoBlock>

### 禁用日期

通过 `disabledDate` 限制可选择的日期，支持禁用过去日期、周末、特定日期等。

<DemoBlock title="禁用日期" :source="CalendarDisabledSource">
  <CalendarDisabled />
</DemoBlock>

### 范围选择

通过 `range` 开启范围选择模式，可用于选择日期区间（如请假时间、活动周期）。

<DemoBlock title="范围选择" :source="CalendarRangeSource">
  <CalendarRange />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="CalendarClassNamesSource">
  <CalendarClassNames />
</DemoBlock>

## API

### Calendar Props

| 参数            | 说明                                                                             | 类型                                             | 默认值    |
| --------------- | -------------------------------------------------------------------------------- | ------------------------------------------------ | --------- |
| value(v-model)  | 展示日期                                                                         | `string \| Date`                                 | -         |
| defaultValue    | 默认展示日期                                                                     | `string \| Date`                                 | 当前日期  |
| mode            | 初始模式                                                                         | `'month' \| 'year'`                              | `'month'` |
| fullscreen      | 是否全屏显示                                                                     | `boolean`                                        | `true`    |
| disabledDate    | 不可选择的日期                                                                   | `(date: Date) => boolean`                        | -         |
| validRange      | 设置可以显示的日期范围                                                           | `[Date, Date]`                                   | -         |
| cellRender      | 自定义单元格渲染（统一 API）                                                     | `(current: Date, info: CellRenderInfo) => VNode` | -         |
| dateCellRender  | 自定义日期单元格内容（月视图）                                                   | `(current: Date) => VNode`                       | -         |
| monthCellRender | 自定义月份单元格内容（年视图）                                                   | `(current: Date) => VNode`                       | -         |
| headerRender    | 自定义头部内容                                                                   | `(config: HeaderConfig) => VNode`                | -         |
| range           | 是否开启范围选择模式                                                             | `boolean`                                        | `false`   |
| rangeValue      | 选中的日期范围（range 模式）                                                     | `[Date \| null, Date \| null]`                   | -         |
| classNames      | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `CalendarClassNames`                             | -         |
| styles          | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `CalendarStyles`                                 | -         |

### Calendar Events

| 事件名            | 说明                        | 回调参数                                       |
| ----------------- | --------------------------- | ---------------------------------------------- |
| update:value      | 日期变化时触发              | `(dateStr: string) => void`                    |
| change            | 日期变化时触发              | `(dateStr: string, date: Date) => void`        |
| select            | 点击选择日期时触发          | `(dateStr: string, date: Date) => void`        |
| panelChange       | 日期面板变化（年/月）时触发 | `(date: string \| null, mode: string) => void` |
| rangeChange       | 范围选择变化时触发          | `(range: [string, string]) => void`            |
| update:rangeValue | 范围选择变化时触发          | `(range: [Date, Date]) => void`                |

### CellRenderInfo

| 参数       | 说明         | 类型                |
| ---------- | ------------ | ------------------- |
| originNode | 原始渲染节点 | `VNode`             |
| today      | 当前日期     | `Date`              |
| type       | 当前视图类型 | `'month' \| 'year'` |
| locale     | 语言包       | `any`               |

### HeaderConfig

| 参数         | 说明             | 类型                           |
| ------------ | ---------------- | ------------------------------ |
| value        | 当前选中的日期   | `Date`                         |
| type         | 当前视图类型     | `'month' \| 'year'`            |
| onChange     | 日期变化回调     | `(date: Date) => void`         |
| onTypeChange | 视图类型变化回调 | `(type: CalendarMode) => void` |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 Calendar 的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface CalendarClassNames {
  root?: string // 根节点
  header?: string // 头部区域
  content?: string // 内容区域
  panel?: string // 面板容器
  weekdays?: string // 星期头容器
  weekdayCell?: string // 星期单元格
  body?: string // 日期格子容器
  cell?: string // 日期/月份单元格
  cellInner?: string // 单元格内部
  date?: string // 日期内容节点
  month?: string // 月份内容节点
  yearPanel?: string // 年视图面板
  monthCell?: string // 月份单元格（年视图）
}

interface CalendarStyles {
  root?: CSSProperties
  header?: CSSProperties
  content?: CSSProperties
  panel?: CSSProperties
  weekdays?: CSSProperties
  weekdayCell?: CSSProperties
  body?: CSSProperties
  cell?: CSSProperties
  cellInner?: CSSProperties
  date?: CSSProperties
  month?: CSSProperties
  yearPanel?: CSSProperties
  monthCell?: CSSProperties
}
```

### 语义化 DOM

将鼠标移到右侧任一节点上，左侧预览区会框出它对应的 DOM 元素。点击图钉可固定高亮，点击信息图标查看该节点的 `classNames` / `styles` 写法模板。

<CalendarSemantic />

### DOM 结构与 className 映射

```html
<div class="hmfw-calendar">
  <!-- ↑ classNames.root / styles.root -->

  <div class="hmfw-calendar-header">
    <!-- ↑ 头部：年月选择器、视图切换按钮；classNames.header / styles.header -->
  </div>

  <div class="hmfw-calendar-content">
    <!-- ↑ classNames.content / styles.content -->

    <!-- 月视图 -->
    <div class="hmfw-calendar-panel">
      <!-- ↑ classNames.panel / styles.panel -->

      <div class="hmfw-calendar-weekdays">
        <!-- ↑ 仅月视图，classNames.weekdays / styles.weekdays -->
        <div class="hmfw-calendar-weekday-cell">日</div>
        <!-- ↑ classNames.weekdayCell / styles.weekdayCell -->
      </div>

      <div class="hmfw-calendar-body">
        <!-- ↑ 仅月视图，classNames.body / styles.body -->
        <div class="hmfw-calendar-cell">
          <!-- ↑ classNames.cell / styles.cell -->
          <div class="hmfw-calendar-cell-inner">
            <!-- ↑ classNames.cellInner / styles.cellInner -->
            <div class="hmfw-calendar-date">1</div>
            <!-- ↑ classNames.date / styles.date -->
          </div>
        </div>
      </div>
    </div>

    <!-- 年视图 -->
    <div class="hmfw-calendar-panel">
      <!-- ↑ classNames.panel / styles.panel -->
      <div class="hmfw-calendar-year-panel">
        <!-- ↑ 仅年视图，classNames.yearPanel / styles.yearPanel -->
        <div class="hmfw-calendar-month-cell">
          <!-- ↑ classNames.monthCell / styles.monthCell -->
          <div class="hmfw-calendar-cell-inner">
            <!-- ↑ classNames.cellInner / styles.cellInner -->
            <div class="hmfw-calendar-month">一月</div>
            <!-- ↑ classNames.month / styles.month -->
          </div>
        </div>
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
  <Calendar
    :fullscreen="false"
    :class-names="{
      root: 'my-calendar',
      header: 'my-header',
      cell: 'my-cell',
      cellInner: 'my-cell-inner',
    }"
  />

  <!-- styles：内联样式，优先级高于 classNames -->
  <Calendar
    :fullscreen="false"
    :styles="{
      root: { borderRadius: '12px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' },
      header: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '16px',
      },
      cell: { margin: '2px', borderRadius: '8px' },
      cellInner: { transition: 'all 0.3s' },
    }"
  />

  <!-- 组合：classNames 与 styles 混用 -->
  <Calendar
    :fullscreen="false"
    :class-names="{ root: 'my-calendar', header: 'my-header' }"
    :styles="{ cell: { margin: '2px', borderRadius: '8px' } }"
  />
</template>

<style scoped>
:deep(.my-calendar) {
  border: 2px solid #e0e7ff;
  border-radius: 12px;
}

:deep(.my-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 16px;
}

:deep(.my-cell) {
  border-radius: 8px;
  transition: all 0.3s;
}

:deep(.my-cell:hover) {
  transform: scale(1.05);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

:deep(.my-cell.hmfw-calendar-cell-selected .my-cell-inner) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}
</style>
```

### 注意事项

- `styles` 内联样式优先级高于 `classNames`，二者可同时作用于同一节点
- 各语义化类名会与组件内置类名合并（不会互相覆盖），可结合状态类名（如 `.hmfw-calendar-cell-selected`、`.hmfw-calendar-cell-today`）做更精细的控制

## 设计 Token

Calendar 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

### 全局 Token

| Token 名称                      | 说明           | 默认值                |
| ------------------------------- | -------------- | --------------------- |
| `--hmfw-color-primary`          | 主题色         | `#1677ff`             |
| `--hmfw-color-primary-bg`       | 主题色背景     | `#e8f1ff`             |
| `--hmfw-color-primary-bg-hover` | 主题色背景悬停 | `#d0e4ff`             |
| `--hmfw-color-primary-border`   | 主题色边框     | `#a2c9ff`             |
| `--hmfw-color-bg-container`     | 容器背景色     | `#ffffff`             |
| `--hmfw-color-border`           | 边框颜色       | `rgba(0, 0, 0, 0.15)` |
| `--hmfw-color-fill-tertiary`    | 三级填充色     | `rgba(0, 0, 0, 0.04)` |
| `--hmfw-color-fill-quaternary`  | 四级填充色     | `rgba(0, 0, 0, 0.02)` |
| `--hmfw-color-text-secondary`   | 次要文本颜色   | `rgba(0, 0, 0, 0.65)` |
| `--hmfw-color-text-quaternary`  | 四级文本颜色   | `rgba(0, 0, 0, 0.25)` |
| `--hmfw-color-text-disabled`    | 禁用文本颜色   | `rgba(0, 0, 0, 0.25)` |
| `--hmfw-font-size`              | 标准字号       | `14px`                |
| `--hmfw-font-size-sm`           | 小号字号       | `12px`                |
| `--hmfw-font-size-lg`           | 大号字号       | `16px`                |
| `--hmfw-line-height`            | 标准行高       | `1.5714285714285714`  |
| `--hmfw-border-radius`          | 基础圆角       | `6px`                 |

### 组件 Token

组件专属变量定义在 `.hmfw-calendar` 上，可直接覆盖以定制尺寸：

| Token 名称                            | 说明                   | 默认值                      |
| ------------------------------------- | ---------------------- | --------------------------- |
| `--hmfw-calendar-full-bg`             | 面板背景色             | 派生自 `color-bg-container` |
| `--hmfw-calendar-year-control-width`  | 头部年份选择器最小宽度 | `80px`                      |
| `--hmfw-calendar-month-control-width` | 头部月份选择器最小宽度 | `70px`                      |
| `--hmfw-calendar-cell-height`         | 单元格内部高度         | `24px`                      |
