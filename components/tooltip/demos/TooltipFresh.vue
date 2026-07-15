<template>
  <div class="demo-fresh">
    <p>fresh 属性用于强制重新计算浮层位置，trackPosition 属性用于持续跟踪触发元素位置变化。</p>
    <div class="moving-container" :style="{ marginLeft: offset + 'px' }">
      <Tooltip :open="open" title="我会跟随按钮移动" trigger="click" track-position>
        <Button>点击查看提示</Button>
      </Tooltip>
    </div>
    <Button style="margin-left: 20px" @click="moveButton">移动按钮</Button>
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import { Tooltip, Button } from '@hmfw/ant-design'

const offset = shallowRef(0)
const open = shallowRef(true)

const moveButton = () => {
  offset.value = offset.value === 0 ? 100 : 0
}
</script>

<style scoped>
.moving-container {
  transition: margin-left 0.3s;
  display: inline-block;
}
</style>
