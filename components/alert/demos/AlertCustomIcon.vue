<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert title="使用自定义图标" type="info" show-icon>
      <template #icon>
        <SmileOutlined />
      </template>
    </Alert>
    <Alert title="使用不同的图标样式" type="warning" show-icon>
      <template #icon>
        <FireOutlined style="color: #ff4d4f" />
      </template>
    </Alert>
    <Alert
      title="带描述的自定义图标"
      description="可以在任何场景下使用自定义图标替换默认状态图标。"
      type="success"
      show-icon
    >
      <template #icon>
        <RocketOutlined />
      </template>
    </Alert>
  </div>
</template>

<script setup lang="ts">
import { Alert } from '@hmfw/ant-design'
import { SmileOutlined, FireOutlined, RocketOutlined } from '@hmfw/icons'
</script>
