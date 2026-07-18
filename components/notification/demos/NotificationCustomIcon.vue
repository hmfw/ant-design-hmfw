<template>
  <Button type="primary" @click="openWithIcon"> 自定义图标 </Button>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { notification, Button } from '@hmfw/ant-design'
import { SmileOutlined } from '@hmfw/icons'

function openWithIcon() {
  notification.open({
    message: '自定义图标通知',
    description: '通过 icon 属性可以自定义通知左侧的图标，覆盖默认的类型图标。',
    icon: h(SmileOutlined, { style: { color: 'var(--hmfw-color-primary)' } }),
  })
}
</script>
