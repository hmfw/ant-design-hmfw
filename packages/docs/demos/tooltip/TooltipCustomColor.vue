<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Tooltip title="粉色提示" color="pink">
      <button>粉色</button>
    </Tooltip>
    <Tooltip title="红色提示" color="red">
      <button>红色</button>
    </Tooltip>
    <Tooltip title="蓝色提示" color="#1677ff">
      <button>自定义蓝色</button>
    </Tooltip>
    <Tooltip title="绿色提示" color="#52c41a">
      <button>自定义绿色</button>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { Tooltip } from 'ant-design-hmfw'
</script>
