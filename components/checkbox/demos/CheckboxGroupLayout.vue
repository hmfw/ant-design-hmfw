<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 水平布局（默认） -->
    <section>
      <h4 style="margin-bottom: 8px">水平布局（默认）</h4>
      <CheckboxGroup v-model:value="value1" :options="options" />
    </section>

    <!-- 垂直布局 -->
    <section>
      <h4 style="margin-bottom: 8px">垂直布局</h4>
      <CheckboxGroup
        v-model:value="value2"
        :options="options"
        :style="{ display: 'flex', flexDirection: 'column', gap: '8px' }"
      />
    </section>

    <!-- 网格布局 -->
    <section>
      <h4 style="margin-bottom: 8px">网格布局（2 列）</h4>
      <CheckboxGroup
        v-model:value="value3"
        :options="moreOptions"
        :style="{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }"
      />
    </section>

    <!-- 响应式网格布局 -->
    <section>
      <h4 style="margin-bottom: 8px">响应式网格布局</h4>
      <CheckboxGroup v-model:value="value4" :options="moreOptions" class="responsive-grid" />
    </section>

    <!-- 自定义间距 -->
    <section>
      <h4 style="margin-bottom: 8px">自定义间距</h4>
      <CheckboxGroup v-model:value="value5" :options="options" :style="{ gap: '24px' }" />
    </section>

    <!-- 嵌套布局（复杂场景） -->
    <section>
      <h4 style="margin-bottom: 8px">嵌套布局（复杂场景）</h4>
      <div style="display: flex; flex-direction: column; gap: 16px">
        <div>
          <p style="font-weight: 500; margin-bottom: 8px">水果类</p>
          <CheckboxGroup v-model:value="fruits" :options="fruitOptions" />
        </div>
        <div>
          <p style="font-weight: 500; margin-bottom: 8px">蔬菜类</p>
          <CheckboxGroup
            v-model:value="vegetables"
            :options="vegetableOptions"
            :style="{ display: 'flex', flexDirection: 'column', gap: '8px' }"
          />
        </div>
      </div>
      <p style="color: #666; font-size: 12px; margin-top: 8px">水果：{{ fruits }}，蔬菜：{{ vegetables }}</p>
    </section>

    <!-- 使用 Flex 的行内布局 -->
    <section>
      <h4 style="margin-bottom: 8px">行内对齐布局</h4>
      <div style="display: flex; align-items: center; gap: 16px">
        <span style="font-weight: 500">请选择：</span>
        <CheckboxGroup v-model:value="value6" :options="options" />
      </div>
    </section>

    <!-- 说明 -->
    <section style="background: #f5f5f5; padding: 12px; border-radius: 4px">
      <h4 style="margin-bottom: 8px">布局方式</h4>
      <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: #666">
        <li>通过 <code>style</code> 属性控制 CheckboxGroup 的布局</li>
        <li>使用 <code>flexDirection: 'column'</code> 实现垂直布局</li>
        <li>使用 <code>display: 'grid'</code> 实现网格布局</li>
        <li>通过 <code>gap</code> 属性控制项之间的间距</li>
        <li>支持任意 CSS 布局方式（Flex、Grid、Float 等）</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CheckboxGroup } from '@hmfw/ant-design'

const options = [
  { label: '选项 A', value: 'A' },
  { label: '选项 B', value: 'B' },
  { label: '选项 C', value: 'C' },
]

const moreOptions = [
  { label: '选项 1', value: '1' },
  { label: '选项 2', value: '2' },
  { label: '选项 3', value: '3' },
  { label: '选项 4', value: '4' },
  { label: '选项 5', value: '5' },
  { label: '选项 6', value: '6' },
]

const fruitOptions = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
]

const vegetableOptions = [
  { label: '番茄', value: 'tomato' },
  { label: '黄瓜', value: 'cucumber' },
  { label: '胡萝卜', value: 'carrot' },
]

const value1 = ref<string[]>([])
const value2 = ref<string[]>([])
const value3 = ref<string[]>([])
const value4 = ref<string[]>([])
const value5 = ref<string[]>([])
const value6 = ref<string[]>([])
const fruits = ref<string[]>([])
const vegetables = ref<string[]>([])
</script>

<style scoped>
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 8px;
}

/* 响应式断点 */
@media (max-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .responsive-grid {
    grid-template-columns: 1fr;
  }
}

code {
  background: #fff;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
}
</style>
