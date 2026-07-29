<template>
  <div style="display: flex; flex-direction: column; gap: 24px; max-width: 480px">
    <div>
      <p style="margin-bottom: 8px">change（默认）：输入时即时校验</p>
      <Form :model="stateA" validate-trigger="change">
        <FormItem label="邮箱" name="email" :rules="rules">
          <Input v-model:value="stateA.email" placeholder="随便输入几个字符看看" />
        </FormItem>
      </Form>
    </div>

    <div>
      <p style="margin-bottom: 8px">blur：失焦时才校验</p>
      <Form :model="stateB" validate-trigger="blur">
        <FormItem label="邮箱" name="email" :rules="rules">
          <Input v-model:value="stateB.email" placeholder="输入后点击别处" />
        </FormItem>
      </Form>
    </div>

    <div>
      <p style="margin-bottom: 8px">change + blur：两种时机都校验</p>
      <Form :model="stateC" :validate-trigger="['change', 'blur']">
        <FormItem label="邮箱" name="email" :rules="rules">
          <Input v-model:value="stateC.email" placeholder="请输入邮箱" />
        </FormItem>
      </Form>
    </div>

    <div>
      <p style="margin-bottom: 8px">单条规则指定 trigger：必填走 change，格式校验只在 blur 时执行</p>
      <Form :model="stateD" :validate-trigger="['change', 'blur']">
        <FormItem label="邮箱" name="email" :rules="mixedRules">
          <Input v-model:value="stateD.email" placeholder="请输入邮箱" />
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Form, FormItem, Input } from '@hmfw/ant-design'
import type { FormRule } from '@hmfw/ant-design'

const stateA = reactive({ email: '' })
const stateB = reactive({ email: '' })
const stateC = reactive({ email: '' })
const stateD = reactive({ email: '' })

const rules: FormRule[] = [{ type: 'email', message: '邮箱格式不正确' }]

// 规则上的 trigger 优先于 Form/FormItem 的 validateTrigger，可做更细的分级校验
const mixedRules: FormRule[] = [
  { required: true, message: '请输入邮箱', trigger: 'change' },
  { type: 'email', message: '邮箱格式不正确', trigger: 'blur' },
]
</script>
