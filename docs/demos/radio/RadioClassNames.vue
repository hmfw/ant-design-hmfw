<template>
  <div class="demo-radio-classnames">
    <!-- 场景 1: 自定义根节点 -->
    <section class="demo-section">
      <h3>1. 自定义根节点样式</h3>
      <RadioGroup v-model:value="value1">
        <Radio :value="1" :class-names="{ root: 'custom-root' }"> 自定义根节点 A </Radio>
        <Radio :value="2" :class-names="{ root: 'custom-root' }"> 自定义根节点 B </Radio>
      </RadioGroup>
    </section>

    <!-- 场景 2: 自定义单选框 -->
    <section class="demo-section">
      <h3>2. 自定义单选框样式</h3>
      <RadioGroup v-model:value="value2">
        <Radio :value="1" :class-names="{ radio: 'custom-radio' }"> 方形单选框 A </Radio>
        <Radio :value="2" :class-names="{ radio: 'custom-radio' }"> 方形单选框 B </Radio>
      </RadioGroup>
    </section>

    <!-- 场景 3: 自定义内部选择图标 -->
    <section class="demo-section">
      <h3>3. 自定义内部选择图标</h3>
      <RadioGroup v-model:value="value3">
        <Radio :value="1" :class-names="{ inner: 'custom-inner' }"> 心形选择 A </Radio>
        <Radio :value="2" :class-names="{ inner: 'custom-inner' }"> 心形选择 B </Radio>
      </RadioGroup>
    </section>

    <!-- 场景 4: 自定义文本标签 -->
    <section class="demo-section">
      <h3>4. 自定义文本标签样式</h3>
      <RadioGroup v-model:value="value4">
        <Radio :value="1" :class-names="{ label: 'custom-label' }"> 渐变文字 A </Radio>
        <Radio :value="2" :class-names="{ label: 'custom-label' }"> 渐变文字 B </Radio>
      </RadioGroup>
    </section>

    <!-- 场景 5: 组合使用多个 classNames -->
    <section class="demo-section">
      <h3>5. 组合使用多个 classNames</h3>
      <RadioGroup v-model:value="value5">
        <Radio
          :value="1"
          :class-names="{
            root: 'combined-root',
            radio: 'combined-radio',
            inner: 'combined-inner',
            label: 'combined-label',
          }"
        >
          组合样式 A
        </Radio>
        <Radio
          :value="2"
          :class-names="{
            root: 'combined-root',
            radio: 'combined-radio',
            inner: 'combined-inner',
            label: 'combined-label',
          }"
        >
          组合样式 B
        </Radio>
      </RadioGroup>
    </section>

    <!-- 场景 6: 使用 styles prop -->
    <section class="demo-section">
      <h3>6. 使用 styles 动态样式</h3>
      <RadioGroup v-model:value="value6">
        <Radio
          :value="1"
          :styles="{
            root: { padding: '8px 16px', border: '2px solid #1890ff', borderRadius: '8px', marginBottom: '8px' },
            radio: { transform: 'scale(1.2)' },
            label: { fontWeight: 'bold', color: '#1890ff' },
          }"
        >
          动态样式 A
        </Radio>
        <Radio
          :value="2"
          :styles="{
            root: { padding: '8px 16px', border: '2px solid #52c41a', borderRadius: '8px' },
            radio: { transform: 'scale(1.2)' },
            label: { fontWeight: 'bold', color: '#52c41a' },
          }"
        >
          动态样式 B
        </Radio>
      </RadioGroup>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Radio, RadioGroup } from '@hmfw/ant-design'

const value1 = ref(1)
const value2 = ref(1)
const value3 = ref(1)
const value4 = ref(1)
const value5 = ref(1)
const value6 = ref(1)
</script>

<style scoped>
.demo-radio-classnames {
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
  padding: 12px 16px;
  background: linear-gradient(135deg, #fa8bff 0%, #2bd2ff 52%, #2bff88 90%);
  border-radius: 8px;
  color: white;
  transition: all 0.3s ease;
  margin-bottom: 8px;
}

:deep(.custom-root:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(250, 139, 255, 0.4);
}

/* 场景 2: 自定义单选框为方形 */
:deep(.custom-radio),
:deep(.custom-radio .hmfw-radio-inner) {
  border-radius: 4px !important;
}

:deep(.custom-radio) {
  border: 2px solid #13c2c2;
}

:deep(.hmfw-radio-checked.custom-radio .hmfw-radio-inner::after) {
  border-radius: 2px !important;
}

/* 场景 3: 自定义内部选择图标为心形 */
:deep(.custom-inner::after) {
  content: '♥';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  color: #eb2f96;
  font-size: 12px;
  border: none !important;
  background: transparent !important;
  transition: transform 0.3s ease;
}

:deep(.hmfw-radio-checked .custom-inner::after) {
  transform: translate(-50%, -50%) scale(1);
}

/* 场景 4: 渐变文字标签 */
:deep(.custom-label) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-size: 16px;
}

/* 场景 5: 组合样式 */
:deep(.combined-root) {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border: 2px dashed #722ed1;
  border-radius: 6px;
  background: #f9f0ff;
  transition: all 0.3s ease;
  margin-bottom: 8px;
}

:deep(.combined-root:hover) {
  border-color: #9254de;
  background: #efdbff;
}

:deep(.combined-radio) {
  border: 2px solid #722ed1;
}

:deep(.combined-inner) {
  background: #722ed1 !important;
}

:deep(.hmfw-radio-checked .combined-inner::after) {
  background-color: white !important;
}

:deep(.combined-label) {
  color: #531dab;
  font-weight: 500;
}
</style>
