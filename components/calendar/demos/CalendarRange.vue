<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 基础范围选择 -->
    <div>
      <div style="margin-bottom: 12px; font-weight: 500; color: #000">基础范围选择</div>
      <Calendar
        v-model:range-value="rangeValue1"
        :range="true"
        :fullscreen="false"
        style="width: 100%; max-width: 600px"
        @range-change="onRangeChange1"
      />
      <div v-if="rangeValue1[0] && rangeValue1[1]" style="margin-top: 8px; color: #666; font-size: 14px">
        已选择: {{ formatDate(rangeValue1[0]) }} ~ {{ formatDate(rangeValue1[1]) }}
        <span style="margin-left: 12px; color: #1677ff">
          共 {{ calculateDays(rangeValue1[0], rangeValue1[1]) }} 天
        </span>
      </div>
      <div v-else style="margin-top: 8px; color: #999; font-size: 14px">请选择开始日期和结束日期</div>
    </div>

    <!-- 带禁用日期的范围选择 -->
    <div>
      <div style="margin-bottom: 12px; font-weight: 500; color: #000">带禁用日期的范围选择</div>
      <Calendar
        v-model:range-value="rangeValue2"
        :range="true"
        :disabled-date="disableWeekends"
        :fullscreen="false"
        style="width: 100%; max-width: 600px"
      />
      <div v-if="rangeValue2[0] && rangeValue2[1]" style="margin-top: 8px; color: #666; font-size: 14px">
        已选择: {{ formatDate(rangeValue2[0]) }} ~ {{ formatDate(rangeValue2[1]) }}
        <span style="margin-left: 12px; color: #999">(已过滤周末)</span>
      </div>
      <div v-else style="margin-top: 8px; color: #999; font-size: 14px">请选择开始日期和结束日期（周末不可选）</div>
    </div>

    <!-- 带自定义渲染的范围选择 -->
    <div>
      <div style="margin-bottom: 12px; font-weight: 500; color: #000">带价格标签的范围选择</div>
      <Calendar
        v-model:range-value="rangeValue3"
        :range="true"
        :cell-render="cellRenderWithPrice"
        :fullscreen="false"
        style="width: 100%; max-width: 600px"
      />
      <div v-if="rangeValue3[0] && rangeValue3[1]" style="margin-top: 8px; color: #666; font-size: 14px">
        已选择: {{ formatDate(rangeValue3[0]) }} ~ {{ formatDate(rangeValue3[1]) }}
        <span style="margin-left: 12px; color: #1677ff; font-weight: 500">
          总价: ¥{{ calculateTotalPrice(rangeValue3[0], rangeValue3[1]) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { shallowRef, h } from 'vue'
import { Calendar } from '@hmfw/ant-design'
import type { CellRenderInfo, DateRange } from '@hmfw/ant-design'

const rangeValue1 = shallowRef<DateRange>([null, null])
const rangeValue2 = shallowRef<DateRange>([null, null])
const rangeValue3 = shallowRef<DateRange>([null, null])

// 模拟价格数据（不同日期不同价格）
const prices: Record<string, number> = {
  '2024-07-20': 299,
  '2024-07-21': 399,
  '2024-07-22': 199,
  '2024-07-23': 299,
  '2024-07-24': 299,
  '2024-07-25': 199,
  '2024-07-26': 299,
  '2024-07-27': 499,
  '2024-07-28': 499,
}

const onRangeChange1 = (rangeStr: [string | null, string | null], dates: DateRange) => {
  console.log('范围变化:', rangeStr, dates)
}

// 禁用周末
const disableWeekends = (date: Date): boolean => {
  const day = date.getDay()
  return day === 0 || day === 6
}

// 渲染带价格的日期单元格
const cellRenderWithPrice = (current: Date, { type }: CellRenderInfo) => {
  if (type !== 'month') return null

  const dateStr = formatDate(current)
  const price = prices[dateStr] || 199 // 默认价格

  return h(
    'div',
    {
      style: {
        fontSize: '11px',
        color: price >= 400 ? '#ff4d4f' : '#52c41a',
        fontWeight: 500,
        marginTop: '2px',
      },
    },
    `¥${price}`,
  )
}

// 格式化日期为 YYYY-MM-DD
function formatDate(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

// 计算天数
function calculateDays(start: Date, end: Date): number {
  const diffTime = Math.abs(end.getTime() - start.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays + 1 // 包含开始和结束日期
}

// 计算总价
function calculateTotalPrice(start: Date, end: Date): number {
  let total = 0
  const current = new Date(start)

  while (current <= end) {
    const dateStr = formatDate(current)
    total += prices[dateStr] || 199
    current.setDate(current.getDate() + 1)
  }

  return total
}
</script>
