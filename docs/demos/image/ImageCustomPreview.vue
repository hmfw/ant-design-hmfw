<template>
  <Space wrap>
    <Image
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      width="200"
      :preview="{
        src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        minScale: 0.5,
        maxScale: 10,
        scaleStep: 0.2,
      }"
    />
    <Image
      src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
      width="200"
      :preview="{ mask: { enabled: false } }"
    />
    <Image
      src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
      width="200"
      :preview="{ closeIcon: false }"
    />
  </Space>
</template>

<script setup lang="ts">
import { Image, Space } from '@hmfw/ant-design'
</script>
