<template>
  <Descriptions title="用户信息" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from '@hmfw/ant-design'

const items = [
  { label: '用户名', children: 'Zhou Maomao' },
  { label: '手机号', children: '1810000000' },
  { label: '居住地', children: '杭州市' },
  { label: '备注', children: '学校' },
  { label: '联系地址', children: '浙江省杭州市西湖区古翠路', span: 2 },
]
</script>
