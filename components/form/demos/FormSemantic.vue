<template>
  <!-- Form 自身仅有 root 一个语义节点，真正的分区语义在 FormItem 上（label / control / feedback / extra） -->
  <!-- 因此这里以 Form.Item 为主体演示，用 validateStatus + help 触发反馈信息，用 extra 触发额外提示 -->
  <SemanticPreview component="Form.Item" :semantics="semantics" :height="220">
    <template #default="{ classNames }">
      <Form layout="vertical" style="width: 100%; max-width: 360px">
        <FormItem
          label="用户名"
          help="用户名已被占用，请更换"
          extra="支持字母、数字与下划线，长度 4-16 位"
          validate-status="error"
          :class-names="classNames"
        >
          <Input placeholder="请输入用户名" />
        </FormItem>
      </Form>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Form, FormItem, Input } from '@hmfw/ant-design'

// 与 FormItemClassNames / FormItemStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '表单项根节点（div.hmfw-form-item）。承载单个字段的整体间距与校验态类名（has-error / has-warning / has-success），始终渲染。',
  },
  {
    name: 'label',
    desc: '标签区域（div.hmfw-form-item-label）。承载标签文字、必填星号、冒号与 tooltip 图标，仅在设置 label 属性或 label 插槽时渲染。',
  },
  {
    name: 'control',
    desc: '控件区域（div.hmfw-form-item-control）。包裹表单控件、反馈信息与额外提示，承载控件区的对齐与宽度，始终渲染。',
  },
  {
    name: 'feedback',
    desc: '错误/帮助信息（div.hmfw-form-item-explain）。承载校验反馈文案与其颜色，仅在存在校验错误或传入 help 时渲染。',
  },
  {
    name: 'extra',
    desc: '额外提示（div.hmfw-form-item-extra）。承载字段下方的辅助说明文字，仅在设置 extra 属性时渲染。',
  },
]
</script>
