<template>
  <div style="height: 1500px; padding: 20px; background: linear-gradient(to bottom, #fff, #f0f0f0);">
    <p style="margin-bottom: 20px;">向下滚动页面，右下角会出现回到顶部按钮。</p>
    <p style="margin-bottom: 20px;">默认当页面滚动超过 400px 时显示。</p>
    <div v-for="i in 50" :key="i" style="margin-bottom: 10px;">
      内容行 {{ i }}
    </div>
    <BackTop />
  </div>
</template>

<script setup lang="ts">
import { BackTop } from 'ant-design-hmfw'
</script>
