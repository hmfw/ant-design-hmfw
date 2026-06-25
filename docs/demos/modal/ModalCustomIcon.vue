<template>
  <Button @click="showCustomIcon"> 使用自定义 VNode 图标 </Button>
  <Button @click="showNoIcon"> 隐藏图标 </Button>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Modal, Button } from '@hmfw/ant-design'

function showCustomIcon() {
  Modal.info({
    title: '自定义图标',
    content: '这个对话框使用了自定义的 VNode 作为图标。',
    icon: h(
      'span',
      {
        style: {
          fontSize: '24px',
          color: '#1890ff',
        },
      },
      '🎨',
    ),
  })
}

function showNoIcon() {
  Modal.confirm({
    title: '无图标确认',
    content: '通过设置 icon 为 null 可以隐藏图标。',
    icon: null,
  })
}
</script>
