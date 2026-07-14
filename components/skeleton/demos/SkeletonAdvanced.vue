<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">仅标题（无段落）</div>
      <Skeleton :paragraph="false" />
    </div>

    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">仅段落（无标题）</div>
      <Skeleton :title="false" :paragraph="{ rows: 4 }" />
    </div>

    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">圆角样式</div>
      <Skeleton round active avatar :paragraph="{ rows: 3 }" />
    </div>

    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">自定义标题宽度（200px）</div>
      <Skeleton :title="{ width: 200 }" :paragraph="{ rows: 2 }" />
    </div>

    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">完整配置组合</div>
      <Skeleton
        round
        active
        :avatar="{ size: 'large', shape: 'square' }"
        :title="{ width: '60%' }"
        :paragraph="{ rows: 3, width: ['100%', '100%', '80%'] }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Skeleton } from '@hmfw/ant-design'
</script>
