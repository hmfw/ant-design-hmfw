<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 600px">
    <!-- 基础用法 -->
    <TextArea v-model:value="text1" placeholder="基础文本域，固定 4 行" :rows="4" />

    <!-- 自适应高度 -->
    <TextArea v-model:value="text2" placeholder="自适应高度（内容变化时自动调整）" auto-size />

    <!-- 限制行数范围 -->
    <TextArea
      v-model:value="text3"
      placeholder="限制高度：最少 2 行，最多 6 行"
      :auto-size="{ minRows: 2, maxRows: 6 }"
    />

    <!-- 显示字符计数 -->
    <TextArea v-model:value="text4" placeholder="显示字符计数" :maxlength="100" show-count />

    <!-- 自定义计数策略：按字节数（中文算2个字符） -->
    <TextArea
      v-model:value="text5"
      placeholder="按字节计数（中文算2字符，最多20字节）"
      :count="{
        show: true,
        max: 20,
        strategy: (txt) => {
          return txt.split('').reduce((len, char) => {
            return len + (char.charCodeAt(0) > 255 ? 2 : 1)
          }, 0)
        },
      }"
    />

    <!-- 自定义显示格式 -->
    <TextArea
      v-model:value="text6"
      placeholder="自定义计数显示格式"
      :count="{
        show: true,
        max: 50,
        showFormatter: ({ count, maxLength }) => `已输入 ${count} / ${maxLength} 字符`,
      }"
    />

    <!-- 组合功能：自适应高度 + 计数 + 清除按钮 -->
    <TextArea
      v-model:value="text7"
      placeholder="组合功能：自适应高度 + 字符计数 + 清除按钮"
      auto-size
      show-count
      allow-clear
      :maxlength="200"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TextArea } from '@hmfw/ant-design'

const text1 = ref('')
const text2 = ref('')
const text3 = ref('第一行\n第二行\n第三行')
const text4 = ref('')
const text5 = ref('测试')
const text6 = ref('')
const text7 = ref('')
</script>
