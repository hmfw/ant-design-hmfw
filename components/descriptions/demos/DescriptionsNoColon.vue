<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 13px">默认显示冒号（colon={true}）：</div>
      <Descriptions title="产品信息" :colon="true" :items="items" />
    </div>

    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 13px">
        隐藏冒号（colon={false}），适用于简洁风格或特定语言界面：
      </div>
      <Descriptions title="产品信息" :colon="false" :items="items" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Descriptions } from '@hmfw/ant-design'

const items = [
  { label: '产品', children: 'Cloud Database' },
  { label: '计费方式', children: '预付费' },
  { label: '自动续费', children: '已开通' },
  { label: '订单时间', children: '2018-04-24 18:00:00' },
  { label: '使用时长', children: '2年' },
  { label: '到期时间', children: '2020-04-24 18:00:00' },
]
</script>
