<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <!-- 受控模式 -->
    <div style="display: flex; gap: 16px; align-items: center">
      <Popconfirm
        v-model:open="visible"
        title="确定要删除吗？"
        ok-text="删除"
        cancel-text="取消"
        @confirm="handleConfirm"
        @cancel="handleCancel"
      >
        <Button>受控显示</Button>
      </Popconfirm>
      <Button @click="visible = !visible">
        {{ visible ? '关闭' : '打开' }}
      </Button>
      <span>当前状态: {{ visible ? '显示' : '隐藏' }}</span>
    </div>

    <!-- 禁用状态 -->
    <div style="display: flex; gap: 16px; align-items: center">
      <Popconfirm title="确定要删除吗？" ok-text="删除" cancel-text="取消" :disabled="disabled">
        <Button :disabled="disabled">
          {{ disabled ? '已禁用' : '可点击' }}
        </Button>
      </Popconfirm>
      <Button @click="disabled = !disabled">切换禁用状态</Button>
    </div>

    <!-- 隐藏取消按钮 -->
    <div style="display: flex; gap: 16px; align-items: center">
      <Popconfirm title="点击确定继续" ok-text="确定" :show-cancel="false" @confirm="() => console.log('已确定')">
        <Button>无取消按钮</Button>
      </Popconfirm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Popconfirm, Button } from 'ant-design-hmfw'

const visible = ref(false)
const disabled = ref(false)

function handleConfirm() {
  console.log('已确认')
  visible.value = false
}

function handleCancel() {
  console.log('已取消')
  visible.value = false
}
</script>
