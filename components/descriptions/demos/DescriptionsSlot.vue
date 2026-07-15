<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 13px">使用子组件语法（推荐用于 JSX/TSX）：</div>
      <Descriptions title="用户信息">
        <DescriptionsItem label="用户名">Zhou Maomao</DescriptionsItem>
        <DescriptionsItem label="手机号">1810000000</DescriptionsItem>
        <DescriptionsItem label="居住地">杭州市</DescriptionsItem>
        <DescriptionsItem label="备注">学校</DescriptionsItem>
        <DescriptionsItem label="联系地址" :span="2"> 浙江省杭州市西湖区古翠路 </DescriptionsItem>
      </Descriptions>
    </div>

    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 13px">等价的 items prop 语法（推荐用于模板）：</div>
      <Descriptions title="用户信息" :items="items" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Descriptions, DescriptionsItem } from '@hmfw/ant-design'

const items = [
  { label: '用户名', children: 'Zhou Maomao' },
  { label: '手机号', children: '1810000000' },
  { label: '居住地', children: '杭州市' },
  { label: '备注', children: '学校' },
  { label: '联系地址', children: '浙江省杭州市西湖区古翠路', span: 2 },
]
</script>
