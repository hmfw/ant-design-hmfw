<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <!-- 自定义 z-index -->
    <Popconfirm
      title="自定义 z-index"
      description="这个气泡框的 z-index 是 2000"
      :z-index="2000"
      ok-text="确定"
      cancel-text="取消"
    >
      <Button>自定义 z-index</Button>
    </Popconfirm>

    <!-- 自定义样式 -->
    <Popconfirm
      title="自定义样式"
      description="这个气泡框使用了自定义样式"
      ok-text="确定"
      cancel-text="取消"
      :overlay-style="{ maxWidth: '400px' }"
      :overlay-inner-style="{ backgroundColor: '#f0f5ff', padding: '16px' }"
    >
      <Button>自定义样式</Button>
    </Popconfirm>

    <!-- 隐藏箭头 -->
    <Popconfirm title="无箭头气泡框" ok-text="确定" cancel-text="取消" :arrow="false">
      <Button>隐藏箭头</Button>
    </Popconfirm>

    <!-- 箭头指向中心 -->
    <Popconfirm title="箭头指向中心" ok-text="确定" cancel-text="取消" :arrow="{ pointAtCenter: true }">
      <Button>箭头指向中心</Button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm, Button } from 'ant-design-hmfw'
</script>
