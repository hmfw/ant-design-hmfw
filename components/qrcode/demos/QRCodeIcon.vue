<template>
  <QRCode value="https://ant.design" :icon="iconUrl" :icon-size="50" error-level="H" />
</template>

<script setup lang="ts">
import { QRCode } from '@hmfw/ant-design'

const iconUrl = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
</script>
