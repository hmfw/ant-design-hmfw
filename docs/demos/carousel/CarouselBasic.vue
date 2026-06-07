<template>
  <Carousel style="height: 160px; background: #364d79; border-radius: 4px; overflow: hidden">
    <div
      v-for="n in 4"
      :key="n"
      style="height: 160px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 24px"
    >
      {{ n }}
    </div>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel } from 'ant-design-hmfw'
</script>
