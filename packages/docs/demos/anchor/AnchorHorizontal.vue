<template>
  <div>
    <Anchor
      direction="horizontal"
      :items="items"
      style="margin-bottom: 24px;"
    />
    <div id="h-part-1" style="height: 160px; background: #e6f4ff; padding: 16px; margin-bottom: 16px;">
      <h3>第一部分</h3>
    </div>
    <div id="h-part-2" style="height: 160px; background: #f6ffed; padding: 16px; margin-bottom: 16px;">
      <h3>第二部分</h3>
    </div>
    <div id="h-part-3" style="height: 160px; background: #fff7e6; padding: 16px;">
      <h3>第三部分</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Anchor } from 'ant-design-hmfw'

const items = [
  { href: '#h-part-1', title: '第一部分' },
  { href: '#h-part-2', title: '第二部分' },
  { href: '#h-part-3', title: '第三部分' },
]
</script>
