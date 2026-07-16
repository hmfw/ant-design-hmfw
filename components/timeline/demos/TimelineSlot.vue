<template>
  <Timeline>
    <TimelineItem content="创建服务现场 2015-09-01" />
    <TimelineItem content="初步排除网络异常 2015-09-01" color="green" />
    <TimelineItem content="技术测试异常 2015-09-01" color="red" />
    <TimelineItem content="网络异常正在修复 2015-09-01" :loading="true" color="blue" />
  </Timeline>
</template>

<script setup lang="ts">
import { Timeline, TimelineItem } from '@hmfw/ant-design'
</script>
