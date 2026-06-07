<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Tooltip v-for="placement in placements" :key="placement" :placement="placement" title="提示文字">
      <button style="width: 100px">
        {{ placement }}
      </button>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { Tooltip } from 'ant-design-hmfw'

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
