<template>
  <div>
    <Button
      type="primary"
      style="margin-bottom: 16px;"
      @click="collapsed = !collapsed"
    >
      {{ collapsed ? '展开' : '折叠' }}
    </Button>
    <div :style="{ width: collapsed ? '80px' : '256px', borderRight: '1px solid #f0f0f0', transition: 'width 0.2s' }">
      <Menu
        mode="inline"
        :items="items"
        :selected-keys="selectedKeys"
        :inline-collapsed="collapsed"
        @select="onSelect"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, Button } from 'ant-design-hmfw'

const collapsed = ref(false)
const selectedKeys = ref(['1'])

const items = [
  { key: '1', label: '导航一', icon: 'home' },
  { key: '2', label: '导航二', icon: 'user' },
  { key: '3', label: '导航三', icon: 'setting' },
]

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}
</script>
