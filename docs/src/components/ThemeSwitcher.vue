<template>
  <Dropdown :menu="menuConfig" placement="bottom" trigger="click">
    <Button :icon="DownOutlined" icon-position="end">
      <span class="theme-dot" :style="{ background: activeColor }" />
      {{ activeLabel }}
    </Button>
  </Dropdown>
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import { DownOutlined } from '@hmfw/icons'
import { Dropdown, Button } from '@hmfw/ant-design'
import { useTheme, themePresets } from '../utils/useTheme'

const { currentPreset, setPreset } = useTheme()

const activePreset = computed(() => themePresets.find((p) => p.name === currentPreset.value))
const activeLabel = computed(() => activePreset.value?.label ?? '主题')
const activeColor = computed(() => activePreset.value?.color ?? '#1677ff')

function dot(color: string) {
  return h('span', {
    class: 'theme-dot',
    style: { background: color },
  })
}

const menuConfig = computed(() => ({
  items: themePresets.map((p) => ({
    key: p.name,
    label: p.label,
    icon: () => dot(p.color),
  })),
  selectedKeys: [currentPreset.value],
  onClick: ({ key }: { key: string }) => setPreset(key),
}))
</script>

<style>
.theme-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}
</style>
