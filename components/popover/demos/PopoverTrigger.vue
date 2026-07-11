<template>
  <div style="display: flex; gap: 8px">
    <Popover title="悬停触发" content="鼠标悬停时显示" trigger="hover">
      <Button>悬停</Button>
    </Popover>
    <Popover title="点击触发" content="点击时显示" trigger="click">
      <Button>点击</Button>
    </Popover>
    <Popover title="聚焦触发" content="聚焦时显示" trigger="focus">
      <Button>聚焦</Button>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Popover, Button } from '@hmfw/ant-design'
</script>
