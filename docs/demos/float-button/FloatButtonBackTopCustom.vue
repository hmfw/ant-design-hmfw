<template>
  <div style="display: flex; gap: 24px">
    <!-- 场景 1：默认样式 -->
    <div ref="container1" class="back-top-demo">
      <div class="back-top-demo__inner">
        <p v-for="n in 20" :key="n">默认样式，第 {{ n }} 行…</p>
      </div>
      <FloatButton.BackTop :target="() => container1" :visibility-height="50" :style="pos" />
    </div>

    <!-- 场景 2：自定义图标和形状 -->
    <div ref="container2" class="back-top-demo">
      <div class="back-top-demo__inner">
        <p v-for="n in 20" :key="n">自定义图标，第 {{ n }} 行…</p>
      </div>
      <FloatButton.BackTop
        :target="() => container2"
        :visibility-height="50"
        type="primary"
        shape="square"
        icon="⬆"
        tooltip="快速返回顶部"
        :style="pos"
      />
    </div>

    <!-- 场景 3：带文本内容 -->
    <div ref="container3" class="back-top-demo">
      <div class="back-top-demo__inner">
        <p v-for="n in 20" :key="n">带文本，第 {{ n }} 行…</p>
      </div>
      <FloatButton.BackTop
        :target="() => container3"
        :visibility-height="50"
        type="primary"
        shape="square"
        content="TOP"
        tooltip="回到顶部"
        :style="pos"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FloatButton } from '@hmfw/ant-design'

const container1 = ref<HTMLElement | null>(null)
const container2 = ref<HTMLElement | null>(null)
const container3 = ref<HTMLElement | null>(null)
const pos = { position: 'absolute', insetInlineEnd: '12px', insetBlockEnd: '12px' } as const
</script>

<style scoped>
.back-top-demo {
  position: relative;
  width: 200px;
  height: 300px;
  overflow: auto;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  background: #fff;
}
.back-top-demo__inner {
  padding: 16px;
}
.back-top-demo__inner p {
  margin: 8px 0;
  color: #666;
}
</style>
