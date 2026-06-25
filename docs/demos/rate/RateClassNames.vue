<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义星星颜色 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义星星颜色（渐变效果）：</div>
      <Rate v-model:value="value1" :class-names="{ star: 'gradient-star' }" />
    </div>

    <!-- 场景 2：半星样式定制 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">半星前后部分不同颜色：</div>
      <Rate
        v-model:value="value2"
        allow-half
        :class-names="{
          starFirst: 'star-first-custom',
          starSecond: 'star-second-custom',
        }"
      />
    </div>

    <!-- 场景 3：容器与星星组合定制 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">容器背景 + 星星放大效果：</div>
      <Rate
        v-model:value="value3"
        :class-names="{
          root: 'custom-root',
          star: 'custom-star',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式控制尺寸：</div>
      <Rate
        v-model:value="value4"
        :styles="{
          root: { gap: '12px' },
          star: { fontSize: '32px' },
        }"
      />
    </div>

    <!-- 场景 5：组合样式 - 高亮激活星星 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">高亮激活星星（阴影 + 缩放）：</div>
      <Rate v-model:value="value5" :class-names="{ star: 'highlight-star' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from '@hmfw/ant-design'

const value1 = ref(3)
const value2 = ref(2.5)
const value3 = ref(4)
const value4 = ref(3)
const value5 = ref(4)
</script>

<style scoped>
/* 场景 1：渐变星星 */
:deep(.gradient-star) {
  color: transparent;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s;
}

:deep(.gradient-star:hover) {
  transform: scale(1.15);
  filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.6));
}

/* 场景 2：半星不同颜色 */
:deep(.star-first-custom) {
  color: #ff6b6b;
}

:deep(.star-second-custom) {
  color: #ffd93d;
}

/* 场景 3：容器与星星组合 */
:deep(.custom-root) {
  padding: 12px 16px;
  background: linear-gradient(135deg, #f6f8fb 0%, #e9ecef 100%);
  border-radius: 8px;
  border: 2px solid #dee2e6;
}

:deep(.custom-star) {
  transition: all 0.3s;
}

:deep(.custom-star:hover) {
  transform: scale(1.2) rotate(15deg);
}

/* 场景 5：高亮激活星星 */
:deep(.highlight-star.hmfw-rate-star-full) {
  color: #faad14;
  filter: drop-shadow(0 0 8px rgba(250, 173, 20, 0.8));
  transform: scale(1.1);
  transition: all 0.3s;
}

:deep(.highlight-star.hmfw-rate-star-half .hmfw-rate-star-first) {
  color: #faad14;
  filter: drop-shadow(0 0 8px rgba(250, 173, 20, 0.8));
}

:deep(.highlight-star:hover) {
  transform: scale(1.2);
}
</style>
