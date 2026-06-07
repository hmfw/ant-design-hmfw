<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Tooltip v-for="placement in placements" :key="placement" :placement="placement" title="提示文字">
      <Button style="width: 100px">
        {{ placement }}
      </Button>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { Tooltip, Button } from 'ant-design-hmfw'

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
