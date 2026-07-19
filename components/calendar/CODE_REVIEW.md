# Calendar 组件代码审查报告

## 总体评价

| 维度                  | 评分       | 说明                                                                       |
| --------------------- | ---------- | -------------------------------------------------------------------------- |
| API 设计合理性        | ⭐⭐⭐⭐   | 基础 API 合理，支持语义化 API，但缺少部分 AntD 特性                        |
| API 对齐（对比 AntD） | ⭐⭐⭐     | 核心 API 对齐，但缺少 `fullCellRender`、`showWeek`、`onSelect` info 参数等 |
| 健壮性与边界条件      | ⭐⭐⭐⭐   | 边界检查良好，但部分边缘情况需要强化                                       |
| 设计模式与架构        | ⭐⭐⭐⭐   | 单文件职责清晰，工具函数内聚，结构良好                                     |
| 可读性与可维护性      | ⭐⭐⭐⭐   | 代码清晰，但部分算法缺少注释                                               |
| 运行时行为与状态安全  | ⭐⭐⭐⭐   | 受控/非受控模式正确，状态同步安全                                          |
| 设计 Token 化         | ⭐⭐⭐⭐⭐ | 完全 Token 化，无硬编码，文档齐全                                          |

**总体质量：优秀** - 代码规范、类型安全、Token 化完整，主要问题集中在 API 对齐和事件类型导出。

---

## 严重问题（P0 - 必须修复）

### 1. ❌ Props 类型约束缺失 `satisfies`

**位置**: `Calendar.tsx:95-123`

**问题**: 组件 props 直接内联定义，未使用 `satisfies Record<keyof CalendarProps, any>` 约束，可能导致运行时与类型定义漂移。

**规范要求**: `CLAUDE.md` 明确要求所有组件使用 `satisfies` 模式确保 props 与接口同步。

**影响**: 当 `types.ts` 中的 `CalendarProps` 接口增删属性时，组件不会编译报错，可能导致运行时错误。

**修复建议**:

```typescript
// types.ts - 添加完整的 Props 接口
export interface CalendarProps {
  value?: string | Date
  defaultValue?: string | Date
  mode?: CalendarMode
  fullscreen?: boolean
  disabledDate?: (date: Date) => boolean
  validRange?: [Date, Date]
  cellRender?: CellRender
  dateCellRender?: DateCellRender
  monthCellRender?: MonthCellRender
  headerRender?: HeaderRender
  range?: boolean
  rangeValue?: DateRange
  defaultRangeValue?: DateRange
  classNames?: CalendarClassNames
  styles?: CalendarStyles
}

// Calendar.tsx
import type { CalendarProps } from './types'

const calendarProps = {
  value: { type: [String, Date] as PropType<string | Date>, default: undefined },
  defaultValue: { type: [String, Date] as PropType<string | Date>, default: undefined },
  mode: { type: String as PropType<CalendarMode>, default: 'month' },
  fullscreen: { type: Boolean, default: true },
  disabledDate: { type: Function as PropType<(date: Date) => boolean>, default: undefined },
  validRange: { type: Array as unknown as PropType<[Date, Date]>, default: undefined },
  cellRender: { type: Function as PropType<CellRender>, default: undefined },
  dateCellRender: { type: Function as PropType<DateCellRender>, default: undefined },
  monthCellRender: { type: Function as PropType<MonthCellRender>, default: undefined },
  headerRender: { type: Function as PropType<HeaderRender>, default: undefined },
  range: { type: Boolean, default: false },
  rangeValue: { type: Array as unknown as PropType<DateRange>, default: undefined },
  defaultRangeValue: { type: Array as unknown as PropType<DateRange>, default: undefined },
  classNames: { type: Object as PropType<CalendarClassNames>, default: undefined },
  styles: { type: Object as PropType<CalendarStyles>, default: undefined },
} satisfies Record<keyof CalendarProps, any>

export const Calendar = defineComponent({
  name: 'Calendar',
  props: calendarProps,
  // ...
})
```

**优先级**: P0 - 违反项目规范

---

### 2. ❌ 事件类型未导出

**位置**: `Calendar.tsx:124`, `types.ts`, `index.ts`

**问题**: 组件声明了 6 个事件（`update:value`, `change`, `select`, `panelChange`, `update:rangeValue`, `rangeChange`），但这些事件的回调参数类型没有从 `types.ts` 导出，使用方无法在 TypeScript 中标注事件处理函数。

**规范要求**: `CLAUDE.md` 明确要求「有 `emits` 就要有导出类型」。

**影响**:

- 用户无法获得事件处理函数的类型提示
- 降低组件的 TypeScript 体验

**修复建议**:

```typescript
// types.ts - 添加事件类型导出
export interface CalendarSelectInfo {
  source: 'year' | 'month' | 'date' | 'customize'
}

export type CalendarChangeHandler = (dateStr: string, date: Date) => void
export type CalendarSelectHandler = (dateStr: string, date: Date, info?: CalendarSelectInfo) => void
export type CalendarPanelChangeHandler = (date: string | null, mode: CalendarMode) => void
export type CalendarRangeChangeHandler = (range: DateRangeString, dates: DateRange) => void

// index.ts - re-export
export type {
  // ... 现有导出
  CalendarSelectInfo,
  CalendarChangeHandler,
  CalendarSelectHandler,
  CalendarPanelChangeHandler,
  CalendarRangeChangeHandler,
  DateRange,
  DateRangeString,
} from './types'
```

**优先级**: P0 - 违反项目规范

---

## 中等问题（P1 - 建议修复）

### 3. ⚠️ 缺少 `fullCellRender` API（对比 AntD）

**位置**: `Calendar.tsx:108`, `types.ts`

**问题**: AntD v5.4.0+ 提供了 `fullCellRender` API，用于完全覆盖单元格内容（包括容器），而本项目只有 `cellRender`（部分覆盖）和过时的 `dateCellRender`/`monthCellRender`。

**API 对齐**: AntD 同时支持 `cellRender`（返回内容节点）和 `fullCellRender`（返回完整单元格）两种粒度。

**影响**: 用户无法完全自定义单元格结构（如需要改变容器 class、包裹额外层级）。

**修复建议**:

```typescript
// types.ts
export type FullCellRender = (current: Date, info: CellRenderInfo) => VNode | null

export interface CalendarProps {
  // ...
  fullCellRender?: FullCellRender  // 新增
}

// Calendar.tsx - 渲染逻辑优先级调整
// 优先级: fullCellRender > cellRender > dateCellRender/monthCellRender
const renderDateCell = (date: Date, inCurrentMonth: boolean) => {
  const originNode = h(...)

  if (props.fullCellRender) {
    // 完全覆盖，直接返回用户的 VNode
    return props.fullCellRender(date, {...})
  }

  if (props.cellRender) {
    // 部分覆盖，用户可访问 originNode
    return props.cellRender(date, {...})
  }

  // 向后兼容
  if (props.dateCellRender) {
    return props.dateCellRender(date, {...})
  }

  return originNode
}
```

**优先级**: P1 - API 对齐，用户可能需要

---

### 4. ⚠️ 缺少 `showWeek` prop（对比 AntD）

**位置**: `Calendar.tsx`, `style/index.css`

**问题**: AntD v5.23.0+ 支持 `showWeek` 显示周数列，本项目缺失。

**API 对齐**: 这是一个常用功能，用于显示 ISO 周数或一年中的第几周。

**影响**: 用户无法显示周数，需求受限。

**修复建议**:

```typescript
// types.ts
export interface CalendarProps {
  // ...
  showWeek?: boolean // 是否显示周数列
}

// Calendar.tsx
const getWeekNumber = (date: Date): number => {
  // ISO 8601 周数计算
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const dayNum = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
}

// 渲染时在星期头前插入周数列头，在日期行前插入周数单元格
```

**优先级**: P1 - API 对齐，功能增强

---

### 5. ⚠️ `onSelect` 缺少 `info` 参数（对比 AntD）

**位置**: `Calendar.tsx:211`, `types.ts`

**问题**: AntD v5.6.0+ 的 `onSelect` 事件提供 `info: { source: 'year' | 'month' | 'date' | 'customize' }` 参数，用于区分选择来源，本项目未实现。

**API 对齐**: 这是 AntD 文档 FAQ 中推荐的最佳实践，用于「仅获取来自面板点击的日期」。

**影响**: 用户无法区分日期是点击单元格选中的，还是通过其他途径（如 `headerRender` 中自定义控件）改变的。

**修复建议**:

```typescript
// types.ts - 已定义 CalendarSelectInfo，需补充到 emits
export interface CalendarSelectInfo {
  source: 'year' | 'month' | 'date' | 'customize'
}

// Calendar.tsx - selectDate/selectMonth 中传递 source
const selectDate = (date: Date) => {
  if (props.range) {
    // ...
  } else {
    updateValue(date)
    emit('select', formatDate(date), date, { source: 'date' })
  }
}

const selectMonth = (month: number) => {
  // ...
  emit('select', formatDate(date), date, { source: 'month' })
}
```

**优先级**: P1 - API 对齐，用户体验增强

---

### 6. ⚠️ 范围选择模式未充分测试

**位置**: `Calendar.tsx:114-119`, `Calendar.tsx:216-235`

**问题**: `range` 模式是本项目新增特性（AntD 未提供），但代码中存在潜在边界问题：

- 当 `rangeSelectingStart` 为 `false` 且 `start` 为 `null` 时（异常状态），会导致空指针
- 范围选择时没有对 `disabledDate` 做强校验

**影响**: 特殊状态下可能抛出运行时错误。

**修复建议**:

```typescript
const selectDate = (date: Date) => {
  if (props.range) {
    if (rangeSelectingStart.value) {
      innerRangeValue.value = [date, null]
      rangeSelectingStart.value = false
    } else {
      const [start] = currentRangeValue.value
      // 防御：start 可能为 null（异常状态兜底）
      if (!start) {
        innerRangeValue.value = [date, null]
        rangeSelectingStart.value = false
        return
      }
      const end = date
      const range: DateRange = start <= end ? [start, end] : [end, start]
      innerRangeValue.value = range
      const rangeStr: DateRangeString = [formatDate(range[0]!), formatDate(range[1]!)]
      emit('update:rangeValue', range)
      emit('rangeChange', rangeStr, range)
      rangeSelectingStart.value = true
    }
  } else {
    updateValue(date)
  }
}
```

**优先级**: P1 - 健壮性增强

---

## 较低问题（P2 - 可选修复）

### 7. 📝 `buildCalendar` 函数缺少注释

**位置**: `Calendar.tsx:59-91`

**问题**: `buildCalendar` 是复杂的日历矩阵生成算法（填充上月末尾 + 当月 + 下月开头，固定 42 天），但函数内部只有零散注释，缺少整体算法说明。

**规范要求**: `CLAUDE.md` 要求「算法注释」。

**影响**: 降低可维护性，其他开发者难以快速理解。

**修复建议**:

```typescript
/**
 * 构建日历矩阵（6 周 × 7 天 = 42 个格子）
 *
 * 算法：
 * 1. 计算当月 1 号是星期几（firstDay），向前补齐上月末尾日期
 * 2. 填充当月所有日期（1 ~ daysInMonth）
 * 3. 向后补齐下月开头日期，凑满 42 格（6 行 7 列标准日历布局）
 *
 * @param year 年份
 * @param month 月份（0-11）
 * @returns 42 个日期对象，包含 date 和 inCurrentMonth 标记
 */
function buildCalendar(year: number, month: number) {
  const days: Array<{ date: Date; inCurrentMonth: boolean }> = []
  const firstDay = getFirstDayOfWeek(year, month)
  const daysInMonth = getDaysInMonth(year, month)
  const prevMonthDays = getDaysInMonth(year, month - 1)

  // 1. 填充上月末尾日期（补齐第一周）
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, month - 1, prevMonthDays - i),
      inCurrentMonth: false,
    })
  }

  // 2. 当月日期
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      date: new Date(year, month, i),
      inCurrentMonth: true,
    })
  }

  // 3. 填充下月开头日期（补齐最后一周）
  const remaining = 42 - days.length
  for (let i = 1; i <= remaining; i++) {
    days.push({
      date: new Date(year, month + 1, i),
      inCurrentMonth: false,
    })
  }

  return days
}
```

**优先级**: P2 - 可读性增强

---

### 8. 📝 日期工具函数可提取为独立模块

**位置**: `Calendar.tsx:18-91`

**问题**: 文件开头定义了 9 个日期工具函数（`pad`, `formatDate`, `parseDate`, `isSameDay`, `isSameMonth`, `isInRange`, `getDaysInMonth`, `getFirstDayOfWeek`, `buildCalendar`），占据约 70 行，与组件主逻辑混在一起。

**设计模式**: 根据审查规范的「文件规模与模块拆分」建议，共享工具函数应抽取为 `utils.ts`。

**影响**:

- 降低 `Calendar.tsx` 的聚焦度
- 工具函数无法被其他组件复用（如未来的 `DatePicker`）
- 文件较长（~490 行），接近经验值阈值（>400 行需评估拆分）

**修复建议**:

```typescript
// utils.ts - 新建
export function pad(n: number): string { ... }
export function formatDate(d: Date, fmt = 'YYYY-MM-DD'): string { ... }
export function parseDate(val: string | Date | undefined): Date | null { ... }
export function isSameDay(a: Date, b: Date): boolean { ... }
export function isSameMonth(a: Date, b: Date): boolean { ... }
export function isInRange(date: Date, start: Date | null, end: Date | null): boolean { ... }
export function getDaysInMonth(year: number, month: number): number { ... }
export function getFirstDayOfWeek(year: number, month: number): number { ... }
export function buildCalendar(year: number, month: number) { ... }

// Calendar.tsx - 顶部导入
import { formatDate, parseDate, isSameDay, isSameMonth, isInRange, buildCalendar } from './utils'
```

**优先级**: P2 - 架构优化，非强制（未触发 >400 行硬约束，因职责单一可接受）

---

## 最低问题（P3 - 代码整洁度）

### 9. 🧹 `validRange` 类型别名未导出

**位置**: `types.ts:96`, `index.ts`

**问题**: `ValidRange` 类型在 `types.ts` 中定义并在 `index.ts` 导出，但实际上 props 中使用的是内联类型 `[Date, Date]`，`ValidRange` 未被使用。

**影响**: 类型定义冗余，用户引用时可能困惑。

**修复建议**:

```typescript
// types.ts - 保持 ValidRange，确保 props 使用它
export type ValidRange = [Date, Date]

export interface CalendarProps {
  validRange?: ValidRange // 使用类型别名而非内联
}

// 或者如果确认不需要，可从 types.ts 和 index.ts 同时删除
```

**优先级**: P3 - 代码清晰度

---

## 优点总结

### ✅ 设计 Token 化完美

- 所有样式变量均引用 `--hmfw-*`，无硬编码颜色/尺寸
- 文档 `## 设计 Token` 章节完整，列出 15 个 Token，与代码一致
- 支持主题定制，ConfigProvider 覆盖生效

### ✅ 语义化 API 实现完善

- `classNames` / `styles` 覆盖 13 个节点（root, header, content, panel, weekdays, weekdayCell, body, cell, cellInner, date, month, yearPanel, monthCell）
- 文档提供完整的 DOM 结构映射和使用示例
- 实现符合项目规范

### ✅ 受控/非受控模式正确

- `value` / `rangeValue` 支持受控/非受控双模式
- watch 逻辑正确同步外部变更
- 状态管理安全，无竞态问题

### ✅ 边界条件处理良好

- `validRange` 边界检查（`isDateInValidRange`）
- `disabledDate` 防御性调用（`props.disabledDate?.(date) ?? false`）
- 范围选择自动纠正（`start <= end ? [start, end] : [end, start]`）

---

## 修复优先级建议

| 优先级 | 问题                              | 工作量        | 影响                   |
| ------ | --------------------------------- | ------------- | ---------------------- |
| P0     | #1 Props 类型约束缺失 `satisfies` | 🔧 30 分钟    | 🔴 违反规范，必须修复  |
| P0     | #2 事件类型未导出                 | 🔧 20 分钟    | 🔴 违反规范，TS 体验差 |
| P1     | #3 缺少 `fullCellRender` API      | 🔧🔧 1 小时   | 🟡 API 对齐，功能增强  |
| P1     | #4 缺少 `showWeek` prop           | 🔧🔧🔧 2 小时 | 🟡 API 对齐，功能增强  |
| P1     | #5 `onSelect` 缺少 `info` 参数    | 🔧 30 分钟    | 🟡 API 对齐，用户体验  |
| P1     | #6 范围选择模式边界检查           | 🔧 15 分钟    | 🟡 健壮性增强          |
| P2     | #7 `buildCalendar` 函数缺少注释   | 🔧 15 分钟    | 🟢 可读性增强          |
| P2     | #8 日期工具函数可提取             | 🔧🔧 1 小时   | 🟢 架构优化（可选）    |
| P3     | #9 `ValidRange` 类型冗余          | 🔧 5 分钟     | 🟢 代码清晰度          |

**建议修复顺序**: P0 → P1 前 3 项 → 验证测试 → P2 #7 → 其他按需

---

## API 对齐差异清单（本项目 vs AntD）

| 维度             | AntD API                      | 本项目实现                         | 状态                                          | 定级 |
| ---------------- | ----------------------------- | ---------------------------------- | --------------------------------------------- | ---- |
| **Props 齐全度** | `fullCellRender`              | ❌ 缺失                            | 部分覆盖，只有 `cellRender`                   | P1   |
|                  | `showWeek`                    | ❌ 缺失                            | -                                             | P1   |
|                  | `locale`                      | ✅ 内置                            | 通过 `useLocale()` 自动注入                   | -    |
|                  | `dateFullCellRender` (已废弃) | ✅ 未实现                          | 刻意不支持过时 API                            | -    |
| **默认值一致性** | `fullscreen: true`            | ✅ `true`                          | 一致                                          | -    |
|                  | `mode: 'month'`               | ✅ `'month'`                       | 一致                                          | -    |
| **事件签名**     | `onSelect(date, info)`        | ⚠️ `onSelect(dateStr, date)`       | 缺少 `info.source` 参数                       | P1   |
|                  | `onChange(date)`              | ⚠️ `onChange(dateStr, date)`       | 本项目多返回字符串，更友好                    | -    |
|                  | `onPanelChange(date, mode)`   | ✅ 兼容                            | 一致（date 可能为 null）                      | -    |
| **特殊功能**     | -                             | ✅ `range` 模式                    | 本项目新增，AntD 未提供                       | -    |
|                  | -                             | ✅ 语义化 API（classNames/styles） | AntD v6 也有，本项目实现更细粒度（13 个节点） | -    |

**总体对齐度**: 80%
**核心 API 对齐**: ✅ `value`, `mode`, `fullscreen`, `disabledDate`, `validRange`, `headerRender`
**缺失 API**: ❌ `fullCellRender`, `showWeek`, `onSelect` info 参数

---

## 下一步行动

1. **立即修复 P0 问题**（约 50 分钟）
   - #1 Props 类型约束
   - #2 事件类型导出

2. **选择性修复 P1 问题**（按需选择）
   - #5 `onSelect` info 参数（推荐，工作量小，收益大）
   - #6 范围选择边界检查（推荐，健壮性）
   - #3 `fullCellRender` API（可选，看用户需求）
   - #4 `showWeek` prop（可选，功能增强）

3. **补充注释**（推荐，P2 #7，提升可维护性）

4. **运行验证**

   ```bash
   pnpm test calendar
   pnpm typecheck
   ```

5. **补充 Demo**（见 `DEMO_COVERAGE_ANALYSIS.md`）
