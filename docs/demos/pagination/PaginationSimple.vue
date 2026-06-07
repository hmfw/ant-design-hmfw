<template>
  <Pagination v-model:current="current" simple :total="50" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination } from 'ant-design-hmfw'

const current = ref(1)
</script>
