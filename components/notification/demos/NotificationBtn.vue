<template>
  <Button type="primary" @click="openWithBtn"> 带操作按钮 </Button>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { notification, Button } from '@hmfw/ant-design'

function openWithBtn() {
  const key = `open-${Date.now()}`

  notification.open({
    key,
    message: '有新的更新可用',
    description: '检测到新版本，是否立即刷新以应用更新？',
    duration: 0,
    btn: () =>
      h(
        Button,
        {
          type: 'primary',
          size: 'small',
          onClick: () => notification.destroy(key),
        },
        () => '立即刷新',
      ),
  })
}
</script>
