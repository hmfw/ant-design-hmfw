<template>
  <div style="display: flex; gap: 32px; align-items: center">
    <!-- 通过 indicator 插槽替换默认四点动画为图标 -->
    <Spin>
      <template #indicator>
        <LoadingOutlined spin />
      </template>
    </Spin>

    <Spin size="large" tip="加载中...">
      <template #indicator>
        <LoadingOutlined spin />
      </template>
    </Spin>
  </div>
</template>

<script setup lang="ts">
import { Spin } from '@hmfw/ant-design'
import { LoadingOutlined } from '@hmfw/icons'
</script>
