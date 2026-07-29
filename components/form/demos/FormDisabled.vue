<template>
  <div>
    <Switch v-model:checked="disabled" style="margin-bottom: 16px" />
    <span style="margin-left: 8px">整体禁用：{{ disabled ? '开' : '关' }}</span>

    <!-- Form 的 disabled 会下发给内部所有控件；控件也可自行覆盖 -->
    <Form
      :model="formState"
      :disabled="disabled"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      style="max-width: 480px; margin-top: 16px"
    >
      <FormItem label="用户名" name="username">
        <Input v-model:value="formState.username" placeholder="请输入用户名" />
      </FormItem>
      <FormItem label="备注" name="remark">
        <TextArea v-model:value="formState.remark" :rows="2" placeholder="请输入备注" />
      </FormItem>
      <FormItem label="订阅" name="subscribe">
        <Checkbox v-model:checked="formState.subscribe">接收邮件通知</Checkbox>
      </FormItem>
      <FormItem :wrapper-col="{ offset: 6, span: 18 }">
        <Button type="primary">提交</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Form, FormItem, Input, TextArea, Checkbox, Button, Switch } from '@hmfw/ant-design'

const disabled = ref(true)

const formState = reactive({
  username: '',
  remark: '',
  subscribe: false,
})
</script>
