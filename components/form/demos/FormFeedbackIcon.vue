<template>
  <div>
    <!--
      hasFeedback 在控件右侧渲染状态图标，四种状态各有对应图标与颜色。
      这里用 validateStatus 直接指定状态，便于一次看全；
      实际使用中状态通常由 rules 校验自动得出。
    -->
    <Form :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" style="max-width: 480px">
      <FormItem label="成功" has-feedback validate-status="success">
        <Input value="填写正确" />
      </FormItem>
      <FormItem label="警告" has-feedback validate-status="warning" help="内容可能不合适">
        <Input value="需要留意" />
      </FormItem>
      <FormItem label="错误" has-feedback validate-status="error" help="请检查输入">
        <Input value="填写有误" />
      </FormItem>
      <FormItem label="校验中" has-feedback validate-status="validating" help="正在校验…">
        <Input value="等待结果" />
      </FormItem>
    </Form>

    <!-- 与 rules 联动：失焦触发校验，图标随校验结果出现 -->
    <Form
      :model="formState"
      :rules="rules"
      validate-trigger="blur"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      style="max-width: 480px"
    >
      <FormItem label="邮箱" name="email" has-feedback>
        <Input v-model:value="formState.email" placeholder="失焦后校验，看图标变化" />
      </FormItem>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Form, FormItem, Input } from '@hmfw/ant-design'
import type { FormRule } from '@hmfw/ant-design'

const formState = reactive({
  email: '',
})

const rules: Record<string, FormRule | FormRule[]> = {
  email: [
    { required: true, message: '请输入邮箱' },
    { type: 'email', message: '邮箱格式不正确' },
  ],
}
</script>
