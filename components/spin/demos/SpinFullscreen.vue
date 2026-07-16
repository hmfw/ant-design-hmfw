<template>
  <div>
    <Button @click="show">显示全屏加载</Button>
    <Spin :spinning="spinning" fullscreen tip="加载中..." />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Spin, Button } from '@hmfw/ant-design'

const spinning = ref(false)

// 点击后展示 3 秒全屏遮罩再自动关闭
function show() {
  spinning.value = true
  setTimeout(() => {
    spinning.value = false
  }, 3000)
}
</script>
