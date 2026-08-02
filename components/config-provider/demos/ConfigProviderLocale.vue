<template>
  <Space direction="vertical" size="large" style="width: 100%">
    <Segmented v-model:value="lang" :options="options" />

    <ConfigProvider :locale="lang === 'zh' ? zhCN : enUS">
      <div :style="panelStyle">
        <Space wrap align="start">
          <!-- 占位符与「无匹配项」文案来自语言包 -->
          <Select :options="[]" style="width: 200px" />
          <Popconfirm title="Delete this item?">
            <Button danger>Popconfirm 按钮文案</Button>
          </Popconfirm>
        </Space>
        <!-- 空状态描述文案来自语言包 -->
        <Empty />
      </div>
    </ConfigProvider>

    <p :style="hintStyle">语言包统一驱动组件内置文案（占位符、空状态、确认框按钮等），无需逐个组件传文案。</p>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { CSSProperties } from 'vue'
import { ConfigProvider, Button, Select, Empty, Popconfirm, Segmented, Space, zhCN, enUS } from '@hmfw/ant-design'

const lang = ref<'zh' | 'en'>('zh')
const options = [
  { label: '简体中文', value: 'zh' },
  { label: 'English', value: 'en' },
]

const panelStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '16px',
  background: 'var(--hmfw-color-bg-layout)',
  borderRadius: 'var(--hmfw-border-radius)',
}

const hintStyle: CSSProperties = {
  margin: 0,
  fontSize: '12px',
  color: 'var(--hmfw-color-text-tertiary)',
}
</script>
