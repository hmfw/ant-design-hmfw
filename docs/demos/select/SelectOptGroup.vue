<template>
  <div style="max-width: 400px">
    <Select v-model:value="value" :options="options" placeholder="选择城市" style="width: 100%" />
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import { Select } from '@hmfw/ant-design'

const value = shallowRef<string>()

const options = [
  {
    label: '浙江',
    value: '浙江',
    options: [
      { label: '杭州', value: 'hangzhou' },
      { label: '宁波', value: 'ningbo' },
      { label: '温州', value: 'wenzhou' },
    ],
  },
  {
    label: '江苏',
    value: '江苏',
    options: [
      { label: '南京', value: 'nanjing' },
      { label: '苏州', value: 'suzhou' },
      { label: '镇江', value: 'zhenjiang' },
    ],
  },
]
</script>
