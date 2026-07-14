<template>
  <div style="display: flex; gap: 48px; align-items: flex-end; flex-wrap: wrap">
    <!-- description=false 隐藏描述，仅保留插画 -->
    <Empty :description="false" />

    <!-- #description 插槽自定义富文本描述 -->
    <Empty>
      <template #description>
        <span>还没有任何数据，<a href="#" @click.prevent>去创建</a></span>
      </template>
    </Empty>

    <!-- 插槽优先级高于 description=false：即使设为 false，插槽仍会展示 -->
    <Empty :description="false">
      <template #description>
        <span style="color: #fa8c16">插槽覆盖 description=false</span>
      </template>
    </Empty>
  </div>
</template>

<script setup lang="ts">
import { Empty } from '@hmfw/ant-design'
</script>
