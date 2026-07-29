<template>
  <div>
    <RadioGroup v-model:value="requiredMark" :options="markOptions" option-type="button" style="margin-bottom: 16px" />

    <!--
      requiredMark 三种模式：
      true       —— 默认，必填项标签前显示红色星号
      false      —— 隐藏所有必填标记
      'optional' —— 反向标注，改为在「非必填项」后标注"可选"
    -->
    <Form
      :model="formState"
      :rules="rules"
      :required-mark="requiredMark"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      style="max-width: 480px"
    >
      <FormItem label="用户名" name="username">
        <Input v-model:value="formState.username" placeholder="必填字段" />
      </FormItem>
      <FormItem label="昵称" name="nickname">
        <Input v-model:value="formState.nickname" placeholder="选填字段" />
      </FormItem>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Form, FormItem, Input, RadioGroup } from '@hmfw/ant-design'
import type { FormRule } from '@hmfw/ant-design'

const requiredMark = ref<boolean | 'optional'>(true)

const markOptions = [
  { label: 'true（默认）', value: true },
  { label: 'false', value: false },
  { label: "'optional'", value: 'optional' },
]

const formState = reactive({
  username: '',
  nickname: '',
})

// 只有 username 必填，三种模式的差异才能看出来
const rules: Record<string, FormRule | FormRule[]> = {
  username: { required: true, message: '请输入用户名' },
}
</script>
