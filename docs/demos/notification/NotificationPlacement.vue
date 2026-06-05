<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Button @click="open('topLeft')">左上角</Button>
    <Button @click="open('topRight')">右上角</Button>
    <Button @click="open('bottomLeft')">左下角</Button>
    <Button @click="open('bottomRight')">右下角</Button>
    <Button @click="open('top')">顶部居中</Button>
    <Button @click="open('bottom')">底部居中</Button>
  </div>
</template>

<script setup lang="ts">
import { notification, Button } from 'ant-design-hmfw'
import type { NotificationPlacement } from 'ant-design-hmfw'

function open(placement: NotificationPlacement) {
  notification.info({
    message: `通知 (${placement})`,
    description: `这是一条来自${placement}的通知消息。`,
    placement,
  })
}
</script>
