<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根容器渐变背景 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器渐变背景：</div>
      <Switch v-model:checked="checked1" :class-names="{ root: 'gradient-switch' }" />
    </div>

    <!-- 场景 2：自定义手柄样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义手柄样式：</div>
      <Switch
        v-model:checked="checked2"
        :class-names="{
          root: 'custom-root',
          handle: 'custom-handle',
        }"
      />
    </div>

    <!-- 场景 3：自定义内部文字样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义内部文字样式：</div>
      <Switch
        v-model:checked="checked3"
        checked-children="开"
        un-checked-children="关"
        :class-names="{
          inner: 'custom-inner',
          checked: 'custom-checked',
          unchecked: 'custom-unchecked',
        }"
      />
    </div>

    <!-- 场景 4：自定义加载图标 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义加载图标：</div>
      <Switch loading :class-names="{ loadingIcon: 'custom-loading' }" />
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Switch
        v-model:checked="checked4"
        checked-children="ON"
        un-checked-children="OFF"
        :styles="{
          root: { minWidth: '60px', height: '28px', borderRadius: '14px' },
          handle: { width: '24px', height: '24px' },
          inner: { fontSize: '13px', fontWeight: 'bold' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@hmfw/ant-design'

const checked1 = ref(true)
const checked2 = ref(true)
const checked3 = ref(false)
const checked4 = ref(true)
</script>

<style scoped>
:deep(.gradient-switch) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: all 0.3s;
}

:deep(.gradient-switch:not(.hmfw-switch-checked)) {
  background: linear-gradient(135deg, #bdc3c7 0%, #95a5a6 100%);
}

:deep(.gradient-switch:hover) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

:deep(.custom-root) {
  background: #52c41a;
  border: 2px solid #389e0d;
}

:deep(.custom-root:not(.hmfw-switch-checked)) {
  background: #ff4d4f;
  border: 2px solid #cf1322;
}

:deep(.custom-handle) {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.6);
  transition: all 0.3s;
}

:deep(.custom-handle:hover) {
  transform: scale(1.1);
}

:deep(.custom-inner) {
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

:deep(.custom-checked) {
  color: #fffb00;
}

:deep(.custom-unchecked) {
  color: #ffa940;
}

:deep(.custom-loading) {
  width: 12px;
  height: 12px;
  border-width: 2.5px;
  border-top-color: #ff4d4f;
}
</style>
