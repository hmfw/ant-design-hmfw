<template>
  <div style="display: flex; flex-wrap: wrap; gap: 16px">
    <div v-for="s in statuses" :key="s.status" style="flex: 1; min-width: 220px">
      <Result :status="s.status" :title="s.title" :sub-title="s.subTitle" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Result } from '@hmfw/ant-design'
import type { ResultStatus } from '@hmfw/ant-design'

// 展示 warning / info 两种普通状态与 403 / 500 两种异常插画
const statuses: Array<{ status: ResultStatus; title: string; subTitle: string }> = [
  { status: 'info', title: '信息提示', subTitle: '这是一条普通的信息反馈。' },
  { status: 'warning', title: '警告提示', subTitle: '当前操作存在风险，请谨慎处理。' },
  { status: '403', title: '403', subTitle: '抱歉，您无权访问此页面。' },
  { status: '500', title: '500', subTitle: '抱歉，服务器出现了错误。' },
]
</script>
