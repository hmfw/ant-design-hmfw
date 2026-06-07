<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Popconfirm
      v-for="placement in placements"
      :key="placement"
      :placement="placement"
      title="确定要执行此操作吗？"
      @confirm="() => console.log(placement)"
    >
      <Button>{{ placement }}</Button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm, Button } from 'ant-design-hmfw'

const placements = [
  'topLeft',
  'top',
  'topRight',
  'leftTop',
  'left',
  'leftBottom',
  'rightTop',
  'right',
  'rightBottom',
  'bottomLeft',
  'bottom',
  'bottomRight',
]
</script>
