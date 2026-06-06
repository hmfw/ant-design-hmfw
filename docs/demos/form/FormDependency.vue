<template>
  <div class="form-dependency-demo">
    <h4>表单联动场景演示</h4>

    <Form
      ref="formRef"
      :model="formState"
      :rules="rules"
      :layout="'vertical'"
      style="max-width: 600px"
    >
      <FormItem label="联系方式类型" name="contactType">
        <Select v-model:value="formState.contactType" placeholder="请选择">
          <SelectOption value="email">邮箱</SelectOption>
          <SelectOption value="phone">手机号</SelectOption>
        </Select>
      </FormItem>

      <FormItem
        :label="formState.contactType === 'email' ? '邮箱地址' : '手机号码'"
        name="contact"
      >
        <Input
          v-model:value="formState.contact"
          :placeholder="formState.contactType === 'email' ? '请输入邮箱' : '请输入手机号'"
        />
      </FormItem>

      <FormItem label="密码" name="password">
        <Input v-model:value="formState.password" type="password" placeholder="请输入密码" />
      </FormItem>

      <FormItem label="确认密码" name="confirmPassword">
        <Input
          v-model:value="formState.confirmPassword"
          type="password"
          placeholder="请再次输入密码"
        />
      </FormItem>

      <FormItem label="是否需要通知" name="needNotify">
        <Switch v-model:checked="formState.needNotify" />
      </FormItem>

      <FormItem v-if="formState.needNotify" label="通知邮箱" name="notifyEmail">
        <Input v-model:value="formState.notifyEmail" placeholder="请输入通知邮箱" />
      </FormItem>

      <FormItem>
        <Space>
          <Button type="primary" @click="handleSubmit">提交</Button>
          <Button @click="handleReset">重置</Button>
        </Space>
      </FormItem>
    </Form>

    <div v-if="result" style="margin-top: 16px; padding: 12px; background: #f0f9ff; border-radius: 4px; border: 1px solid #91d5ff">
      <pre>{{ result }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import { Form, FormItem } from '../../../components/form'
import { Input } from '../../../components/input'
import { Button } from '../../../components/button'
import { Space } from '../../../components/space'
import { Select, SelectOption } from '../../../components/select'
import { Switch } from '../../../components/switch'

const formRef = ref()
const formState = reactive({
  contactType: 'email',
  contact: '',
  password: '',
  confirmPassword: '',
  needNotify: false,
  notifyEmail: '',
})

const result = ref('')

// 动态规则：根据联系方式类型切换验证规则
const rules = computed(() => ({
  contactType: [{ required: true, message: '请选择联系方式类型' }],
  contact: [
    { required: true, message: '请输入联系方式' },
    formState.contactType === 'email'
      ? { type: 'email' as const, message: '请输入有效的邮箱地址' }
      : { pattern: /^1[3-9]\d{9}$/, message: '请输入有效的手机号' },
  ],
  password: [
    { required: true, message: '请输入密码' },
    { min: 6, message: '密码至少6个字符' },
  ],
  confirmPassword: [
    { required: true, message: '请确认密码' },
    {
      validator: (_rule: any, value: any) => {
        if (value && value !== formState.password) {
          return Promise.reject('两次输入的密码不一致')
        }
        return Promise.resolve()
      },
    },
  ],
  notifyEmail: formState.needNotify
    ? [
        { required: true, message: '请输入通知邮箱' },
        { type: 'email' as const, message: '请输入有效的邮箱地址' },
      ]
    : [],
}))

// 监听密码变化，自动重新验证确认密码
watch(() => formState.password, () => {
  if (formState.confirmPassword) {
    formRef.value?.validateFields(['confirmPassword']).catch(() => {})
  }
})

// 监听联系方式类型变化，清空联系方式输入并重新验证
watch(() => formState.contactType, () => {
  formState.contact = ''
  if (formRef.value) {
    formRef.value.clearValidate(['contact'])
  }
})

const handleSubmit = async () => {
  try {
    await formRef.value?.validate()
    result.value = '✅ 提交成功！\n' + JSON.stringify(formState, null, 2)
  } catch (e) {
    result.value = '❌ 验证失败，请检查表单'
  }
}

const handleReset = () => {
  formRef.value?.resetFields()
  formState.contactType = 'email'
  formState.contact = ''
  formState.password = ''
  formState.confirmPassword = ''
  formState.needNotify = false
  formState.notifyEmail = ''
  result.value = ''
}
</script>

<style scoped>
.form-dependency-demo h4 {
  margin-bottom: 16px;
}

.form-dependency-demo pre {
  margin: 0;
  font-size: 12px;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
