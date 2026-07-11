<template>
  <Space align="start">
    <Button :type="toggle ? 'default' : 'primary'" @click="toggle = !toggle">
      {{ toggle ? '浅色模式' : '暗色模式' }}
    </Button>
    <ConfigProvider :theme="toggle ? {} : { colorTextBase: '#ffffff', colorBgBase: '#000000' }">
      <Card :title="toggle ? '浅色主题' : '暗色主题'">
        <Text> 这段文字的颜色从 colorTextBase 派生 </Text>
        <br />
        <Text type="secondary">辅助文字 · 占位符 · 禁用态 — 全部自动派生</Text>
        <br />
        <Text type="secondary">
          <Text delete>删除线文字</Text>
          {' '}·{' '}
          <Text disabled>禁用文字</Text>
        </Text>
        <div style="margin-top: 12px">
          <Space>
            <Button type="primary">主按钮</Button>
            <Button>默认</Button>
            <Button type="dashed">虚线</Button>
          </Space>
        </div>
      </Card>
    </ConfigProvider>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ConfigProvider, Button, Card, Space, Text } from '@hmfw/ant-design'

const toggle = ref(true)
</script>
