<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 示例 1：禁用过去日期 -->
    <div>
      <div style="margin-bottom: 12px; font-weight: 500; color: #000">禁用过去日期</div>
      <Calendar
        v-model:value="value1"
        :disabled-date="disablePastDates"
        :fullscreen="false"
        style="width: 100%; max-width: 600px"
      />
      <div v-if="value1" style="margin-top: 8px; color: #666; font-size: 14px">已选择: {{ value1 }}</div>
    </div>

    <!-- 示例 2：禁用周末 -->
    <div>
      <div style="margin-bottom: 12px; font-weight: 500; color: #000">禁用周末</div>
      <Calendar
        v-model:value="value2"
        :disabled-date="disableWeekends"
        :fullscreen="false"
        style="width: 100%; max-width: 600px"
      />
      <div v-if="value2" style="margin-top: 8px; color: #666; font-size: 14px">已选择: {{ value2 }}</div>
    </div>

    <!-- 示例 3：禁用特定日期 -->
    <div>
      <div style="margin-bottom: 12px; font-weight: 500; color: #000">禁用特定日期（节假日）</div>
      <Calendar
        v-model:value="value3"
        :disabled-date="disableHolidays"
        :fullscreen="false"
        style="width: 100%; max-width: 600px"
      />
      <div v-if="value3" style="margin-top: 8px; color: #666; font-size: 14px">已选择: {{ value3 }}</div>
    </div>

    <!-- 示例 4：组合条件（禁用过去日期 + 周末） -->
    <div>
      <div style="margin-bottom: 12px; font-weight: 500; color: #000">禁用过去日期和周末</div>
      <Calendar
        v-model:value="value4"
        :disabled-date="disablePastAndWeekends"
        :fullscreen="false"
        style="width: 100%; max-width: 600px"
      />
      <div v-if="value4" style="margin-top: 8px; color: #666; font-size: 14px">已选择: {{ value4 }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import { Calendar } from '@hmfw/ant-design'

const value1 = shallowRef<string>()
const value2 = shallowRef<string>()
const value3 = shallowRef<string>()
const value4 = shallowRef<string>()

// 禁用过去日期
const disablePastDates = (date: Date): boolean => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return date < today
}

// 禁用周末
const disableWeekends = (date: Date): boolean => {
  const day = date.getDay()
  return day === 0 || day === 6
}

// 禁用特定日期（模拟节假日）
const holidays = [
  '2024-07-01', // 假设的节假日
  '2024-07-15',
  '2024-07-20',
  '2024-07-25',
  '2024-08-01',
]

const disableHolidays = (date: Date): boolean => {
  const dateStr = formatDate(date)
  return holidays.includes(dateStr)
}

// 组合条件：禁用过去日期和周末
const disablePastAndWeekends = (date: Date): boolean => {
  return disablePastDates(date) || disableWeekends(date)
}

// 格式化日期为 YYYY-MM-DD
function formatDate(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}
</script>
