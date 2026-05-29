<template>
  <FloatButton @click="onClick" />
</template>

<script setup lang="ts">
import { FloatButton } from 'ant-design-hmfw'

function onClick() {
  console.log('点击悬浮按钮')
}
</script>
