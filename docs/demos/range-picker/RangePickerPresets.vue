<template>
  <RangePicker :presets="presets" @change="onChange" />
</template>

<script setup lang="ts">
import { RangePicker } from 'ant-design-hmfw'
import type { RangeValue } from 'ant-design-hmfw'

type RangePreset = { label: string; value: RangeValue | (() => RangeValue) }

function daysAgo(n: number): string {
  const d = new Date()
  d.setDate(d.getDate() - n)
  return d.toISOString().slice(0, 10)
}
function today(): string {
  return new Date().toISOString().slice(0, 10)
}

const presets: RangePreset[] = [
  { label: '最近 7 天', value: [daysAgo(7), today()] },
  { label: '最近 14 天', value: [daysAgo(14), today()] },
  { label: '最近 30 天', value: () => [daysAgo(30), today()] },
]

function onChange(value: RangeValue) {
  console.log('range:', value)
}
</script>
