<template>
  <Progress :percent="percent" />
  <div style="display: flex; gap: 8px; margin-top: 12px;">
    <button @click="decline">-</button>
    <button @click="increase">+</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Progress } from 'ant-design-hmfw'

const percent = ref(0)

function increase() {
  percent.value = Math.min(percent.value + 10, 100)
}

function decline() {
  percent.value = Math.max(percent.value - 10, 0)
}
</script>
