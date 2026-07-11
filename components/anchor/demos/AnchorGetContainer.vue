<template>
  <div style="display: flex; gap: 24px">
    <div style="flex: 1">
      <div
        ref="containerRef"
        style="height: 300px; overflow: auto; border: 1px solid #d9d9d9; border-radius: 4px; padding: 16px"
      >
        <h3 id="gc-intro">介绍</h3>
        <p style="height: 120px">
          使用 getContainer 可以指定自定义滚动容器，锚点的滚动监听和激活状态将在该容器内计算。
        </p>
        <h3 id="gc-usage">使用方法</h3>
        <p style="height: 120px">通过 getContainer 返回指定的 DOM 元素，锚点将监听该元素的滚动事件。</p>
        <h3 id="gc-api">API 文档</h3>
        <p style="height: 120px">getContainer 接受一个函数，返回 HTMLElement 或 Window 对象。</p>
      </div>
    </div>
    <Anchor :items="items" :get-container="getContainer" style="width: 160px" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Anchor } from '@hmfw/ant-design'

const containerRef = ref<HTMLElement>()

const items = [
  { href: '#gc-intro', title: '介绍' },
  { href: '#gc-usage', title: '使用方法' },
  { href: '#gc-api', title: 'API 文档' },
]

const getContainer = () => containerRef.value || window
</script>
