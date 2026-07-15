<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Tooltip title="带箭头（默认）" :arrow="true">
      <Button>显示箭头</Button>
    </Tooltip>
    <Tooltip title="无箭头" :arrow="false">
      <Button>隐藏箭头</Button>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { Tooltip, Button } from '@hmfw/ant-design'
</script>
