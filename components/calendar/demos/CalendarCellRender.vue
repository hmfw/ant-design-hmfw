<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 示例 1：通知事项日历 -->
    <div>
      <div style="margin-bottom: 12px; font-weight: 500; color: #000">通知事项日历</div>
      <Calendar :cell-render="cellRenderWithEvents" />
    </div>

    <!-- 示例 2：带徽标的日历 -->
    <div>
      <div style="margin-bottom: 12px; font-weight: 500; color: #000">带徽标显示</div>
      <Calendar :cell-render="cellRenderWithBadge" />
    </div>

    <!-- 示例 3：自定义月份单元格（年视图） -->
    <div>
      <div style="margin-bottom: 12px; font-weight: 500; color: #000">自定义月份单元格</div>
      <Calendar mode="year" :cell-render="cellRenderMonth" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Calendar } from '@hmfw/ant-design'
import type { CellRenderInfo } from '@hmfw/ant-design'

// 模拟事项数据
const events: Record<string, Array<{ title: string; type: 'success' | 'warning' | 'error' }>> = {
  '2024-07-20': [
    { title: '团队会议', type: 'success' },
    { title: '项目评审', type: 'warning' },
  ],
  '2024-07-22': [{ title: '发布新版本', type: 'error' }],
  '2024-07-25': [{ title: '周例会', type: 'success' }],
  '2024-07-28': [
    { title: '需求评审', type: 'warning' },
    { title: '技术分享', type: 'success' },
  ],
}

// 模拟徽标数据（每日事项数量）
const badgeCounts: Record<string, number> = {
  '2024-07-18': 2,
  '2024-07-19': 5,
  '2024-07-21': 1,
  '2024-07-23': 3,
  '2024-07-26': 4,
}

// 模拟月度数据
const monthData: Record<number, { count: number; label: string }> = {
  0: { count: 12, label: '任务' },
  1: { count: 8, label: '任务' },
  2: { count: 15, label: '任务' },
  3: { count: 20, label: '任务' },
  4: { count: 18, label: '任务' },
}

// 渲染带事项的日期单元格
const cellRenderWithEvents = (current: Date, { type }: CellRenderInfo) => {
  if (type !== 'month') return null

  const dateStr = formatDate(current)
  const dayEvents = events[dateStr]

  if (!dayEvents?.length) return null

  const typeColors = {
    success: '#52c41a',
    warning: '#faad14',
    error: '#ff4d4f',
  }

  return h(
    'div',
    { style: { marginTop: '4px' } },
    dayEvents.map((event) =>
      h(
        'div',
        {
          style: {
            color: typeColors[event.type],
            fontSize: '12px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            lineHeight: '1.5',
          },
        },
        `• ${event.title}`,
      ),
    ),
  )
}

// 渲染带徽标的日期单元格
const cellRenderWithBadge = (current: Date, { type }: CellRenderInfo) => {
  if (type !== 'month') return null

  const dateStr = formatDate(current)
  const count = badgeCounts[dateStr]

  if (!count) return null

  return h(
    'div',
    {
      style: {
        position: 'absolute',
        top: '2px',
        right: '2px',
        minWidth: '18px',
        height: '18px',
        padding: '0 4px',
        borderRadius: '9px',
        background: '#ff4d4f',
        color: '#fff',
        fontSize: '12px',
        lineHeight: '18px',
        textAlign: 'center',
        fontWeight: 500,
      },
    },
    count,
  )
}

// 渲染自定义月份单元格
const cellRenderMonth = (current: Date, { originNode, type }: CellRenderInfo) => {
  if (type !== 'year') return originNode

  const month = current.getMonth()
  const data = monthData[month]

  if (!data) return originNode

  return h('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' } }, [
    originNode,
    h(
      'div',
      {
        style: {
          fontSize: '12px',
          color: '#1677ff',
          fontWeight: 500,
        },
      },
      `${data.count} 个${data.label}`,
    ),
  ])
}

// 格式化日期为 YYYY-MM-DD
function formatDate(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}
</script>
