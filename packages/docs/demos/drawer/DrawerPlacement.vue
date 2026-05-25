<template>
  <div style="display: flex; gap: 8px;">
    <button @click="show('top')">上</button>
    <button @click="show('right')">右</button>
    <button @click="show('bottom')">下</button>
    <button @click="show('left')">左</button>
  </div>
  <Drawer
    v-model:open="open"
    :placement="placement"
    :title="`从${placementText}滑出`"
  >
    <p>抽屉内容</p>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer } from 'ant-design-hmfw'

const open = ref(false)
const placement = ref<'top' | 'right' | 'bottom' | 'left'>('right')
const placementText = ref('右侧')

const textMap: Record<string, string> = {
  top: '顶部',
  right: '右侧',
  bottom: '底部',
  left: '左侧',
}

function show(dir: 'top' | 'right' | 'bottom' | 'left') {
  placement.value = dir
  placementText.value = textMap[dir]
  open.value = true
}
</script>
