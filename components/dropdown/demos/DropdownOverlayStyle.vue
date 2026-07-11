<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-start">
    <!-- overlayClassName + overlayStyle -->
    <Dropdown :menu="menu" overlay-class-name="custom-overlay" :overlay-style="{ minWidth: '200px' }">
      <Button>自定义浮层样式</Button>
    </Dropdown>

    <!-- overlay slot -->
    <Dropdown trigger="click">
      <Button>自定义内容</Button>
      <template #overlay>
        <div
          class="overlay-demo"
          style="padding: 16px; background: #fff; border-radius: 8px; box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12)"
        >
          <p style="margin: 0 0 8px; font-weight: 600">自定义浮层内容</p>
          <p style="margin: 0; color: #666">这里可以是任意内容，不限于菜单</p>
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import { Dropdown, Button } from '@hmfw/ant-design'

const menu = {
  items: [
    { key: '1', label: '菜单项一' },
    { key: '2', label: '菜单项二' },
    { key: '3', label: '菜单项三' },
  ],
}
</script>

<style>
.custom-overlay {
  border: 2px solid var(--hmfw-color-primary, #1677ff);
  border-radius: 8px;
}
</style>
