<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 基础嵌套用法 -->
    <section>
      <h4 style="margin-bottom: 8px">基础用法：嵌套 Checkbox</h4>
      <p style="color: #666; font-size: 13px; margin-bottom: 8px">
        不使用 options，直接在 CheckboxGroup 内嵌套 Checkbox 组件
      </p>
      <CheckboxGroup v-model:value="value1">
        <Checkbox value="apple"> 苹果 </Checkbox>
        <Checkbox value="banana"> 香蕉 </Checkbox>
        <Checkbox value="orange"> 橙子 </Checkbox>
      </CheckboxGroup>
      <p style="color: #666; font-size: 12px; margin-top: 8px">已选：{{ value1 }}</p>
    </section>

    <!-- 自定义布局 -->
    <section>
      <h4 style="margin-bottom: 8px">自定义布局</h4>
      <p style="color: #666; font-size: 13px; margin-bottom: 8px">嵌套方式可以完全自定义布局和样式</p>
      <CheckboxGroup v-model:value="value2">
        <div style="display: flex; flex-direction: column; gap: 12px">
          <div style="padding: 8px; background: #f5f5f5; border-radius: 4px">
            <Checkbox value="basic"> 基础版（免费） </Checkbox>
          </div>
          <div style="padding: 8px; background: #e6f4ff; border-radius: 4px">
            <Checkbox value="pro"> 专业版（¥99/月） </Checkbox>
          </div>
          <div style="padding: 8px; background: #fff7e6; border-radius: 4px">
            <Checkbox value="enterprise"> 企业版（¥999/月） </Checkbox>
          </div>
        </div>
      </CheckboxGroup>
      <p style="color: #666; font-size: 12px; margin-top: 8px">已选：{{ value2 }}</p>
    </section>

    <!-- 混合使用：options + 嵌套 Checkbox -->
    <section>
      <h4 style="margin-bottom: 8px">混合使用（不推荐）</h4>
      <p style="color: #666; font-size: 13px; margin-bottom: 8px">
        ⚠️ 当 CheckboxGroup 设置了 options 时，嵌套的 Checkbox 会被忽略
      </p>
      <CheckboxGroup v-model:value="value3" :options="simpleOptions">
        <Checkbox value="d"> D（会被忽略） </Checkbox>
        <Checkbox value="e"> E（会被忽略） </Checkbox>
      </CheckboxGroup>
      <p style="color: #666; font-size: 12px; margin-top: 8px">已选：{{ value3 }}（只有 options 中的选项生效）</p>
    </section>

    <!-- 嵌套 + 自定义内容 -->
    <section>
      <h4 style="margin-bottom: 8px">自定义复杂内容</h4>
      <CheckboxGroup v-model:value="value4">
        <div style="display: flex; flex-direction: column; gap: 16px">
          <div
            v-for="item in courses"
            :key="item.value"
            style="display: flex; align-items: start; padding: 12px; border: 1px solid #e8e8e8; border-radius: 6px"
          >
            <Checkbox :value="item.value" style="margin-top: 2px" />
            <div style="margin-left: 8px; flex: 1">
              <div style="font-weight: 500; margin-bottom: 4px">{{ item.title }}</div>
              <div style="font-size: 12px; color: #999">{{ item.desc }}</div>
              <div style="font-size: 12px; color: #1677ff; margin-top: 4px">{{ item.price }}</div>
            </div>
          </div>
        </div>
      </CheckboxGroup>
      <p style="color: #666; font-size: 12px; margin-top: 8px">已选：{{ value4 }}</p>
    </section>

    <!-- 网格布局嵌套 -->
    <section>
      <h4 style="margin-bottom: 8px">网格布局嵌套</h4>
      <CheckboxGroup v-model:value="value5">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px">
          <div
            v-for="item in tags"
            :key="item.value"
            style="
              padding: 8px 12px;
              border: 1px solid #d9d9d9;
              border-radius: 4px;
              text-align: center;
              cursor: pointer;
            "
            :style="{ borderColor: value5.includes(item.value) ? '#1677ff' : '#d9d9d9' }"
          >
            <Checkbox :value="item.value"> {{ item.label }} </Checkbox>
          </div>
        </div>
      </CheckboxGroup>
      <p style="color: #666; font-size: 12px; margin-top: 8px">已选：{{ value5 }}</p>
    </section>

    <!-- 说明 -->
    <section style="background: #f5f5f5; padding: 12px; border-radius: 4px">
      <h4 style="margin-bottom: 8px">使用建议</h4>
      <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: #666">
        <li><strong>简单场景</strong>：使用 <code>options</code> 属性，配置简洁</li>
        <li><strong>复杂布局</strong>：嵌套 <code>Checkbox</code>，灵活自定义</li>
        <li><strong>不要混用</strong>：有 options 时，嵌套的 Checkbox 会被忽略</li>
        <li>嵌套方式支持任意 HTML 结构和样式</li>
        <li>每个 Checkbox 必须设置唯一的 <code>value</code> 属性</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, CheckboxGroup } from '@hmfw/ant-design'

const value1 = ref<string[]>([])
const value2 = ref(['basic'])
const value3 = ref<string[]>([])
const value4 = ref<string[]>([])
const value5 = ref<string[]>([])

const simpleOptions = [
  { label: 'A', value: 'a' },
  { label: 'B', value: 'b' },
  { label: 'C', value: 'c' },
]

const courses = [
  {
    value: 'vue',
    title: 'Vue.js 从入门到精通',
    desc: '系统学习 Vue3 + TypeScript + Composition API',
    price: '¥199',
  },
  {
    value: 'react',
    title: 'React 核心进阶',
    desc: 'Hooks、状态管理、性能优化全覆盖',
    price: '¥299',
  },
  {
    value: 'node',
    title: 'Node.js 后端开发',
    desc: 'Express、数据库、RESTful API 实战',
    price: '¥249',
  },
]

const tags = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Node.js', value: 'node' },
  { label: 'TypeScript', value: 'ts' },
  { label: 'Webpack', value: 'webpack' },
]
</script>

<style scoped>
code {
  background: #fff;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
}
</style>
