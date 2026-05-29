<template>
  <Card style="width: 300px;">
    <template #cover>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        style="width: 100%;"
      />
    </template>
    <CardMeta
      title="卡片标题"
      description="这是卡片的描述信息"
    />
  </Card>
</template>

<script setup lang="ts">
import { Card, CardMeta } from 'ant-design-hmfw'
</script>
