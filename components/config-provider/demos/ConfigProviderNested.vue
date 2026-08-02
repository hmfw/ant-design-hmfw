<template>
  <ConfigProvider :theme="{ colorPrimary: '#00b96b', borderRadius: 2 }" component-size="large">
    <div :style="panelStyle">
      <p :style="labelStyle">外层：绿色主题 · 圆角 2 · large 输入框</p>
      <Space wrap>
        <Button type="primary">外层按钮</Button>
        <Input placeholder="外层输入框" style="width: 150px" />
      </Space>

      <ConfigProvider :theme="{ colorPrimary: '#ff6b00' }">
        <div :style="nestedStyle">
          <p :style="labelStyle">内层：只改主色为橙色</p>
          <Space wrap>
            <Button type="primary">内层按钮</Button>
            <Input placeholder="内层输入框" style="width: 150px" />
          </Space>
          <p :style="hintStyle">
            内层只声明了主色：圆角 2 与 large 输入框尺寸继承自外层，未被重置为默认值； 橙色主题也没有泄漏到外层。
          </p>
        </div>
      </ConfigProvider>
    </div>
  </ConfigProvider>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { ConfigProvider, Button, Input, Space } from '@hmfw/ant-design'

const panelStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '16px',
  background: 'var(--hmfw-color-bg-layout)',
  borderRadius: 'var(--hmfw-border-radius)',
}

const nestedStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '16px',
  background: 'var(--hmfw-color-bg-container)',
  border: '1px solid var(--hmfw-color-border)',
  borderRadius: 'var(--hmfw-border-radius)',
}

const labelStyle: CSSProperties = {
  margin: 0,
  fontSize: '13px',
  color: 'var(--hmfw-color-text-secondary)',
}

const hintStyle: CSSProperties = {
  margin: 0,
  fontSize: '12px',
  color: 'var(--hmfw-color-text-tertiary)',
}
</script>
