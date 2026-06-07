<template>
  <div class="demo-fresh">
    <p>fresh 属性用于强制重新计算浮层位置，适用于触发元素位置动态变化的场景。</p>
    <div class="moving-container" :style="{ marginLeft: offset + 'px' }">
      <Tooltip title="我会跟随按钮移动" :fresh="fresh">
        <button>悬停查看提示</button>
      </Tooltip>
    </div>
    <button style="margin-top: 20px" @click="moveButton">移动按钮</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tooltip } from 'ant-design-hmfw'

const offset = ref(0)
const fresh = ref(0)

const moveButton = () => {
  offset.value = offset.value === 0 ? 100 : 0
  // 触发 fresh 变化，强制重新计算位置
  fresh.value++
}
</script>

<style scoped>
.demo-fresh {
  padding: 20px;
}
.moving-container {
  transition: margin-left 0.3s;
  display: inline-block;
}
</style>
