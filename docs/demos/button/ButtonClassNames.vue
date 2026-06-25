<template>
  <div style="display: flex; gap: 12px; flex-wrap: wrap">
    <Button
      type="primary"
      :icon="SearchOutlined"
      :class-names="{ icon: 'demo-tinted-icon' }"
      :styles="{ icon: { color: '#fadb14' } }"
    >
      自定义图标颜色
    </Button>

    <Button :icon="SearchOutlined" icon-position="end" :styles="{ root: { borderColor: '#722ed1', color: '#722ed1' } }">
      尾部图标 + 自定义边框
    </Button>

    <Button loading :class-names="{ loading: 'demo-loading-emphasis' }"> 加载中 </Button>
  </div>
</template>

<script setup lang="ts">
import { Button, SearchOutlined } from '@hmfw/ant-design'
</script>

<style scoped>
:deep(.demo-tinted-icon) {
  filter: drop-shadow(0 0 2px rgba(250, 219, 20, 0.6));
}
:deep(.demo-loading-emphasis) {
  font-size: 16px;
}
</style>
