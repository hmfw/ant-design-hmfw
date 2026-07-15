<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div style="display: flex; gap: 8px; align-items: center">
      <Tooltip v-model:open="open" title="受控显隐" @open-change="onOpenChange">
        <Button>受控目标</Button>
      </Tooltip>
      <Button @click="open = !open">{{ open ? '隐藏' : '显示' }}提示</Button>
    </div>
    <div style="color: #666; font-size: 12px">
      当前状态：{{ open ? '显示' : '隐藏' }}
      <span v-if="lastSource">（最近一次由 {{ lastSource }} 触发）</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tooltip, Button } from '@hmfw/ant-design'
import type { TooltipOpenChangeInfo } from '@hmfw/ant-design'

const open = ref(false)
const lastSource = ref<TooltipOpenChangeInfo['source'] | ''>('')

// openChange 第二个参数 info.source 标识本次显隐由触发器还是浮层引起
const onOpenChange = (_open: boolean, info: TooltipOpenChangeInfo) => {
  lastSource.value = info.source
}
</script>
