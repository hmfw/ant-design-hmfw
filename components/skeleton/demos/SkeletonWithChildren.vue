<template>
  <div>
    <Button style="margin-bottom: 16px" @click="loading = !loading">切换加载状态</Button>
    <Skeleton :loading="loading" active avatar>
      <div style="display: flex; gap: 12px; margin-top: 16px">
        <img
          src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
          style="width: 40px; height: 40px; border-radius: 50%"
        />
        <div>
          <p style="font-weight: bold">用户名称</p>
          <p>这是一段描述信息，用于展示骨架屏效果。</p>
        </div>
      </div>
    </Skeleton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Skeleton, Button } from '@hmfw/ant-design'

const loading = ref(true)
</script>
