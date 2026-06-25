<template>
  <div style="padding: 20px">
    <Steps :items="items" type="inline" :current="1" />
  </div>
</template>

<script setup lang="ts">
import { Steps } from '@hmfw/ant-design'

const items = [
  { title: 'Step 1', content: 'First step' },
  { title: 'Step 2', content: 'Second step' },
  { title: 'Step 3', content: 'Third step' },
  { title: 'Step 4', content: 'Fourth step' },
]
</script>
