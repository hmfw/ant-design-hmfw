<template>
  <div class="form-advanced-api-demo">
    <h4>批量查询 API 演示</h4>
    <Form ref="formRef" :model="formState" :rules="rules" :layout="'vertical'" style="max-width: 600px">
      <FormItem label="用户名" name="username">
        <Input v-model:value="formState.username" placeholder="请输入用户名" />
      </FormItem>

      <FormItem label="邮箱" name="email">
        <Input v-model:value="formState.email" placeholder="请输入邮箱" />
      </FormItem>

      <FormItem label="密码" name="password">
        <Input v-model:value="formState.password" type="password" placeholder="请输入密码" />
      </FormItem>

      <FormItem>
        <Space>
          <Button type="primary" @click="handleValidate"> 验证表单 </Button>
          <Button @click="handleGetErrors"> 获取错误 </Button>
          <Button @click="handleCheckTouched"> 检查触摸状态 </Button>
          <Button @click="handleReset"> 重置 </Button>
        </Space>
      </FormItem>
    </Form>

    <div v-if="output" style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px">
      <h5>输出结果：</h5>
      <pre>{{ output }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Form, FormItem } from 'ant-design-hmfw'
import { Input } from 'ant-design-hmfw'
import { Button } from 'ant-design-hmfw'
import { Space } from 'ant-design-hmfw'

const formRef = ref()
const formState = reactive({
  username: '',
  email: '',
  password: '',
})

const rules = {
  username: [{ required: true, message: '请输入用户名' }],
  email: [
    { required: true, message: '请输入邮箱' },
    { type: 'email', message: '请输入有效的邮箱地址' },
  ],
  password: [
    { required: true, message: '请输入密码' },
    { min: 6, message: '密码至少6个字符' },
  ],
}

const output = ref('')

const handleValidate = async () => {
  try {
    await formRef.value?.validate()
    output.value = '✅ 表单验证通过'
  } catch (e) {
    output.value = '❌ 表单验证失败\n' + JSON.stringify(e, null, 2)
  }
}

const handleGetErrors = () => {
  const errors = formRef.value?.getFieldsError()
  output.value = 'getFieldsError() 结果：\n' + JSON.stringify(errors, null, 2)
}

const handleCheckTouched = () => {
  const touched = formRef.value?.isFieldsTouched()
  const allTouched = formRef.value?.isFieldsTouched(['username', 'email', 'password'], true)
  output.value = `isFieldsTouched(): ${touched}\nisFieldsTouched(所有字段, true): ${allTouched}`
}

const handleReset = () => {
  formRef.value?.resetFields()
  formState.username = ''
  formState.email = ''
  formState.password = ''
  output.value = '表单已重置'
}
</script>

<style scoped>
.form-advanced-api-demo h4 {
  margin-bottom: 16px;
}

.form-advanced-api-demo h5 {
  margin: 0 0 8px 0;
}

.form-advanced-api-demo pre {
  margin: 0;
  font-size: 12px;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
