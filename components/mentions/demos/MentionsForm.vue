<template>
  <Form :model="formState" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" @finish="handleFinish">
    <FormItem label="提及用户" name="mentions" :rules="[{ required: true, message: '请至少提及一个用户' }]">
      <Mentions v-model:value="formState.mentions" :options="options" placeholder="输入 @ 提及用户（必填）" />
    </FormItem>

    <FormItem
      label="评论内容"
      name="comment"
      :rules="[
        { required: true, message: '请输入评论内容' },
        { min: 10, message: '评论内容至少 10 个字符' },
      ]"
    >
      <Mentions
        v-model:value="formState.comment"
        :options="options"
        :rows="4"
        placeholder="输入评论内容，可以 @ 提及用户..."
      />
    </FormItem>

    <FormItem label="话题标签" name="tags">
      <Mentions
        v-model:value="formState.tags"
        :options="topicOptions"
        prefix="#"
        placeholder="输入 # 添加话题标签（可选）"
      />
    </FormItem>

    <FormItem :wrapper-col="{ offset: 6, span: 18 }">
      <Space>
        <Button type="primary" html-type="submit">提交</Button>
        <Button @click="handleReset">重置</Button>
      </Space>
    </FormItem>

    <Divider />

    <div v-if="submittedData" style="padding: 16px; background: #f5f5f5; border-radius: 8px">
      <div style="font-weight: 500; margin-bottom: 12px">提交的数据：</div>
      <pre style="margin: 0; white-space: pre-wrap">{{ JSON.stringify(submittedData, null, 2) }}</pre>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Form, FormItem, Mentions, Button, Space, Divider, message } from '@hmfw/ant-design'

const options = [
  { value: 'alice', label: 'Alice Wang' },
  { value: 'bob', label: 'Bob Chen' },
  { value: 'charlie', label: 'Charlie Li' },
  { value: 'dave', label: 'Dave Zhang' },
]

const topicOptions = [
  { value: 'vue', label: 'Vue.js' },
  { value: 'react', label: 'React' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
]

const formState = reactive({
  mentions: '',
  comment: '',
  tags: '',
})

const submittedData = ref<any>(null)

const handleFinish = (values: any) => {
  submittedData.value = values
  message.success('提交成功！')
}

const handleReset = () => {
  formState.mentions = ''
  formState.comment = ''
  formState.tags = ''
  submittedData.value = null
}
</script>
