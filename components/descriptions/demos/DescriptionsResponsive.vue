<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 13px">响应式列数（xs: 1列，sm: 2列，md: 3列）：</div>
      <Descriptions title="响应式列数" :column="{ xs: 1, sm: 2, md: 3 }" :items="items" />
    </div>

    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 13px">
        响应式跨列（地址在移动端占 1 列，桌面端占 2 列）：
      </div>
      <Descriptions title="响应式跨列" :column="{ xs: 1, sm: 2, md: 3 }" :items="itemsWithResponsiveSpan" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Descriptions } from '@hmfw/ant-design'

const items = [
  { label: '产品', children: 'Cloud Database' },
  { label: '计费', children: '预付费' },
  { label: '时间', children: '18:00:00' },
  { label: '金额', children: '$80.00' },
  { label: '折扣', children: '$20.00' },
  { label: '实付', children: '$60.00' },
]

const itemsWithResponsiveSpan = [
  { label: '用户名', children: 'Zhou Maomao' },
  { label: '手机号', children: '1810000000' },
  { label: '居住地', children: '杭州市' },
  {
    label: '联系地址',
    children: '浙江省杭州市西湖区古翠路',
    span: { xs: 1, sm: 2, md: 2 }, // 响应式跨列
  },
]
</script>
