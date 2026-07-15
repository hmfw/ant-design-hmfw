<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Tooltip title="鼠标移入触发" trigger="hover">
      <Button>hover</Button>
    </Tooltip>
    <Tooltip title="点击触发" trigger="click">
      <Button>click</Button>
    </Tooltip>
    <Tooltip title="聚焦触发" trigger="focus">
      <Button>focus</Button>
    </Tooltip>
    <Tooltip title="右键触发" trigger="contextMenu">
      <Button>contextMenu</Button>
    </Tooltip>
    <Tooltip title="hover 或 click 均可触发" :trigger="['hover', 'click']">
      <Button>hover + click</Button>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { Tooltip, Button } from '@hmfw/ant-design'
</script>
