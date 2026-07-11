<template>
  <Space>
    <Button @click="confirm"> 删除项目 </Button>
    <Button @click="info"> 提示信息 </Button>
    <Button @click="success"> 成功 </Button>
    <Button @click="error"> 错误 </Button>
    <Button @click="warning"> 警告 </Button>
    <Button @click="asyncConfirm"> 异步确认 </Button>
  </Space>
</template>

<script setup lang="ts">
import { Modal, Button, Space } from '@hmfw/ant-design'

function confirm() {
  Modal.confirm({
    title: '确认删除？',
    content: '该操作不可撤销。',
    okType: 'danger',
    onOk: () => {
      console.log('OK')
    },
    onCancel: () => {
      console.log('Cancel')
    },
  })
}

function info() {
  Modal.info({ title: '提示', content: '这是一条信息。' })
}

function success() {
  Modal.success({ title: '操作成功', content: '保存完成。' })
}

function error() {
  Modal.error({ title: '操作失败', content: '请重试。' })
}

function warning() {
  Modal.warning({ title: '注意', content: '即将关闭。' })
}

function asyncConfirm() {
  Modal.confirm({
    title: '提交中？',
    content: 'OK 按钮会显示 loading 直到 Promise resolve。',
    onOk: () => new Promise<void>((resolve) => setTimeout(resolve, 1500)),
  })
}
</script>
