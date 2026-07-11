<template>
  <Spin :spinning="loading" :delay="500">
    <div style="padding: 24px; background: #f0f0f0; border-radius: 4px">
      <p>延迟 500ms 后才显示加载状态</p>
    </div>
  </Spin>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Spin } from '@hmfw/ant-design'

const loading = ref(true)
</script>
