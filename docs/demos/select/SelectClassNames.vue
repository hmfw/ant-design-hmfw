<template>
  <div class="demo-select-classnames">
    <!-- 场景 1: 自定义根节点 -->
    <section class="demo-section">
      <h3>1. 自定义根节点样式</h3>
      <Select
        v-model:value="value1"
        :options="options"
        :class-names="{ root: 'custom-root' }"
        placeholder="请选择"
        style="width: 240px"
      />
    </section>

    <!-- 场景 2: 自定义选择器 -->
    <section class="demo-section">
      <h3>2. 自定义选择器样式</h3>
      <Select
        v-model:value="value2"
        :options="options"
        :class-names="{ selector: 'custom-selector' }"
        placeholder="请选择"
        style="width: 240px"
      />
    </section>

    <!-- 场景 3: 自定义占位符 -->
    <section class="demo-section">
      <h3>3. 自定义占位符样式</h3>
      <Select
        v-model:value="value3"
        :options="options"
        :class-names="{ placeholder: 'custom-placeholder' }"
        placeholder="自定义占位符样式"
        style="width: 240px"
      />
    </section>

    <!-- 场景 4: 自定义下拉面板 -->
    <section class="demo-section">
      <h3>4. 自定义下拉面板样式</h3>
      <Select
        v-model:value="value4"
        :options="options"
        :class-names="{ dropdown: 'custom-dropdown' }"
        placeholder="点击查看下拉面板"
        style="width: 240px"
      />
    </section>

    <!-- 场景 5: 自定义选项 -->
    <section class="demo-section">
      <h3>5. 自定义选项样式</h3>
      <Select
        v-model:value="value5"
        :options="options"
        :class-names="{ option: 'custom-option', optionLabel: 'custom-option-label' }"
        placeholder="点击查看选项"
        style="width: 240px"
      />
    </section>

    <!-- 场景 6: 多选模式自定义标签 -->
    <section class="demo-section">
      <h3>6. 多选模式自定义标签样式</h3>
      <Select
        v-model:value="value6"
        :options="options"
        mode="multiple"
        :class-names="{ item: 'custom-item' }"
        placeholder="多选"
        style="width: 320px"
      />
    </section>

    <!-- 场景 7: 组合使用多个 classNames -->
    <section class="demo-section">
      <h3>7. 组合使用多个 classNames</h3>
      <Select
        v-model:value="value7"
        :options="options"
        :class-names="{
          root: 'combined-root',
          selector: 'combined-selector',
          arrow: 'combined-arrow',
          dropdown: 'combined-dropdown',
          option: 'combined-option',
        }"
        placeholder="综合样式"
        style="width: 280px"
      />
    </section>

    <!-- 场景 8: 使用 styles prop -->
    <section class="demo-section">
      <h3>8. 使用 styles 动态样式</h3>
      <Select
        v-model:value="value8"
        :options="options"
        :styles="{
          root: { borderRadius: '20px', overflow: 'hidden' },
          selector: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none' },
          dropdown: { borderRadius: '12px', boxShadow: '0 8px 24px rgba(102, 126, 234, 0.3)' },
        }"
        placeholder="动态样式"
        style="width: 280px"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '../../../components'

const options = [
  { label: '苹果 🍎', value: 'apple' },
  { label: '香蕉 🍌', value: 'banana' },
  { label: '橙子 🍊', value: 'orange' },
  { label: '草莓 🍓', value: 'strawberry' },
  { label: '葡萄 🍇', value: 'grape' },
]

const value1 = ref(undefined)
const value2 = ref(undefined)
const value3 = ref(undefined)
const value4 = ref(undefined)
const value5 = ref(undefined)
const value6 = ref([])
const value7 = ref(undefined)
const value8 = ref(undefined)
</script>

<style scoped>
.demo-select-classnames {
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

/* 场景 1: 自定义根节点 */
:deep(.custom-root) {
  border: 2px solid #722ed1;
  border-radius: 8px;
  transition: all 0.3s ease;
}

:deep(.custom-root:hover) {
  box-shadow: 0 0 0 4px rgba(114, 46, 209, 0.15);
}

/* 场景 2: 自定义选择器 */
:deep(.custom-selector) {
  background: linear-gradient(135deg, #fa8bff 0%, #2bd2ff 52%, #2bff88 90%) !important;
  color: white !important;
  border: none !important;
}

:deep(.custom-selector .hmfw-select-selection-placeholder) {
  color: rgba(255, 255, 255, 0.85);
}

/* 场景 3: 自定义占位符 */
:deep(.custom-placeholder) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-style: italic;
}

/* 场景 6: 自定义多选标签 */
:deep(.custom-item) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  border-radius: 12px !important;
  border: none !important;
  padding: 2px 12px !important;
}

/* 场景 7: 组合样式 */
:deep(.combined-root) {
  border: 2px dashed #fa541c;
  border-radius: 12px;
}

:deep(.combined-selector) {
  background: #fff7e6 !important;
  border: none !important;
}

:deep(.combined-arrow) {
  color: #fa541c !important;
}
</style>

<!-- 全局样式：用于 Teleport 到 body 的 dropdown -->
<style>
/* 场景 4: 自定义下拉面板 */
.custom-dropdown {
  border: 2px solid #fa541c !important;
  border-radius: 12px !important;
  box-shadow: 0 8px 24px rgba(250, 84, 28, 0.2) !important;
  padding: 4px !important;
}

/* 场景 5: 自定义选项 */
.custom-option {
  border-radius: 6px !important;
  margin: 2px 0 !important;
  transition: all 0.2s ease !important;
}

.custom-option:hover {
  transform: translateX(4px);
}

.custom-option-label {
  font-weight: 500 !important;
  color: #389e0d !important;
}

/* 场景 7 - 组合样式 dropdown 部分 */
.combined-dropdown {
  background: linear-gradient(135deg, #fff7e6 0%, #fff1b8 100%) !important;
  border-radius: 12px !important;
  border: 2px solid #fa541c !important;
}

.combined-option {
  border-radius: 6px !important;
  margin: 2px 0 !important;
  color: #d4380d !important;
}

.combined-option:hover {
  background: rgba(250, 84, 28, 0.1) !important;
}
</style>
