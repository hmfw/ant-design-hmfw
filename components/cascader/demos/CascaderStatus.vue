<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap">
    <Cascader :options="options" status="error" placeholder="error 校验失败" style="width: 300px" />
    <Cascader :options="options" status="warning" placeholder="warning 警告" style="width: 300px" />
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
