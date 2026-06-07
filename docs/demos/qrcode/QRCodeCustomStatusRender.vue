<template>
  <div style="display: flex; gap: 16px">
    <QRCode
      value="https://ant.design"
      status="expired"
      :status-render="customStatusRender"
      :on-refresh="handleRefresh"
    />
    <QRCode value="https://ant.design" status="loading" :status-render="customStatusRender" />
    <QRCode value="https://ant.design" status="scanned" :status-render="customStatusRender" />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { QRCode } from 'ant-design-hmfw'
import type { StatusRenderInfo } from 'ant-design-hmfw'

const customStatusRender = (info: StatusRenderInfo) => {
  if (info.status === 'expired') {
    return h('div', { style: { color: '#ff4d4f' } }, [
      h('div', '❌ 已过期'),
      info.onRefresh &&
        h(
          'button',
          {
            onClick: info.onRefresh,
            style: {
              marginTop: '8px',
              padding: '4px 12px',
              border: '1px solid #ff4d4f',
              borderRadius: '4px',
              background: 'transparent',
              color: '#ff4d4f',
              cursor: 'pointer',
            },
          },
          '重新生成',
        ),
    ])
  }
  if (info.status === 'loading') {
    return h('div', { style: { color: '#1677ff' } }, '⏳ 加载中...')
  }
  if (info.status === 'scanned') {
    return h('div', { style: { color: '#52c41a' } }, '✅ 扫描成功')
  }
  return null
}

const handleRefresh = () => {
  console.log('刷新二维码')
}
</script>
