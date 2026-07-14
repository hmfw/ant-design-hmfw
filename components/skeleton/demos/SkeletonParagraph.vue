<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">自定义行数（5 行）</div>
      <Skeleton :paragraph="{ rows: 5 }" />
    </div>

    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">自定义最后一行宽度（70%）</div>
      <Skeleton :paragraph="{ rows: 3, width: '70%' }" />
    </div>

    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">数组形式指定每行宽度</div>
      <Skeleton :paragraph="{ rows: 4, width: ['100%', '100%', '80%', '60%'] }" />
    </div>

    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">带头像的段落配置</div>
      <Skeleton avatar :paragraph="{ rows: 4, width: ['100%', '100%', '90%', '75%'] }" active />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Skeleton } from '@hmfw/ant-design'
</script>
