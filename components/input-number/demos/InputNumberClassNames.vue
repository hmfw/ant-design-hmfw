<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根容器 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器样式：</div>
      <InputNumber v-model:value="value1" :min="0" :max="100" :class-names="{ root: 'custom-root' }" />
    </div>

    <!-- 场景 2：自定义输入框和操作按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义输入框与操作按钮：</div>
      <InputNumber
        v-model:value="value2"
        :min="0"
        :max="100"
        :class-names="{
          input: 'custom-input',
          handlerWrap: 'custom-handler-wrap',
          handlerUp: 'custom-handler-up',
          handlerDown: 'custom-handler-down',
        }"
      />
    </div>

    <!-- 场景 3：带前后缀的自定义样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义前后缀：</div>
      <InputNumber
        v-model:value="value3"
        prefix="¥"
        suffix="元"
        :min="0"
        :max="10000"
        :class-names="{
          prefix: 'custom-prefix',
          suffix: 'custom-suffix',
        }"
      />
    </div>

    <!-- 场景 4：带 addon 的组合样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义 addon 分组：</div>
      <InputNumber
        v-model:value="value4"
        addon-before="价格"
        addon-after="元"
        :min="0"
        :max="10000"
        :class-names="{
          groupWrapper: 'custom-group-wrapper',
          addonBefore: 'custom-addon-before',
          addonAfter: 'custom-addon-after',
        }"
      />
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <InputNumber
        v-model:value="value5"
        :min="0"
        :max="100"
        :styles="{
          root: { borderColor: '#722ed1', borderWidth: '2px' },
          input: { color: '#722ed1', fontWeight: 'bold' },
          handlerWrap: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@hmfw/ant-design'

const value1 = ref(50)
const value2 = ref(50)
const value3 = ref(100)
const value4 = ref(1000)
const value5 = ref(50)
</script>

<style scoped>
:deep(.custom-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

:deep(.custom-root .hmfw-input-number-input) {
  color: white;
  background: transparent;
}

:deep(.custom-root .hmfw-input-number-handler-wrap) {
  background: rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
}

:deep(.custom-root .hmfw-input-number-handler) {
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
}

:deep(.custom-root .hmfw-input-number-handler:hover) {
  background: rgba(255, 255, 255, 0.1);
}

:deep(.custom-input) {
  font-family: 'Courier New', monospace;
  font-size: 16px;
  font-weight: bold;
  color: #1890ff;
  text-align: center;
}

:deep(.custom-handler-wrap) {
  background: linear-gradient(180deg, #f0f5ff 0%, #e6f7ff 100%);
}

:deep(.custom-handler-up) {
  color: #52c41a;
  transition: all 0.3s;
}

:deep(.custom-handler-up:hover) {
  color: #73d13d;
  transform: scale(1.2);
}

:deep(.custom-handler-down) {
  color: #ff4d4f;
  transition: all 0.3s;
}

:deep(.custom-handler-down:hover) {
  color: #ff7875;
  transform: scale(1.2);
}

:deep(.custom-prefix) {
  color: #52c41a;
  font-weight: bold;
  font-size: 16px;
  background: #f6ffed;
  padding: 0 8px;
  margin-right: 4px;
  border-radius: 4px;
}

:deep(.custom-suffix) {
  color: #1890ff;
  font-weight: bold;
  font-size: 12px;
  background: #e6f7ff;
  padding: 0 8px;
  margin-left: 4px;
  border-radius: 4px;
}

:deep(.custom-group-wrapper) {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.3s;
}

:deep(.custom-group-wrapper:hover) {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

:deep(.custom-addon-before) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
  font-weight: bold;
  border: none;
}

:deep(.custom-addon-after) {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
  color: white;
  font-weight: bold;
  border: none;
}
</style>
