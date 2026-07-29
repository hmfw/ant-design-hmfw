<template>
  <div>
    <RadioGroup v-model:value="size" :options="sizeOptions" option-type="button" style="margin-bottom: 16px" />

    <!-- Form 的 size 会通过 context 下发给内部所有表单控件 -->
    <Form :model="formState" :size="size" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" style="max-width: 480px">
      <FormItem label="用户名" name="username">
        <Input v-model:value="formState.username" placeholder="请输入用户名" />
      </FormItem>
      <FormItem label="城市" name="city">
        <Select v-model:value="formState.city" :options="cityOptions" placeholder="请选择城市" />
      </FormItem>
      <FormItem :wrapper-col="{ offset: 6, span: 18 }">
        <Button type="primary">提交</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Form, FormItem, Input, Select, Button, RadioGroup } from '@hmfw/ant-design'
import type { ComponentSize } from '@hmfw/ant-design'

const size = ref<ComponentSize>('middle')

const sizeOptions = [
  { label: '小', value: 'small' },
  { label: '中（默认）', value: 'middle' },
  { label: '大', value: 'large' },
]

const formState = reactive({
  username: '',
  city: undefined as string | undefined,
})

const cityOptions = [
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
]
</script>
