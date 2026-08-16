<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Cascader :options="options" size="small" placeholder="Small 小尺寸" style="width: 300px" />
    <Cascader :options="options" size="middle" placeholder="Middle 中尺寸（默认）" style="width: 300px" />
    <Cascader :options="options" size="large" placeholder="Large 大尺寸" style="width: 300px" />
  </div>
</template>

<script setup lang="ts">
import { Cascader } from '@hmfw/ant-design'

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [{ value: 'xihu', label: '西湖' }],
      },
      { value: 'ningbo', label: '宁波' },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [{ value: 'nanjing', label: '南京' }],
  },
]
</script>
