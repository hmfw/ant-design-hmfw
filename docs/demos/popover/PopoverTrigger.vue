<template>
  <div style="display: flex; gap: 8px">
    <Popover title="悬停触发" content="鼠标悬停时显示" trigger="hover">
      <button>悬停</button>
    </Popover>
    <Popover title="点击触发" content="点击时显示" trigger="click">
      <button>点击</button>
    </Popover>
    <Popover title="聚焦触发" content="聚焦时显示" trigger="focus">
      <button>聚焦</button>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Popover } from 'ant-design-hmfw'
</script>
