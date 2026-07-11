<template>
  <Collapse v-model:active-key="activeKey" :bordered="false">
    <CollapsePanel key="1" header="面板标题 1">
      <p>面板内容 1</p>
    </CollapsePanel>
    <CollapsePanel key="2" header="面板标题 2">
      <p>面板内容 2</p>
    </CollapsePanel>
  </Collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Collapse, CollapsePanel } from '@hmfw/ant-design'

const activeKey = ref(['1'])
</script>
