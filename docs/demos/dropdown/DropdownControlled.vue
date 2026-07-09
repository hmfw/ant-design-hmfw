<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center">
    <!-- 受控模式 + openClassName -->
    <div>
      <Dropdown
        :menu="menu"
        :open="open"
        trigger="click"
        :open-class-name="open ? 'trigger-active' : ''"
        @open-change="onOpenChange"
      >
        <Button :type="open ? 'primary' : 'default'">{{ open ? '已打开' : 'v-model:open' }}</Button>
      </Dropdown>
      <Button size="small" style="margin-left: 8px" @click="open = !open">
        {{ open ? '关闭' : '打开' }}
      </Button>
    </div>

    <!-- defaultOpen -->
    <Dropdown :menu="menu" :default-open="true" trigger="click">
      <Button>defaultOpen</Button>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dropdown, Button } from '@hmfw/ant-design'

const open = ref(false)

const onOpenChange = (v: boolean) => {
  open.value = v
}

const menu = {
  items: [
    { key: '1', label: '菜单项一' },
    { key: '2', label: '菜单项二' },
    { key: '3', label: '菜单项三' },
  ],
}
</script>

<style>
.trigger-active {
  position: relative;
}
.trigger-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--hmfw-color-primary, #1677ff);
  border-radius: 1px;
  animation: triggerIndicatorIn 0.2s ease;
}
@keyframes triggerIndicatorIn {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
</style>
