<template>
  <Space direction="vertical" :size="16">
    <span style="color: #999; font-size: 14px">
      正在预览第 {{ current + 1 }} / {{ images.length }} 张（打开预览后用左右箭头切换，下方索引会同步更新）
    </span>
    <PreviewGroup :current="current" :on-change="handleChange">
      <Space wrap>
        <Image v-for="(src, i) in images" :key="i" :src="src" width="120" />
      </Space>
    </PreviewGroup>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Image, PreviewGroup, Space } from '@hmfw/ant-design'

const images = [
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
  'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
]

// 受控模式：current 由外部状态驱动，onChange 在预览内切换时回传新索引
const current = ref(0)

function handleChange(next: number, prev: number) {
  current.value = next
  console.log(`从第 ${prev + 1} 张切换到第 ${next + 1} 张`)
}
</script>
