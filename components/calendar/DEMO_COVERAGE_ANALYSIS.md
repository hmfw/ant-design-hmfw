# Calendar 组件 Demo 覆盖情况分析

## 现有 Demo 清单

| # | Demo 文件 | 覆盖功能 | 代码行数 | 复杂度 | 质量评分 |
|---|---|---|---|---|
| 1 | CalendarBasic.vue | 基础用法、v-model、事件监听 | 14 | 低 | ⭐⭐⭐⭐⭐ |
| 2 | CalendarMini.vue | 卡片模式（fullscreen: false）、月/年视图切换 | 16 | 低 | ⭐⭐⭐⭐⭐ |
| 3 | CalendarMode.vue | 月视图/年视图对比 | 16 | 低 | ⭐⭐⭐⭐⭐ |
| 4 | CalendarClassNames.vue | 语义化 API（classNames + styles）5 个场景 | 208 | 中 | ⭐⭐⭐⭐⭐ |

**总计**: 4 个 demo，254 行代码

---

## 已覆盖的功能点

### ✅ P0 必须覆盖（已完成）

- [x] **基础用法** - CalendarBasic.vue（v-model、默认全屏、事件监听）
- [x] **语义化 API** - CalendarClassNames.vue（13 个节点全覆盖，5 个使用场景）

### ✅ P1 建议覆盖（已完成）

- [x] **布尔开关** - CalendarMini.vue（fullscreen 对比）
- [x] **尺寸变体** - CalendarMode.vue（月视图 vs 年视图）

### ❌ P0 必须覆盖（缺失）

- [ ] **Slot 语法** - ❌ **不适用**（Calendar 不支持 items + slot 双 API，只有渲染函数 API）

### ❌ P1 建议覆盖（缺失）

- [ ] **响应式属性** - ❌ 缺失（Calendar 无 `column` 或 `span` 响应式属性，不适用）

### ❌ P2 可选覆盖（缺失）

- [ ] **自定义渲染** - ❌ **重要缺失**（`cellRender`/`dateCellRender`/`monthCellRender`）
- [ ] **禁用日期** - ❌ **重要缺失**（`disabledDate` prop）
- [ ] **有效范围** - ❌ **重要缺失**（`validRange` prop）
- [ ] **自定义头部** - ❌ **重要缺失**（`headerRender` prop）
- [ ] **范围选择** - ❌ **重要缺失**（`range` 模式，本项目特色功能）

---

## 缺失的 Demo

### 1. ❌ 自定义渲染 Demo（重要 - P1）

**功能**: 演示 `cellRender`、`dateCellRender`、`monthCellRender` 的使用

**使用场景**:

- 在日期单元格添加徽标（badge）显示事项数量
- 显示农历日期
- 标记特殊日期（节假日、生日等）

**参考 AntD**: `notice-calendar.tsx`（通知事项日历）、`event-range.tsx`（跨日期事件）、`lunar.tsx`（农历）

**建议实现**:

```vue
<template>
  <Calendar :cell-render="cellRender" />
</template>

<script setup>
import { h } from 'vue'
import { Calendar } from '@hmfw/ant-design'

const events = {
  '2024-07-20': ['团队会议', '项目评审'],
  '2024-07-22': ['发布新版本'],
  '2024-07-25': ['周例会'],
}

const cellRender = (current, { originNode }) => {
  const dateStr = current.toISOString().split('T')[0]
  const dayEvents = events[dateStr]

  if (!dayEvents?.length) return originNode

  return h('div', { style: { position: 'relative', width: '100%', height: '100%' } }, [
    originNode,
    h(
      'div',
      { style: { fontSize: '12px', color: '#1677ff', marginTop: '4px' } },
      dayEvents.map((e) => h('div', { class: 'event-item' }, e)),
    ),
  ])
}
</script>
```

**优先级**: P1 - 核心功能，AntD 多个 demo 演示此特性

---

### 2. ❌ 禁用日期 Demo（重要 - P1）

**功能**: 演示 `disabledDate` 的使用

**使用场景**:

- 禁用过去的日期
- 禁用周末
- 禁用特定日期范围

**参考 AntD**: `select.tsx`（选择功能）中包含 `disabledDate` 示例

**建议实现**:

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <div style="margin-bottom: 8px">禁用过去日期：</div>
      <Calendar :disabled-date="disablePastDates" :fullscreen="false" />
    </div>
    <div>
      <div style="margin-bottom: 8px">禁用周末：</div>
      <Calendar :disabled-date="disableWeekends" :fullscreen="false" />
    </div>
  </div>
</template>

<script setup>
import { Calendar } from '@hmfw/ant-design'

const disablePastDates = (date) => {
  return date < new Date(new Date().setHours(0, 0, 0, 0))
}

const disableWeekends = (date) => {
  const day = date.getDay()
  return day === 0 || day === 6
}
</script>
```

**优先级**: P1 - 常用功能，实际应用必需

---

### 3. ❌ 有效范围 Demo（中等 - P2）

**功能**: 演示 `validRange` 的使用

**使用场景**:

- 限制可选择的日期范围（如活动报名时间段）
- 只显示指定月份的日期

**参考 AntD**: API 文档中提到，但 demo 较少

**建议实现**:

```vue
<template>
  <Calendar :valid-range="validRange" :fullscreen="false" style="width: 300px" />
</template>

<script setup>
import { Calendar } from '@hmfw/ant-design'

const today = new Date()
const validRange = [
  new Date(today.getFullYear(), today.getMonth(), 1),
  new Date(today.getFullYear(), today.getMonth() + 2, 0),
]
</script>
```

**优先级**: P2 - 特定场景需要

---

### 4. ❌ 自定义头部 Demo（中等 - P2）

**功能**: 演示 `headerRender` 的使用

**使用场景**:

- 自定义年月选择器样式
- 添加额外的控制按钮（如"今天"按钮）
- 完全自定义头部布局

**参考 AntD**: `customize-header.tsx`

**建议实现**:

```vue
<template>
  <Calendar :header-render="headerRender" :fullscreen="false" />
</template>

<script setup>
import { h } from 'vue'
import { Calendar, Button } from '@hmfw/ant-design'

const headerRender = ({ value, type, onChange, onTypeChange }) => {
  const year = value.getFullYear()
  const month = value.getMonth()

  return h(
    'div',
    {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '16px',
        background: '#f0f2f5',
        borderBottom: '1px solid #d9d9d9',
      },
    },
    [
      h(
        'div',
        { style: { fontWeight: 600, fontSize: '16px' } },
        `${year}年 ${type === 'month' ? `${month + 1}月` : ''}`,
      ),
      h(
        Button,
        {
          size: 'small',
          onClick: () => onChange(new Date()),
        },
        () => '今天',
      ),
    ],
  )
}
</script>
```

**优先级**: P2 - 高级定制需求

---

### 5. ❌ 范围选择 Demo（重要 - P1）

**功能**: 演示 `range` 模式的使用（本项目特色功能，AntD 无）

**使用场景**:

- 选择日期区间（如请假时间、活动周期）
- 可视化范围选择交互

**参考**: 本项目独有功能，需展示

**建议实现**:

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Calendar :range="true" v-model:range-value="rangeValue" @range-change="onRangeChange" :fullscreen="false" />
    <div v-if="rangeValue[0] && rangeValue[1]" style="color: #666">
      已选择: {{ formatDate(rangeValue[0]) }} ~ {{ formatDate(rangeValue[1]) }}
    </div>
  </div>
</template>

<script setup>
import { shallowRef } from 'vue'
import { Calendar } from '@hmfw/ant-design'

const rangeValue = shallowRef([null, null])

const onRangeChange = (rangeStr, dates) => {
  console.log('范围变化:', rangeStr, dates)
}

const formatDate = (date) => {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}
</script>
```

**优先级**: P1 - 本项目特色功能，必须演示

---

## 本项目 vs AntD Demo 场景对照

| AntD demo 场景                 | 本项目对应 demo        | 状态        | 建议                                  |
| ------------------------------ | ---------------------- | ----------- | ------------------------------------- |
| basic（基本用法）              | CalendarBasic.vue      | ✅ 已覆盖   | -                                     |
| notice-calendar（通知事项）    | -                      | ❌ 缺失     | P1 补充（合并到"自定义渲染"）         |
| event-range（跨日期事件）      | -                      | ❌ 缺失     | P2 补充（合并到"自定义渲染"）         |
| card（卡片模式）               | CalendarMini.vue       | ✅ 已覆盖   | -                                     |
| select（选择功能）             | -                      | ⚠️ 部分覆盖 | P1 补充（需增加 `disabledDate` 演示） |
| lunar（农历日历）              | -                      | ⏭️ 跳过     | 需要农历库支持，暂不实现              |
| week（周数）                   | -                      | ⏭️ 跳过     | 本项目未实现 `showWeek` prop          |
| customize-header（自定义头部） | -                      | ❌ 缺失     | P2 补充                               |
| style-class（语义化样式）      | CalendarClassNames.vue | ✅ 已覆盖   | 本项目更细粒度（13 节点）             |
| component-token（调试用例）    | -                      | ⏭️ 跳过     | 调试用例，无需补充                    |

**对照结果**:

- ✅ 已覆盖: 3/10（30%）
- ❌ 需补充: 4/10（40%）
- ⏭️ 可跳过: 3/10（30%，包含农历、周数、调试用例）

**实际覆盖率**: 3/(10-3) = **42.9%**（跳过不适用场景后）

---

## 覆盖率评估

| 功能类型                | 已覆盖 | 未覆盖 | 覆盖率 |
| ----------------------- | ------ | ------ | ------ |
| **核心 API**            | 2/6    | 4/6    | 33.3%  |
| - value/mode/fullscreen | ✅     | -      | 100%   |
| - cellRender            | ❌     | ✅     | 0%     |
| - disabledDate          | ❌     | ✅     | 0%     |
| - validRange            | ❌     | ✅     | 0%     |
| - headerRender          | ❌     | ✅     | 0%     |
| - range（新增）         | ❌     | ✅     | 0%     |
| **语义化 API**          | 1/1    | 0/1    | 100%   |
| - classNames/styles     | ✅     | -      | 100%   |
| **布尔开关**            | 1/1    | 0/1    | 100%   |
| - fullscreen            | ✅     | -      | 100%   |
| **视图模式**            | 1/1    | 0/1    | 100%   |
| - month/year            | ✅     | -      | 100%   |
| **高级功能**            | 0/5    | 5/5    | 0%     |
| - 自定义渲染            | ❌     | ✅     | 0%     |
| - 禁用日期              | ❌     | ✅     | 0%     |
| - 有效范围              | ❌     | ✅     | 0%     |
| - 自定义头部            | ❌     | ✅     | 0%     |
| - 范围选择              | ❌     | ✅     | 0%     |

**总体覆盖率**: 5/14 = **35.7%**

**核心功能覆盖率**: 2/6 = **33.3%**（严重不足）

**语义化 API 覆盖率**: 1/1 = **100%**（优秀）

---

## 问题总结

### 🔴 严重不足

1. **核心渲染 API 完全未演示**
   - `cellRender` / `dateCellRender` / `monthCellRender` 是 Calendar 最重要的自定义能力，零覆盖
   - 用户无法从文档了解如何实现「通知事项日历」、「农历日期」等常见需求

2. **约束性 API 未演示**
   - `disabledDate` / `validRange` 是实际应用必需（如活动报名、请假系统）
   - 缺失导致用户不知道如何禁用特定日期

3. **本项目特色功能未演示**
   - `range` 模式是本项目独有的增强特性，但文档中完全未展示
   - 用户可能不知道有这个功能

### 🟡 可接受

4. **基础功能覆盖完整**
   - 基础用法、卡片模式、视图切换都有对应 demo
   - 语义化 API 演示非常详细（5 个场景，13 个节点全覆盖）

---

## 补充建议优先级

| 优先级 | Demo          | 工作量     | 理由                          |
| ------ | ------------- | ---------- | ----------------------------- |
| P1 🔴  | #1 自定义渲染 | 🔧 30 分钟 | 核心功能，AntD 多个 demo 演示 |
| P1 🔴  | #2 禁用日期   | 🔧 20 分钟 | 实际应用必需，常见需求        |
| P1 🔴  | #5 范围选择   | 🔧 25 分钟 | 本项目特色，必须展示          |
| P2 🟡  | #3 有效范围   | 🔧 15 分钟 | 特定场景需要                  |
| P2 🟡  | #4 自定义头部 | 🔧 30 分钟 | 高级定制需求                  |

**建议补充顺序**: #1 → #2 → #5 → （验证测试） → #3 → #4

**预期覆盖率提升**:

- 补充 P1（3 个）: 35.7% → **57.1%**
- 补充 P2（2 个）: 57.1% → **71.4%**

---

## 对比 AntD 的差距

| 维度                         | AntD | 本项目 | 差距   |
| ---------------------------- | ---- | ------ | ------ |
| Demo 数量                    | 10   | 4      | -60%   |
| 实用 Demo（去除调试/不适用） | 7    | 4      | -43%   |
| 核心功能覆盖                 | 100% | 33.3%  | -66.7% |
| 自定义能力演示               | 4 个 | 1 个   | -75%   |
| 语义化 API 演示              | 1 个 | 1 个   | 持平   |

**总体评价**:

- **语义化 API 演示优于 AntD**（5 个场景 vs 1 个，13 个节点全覆盖）
- **核心功能演示严重不足**（自定义渲染、禁用日期、范围选择零覆盖）
- **需优先补充 P1 级别的 3 个 demo**，才能达到可接受水平（~60% 覆盖率）

---

## 下一步行动

1. **立即补充 P1 Demo**（约 75 分钟）
   - CalendarCellRender.vue（自定义渲染）
   - CalendarDisabled.vue（禁用日期）
   - CalendarRange.vue（范围选择）

2. **更新文档**（约 30 分钟）
   - 在 `calendar.md` 中插入 3 个新 demo 的引用
   - 调整 demo 顺序：基础 → 卡片 → 视图切换 → 自定义渲染 → 禁用日期 → 范围选择 → 自定义头部（可选）→ 有效范围（可选）→ 语义化 API

3. **验证**

   ```bash
   pnpm dev  # 检查 demo 渲染正常
   ```

4. **目标覆盖率**: 57.1%（补充 P1）→ 71.4%（补充 P2）→ 85%+（补充边缘场景）
