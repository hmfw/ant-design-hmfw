<template>
  <div style="display: flex; flex-direction: column; gap: 20px">
    <!-- 自定义前缀/后缀样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义前缀和后缀图标样式：</div>
      <Input
        v-model:value="value1"
        placeholder="搜索内容"
        :prefix="SearchOutlined"
        :suffix="CloseCircleOutlined"
        :class-names="{
          prefix: 'custom-prefix',
          suffix: 'custom-suffix',
        }"
        style="width: 300px"
      />
    </div>

    <!-- 自定义输入框本身 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义输入框样式：</div>
      <Input
        v-model:value="value2"
        placeholder="特殊样式输入框"
        :class-names="{ input: 'custom-input' }"
        style="width: 300px"
      />
    </div>

    <!-- 自定义外层容器 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义外层容器样式：</div>
      <Input
        v-model:value="value3"
        placeholder="渐变边框"
        :prefix="UserOutlined"
        :class-names="{ affixWrapper: 'custom-wrapper' }"
        style="width: 300px"
      />
    </div>

    <!-- 自定义字数统计 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义字数统计样式：</div>
      <Input
        v-model:value="value4"
        placeholder="最多 50 字"
        :max-length="50"
        show-count
        :class-names="{ count: 'custom-count' }"
        style="width: 300px"
      />
    </div>

    <!-- 组合使用 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式（styles）：</div>
      <Input
        v-model:value="value5"
        placeholder="内联样式控制"
        :prefix="SearchOutlined"
        :styles="{
          affixWrapper: { borderColor: '#722ed1', borderRadius: '8px' },
          prefix: { color: '#722ed1', fontSize: '16px' },
          input: { fontWeight: '500' },
        }"
        style="width: 300px"
      />
    </div>

    <!-- TextArea 自定义 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">TextArea 自定义样式：</div>
      <TextArea
        v-model:value="textarea"
        placeholder="多行文本输入"
        :rows="4"
        :max-length="200"
        show-count
        :class-names="{
          textarea: 'custom-textarea',
          count: 'custom-textarea-count',
        }"
        style="width: 400px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input, TextArea, SearchOutlined, UserOutlined, CloseCircleOutlined } from 'ant-design-hmfw'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const textarea = ref('')
</script>

<style scoped>
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
  color: #ff4d4f;
  cursor: pointer;
  transition: all 0.3s;
}

:deep(.custom-suffix:hover) {
  color: #ff7875;
}

:deep(.custom-input) {
  background: linear-gradient(to right, #ffffff, #f5f5ff);
  font-weight: 500;
  color: #333;
}

:deep(.custom-wrapper) {
  border: 2px solid transparent;
  border-radius: 8px;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
  transition: all 0.3s;
}

:deep(.custom-wrapper:hover) {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

:deep(.custom-count) {
  color: #ff4d4f;
  font-weight: bold;
  font-size: 13px;
}

:deep(.custom-textarea) {
  background: #f0f5ff;
  font-family: 'SF Mono', 'Monaco', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.8;
  border-radius: 8px;
}

:deep(.custom-textarea-count) {
  font-size: 12px;
  color: #8c8c8c;
  font-style: italic;
}
</style>
