<template>
  <Form
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="{ span: 6 }"
    :wrapper-col="{ span: 18 }"
    style="max-width: 520px"
  >
    <!-- v-model:value —— Input / Select / DatePicker / Rate / RadioGroup -->
    <FormItem label="姓名" name="name">
      <Input v-model:value="formState.name" placeholder="请输入姓名" />
    </FormItem>
    <FormItem label="性别" name="gender">
      <RadioGroup v-model:value="formState.gender" :options="genderOptions" />
    </FormItem>
    <FormItem label="城市" name="city">
      <Select v-model:value="formState.city" :options="cityOptions" placeholder="请选择城市" />
    </FormItem>
    <FormItem label="入职日期" name="joinDate">
      <DatePicker v-model:value="formState.joinDate" />
    </FormItem>
    <FormItem label="满意度" name="rate">
      <Rate v-model:value="formState.rate" />
    </FormItem>

    <!-- v-model:checked —— Checkbox / Switch 用的是 checked，不是 value -->
    <FormItem label="爱好" name="hobbies">
      <CheckboxGroup v-model:value="formState.hobbies" :options="hobbyOptions" />
    </FormItem>
    <FormItem label="接收通知" name="notify">
      <Switch v-model:checked="formState.notify" />
    </FormItem>

    <FormItem :wrapper-col="{ offset: 6, span: 18 }">
      <Button type="primary" @click="handleSubmit">提交</Button>
      <span style="margin-left: 12px">{{ result }}</span>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import {
  Form,
  FormItem,
  Input,
  Select,
  DatePicker,
  Rate,
  RadioGroup,
  CheckboxGroup,
  Switch,
  Button,
} from '@hmfw/ant-design'
import type { FormRule } from '@hmfw/ant-design'

const formRef = ref()
const result = ref('')

const formState = reactive({
  name: '',
  gender: 'male',
  city: undefined as string | undefined,
  joinDate: undefined as string | undefined,
  rate: 0,
  hobbies: [] as string[],
  notify: false,
})

// 非文本控件同样支持 rules：Select 必选、Rate 需大于 0
const rules: Record<string, FormRule | FormRule[]> = {
  name: { required: true, message: '请输入姓名' },
  city: { required: true, message: '请选择城市' },
  // 自定义 validator 通过 throw 报错，返回值不参与判定
  rate: {
    validator: (_rule, value) => {
      if (!Number(value)) throw new Error('请至少给 1 星')
    },
  },
}

const genderOptions = [
  { label: '男', value: 'male' },
  { label: '女', value: 'female' },
]

const cityOptions = [
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
]

const hobbyOptions = [
  { label: '阅读', value: 'reading' },
  { label: '运动', value: 'sports' },
  { label: '音乐', value: 'music' },
]

// validate() 校验通过时 resolve 出 model，失败时 throw 出错误详情，因此用 try/catch
async function handleSubmit() {
  try {
    await formRef.value?.validate()
    result.value = '校验通过'
  } catch {
    result.value = '校验未通过'
  }
}
</script>
