<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Button @click="pauseEnabled">悬停暂停（默认）</Button>
    <Button @click="pauseDisabled">悬停不暂停</Button>
    <Button @click="pauseCustom">单独配置</Button>
  </div>
</template>

<script setup lang="ts">
import { message, Button } from 'ant-design-hmfw'

function pauseEnabled() {
  message.config({ pauseOnHover: true })
  message.info('悬停时暂停计时，移开继续计时', 5)
}

function pauseDisabled() {
  message.config({ pauseOnHover: false })
  message.warning('悬停时不暂停计时，5 秒后自动关闭', 5)
}

function pauseCustom() {
  message.config({ pauseOnHover: true })
  message.open({
    content: '这条消息悬停时不暂停',
    type: 'success',
    duration: 5,
    pauseOnHover: false,
  })
}
</script>
