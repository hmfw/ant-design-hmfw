<template>
  <div style="width: 300px; border: 1px solid #d9d9d9; border-radius: 8px">
    <Calendar v-model:value="value" :fullscreen="false" />
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import { Calendar } from '@hmfw/ant-design'

const value = shallowRef<string>()
</script>
