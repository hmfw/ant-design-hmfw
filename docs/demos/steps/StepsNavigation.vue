<template>
  <div style="padding: 20px">
    <Steps :items="items" type="navigation" :current="current" @change="onChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Steps } from 'ant-design-hmfw'

const current = ref(1)

const items = [
  { title: 'Step 1', content: 'First step' },
  { title: 'Step 2', content: 'Second step' },
  { title: 'Step 3', content: 'Third step' },
]

const onChange = (value: number) => {
  current.value = value
}
</script>
