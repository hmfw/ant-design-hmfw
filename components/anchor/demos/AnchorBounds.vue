<template>
  <div style="display: flex; gap: 24px">
    <div style="flex: 1">
      <div id="bounds-1" style="height: 200px; background: #e6f4ff; padding: 16px; margin-bottom: 16px">
        <h3>第一部分</h3>
        <p>调整 bounds 值会影响锚点高亮的判定边界。较小的 bounds 值需要更精确的滚动位置。</p>
      </div>
      <div id="bounds-2" style="height: 200px; background: #f6ffed; padding: 16px; margin-bottom: 16px">
        <h3>第二部分</h3>
      </div>
      <div id="bounds-3" style="height: 200px; background: #fff7e6; padding: 16px; margin-bottom: 16px">
        <h3>第三部分</h3>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 16px">
      <div>
        <div style="margin-bottom: 4px; font-size: 12px; color: #999">bounds = 5 (默认)</div>
        <Anchor :items="items" :bounds="5" style="width: 160px" />
      </div>
      <div>
        <div style="margin-bottom: 4px; font-size: 12px; color: #999">bounds = 50</div>
        <Anchor :items="items" :bounds="50" style="width: 160px" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Anchor } from '@hmfw/ant-design'

const items = [
  { href: '#bounds-1', title: '第一部分' },
  { href: '#bounds-2', title: '第二部分' },
  { href: '#bounds-3', title: '第三部分' },
]
</script>
