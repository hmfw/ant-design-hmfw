<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Tooltip title="粉色提示" color="pink">
      <Button>粉色</Button>
    </Tooltip>
    <Tooltip title="红色提示" color="red">
      <Button>红色</Button>
    </Tooltip>
    <Tooltip title="蓝色提示" color="#1677ff">
      <Button>自定义蓝色</Button>
    </Tooltip>
    <Tooltip title="绿色提示" color="#52c41a">
      <Button>自定义绿色</Button>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { Tooltip, Button } from 'ant-design-hmfw'
</script>
