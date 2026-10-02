<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 440px">
    <!-- 文本标签 -->
    <Input v-model:value="value1" addon-before="https://" addon-after=".com" placeholder="请输入网址" />

    <!-- 单侧标签 -->
    <Input v-model:value="value2" addon-before="金额" addon-after="元" placeholder="请输入金额" />

    <!-- 图标标签 -->
    <Input v-model:value="value3" placeholder="请输入内容">
      <template #addonBefore>
        <SettingOutlined />
      </template>
    </Input>

    <!-- 配合 Select 作为前置标签 -->
    <Input v-model:value="value4" placeholder="请输入站点">
      <template #addonBefore>
        <Select v-model:value="protocol" :options="protocolOptions" style="width: 90px" />
      </template>
    </Input>

    <!-- 与前后缀、尺寸组合 -->
    <Input
      v-model:value="value5"
      addon-before="用户"
      :prefix="UserOutlined"
      allow-clear
      placeholder="大号 + 前缀 + 清除"
      size="large"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input, Select } from '@hmfw/ant-design'
import { SettingOutlined, UserOutlined } from '@hmfw/icons'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const protocol = ref('https://')
const protocolOptions = [
  { value: 'https://', label: 'https://' },
  { value: 'http://', label: 'http://' },
]
</script>
