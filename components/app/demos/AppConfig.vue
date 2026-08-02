<template>
  <div class="demo-container">
    <h4>配置传递示例</h4>
    <p style="margin-bottom: 16px; color: rgba(0, 0, 0, 0.65)">
      通过 App props 配置 message/notification 行为，子组件通过 useApp() 获取的实例会应用这些配置。
    </p>

    <App :message="{ duration: 5, maxCount: 2 }" :notification="{ placement: 'topLeft', duration: 3 }">
      <div class="button-group">
        <Button type="primary" @click="showMessage">显示 Message（5秒，最多2条）</Button>
        <Button @click="showNotification">显示 Notification（左上角，3秒）</Button>
      </div>
    </App>

    <div style="margin-top: 24px; padding: 16px; background: #fafafa; border-radius: 4px">
      <h5 style="margin: 0 0 8px 0">配置说明：</h5>
      <ul style="margin: 0; padding-left: 20px">
        <li>
          <code>message=&#123;&#123; duration: 5, maxCount: 2 &#125;&#125;</code> - 每条 message 显示 5 秒，最多显示 2
          条
        </li>
        <li>
          <code>notification=&#123;&#123; placement: 'topLeft', duration: 3 &#125;&#125;</code> - notification
          在左上角显示，持续 3 秒
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { App, useApp, Button } from '@hmfw/ant-design'

const { message, notification } = useApp()

let count = 0

const showMessage = () => {
  count++
  message.success(`这是第 ${count} 条消息（5秒，最多2条）`)
}

const showNotification = () => {
  notification.info({
    message: '配置生效',
    description: '这条通知在左上角显示，持续 3 秒。',
  })
}
</script>

<style scoped>
.demo-container h4 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 500;
}

.button-group {
  display: flex;
  gap: 12px;
}

code {
  padding: 2px 6px;
  background: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
}

h5 {
  font-size: 14px;
  font-weight: 500;
}

li {
  margin-bottom: 4px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
}
</style>
