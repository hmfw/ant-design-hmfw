<template>
  <Button @click="showLoading"> 打开（加载中） </Button>
  <Drawer v-model:open="open" title="加载中" :loading="loading">
    <p>数据加载完成后的抽屉内容。</p>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer, Button } from '@hmfw/ant-design'

const open = ref(false)
const loading = ref(false)

function showLoading() {
  open.value = true
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>
