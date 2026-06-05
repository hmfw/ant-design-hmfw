<template>
  <Space direction="vertical" :size="16">
    <Space wrap>
      <Image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        width="200"
        placeholder
      />
      <Image
        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
        width="200"
        placeholder
      />
      <Image
        src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
        width="200"
        placeholder
      />
    </Space>
    <p style="color: #999; font-size: 14px;">大图加载时显示占位动画</p>
  </Space>
</template>

<script setup lang="ts">
import { Image, Space } from 'ant-design-hmfw'
</script>
