<template>
  <div>
    <a-button type="primary" @click="firstOpen = true"> 打开第一层抽屉 </a-button>

    <a-drawer v-model:open="firstOpen" title="第一层抽屉" placement="right">
      <p>这是第一层抽屉的内容。</p>
      <p>点击下方按钮可以打开第二层抽屉，系统会自动管理 zIndex 确保层级正确。</p>
      <a-button type="primary" style="margin-top: 16px" @click="secondOpen = true"> 打开第二层抽屉 </a-button>
    </a-drawer>

    <a-drawer v-model:open="secondOpen" title="第二层抽屉" placement="right">
      <p>这是第二层抽屉的内容。</p>
      <p>通过内置的 DrawerManager，后打开的抽屉会自动拥有更高的 zIndex。</p>
      <a-button type="primary" style="margin-top: 16px" @click="thirdOpen = true"> 打开第三层抽屉 </a-button>
    </a-drawer>

    <a-drawer v-model:open="thirdOpen" title="第三层抽屉" placement="right">
      <p>这是第三层抽屉的内容。</p>
      <p>每个抽屉的 zIndex 会自动递增 2（遮罩层 + 内容层），确保显示顺序正确。</p>
      <div style="margin-top: 16px; padding: 12px; background: #f0f2f5; border-radius: 4px">
        <strong>提示：</strong>可以按 Esc 键或点击遮罩关闭最上层的抽屉。
      </div>
    </a-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const firstOpen = ref(false)
const secondOpen = ref(false)
const thirdOpen = ref(false)
</script>
