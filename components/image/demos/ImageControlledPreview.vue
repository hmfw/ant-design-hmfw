<template>
  <Space direction="vertical" :size="16">
    <Space>
      <Button type="primary" @click="open = true">从外部打开预览</Button>
      <span style="color: #999; font-size: 14px">当前状态：{{ open ? '已打开' : '已关闭' }}</span>
    </Space>
    <Image
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      width="200"
      :preview="{ open, onOpenChange: handleOpenChange }"
    />
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Image, Button, Space } from '@hmfw/ant-design'

// 受控模式：open 由外部状态驱动，onOpenChange 同步内部触发的开关（点击遮罩/关闭按钮/Esc）
const open = ref(false)

function handleOpenChange(next: boolean) {
  open.value = next
}
</script>
