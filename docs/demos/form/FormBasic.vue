<template>
  <Form
    :model="formState"
    :label-col="{ span: 6 }"
    :wrapper-col="{ span: 18 }"
    style="max-width: 480px"
    @finish="handleFinish"
  >
    <FormItem label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名' }]">
      <Input v-model:value="formState.username" placeholder="请输入用户名" />
    </FormItem>
    <FormItem label="密码" name="password" :rules="[{ required: true, message: '请输入密码' }]">
      <InputPassword v-model:value="formState.password" placeholder="请输入密码" />
    </FormItem>
    <FormItem :wrapper-col="{ offset: 6, span: 18 }">
      <Button type="primary" html-type="submit"> 提交 </Button>
      <Button style="margin-left: 8px" @click="handleReset"> 重置 </Button>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Form, FormItem, Input, InputPassword, Button } from 'ant-design-hmfw'

const formState = reactive({
  username: '',
  password: '',
})

const handleFinish = (values: typeof formState) => {
  console.log('表单提交：', values)
}

const handleReset = () => {
  formState.username = ''
  formState.password = ''
}
</script>
