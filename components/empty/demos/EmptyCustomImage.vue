<template>
  <div style="display: flex; gap: 48px; align-items: flex-end; flex-wrap: wrap">
    <!-- 传入图片 URL -->
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      :image-style="{ height: '60px' }"
      description="自定义图片 URL"
    />

    <!-- 通过 #image 插槽自定义任意节点 -->
    <Empty description="自定义图片插槽">
      <template #image>
        <SmileOutlined style="font-size: 48px; color: #1677ff" />
      </template>
    </Empty>

    <!-- image=false 隐藏图片，仅保留文字 -->
    <Empty :image="false" description="不显示图片" />
  </div>
</template>

<script setup lang="ts">
import { Empty } from '@hmfw/ant-design'
import { SmileOutlined } from '@hmfw/icons'
</script>
