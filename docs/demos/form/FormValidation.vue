<template>
  <Form
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="{ span: 5 }"
    :wrapper-col="{ span: 19 }"
    style="max-width: 480px"
  >
    <FormItem label="邮箱" name="email">
      <Input v-model:value="formState.email" placeholder="请输入邮箱" />
    </FormItem>
    <FormItem label="手机号" name="phone">
      <Input v-model:value="formState.phone" placeholder="请输入手机号" />
    </FormItem>
    <FormItem label="年龄" name="age">
      <InputNumber v-model:value="formState.age" :min="1" :max="120" placeholder="请输入年龄" style="width: 100%" />
    </FormItem>
    <FormItem :wrapper-col="{ offset: 5, span: 19 }">
      <Button type="primary" @click="handleValidate"> 校验 </Button>
      <Button style="margin-left: 8px" @click="handleClear"> 清除校验 </Button>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Form, FormItem, Input, InputNumber, Button } from 'ant-design-hmfw'

const formRef = ref()

const formState = reactive({
  email: '',
  phone: '',
  age: null as number | null,
})

const rules = {
  email: [
    { required: true, message: '请输入邮箱' },
    { type: 'email', message: '请输入有效的邮箱地址' },
  ],
  phone: [
    { required: true, message: '请输入手机号' },
    { pattern: /^1[3-9]\d{9}$/, message: '请输入有效的手机号' },
  ],
  age: [{ required: true, message: '请输入年龄' }],
}

const handleValidate = async () => {
  try {
    await formRef.value?.validate()
    console.log('校验通过')
  } catch (error) {
    console.log('校验失败：', error)
  }
}

const handleClear = () => {
  formRef.value?.clearValidate()
}
</script>
