<template>
  <div class="demo-form-classnames">
    <!-- 场景 1: 自定义 FormItem 标签 -->
    <section class="demo-section">
      <h3>1. 自定义标签样式</h3>
      <Form :model="state" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" style="max-width: 480px">
        <FormItem label="用户名" name="username" :class-names="{ label: 'custom-label' }">
          <Input v-model:value="state.username" placeholder="请输入用户名" />
        </FormItem>
      </Form>
    </section>

    <!-- 场景 2: 自定义控件区域 -->
    <section class="demo-section">
      <h3>2. 自定义控件区域样式</h3>
      <Form :model="state" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" style="max-width: 480px">
        <FormItem label="邮箱" name="email" :class-names="{ control: 'custom-control' }">
          <Input v-model:value="state.email" placeholder="请输入邮箱" />
        </FormItem>
      </Form>
    </section>

    <!-- 场景 3: 自定义错误反馈 -->
    <section class="demo-section">
      <h3>3. 自定义错误反馈样式</h3>
      <Form :model="state" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" style="max-width: 480px">
        <FormItem
          label="必填项"
          name="required"
          validate-status="error"
          help="这是一个自定义样式的错误信息"
          :class-names="{ feedback: 'custom-feedback' }"
        >
          <Input v-model:value="state.required" placeholder="触发错误" />
        </FormItem>
      </Form>
    </section>

    <!-- 场景 4: 自定义额外提示 -->
    <section class="demo-section">
      <h3>4. 自定义额外提示样式</h3>
      <Form :model="state" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" style="max-width: 480px">
        <FormItem
          label="昵称"
          name="nickname"
          extra="这是额外的提示信息，可自定义样式"
          :class-names="{ extra: 'custom-extra' }"
        >
          <Input v-model:value="state.nickname" placeholder="请输入昵称" />
        </FormItem>
      </Form>
    </section>

    <!-- 场景 5: 自定义表单项根节点 -->
    <section class="demo-section">
      <h3>5. 自定义表单项根节点样式</h3>
      <Form :model="state" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" style="max-width: 480px">
        <FormItem label="地址" name="address" :class-names="{ root: 'custom-item-root' }">
          <Input v-model:value="state.address" placeholder="请输入地址" />
        </FormItem>
      </Form>
    </section>

    <!-- 场景 6: 组合 + Form 根节点 styles -->
    <section class="demo-section">
      <h3>6. 组合使用 + Form 根节点 styles</h3>
      <Form
        :model="state"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 18 }"
        style="max-width: 480px"
        :styles="{ root: { padding: '24px', background: '#f9f0ff', borderRadius: '12px' } }"
      >
        <FormItem
          label="综合"
          name="combined"
          extra="组合演示"
          :class-names="{
            root: 'combined-item-root',
            label: 'combined-label',
            control: 'combined-control',
            extra: 'combined-extra',
          }"
        >
          <Input v-model:value="state.combined" placeholder="组合样式" />
        </FormItem>
      </Form>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Form, FormItem, Input } from 'ant-design-hmfw'

const state = reactive({
  username: '',
  email: '',
  required: '',
  nickname: '',
  address: '',
  combined: '',
})
</script>

<style scoped>
.demo-form-classnames {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.demo-section {
  padding: 16px;
  background: #fafafa;
  border-radius: 8px;
}

.demo-section h3 {
  margin: 0 0 16px 0;
  font-size: 14px;
  color: #666;
}

/* 场景 1: 自定义标签 */
:deep(.custom-label) label {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

/* 场景 2: 自定义控件区域 */
:deep(.custom-control) {
  padding: 8px;
  background: #e6f7ff;
  border-radius: 6px;
  border-left: 3px solid #1890ff;
}

/* 场景 3: 自定义错误反馈 */
:deep(.custom-feedback) {
  padding: 4px 12px;
  background: #fff1f0;
  border: 1px solid #ffccc7;
  border-radius: 4px;
  font-weight: 500;
  margin-top: 4px;
}

/* 场景 4: 自定义额外提示 */
:deep(.custom-extra) {
  padding: 4px 8px;
  background: #f6ffed;
  border-radius: 4px;
  color: #389e0d;
  font-size: 12px;
  margin-top: 4px;
}

/* 场景 5: 自定义表单项根节点 */
:deep(.custom-item-root) {
  padding: 12px;
  border: 2px dashed #722ed1;
  border-radius: 8px;
  background: #f9f0ff;
}

/* 场景 6: 组合样式 */
:deep(.combined-item-root) {
  padding: 12px;
  border: 1px solid #d3adf7;
  border-radius: 8px;
  background: white;
}

:deep(.combined-label) label {
  color: #722ed1;
  font-weight: 600;
}

:deep(.combined-control) {
  padding: 4px;
}

:deep(.combined-extra) {
  color: #9254de;
  font-size: 12px;
}
</style>
