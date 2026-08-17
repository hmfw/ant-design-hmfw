<template>
  <div style="padding: 20px">
    <h2>Splitter 拖拽测试</h2>
    <p>容器尺寸: {{ containerSize }}</p>
    <p>面板尺寸: {{ panelSizes }}</p>
    <p>拖拽中: {{ isDragging }}</p>

    <Splitter
      style="height: 300px; border: 2px solid #ccc"
      @resize="handleResize"
      @resize-start="handleResizeStart"
      @resize-end="handleResizeEnd"
    >
      <Splitter.Panel default-size="40%">
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f0f0f0">
          左侧面板
        </div>
      </Splitter.Panel>
      <Splitter.Panel>
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #e0e0e0">
          右侧面板
        </div>
      </Splitter.Panel>
    </Splitter>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Splitter from '../Splitter'

const containerSize = ref(0)
const panelSizes = ref<number[]>([])
const isDragging = ref(false)

const handleResizeStart = (sizes: number[]) => {
  isDragging.value = true
  panelSizes.value = sizes
  console.log('开始拖拽:', sizes)
}

const handleResize = (sizes: number[]) => {
  panelSizes.value = sizes
  console.log('拖拽中:', sizes)
}

const handleResizeEnd = (sizes: number[]) => {
  isDragging.value = false
  panelSizes.value = sizes
  console.log('结束拖拽:', sizes)
}
</script>
