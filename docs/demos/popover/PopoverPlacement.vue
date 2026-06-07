<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Popover v-for="placement in placements" :key="placement" :placement="placement" title="标题" content="内容">
      <Button>{{ placement }}</Button>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Popover, Button } from 'ant-design-hmfw'

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
