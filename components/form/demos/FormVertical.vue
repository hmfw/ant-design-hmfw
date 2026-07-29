<template>
  <!-- 垂直布局：标签独占一行显示在控件上方，labelCol / wrapperCol 不再生效 -->
  <Form :model="formState" :rules="rules" layout="vertical" style="max-width: 480px">
    <FormItem label="用户名" name="username">
      <Input v-model:value="formState.username" placeholder="请输入用户名" />
    </FormItem>
    <FormItem label="所在城市" name="city">
      <Select v-model:value="formState.city" :options="cityOptions" placeholder="请选择城市" />
    </FormItem>
    <FormItem label="个人简介" name="bio">
      <TextArea v-model:value="formState.bio" :rows="3" placeholder="简单介绍一下自己" />
    </FormItem>
    <FormItem>
      <Button type="primary">提交</Button>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Form, FormItem, Input, Select, TextArea, Button } from '@hmfw/ant-design'
import type { FormRule } from '@hmfw/ant-design'

const formState = reactive({
  username: '',
  city: undefined as string | undefined,
  bio: '',
})

const rules: Record<string, FormRule | FormRule[]> = {
  username: { required: true, message: '请输入用户名' },
  city: { required: true, message: '请选择城市' },
}

const cityOptions = [
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'guangzhou', label: '广州' },
]
</script>
