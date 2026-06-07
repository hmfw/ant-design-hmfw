<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button @click="showTop"> 顶部显示（默认） </Button>
    <Button @click="showTopCustom"> 顶部自定义距离 </Button>
  </div>
</template>

<script setup lang="ts">
import { message, Button } from 'ant-design-hmfw'

function showTop() {
  message.config({ top: 8 })
  message.info('默认顶部显示，距离 8px')
}

function showTopCustom() {
  message.config({ top: 100 })
  message.success('自定义顶部距离 100px')
}
</script>
