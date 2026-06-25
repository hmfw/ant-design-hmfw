<template>
  <div style="padding: 20px">
    <Steps :items="items" type="panel" :current="current" @change="onChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Steps } from '@hmfw/ant-design'

const current = ref(1)

const items = [
  { title: 'Step 1', content: 'First step description' },
  { title: 'Step 2', content: 'Second step description' },
  { title: 'Step 3', content: 'Third step description' },
]

const onChange = (value: number) => {
  current.value = value
}
</script>
