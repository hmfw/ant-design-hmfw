<template>
  <div style="display: flex; gap: 16px">
    <QRCode value="https://ant.design" status="active" />
    <QRCode value="https://ant.design" status="expired" @refresh="onRefresh" />
    <QRCode value="https://ant.design" status="loading" />
    <QRCode value="https://ant.design" status="scanned" />
  </div>
</template>

<script setup lang="ts">
import { QRCode } from 'ant-design-hmfw'

function onRefresh() {
  console.log('刷新二维码')
}
</script>
