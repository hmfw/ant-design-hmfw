<template>
  <div style="display: flex; gap: 16px">
    <QRCode value="https://ant.design" type="canvas" />
    <QRCode value="https://ant.design" type="svg" />
  </div>
</template>

<script setup lang="ts">
import { QRCode } from '@hmfw/ant-design'
</script>
