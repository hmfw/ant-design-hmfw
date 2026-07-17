<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">千分位格式化：</p>
      <InputNumber v-model:value="value1" :formatter="formatter1" :parser="parser1" style="width: 100%" />
    </div>
    <div>
      <p style="margin-bottom: 4px">百分比：</p>
      <InputNumber
        v-model:value="value2"
        :min="0"
        :max="100"
        :formatter="formatter2"
        :parser="parser2"
        style="width: 100%"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@hmfw/ant-design'

const value1 = ref<number>(1000)
const value2 = ref<number>(50)

const formatter1 = (value: number) => {
  const [start, end] = `${value}`.split('.') || []
  const v = `${start}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return `$ ${end ? `${v}.${end}` : `${v}`}`
}

const parser1 = (value: string) => {
  return parseFloat(value.replace(/\$\s?|(,*)/g, ''))
}

const formatter2 = (value: number) => `${value}%`
const parser2 = (value: string) => parseFloat(value.replace('%', ''))
</script>
