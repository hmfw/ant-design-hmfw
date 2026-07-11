<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <button style="width: fit-content; padding: 4px 12px" @click="open = !open">
      {{ open ? '收起' : '展开' }}下拉菜单
    </button>
    <Select
      v-model:value="value"
      :options="options"
      :open="open"
      placeholder="受控展开状态"
      style="width: 100%"
      @dropdown-visible-change="onVisibleChange"
    />
    <p>下拉状态：{{ open ? '展开' : '收起' }}</p>
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import { Select } from '@hmfw/ant-design'

const value = shallowRef<string>()
const open = shallowRef(false)

const onVisibleChange = (visible: boolean) => {
  open.value = visible
}

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
]
</script>
