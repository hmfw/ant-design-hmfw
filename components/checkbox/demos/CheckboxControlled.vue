<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 非受控模式 -->
    <section>
      <h4 style="margin-bottom: 8px">非受控模式（defaultChecked）</h4>
      <p style="color: #666; font-size: 13px; margin-bottom: 12px">使用 defaultChecked 设置初始值，组件内部管理状态</p>
      <div style="display: flex; flex-direction: column; gap: 8px">
        <Checkbox :default-checked="true"> 默认选中（defaultChecked=true） </Checkbox>
        <Checkbox :default-checked="false"> 默认未选中（defaultChecked=false） </Checkbox>
        <p style="color: #999; font-size: 12px">
          💡 非受控模式下，状态由组件内部管理，defaultChecked 仅在首次渲染时生效
        </p>
      </div>
    </section>

    <!-- 受控模式 -->
    <section>
      <h4 style="margin-bottom: 8px">受控模式（v-model:checked）</h4>
      <p style="color: #666; font-size: 13px; margin-bottom: 12px">
        使用 v-model:checked 或 :checked 绑定状态，外部完全控制
      </p>
      <div style="display: flex; flex-direction: column; gap: 8px">
        <Checkbox v-model:checked="controlledValue1"> 受控复选框 1 </Checkbox>
        <Checkbox v-model:checked="controlledValue2"> 受控复选框 2 </Checkbox>
        <div style="margin-top: 8px; display: flex; gap: 8px">
          <button @click="toggleAll">全选/取消</button>
          <button @click="resetAll">重置</button>
        </div>
        <p style="color: #666; font-size: 12px">
          状态：checked1={{ controlledValue1 }}, checked2={{ controlledValue2 }}
        </p>
      </div>
    </section>

    <!-- CheckboxGroup 受控/非受控 -->
    <section>
      <h4 style="margin-bottom: 8px">CheckboxGroup 受控/非受控</h4>
      <div style="display: flex; gap: 24px">
        <div style="flex: 1">
          <p style="color: #666; font-size: 13px; margin-bottom: 8px">非受控（defaultValue）</p>
          <CheckboxGroup :default-value="['A']" :options="groupOptions" />
        </div>
        <div style="flex: 1">
          <p style="color: #666; font-size: 13px; margin-bottom: 8px">受控（v-model:value）</p>
          <CheckboxGroup v-model:value="groupValue" :options="groupOptions" />
          <button style="margin-top: 8px" @click="groupValue = ['A', 'C']">选中 A & C</button>
          <p style="color: #666; font-size: 12px; margin-top: 4px">已选：{{ groupValue }}</p>
        </div>
      </div>
    </section>

    <!-- 说明 -->
    <section style="background: #f5f5f5; padding: 12px; border-radius: 4px">
      <h4 style="margin-bottom: 8px">使用建议</h4>
      <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: #666">
        <li><strong>非受控模式</strong>：适合简单场景，组件内部管理状态</li>
        <li><strong>受控模式</strong>：适合需要外部控制、联动逻辑的场景</li>
        <li>不要同时使用 defaultChecked 和 checked，后者优先级更高</li>
        <li>CheckboxGroup 同理：defaultValue vs v-model:value</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, CheckboxGroup } from '@hmfw/ant-design'

// 受控模式
const controlledValue1 = ref(false)
const controlledValue2 = ref(true)

const toggleAll = () => {
  const allChecked = controlledValue1.value && controlledValue2.value
  controlledValue1.value = !allChecked
  controlledValue2.value = !allChecked
}

const resetAll = () => {
  controlledValue1.value = false
  controlledValue2.value = false
}

// CheckboxGroup 受控模式
const groupValue = ref<string[]>(['B'])
const groupOptions = [
  { label: '选项 A', value: 'A' },
  { label: '选项 B', value: 'B' },
  { label: '选项 C', value: 'C' },
]
</script>
