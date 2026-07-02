<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义输入框容器 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义输入框容器样式：</div>
      <AutoComplete
        v-model="value1"
        :options="options1"
        placeholder="输入内容搜索..."
        :class-names="{ root: 'custom-root' }"
      />
    </div>

    <!-- 场景 2：自定义前后缀与清除按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义前后缀与清除按钮：</div>
      <AutoComplete
        v-model="value2"
        :options="options2"
        placeholder="搜索..."
        allow-clear
        :class-names="{
          prefix: 'custom-prefix',
          suffix: 'custom-suffix',
          clear: 'custom-clear',
        }"
      >
        <template #prefix>
          <SearchOutlined />
        </template>
      </AutoComplete>
    </div>

    <!-- 场景 3：自定义下拉面板与选项 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义下拉面板与选项：</div>
      <AutoComplete
        v-model="value3"
        :options="options3"
        placeholder="选择水果..."
        :class-names="{
          dropdown: 'custom-dropdown',
          option: 'custom-option',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <AutoComplete
        v-model="value4"
        :options="options4"
        placeholder="动态样式..."
        allow-clear
        :styles="{
          root: { borderRadius: '20px', borderColor: '#722ed1' },
          input: { color: '#722ed1', fontWeight: 'bold' },
          clear: { color: '#eb2f96' },
        }"
      />
    </div>

    <!-- 场景 5：组合使用 classNames 和 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合使用 classNames 和 styles：</div>
      <AutoComplete
        v-model="value5"
        :options="options5"
        placeholder="组合样式定制..."
        allow-clear
        :class-names="{
          root: 'custom-combined-root',
          dropdown: 'custom-combined-dropdown',
        }"
        :styles="{
          input: { fontSize: '16px' },
        }"
      >
        <template #prefix>
          <SearchOutlined />
        </template>
      </AutoComplete>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SearchOutlined } from '@hmfw/icons'
import { AutoComplete } from '@hmfw/ant-design'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')

const options1 = [{ value: 'Vue 3' }, { value: 'React' }, { value: 'Angular' }, { value: 'Svelte' }]

const options2 = [{ value: 'Beijing' }, { value: 'Shanghai' }, { value: 'Guangzhou' }, { value: 'Shenzhen' }]

const options3 = [
  { value: '🍎 Apple', label: '🍎 Apple' },
  { value: '🍌 Banana', label: '🍌 Banana' },
  { value: '🍊 Orange', label: '🍊 Orange' },
  { value: '🍇 Grape', label: '🍇 Grape' },
]

const options4 = [{ value: 'Option 1' }, { value: 'Option 2' }, { value: 'Option 3' }]

const options5 = [{ value: 'Design System' }, { value: 'Component Library' }, { value: 'UI Framework' }]
</script>

<style scoped>
:deep(.custom-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
  transform: translateY(-2px);
}

:deep(.custom-root input) {
  color: white;
  font-weight: 500;
}

:deep(.custom-root input::placeholder) {
  color: rgba(255, 255, 255, 0.7);
}

:deep(.custom-prefix) {
  color: #1890ff;
  font-size: 18px;
  transition: all 0.3s;
}

:deep(.custom-prefix:hover) {
  color: #40a9ff;
  transform: scale(1.1);
}

:deep(.custom-suffix) {
  color: #52c41a;
}

:deep(.custom-clear) {
  color: #ff4d4f;
  transition: all 0.3s;
}

:deep(.custom-clear:hover) {
  color: #ff7875;
  transform: rotate(90deg);
}

:global(.custom-dropdown) {
  background: linear-gradient(to bottom, #f0f5ff 0%, #ffffff 100%);
  border: 2px solid #1890ff;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(24, 144, 255, 0.2);
}

:global(.custom-option) {
  font-weight: 500;
  transition: all 0.3s;
}

:global(.custom-option:hover) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
  transform: translateX(4px);
}

:deep(.custom-combined-root) {
  border: 2px solid #52c41a;
  border-radius: 12px;
  transition: all 0.3s;
}

:deep(.custom-combined-root:hover) {
  border-color: #73d13d;
  box-shadow: 0 2px 8px rgba(82, 196, 26, 0.3);
}

:global(.custom-combined-dropdown) {
  background: #f6ffed;
  border: 2px solid #b7eb8f;
  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.15);
}
</style>
