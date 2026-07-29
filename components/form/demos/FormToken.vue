<template>
  <div>
    <RadioGroup v-model:value="preset" :options="presetOptions" option-type="button" style="margin-bottom: 16px" />

    <!-- Form 样式消费全局 Token，ConfigProvider 改主题后错误色/字号会跟随变化 -->
    <ConfigProvider :theme="theme">
      <Form
        ref="formRef"
        :model="formState"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 18 }"
        style="max-width: 480px"
      >
        <FormItem label="邮箱" name="email" :rules="[{ required: true, message: '请输入邮箱' }]">
          <Input v-model:value="formState.email" placeholder="留空后点击校验，观察错误色" />
        </FormItem>
        <FormItem label="备注" name="remark" extra="这行说明文字使用次要文本色 Token">
          <Input v-model:value="formState.remark" />
        </FormItem>
        <FormItem :wrapper-col="{ offset: 6, span: 18 }">
          <Button type="primary" @click="handleValidate">校验</Button>
        </FormItem>
      </Form>
    </ConfigProvider>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { Form, FormItem, Input, Button, RadioGroup, ConfigProvider } from '@hmfw/ant-design'

const formRef = ref<InstanceType<typeof Form> | null>(null)
const preset = ref<'default' | 'red' | 'large'>('default')

const presetOptions = [
  { label: '默认主题', value: 'default' },
  { label: '橙色错误提示', value: 'red' },
  { label: '大字号', value: 'large' },
]

const theme = computed(() => {
  if (preset.value === 'red') return { colorError: '#fa541c' }
  if (preset.value === 'large') return { fontSizeBase: 16 }
  return {}
})

const formState = reactive({ email: '', remark: '' })

const handleValidate = () => {
  formRef.value?.validate().catch(() => {})
}
</script>
