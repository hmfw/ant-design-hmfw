<template>
  <div>
    <Button @click="loading = !loading">切换加载状态</Button>
    <Spin :spinning="loading" tip="加载中...">
      <div style="padding: 24px; background: #f0f0f0; margin-top: 16px; border-radius: 4px">
        <p>这是被遮罩的内容区域</p>
        <p>加载时会显示遮罩层</p>
      </div>
    </Spin>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Spin, Button } from '@hmfw/ant-design'

const loading = ref(true)
</script>
