<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div style="display: flex; gap: 8px; align-items: center">
      <span style="font-size: 13px; color: var(--hmfw-color-text-secondary)">品牌色：</span>
      <span v-for="color in colors" :key="color" :style="getColorStyle(color)" @click="primaryColor = color" />
    </div>

    <ConfigProvider :theme="{ colorPrimary: primaryColor }">
      <div
        style="
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          padding: 16px;
          background: var(--hmfw-color-bg-layout);
          border-radius: var(--hmfw-border-radius);
          align-items: center;
        "
      >
        <Button type="primary">主按钮</Button>
        <Button>默认按钮</Button>
        <Button type="dashed">虚线按钮</Button>
        <Button type="primary" disabled>禁用</Button>
        <Button danger>危险按钮</Button>
      </div>
    </ConfigProvider>

    <div v-if="derivedColors.length" style="display: flex; flex-wrap: wrap; gap: 6px">
      <div
        v-for="d in derivedColors"
        :key="d.label"
        :style="{
          flex: '0 0 auto',
          padding: '6px 12px',
          borderRadius: 4,
          background: d.bg,
          color: d.color,
          border: d.border ? `1px solid ${d.border}` : '1px solid transparent',
          fontSize: 12,
          fontFamily: 'var(--hmfw-font-family)',
        }"
      >
        {{ d.label }}
        <div style="font-size: 10px; opacity: 0.7; margin-top: 2px">{{ d.value }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ConfigProvider, Button } from '@hmfw/ant-design'
import { generateMapTokens, defaultSeedTokens } from '@hmfw/ant-design'

const colors = ['#1677ff', '#00b96b', '#fa541c', '#722ed1', '#eb2f96']
const primaryColor = ref('#1677ff')

function getColorStyle(color: string) {
  const selected = primaryColor.value === color
  return {
    display: 'inline-block',
    width: '24px',
    height: '24px',
    borderRadius: '4px',
    background: color,
    cursor: 'pointer',
    border: selected ? '2px solid var(--hmfw-color-primary)' : '2px solid transparent',
    outline: selected ? '2px solid var(--hmfw-color-primary-border)' : 'none',
  }
}

const derivedColors = computed(() => {
  const seed = { ...defaultSeedTokens, colorPrimary: primaryColor.value }
  const t = generateMapTokens(seed)
  return [
    { label: 'hover', value: t.colorPrimaryHover, bg: t.colorPrimaryHover, color: '#fff' },
    { label: 'active', value: t.colorPrimaryActive, bg: t.colorPrimaryActive, color: '#fff' },
    {
      label: 'bg',
      value: t.colorPrimaryBg,
      bg: t.colorPrimaryBg,
      color: t.colorPrimaryText,
      border: t.colorPrimaryBorder,
    },
    {
      label: 'bg-hover',
      value: t.colorPrimaryBgHover,
      bg: t.colorPrimaryBgHover,
      color: t.colorPrimaryText,
      border: t.colorPrimaryBorderHover,
    },
    {
      label: 'border',
      value: t.colorPrimaryBorder,
      bg: t.colorPrimaryBg,
      color: t.colorPrimaryBorder,
      border: t.colorPrimaryBorder,
    },
    { label: 'text', value: t.colorPrimaryText, bg: '#fff', color: t.colorPrimaryText },
    { label: 'text-hover', value: t.colorPrimaryTextHover, bg: '#fff', color: t.colorPrimaryTextHover },
  ]
})
</script>
