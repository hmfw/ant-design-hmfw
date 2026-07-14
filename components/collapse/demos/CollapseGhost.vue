<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Collapse ghost :default-active-key="['1']" :items="items" />
    <Collapse ghost :default-active-key="['1']">
      <CollapsePanel key="1" header="幽灵模式（插槽）">
        <p>通过 ghost 属性使折叠面板透明且无边框。</p>
      </CollapsePanel>
      <CollapsePanel key="2" header="面板 2">
        <p>适合嵌入到有背景色的容器中使用。</p>
      </CollapsePanel>
    </Collapse>
  </div>
</template>

<script setup lang="ts">
import { Collapse, CollapsePanel } from '@hmfw/ant-design'

const items = [
  {
    key: '1',
    label: '幽灵模式（items）',
    children: '通过 ghost 属性使折叠面板透明且无边框，适合嵌入有背景色的卡片或容器中。',
  },
  { key: '2', label: '面板 2', children: '每个面板之间也没有分割线。' },
]
</script>
