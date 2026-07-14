<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 基础属性 -->
    <section>
      <h4 style="margin-bottom: 8px">基础属性：label 和 value</h4>
      <CheckboxGroup v-model:value="value1" :options="basicOptions" />
      <p style="color: #666; font-size: 12px; margin-top: 8px">已选：{{ value1 }}</p>
    </section>

    <!-- disabled 属性 -->
    <section>
      <h4 style="margin-bottom: 8px">disabled 属性</h4>
      <CheckboxGroup v-model:value="value2" :options="disabledOptions" />
      <p style="color: #666; font-size: 12px; margin-top: 8px">已选：{{ value2 }}</p>
    </section>

    <!-- style 和 className 属性 -->
    <section>
      <h4 style="margin-bottom: 8px">style 和 className 属性</h4>
      <CheckboxGroup v-model:value="value3" :options="styledOptions" />
      <p style="color: #666; font-size: 12px; margin-top: 8px">已选：{{ value3 }}</p>
    </section>

    <!-- title 属性（鼠标悬停提示） -->
    <section>
      <h4 style="margin-bottom: 8px">title 属性（悬停查看提示）</h4>
      <CheckboxGroup v-model:value="value4" :options="titleOptions" />
      <p style="color: #666; font-size: 12px; margin-top: 8px">已选：{{ value4 }}</p>
    </section>

    <!-- id 属性 -->
    <section>
      <h4 style="margin-bottom: 8px">id 属性</h4>
      <p style="color: #666; font-size: 13px; margin-bottom: 8px">每个选项可以设置独立的 id，配合 label[for] 使用</p>
      <CheckboxGroup v-model:value="value5" :options="idOptions" />
      <p style="color: #666; font-size: 12px; margin-top: 8px">已选：{{ value5 }}</p>
    </section>

    <!-- required 属性 -->
    <section>
      <h4 style="margin-bottom: 8px">required 属性</h4>
      <p style="color: #666; font-size: 13px; margin-bottom: 8px">设置 required 后，表单提交时浏览器会进行原生验证</p>
      <form style="display: flex; flex-direction: column; gap: 8px" @submit.prevent="handleSubmit">
        <CheckboxGroup v-model:value="value6" :options="requiredOptions" />
        <button
          type="submit"
          style="padding: 4px 16px; background: #1677ff; color: #fff; border: none; border-radius: 4px; width: 100px"
        >
          提交
        </button>
      </form>
      <p style="color: #666; font-size: 12px; margin-top: 8px">已选：{{ value6 }}（至少选一项才能提交）</p>
    </section>

    <!-- 完整配置示例 -->
    <section>
      <h4 style="margin-bottom: 8px">完整配置示例</h4>
      <p style="color: #666; font-size: 13px; margin-bottom: 8px">展示所有可用属性的综合应用</p>
      <CheckboxGroup v-model:value="value7" :options="fullOptions" />
      <p style="color: #666; font-size: 12px; margin-top: 8px">已选：{{ value7 }}</p>
    </section>

    <!-- 动态配置示例 -->
    <section>
      <h4 style="margin-bottom: 8px">动态配置示例</h4>
      <p style="color: #666; font-size: 13px; margin-bottom: 8px">根据用户角色动态调整选项配置</p>
      <div style="margin-bottom: 8px">
        <label>
          <input v-model="isAdmin" type="checkbox" />
          管理员模式
        </label>
      </div>
      <CheckboxGroup v-model:value="value8" :options="dynamicOptions" />
      <p style="color: #666; font-size: 12px; margin-top: 8px">已选：{{ value8 }}</p>
    </section>

    <!-- 说明 -->
    <section style="background: #f5f5f5; padding: 12px; border-radius: 4px">
      <h4 style="margin-bottom: 8px">CheckboxOptionType 属性</h4>
      <table style="width: 100%; font-size: 13px; border-collapse: collapse">
        <thead>
          <tr style="border-bottom: 1px solid #d9d9d9">
            <th style="text-align: left; padding: 4px">属性</th>
            <th style="text-align: left; padding: 4px">说明</th>
            <th style="text-align: left; padding: 4px">类型</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 4px"><code>label</code></td>
            <td style="padding: 4px">显示文本</td>
            <td style="padding: 4px">string</td>
          </tr>
          <tr>
            <td style="padding: 4px"><code>value</code></td>
            <td style="padding: 4px">选项值（必需）</td>
            <td style="padding: 4px">string | number | boolean</td>
          </tr>
          <tr>
            <td style="padding: 4px"><code>disabled</code></td>
            <td style="padding: 4px">是否禁用</td>
            <td style="padding: 4px">boolean</td>
          </tr>
          <tr>
            <td style="padding: 4px"><code>style</code></td>
            <td style="padding: 4px">自定义样式</td>
            <td style="padding: 4px">CSSProperties</td>
          </tr>
          <tr>
            <td style="padding: 4px"><code>className</code></td>
            <td style="padding: 4px">自定义类名</td>
            <td style="padding: 4px">string</td>
          </tr>
          <tr>
            <td style="padding: 4px"><code>title</code></td>
            <td style="padding: 4px">鼠标悬停提示</td>
            <td style="padding: 4px">string</td>
          </tr>
          <tr>
            <td style="padding: 4px"><code>id</code></td>
            <td style="padding: 4px">input 元素 id</td>
            <td style="padding: 4px">string</td>
          </tr>
          <tr>
            <td style="padding: 4px"><code>required</code></td>
            <td style="padding: 4px">是否必选</td>
            <td style="padding: 4px">boolean</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { CheckboxGroup } from '@hmfw/ant-design'
import type { CheckboxOptionType } from '@hmfw/ant-design'

const basicOptions: CheckboxOptionType[] = [
  { label: '选项 A', value: 'A' },
  { label: '选项 B', value: 'B' },
  { label: '选项 C', value: 'C' },
]

const disabledOptions: CheckboxOptionType[] = [
  { label: '正常选项', value: '1' },
  { label: '禁用选项', value: '2', disabled: true },
  { label: '禁用且选中', value: '3', disabled: true },
]

const styledOptions: CheckboxOptionType[] = [
  { label: '默认样式', value: '1' },
  {
    label: '蓝色背景',
    value: '2',
    style: { background: '#e6f4ff', padding: '4px 8px', borderRadius: '4px' },
  },
  {
    label: '红色字体',
    value: '3',
    style: { color: '#ff4d4f', fontWeight: 'bold' },
    className: 'custom-checkbox',
  },
]

const titleOptions: CheckboxOptionType[] = [
  { label: 'Vue.js', value: 'vue', title: '渐进式 JavaScript 框架' },
  { label: 'React', value: 'react', title: '用于构建用户界面的 JavaScript 库' },
  { label: 'Angular', value: 'angular', title: '现代 Web 开发平台' },
]

const idOptions: CheckboxOptionType[] = [
  { label: '选项 1', value: '1', id: 'option-1' },
  { label: '选项 2', value: '2', id: 'option-2' },
  { label: '选项 3', value: '3', id: 'option-3' },
]

const requiredOptions: CheckboxOptionType[] = [
  { label: '选项 1（必选）', value: '1', required: true },
  { label: '选项 2', value: '2' },
  { label: '选项 3', value: '3' },
]

const fullOptions: CheckboxOptionType[] = [
  {
    label: '完整配置 1',
    value: 'full1',
    disabled: false,
    style: { background: '#f0f0f0', padding: '6px 12px', borderRadius: '4px' },
    className: 'full-option',
    title: '这是一个完整配置的选项',
    id: 'full-option-1',
    required: false,
  },
  {
    label: '完整配置 2（禁用）',
    value: 'full2',
    disabled: true,
    style: { opacity: 0.6 },
    title: '该选项已禁用',
    id: 'full-option-2',
  },
]

const isAdmin = ref(false)
const dynamicOptions = computed<CheckboxOptionType[]>(() => [
  { label: '基础权限', value: 'basic' },
  { label: '编辑权限', value: 'edit', disabled: !isAdmin.value },
  { label: '删除权限', value: 'delete', disabled: !isAdmin.value },
  { label: '管理权限', value: 'admin', disabled: !isAdmin.value },
])

const value1 = ref<string[]>([])
const value2 = ref(['3'])
const value3 = ref<string[]>([])
const value4 = ref<string[]>([])
const value5 = ref<string[]>([])
const value6 = ref<string[]>([])
const value7 = ref<string[]>([])
const value8 = ref(['basic'])

const handleSubmit = () => {
  if (value6.value.length === 0) {
    alert('请至少选择一项')
  } else {
    alert(`提交成功：${value6.value.join(', ')}`)
  }
}
</script>

<style scoped>
code {
  background: #fff;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
}

:deep(.custom-checkbox) {
  font-style: italic;
}

:deep(.full-option) {
  transition: all 0.2s;
}

:deep(.full-option:hover) {
  transform: translateY(-2px);
}
</style>
