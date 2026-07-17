<script setup lang="ts">
import { Progress } from '@hmfw/ant-design'
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <div style="margin-bottom: 8px">外部文字（outer）· 对齐 start / center / end</div>
      <div style="display: flex; flex-direction: column; gap: 8px">
        <Progress :percent="50" :percent-position="{ type: 'outer', align: 'start' }" />
        <Progress :percent="50" :percent-position="{ type: 'outer', align: 'center' }" />
        <Progress :percent="50" :percent-position="{ type: 'outer', align: 'end' }" />
      </div>
    </div>
    <div>
      <div style="margin-bottom: 8px">内部文字（inner）· 对齐 start / center / end</div>
      <div style="display: flex; flex-direction: column; gap: 8px">
        <Progress :percent="60" :percent-position="{ type: 'inner', align: 'start' }" />
        <Progress :percent="60" :percent-position="{ type: 'inner', align: 'center' }" />
        <Progress :percent="60" :percent-position="{ type: 'inner', align: 'end' }" />
      </div>
    </div>
    <div>
      <div style="margin-bottom: 8px">内部文字 + 浅色进度条：文字颜色自动翻转为深色</div>
      <Progress :percent="70" stroke-color="#ffe58f" :percent-position="{ type: 'inner', align: 'center' }" />
    </div>
  </div>
</template>
