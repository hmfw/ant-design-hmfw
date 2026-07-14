<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 整组禁用 -->
    <section>
      <h4 style="margin-bottom: 8px">整组禁用（disabled）</h4>
      <CheckboxGroup v-model:value="groupValue1" :options="plainOptions" disabled />
      <p style="color: #666; font-size: 12px; margin-top: 8px">已选：{{ groupValue1 }}（整组禁用后无法更改）</p>
    </section>

    <!-- 单项禁用 -->
    <section>
      <h4 style="margin-bottom: 8px">单项禁用</h4>
      <CheckboxGroup v-model:value="groupValue2" :options="optionsWithDisabled" />
      <p style="color: #666; font-size: 12px; margin-top: 8px">已选：{{ groupValue2 }}</p>
    </section>

    <!-- 选项级 disabled 覆盖组级 disabled -->
    <section>
      <h4 style="margin-bottom: 8px">选项级 disabled 覆盖组级</h4>
      <p style="color: #666; font-size: 13px; margin-bottom: 8px">
        当 CheckboxGroup 设置 disabled=true 时，选项可以通过 disabled=false 覆盖
      </p>
      <CheckboxGroup v-model:value="groupValue3" :options="optionsWithOverride" disabled />
      <p style="color: #666; font-size: 12px; margin-top: 8px">
        已选：{{ groupValue3 }}（选项 B 设置了 disabled=false，可以选中）
      </p>
    </section>

    <!-- 嵌套 Checkbox 的禁用 -->
    <section>
      <h4 style="margin-bottom: 8px">嵌套 Checkbox 的禁用</h4>
      <p style="color: #666; font-size: 13px; margin-bottom: 8px">
        在 CheckboxGroup 内直接使用 Checkbox 组件时的禁用行为
      </p>
      <CheckboxGroup v-model:value="groupValue4" disabled>
        <Checkbox value="a"> A（继承组的 disabled） </Checkbox>
        <Checkbox value="b" :disabled="false"> B（覆盖为 disabled=false） </Checkbox>
        <Checkbox value="c" disabled> C（显式设置 disabled=true） </Checkbox>
      </CheckboxGroup>
      <p style="color: #666; font-size: 12px; margin-top: 8px">已选：{{ groupValue4 }}</p>
    </section>

    <!-- 动态切换禁用状态 -->
    <section>
      <h4 style="margin-bottom: 8px">动态切换禁用状态</h4>
      <div style="margin-bottom: 8px">
        <button @click="groupDisabled = !groupDisabled">{{ groupDisabled ? '启用' : '禁用' }}整组</button>
      </div>
      <CheckboxGroup v-model:value="groupValue5" :options="plainOptions" :disabled="groupDisabled" />
      <p style="color: #666; font-size: 12px; margin-top: 8px">
        已选：{{ groupValue5 }}（当前状态：{{ groupDisabled ? '禁用' : '启用' }}）
      </p>
    </section>

    <!-- 说明 -->
    <section style="background: #f5f5f5; padding: 12px; border-radius: 4px">
      <h4 style="margin-bottom: 8px">禁用优先级</h4>
      <ol style="margin: 0; padding-left: 20px; font-size: 13px; color: #666">
        <li>选项级 disabled 优先级高于组级 disabled</li>
        <li>选项 disabled=false 可以覆盖组的 disabled=true</li>
        <li>选项 disabled=true 无法被组的 disabled=false 覆盖</li>
        <li>嵌套 Checkbox 继承组的 disabled，但可以显式覆盖</li>
      </ol>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, CheckboxGroup } from '@hmfw/ant-design'

const plainOptions = [
  { label: '选项 A', value: 'A' },
  { label: '选项 B', value: 'B' },
  { label: '选项 C', value: 'C' },
]

const optionsWithDisabled = [
  { label: '选项 A', value: 'A' },
  { label: '选项 B（禁用）', value: 'B', disabled: true },
  { label: '选项 C', value: 'C' },
  { label: '选项 D（禁用）', value: 'D', disabled: true },
]

const optionsWithOverride = [
  { label: '选项 A', value: 'A' },
  { label: '选项 B（可选）', value: 'B', disabled: false },
  { label: '选项 C', value: 'C' },
]

const groupValue1 = ref(['A', 'B'])
const groupValue2 = ref(['A'])
const groupValue3 = ref(['B'])
const groupValue4 = ref<string[]>([])
const groupValue5 = ref(['B'])
const groupDisabled = ref(false)
</script>
