<template>
  <div style="display: flex; gap: 16px; position: relative; height: 80px;">
    <FloatButton type="default" description="默认" shape="square" />
    <FloatButton type="primary" description="主要" shape="square" />
  </div>
</template>

<script setup lang="ts">
import { FloatButton } from 'ant-design-hmfw'
</script>
