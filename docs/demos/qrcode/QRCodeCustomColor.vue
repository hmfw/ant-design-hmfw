<template>
  <div style="display: flex; gap: 16px">
    <QRCode value="https://ant.design" color="#1677ff" />
    <QRCode value="https://ant.design" color="#52c41a" bg-color="#f0f0f0" />
  </div>
</template>

<script setup lang="ts">
import { QRCode } from 'ant-design-hmfw'
</script>
