<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <button @click="open('topLeft')">左上角</button>
    <button @click="open('topRight')">右上角</button>
    <button @click="open('bottomLeft')">左下角</button>
    <button @click="open('bottomRight')">右下角</button>
  </div>
</template>

<script setup lang="ts">
import { notification } from 'ant-design-hmfw'

type Placement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'

function open(placement: Placement) {
  notification.info({
    message: `通知 (${placement})`,
    description: `这是一条来自${placement}的通知消息。`,
    placement,
  })
}
</script>
