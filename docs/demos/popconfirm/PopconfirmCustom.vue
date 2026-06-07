<template>
  <div style="display: flex; gap: 16px; align-items: center;">
    <!-- 自定义 z-index -->
    <Popconfirm
      title="自定义 z-index"
      description="这个气泡框的 z-index 是 2000"
      :z-index="2000"
      ok-text="确定"
      cancel-text="取消"
    >
      <button>自定义 z-index</button>
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
      <button>自定义样式</button>
    </Popconfirm>

    <!-- 隐藏箭头 -->
    <Popconfirm
      title="无箭头气泡框"
      ok-text="确定"
      cancel-text="取消"
      :arrow="false"
    >
      <button>隐藏箭头</button>
    </Popconfirm>

    <!-- 箭头指向中心 -->
    <Popconfirm
      title="箭头指向中心"
      ok-text="确定"
      cancel-text="取消"
      :arrow="{ pointAtCenter: true }"
    >
      <button>箭头指向中心</button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm } from 'ant-design-hmfw'
</script>
