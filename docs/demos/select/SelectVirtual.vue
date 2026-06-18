<template>
  <div class="select-virtual-demo">
    <h4>虚拟滚动（10,000 个选项）</h4>
    <p style="margin-bottom: 16px; color: #666">使用虚拟滚动技术，即使有 10,000 个选项也能流畅交互</p>

    <div style="display: flex; gap: 16px; margin-bottom: 24px">
      <div style="flex: 1">
        <h5 style="margin-bottom: 8px">启用虚拟滚动 ✅</h5>
        <Select
          v-model:value="value1"
          :options="options"
          placeholder="选择一个选项"
          show-search
          style="width: 100%"
          virtual
          :list-height="256"
          :list-item-height="32"
        />
        <div style="margin-top: 8px; font-size: 12px; color: #8c8c8c">已选择：{{ value1 || '未选择' }}</div>
      </div>

      <div style="flex: 1">
        <h5 style="margin-bottom: 8px">普通模式（对比）</h5>
        <Select
          v-model:value="value2"
          :options="smallOptions"
          placeholder="选择一个选项"
          show-search
          style="width: 100%"
        />
        <div style="margin-top: 8px; font-size: 12px; color: #8c8c8c">仅 100 个选项用于对比</div>
      </div>
    </div>

    <div style="padding: 12px; background: #f5f5f5; border-radius: 4px">
      <strong>性能对比：</strong>
      <ul style="margin: 8px 0; padding-left: 20px">
        <li><strong>虚拟滚动模式：</strong>10,000 个选项，只渲染可见的 8-10 项，流畅无卡顿</li>
        <li><strong>普通模式：</strong>超过 1,000 个选项会明显卡顿，10,000 个会导致浏览器卡死</li>
      </ul>
      <div style="margin-top: 8px; color: #1890ff">💡 建议：当选项超过 100 个时启用 <code>virtual</code> 属性</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from 'ant-design-hmfw'

const value1 = ref<string>()
const value2 = ref<string>()

// 生成 10,000 个选项
const options = Array.from({ length: 10000 }, (_, i) => ({
  label: `选项 ${i + 1} - ${Math.random().toString(36).substring(7)}`,
  value: `option-${i + 1}`,
}))

// 生成 100 个选项用于对比
const smallOptions = options.slice(0, 100)
</script>

<style scoped>
.select-virtual-demo h4 {
  margin-bottom: 8px;
  color: #262626;
}

.select-virtual-demo h5 {
  font-weight: 600;
  color: #262626;
}

.select-virtual-demo code {
  padding: 2px 6px;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  font-family: 'Courier New', monospace;
}
</style>
