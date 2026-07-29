<template>
  <Form
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="{ span: 6 }"
    :wrapper-col="{ span: 18 }"
    style="max-width: 480px"
  >
    <!--
      name 传数组即可绑定深层字段，中间层对象会按需自动创建。
      注意 rules 的键要用点号形式（如 'user.address.city'）：
      内部会把数组 name join 成点号 key，两者必须对应上才能命中规则。
    -->
    <FormItem label="姓名" :name="['user', 'name']">
      <Input v-model:value="formState.user.name" placeholder="请输入姓名" />
    </FormItem>
    <FormItem label="城市" :name="['user', 'address', 'city']">
      <Input v-model:value="formState.user.address.city" placeholder="请输入城市" />
    </FormItem>
    <FormItem label="邮编" :name="['user', 'address', 'zip']">
      <Input v-model:value="formState.user.address.zip" placeholder="6 位数字" />
    </FormItem>

    <FormItem :wrapper-col="{ offset: 6, span: 18 }">
      <Button type="primary" @click="handleSubmit">提交</Button>
      <Button style="margin-left: 8px" @click="formRef?.resetFields()">重置</Button>
    </FormItem>
  </Form>

  <pre style="margin-top: 8px; font-size: 12px">{{ JSON.stringify(formState, null, 2) }}</pre>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Form, FormItem, Input, Button } from '@hmfw/ant-design'
import type { FormRule } from '@hmfw/ant-design'

const formRef = ref()

const formState = reactive({
  user: {
    name: '张三',
    address: {
      city: '北京',
      zip: '',
    },
  },
})

// 键为点号路径，与数组 name 一一对应
const rules: Record<string, FormRule | FormRule[]> = {
  'user.name': { required: true, message: '请输入姓名' },
  'user.address.city': { required: true, message: '请输入城市' },
  'user.address.zip': { pattern: /^\d{6}$/, message: '邮编需为 6 位数字' },
}

// validate() 通过时 resolve 出 model，失败时 throw 出错误详情
async function handleSubmit() {
  try {
    const values = await formRef.value?.validate()
    console.log('校验通过', values)
  } catch (error) {
    console.log('校验失败', error)
  }
}
</script>
