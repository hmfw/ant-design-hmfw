<template>
  <div>
    <Button type="primary" @click="open = true">新建用户</Button>

    <!--
      Modal 内表单：确认时先 await validate()，
      校验不通过就 return，不关闭弹窗，也不清空已填内容。
    -->
    <Modal v-model:open="open" title="新建用户" :confirm-loading="submitting" @ok="handleOk" @cancel="handleCancel">
      <Form ref="formRef" :model="formState" :rules="rules" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }">
        <FormItem label="用户名" name="username">
          <Input v-model:value="formState.username" placeholder="请输入用户名" />
        </FormItem>
        <FormItem label="邮箱" name="email">
          <Input v-model:value="formState.email" placeholder="请输入邮箱" />
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Modal, Form, FormItem, Input, Button } from '@hmfw/ant-design'
import type { FormRule } from '@hmfw/ant-design'

const open = ref(false)
const submitting = ref(false)
const formRef = ref()

const formState = reactive({
  username: '',
  email: '',
})

const rules: Record<string, FormRule | FormRule[]> = {
  username: { required: true, message: '请输入用户名' },
  email: [
    { required: true, message: '请输入邮箱' },
    { type: 'email', message: '邮箱格式不正确' },
  ],
}

async function handleOk() {
  // validate() 校验失败时会 throw，catch 住即可保持弹窗打开
  try {
    await formRef.value?.validate()
  } catch {
    return
  }

  submitting.value = true
  // 模拟提交请求
  await new Promise((resolve) => setTimeout(resolve, 800))
  submitting.value = false

  open.value = false
  formRef.value?.resetFields()
}

function handleCancel() {
  open.value = false
  formRef.value?.resetFields()
}
</script>
