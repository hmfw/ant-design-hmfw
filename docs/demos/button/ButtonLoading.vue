<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary" loading> Loading </Button>
    <Button type="primary" size="small" loading> Loading </Button>
    <Button type="primary" :loading="loading" @click="handleClick"> Click me! </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'ant-design-hmfw'

const loading = ref(false)

const handleClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>
