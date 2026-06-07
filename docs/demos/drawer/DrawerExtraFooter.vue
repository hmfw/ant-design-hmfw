<template>
  <div style="display: flex; gap: 8px">
    <Button
      @click="
        open = true
        size = 'default'
      "
    >
      默认 378px
    </Button>
    <Button
      @click="
        open = true
        size = 'large'
      "
    >
      大号 736px
    </Button>
  </div>
  <Drawer v-model:open="open" :size="size" title="尺寸">
    <template #extra>
      <Button type="primary" @click="open = false"> 确定 </Button>
    </template>
    <p>当前尺寸：{{ size }}</p>
    <template #footer>
      <div style="text-align: right">
        <Button style="margin-right: 8px" @click="open = false"> 取消 </Button>
        <Button type="primary" @click="open = false"> 提交 </Button>
      </div>
    </template>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer, Button } from 'ant-design-hmfw'

const open = ref(false)
const size = ref<'default' | 'large'>('default')
</script>
