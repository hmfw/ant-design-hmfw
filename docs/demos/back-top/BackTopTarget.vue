<template>
  <div>
    <p style="margin-bottom: 20px">在指定容器内滚动时显示回到顶部按钮。</p>
    <div
      ref="containerRef"
      style="
        height: 400px;
        overflow-y: auto;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        padding: 20px;
        position: relative;
      "
    >
      <div v-for="i in 100" :key="i" style="margin-bottom: 10px">容器内容行 {{ i }}</div>
      <BackTop :target="getContainer" :visibility-height="100" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BackTop } from 'ant-design-hmfw'

const containerRef = ref<HTMLElement>()

const getContainer = () => containerRef.value!
</script>
