<template>
  <App>
    <AppActions />
  </App>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { App, useApp, Button, Space } from '@hmfw/ant-design'

// useApp() 在 App 子组件内调用，获取 message/notification/modal 实例
const AppActions = defineComponent({
  setup() {
    const { message, notification, modal } = useApp()

    function showMessage() {
      message.success('操作成功！')
    }

    function showNotification() {
      notification.info({
        message: '系统通知',
        description: '这是通过 useApp() 触发的通知。',
      })
    }

    function showModal() {
      modal.info({
        title: '提示',
        content: '这是通过 useApp() 触发的对话框。',
      })
    }

    return () =>
      h(Space, null, {
        default: () => [
          h(Button, { type: 'primary', onClick: showMessage }, { default: () => 'Message' }),
          h(Button, { onClick: showNotification }, { default: () => 'Notification' }),
          h(Button, { onClick: showModal }, { default: () => 'Modal' }),
        ],
      })
  },
})
</script>
