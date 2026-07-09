<template>
  <div style="display: flex; gap: 24px">
    <div style="flex: 1">
      <h3>replace 属性控制浏览器历史记录行为</h3>
      <p style="color: #666; margin-bottom: 16px">
        点击锚点时观察浏览器地址栏：replace=false 使用 pushState（添加历史记录），replace=true 使用
        replaceState（替换当前记录）。
      </p>
      <div id="r-section-1" style="height: 200px; background: #e6f4ff; padding: 16px; margin-bottom: 16px">
        <h3>章节 1</h3>
      </div>
      <div id="r-section-2" style="height: 200px; background: #f6ffed; padding: 16px; margin-bottom: 16px">
        <h3>章节 2</h3>
      </div>
      <div id="r-section-3" style="height: 200px; background: #fff7e6; padding: 16px; margin-bottom: 16px">
        <h3>章节 3</h3>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 16px">
      <div>
        <div style="margin-bottom: 4px; font-size: 12px; color: #999">replace=false (默认 pushState)</div>
        <Anchor :items="items" style="width: 160px" />
      </div>
      <div>
        <div style="margin-bottom: 4px; font-size: 12px; color: #999">replace=true (使用 replaceState)</div>
        <Anchor :items="items" :replace="true" style="width: 160px" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Anchor } from '@hmfw/ant-design'

const items = [
  { href: '#r-section-1', title: '章节 1' },
  { href: '#r-section-2', title: '章节 2' },
  { href: '#r-section-3', title: '章节 3' },
]
</script>
