<template>
  <Flex gap="small" wrap>
    <Button type="primary" :loading="{ delay: 500 }" @click="handleClick"> Click me (500ms delay) </Button>
    <Button type="primary" :loading="loading" @click="toggleLoading">
      {{ loading ? 'Loading...' : 'Click to load' }}
    </Button>
  </Flex>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Flex } from '@hmfw/ant-design'

const loading = ref(false)

const handleClick = () => {
  console.log('Button clicked')
}

const toggleLoading = () => {
  loading.value = !loading.value
}
</script>
