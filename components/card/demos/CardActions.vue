<template>
  <Card style="width: 300px">
    <template #cover>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        style="width: 100%"
      />
    </template>
    <template #actions>
      <li><SettingOutlined /></li>
      <li><EditOutlined /></li>
      <li><EllipsisOutlined /></li>
    </template>
    <CardMeta title="卡片标题" description="这是卡片的描述信息，底部提供操作组。" />
  </Card>
</template>

<script setup lang="ts">
import { Card, CardMeta } from '@hmfw/ant-design'
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@hmfw/icons'
</script>
