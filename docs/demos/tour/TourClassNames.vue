<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义遮罩和弹出卡片 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义遮罩与卡片样式：</div>
      <Button type="primary" @click="open1 = true">打开渐变卡片引导</Button>
      <Tour
        v-model:open="open1"
        :steps="steps1"
        :class-names="{
          mask: 'custom-mask',
          popover: 'custom-popover',
          popoverInner: 'custom-popover-inner',
        }"
      />
    </div>

    <!-- 场景 2：自定义标题和描述 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义标题与描述样式：</div>
      <Button type="primary" @click="open2 = true">打开自定义文字引导</Button>
      <div ref="target2" style="margin-top: 8px; padding: 16px; border: 1px dashed #d9d9d9; border-radius: 8px">
        目标元素
      </div>
      <Tour
        v-model:open="open2"
        :steps="steps2"
        :class-names="{
          title: 'custom-title',
          description: 'custom-description',
          close: 'custom-close',
        }"
      />
    </div>

    <!-- 场景 3：自定义指示器和按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义指示器与按钮样式：</div>
      <Button type="primary" @click="open3 = true">打开多步骤引导</Button>
      <Tour
        v-model:open="open3"
        :steps="steps3"
        :class-names="{
          indicators: 'custom-indicators',
          indicator: 'custom-indicator',
          buttons: 'custom-buttons',
          prevBtn: 'custom-prev-btn',
          nextBtn: 'custom-next-btn',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Button type="primary" @click="open4 = true">打开内联样式引导</Button>
      <Tour
        v-model:open="open4"
        :steps="steps4"
        :styles="{
          popoverInner: { borderRadius: '16px', padding: '24px' },
          title: { color: '#722ed1', fontSize: '18px' },
          description: { color: '#52c41a', fontSize: '15px' },
          footer: { marginTop: '20px' },
        }"
      />
    </div>

    <!-- 场景 5：组合使用 classNames 和 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合使用 classNames 与 styles：</div>
      <Button type="primary" @click="open5 = true">打开组合样式引导</Button>
      <Tour
        v-model:open="open5"
        :steps="steps5"
        :class-names="{
          popoverInner: 'gradient-card',
          indicator: 'gradient-indicator',
        }"
        :styles="{
          title: { fontWeight: 'bold' },
          buttons: { gap: '12px' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Tour } from 'ant-design-hmfw'

const open1 = ref(false)
const open2 = ref(false)
const open3 = ref(false)
const open4 = ref(false)
const open5 = ref(false)

const target2 = ref<HTMLElement>()

const steps1 = [
  {
    title: '渐变卡片',
    description: '通过 classNames 自定义卡片背景和遮罩颜色',
  },
]

const steps2 = [
  {
    title: '自定义文字',
    description: '可以对标题、描述、关闭按钮分别应用不同样式',
    target: () => target2.value || null,
  },
]

const steps3 = [
  {
    title: '第一步',
    description: '这是多步骤引导的第一步',
  },
  {
    title: '第二步',
    description: '这是多步骤引导的第二步',
  },
  {
    title: '第三步',
    description: '这是多步骤引导的第三步',
  },
]

const steps4 = [
  {
    title: '内联样式',
    description: '通过 styles 属性应用内联样式，优先级更高',
  },
]

const steps5 = [
  {
    title: '组合样式',
    description: 'classNames 和 styles 可以同时使用，实现更灵活的样式控制',
  },
  {
    title: '完成',
    description: '所有样式都生效了',
  },
]
</script>

<style scoped>
/* 场景 1：渐变卡片 */
:global(.custom-mask) {
  background: rgba(102, 126, 234, 0.25) !important;
  backdrop-filter: blur(4px);
}

:global(.custom-popover) {
  transform: scale(1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

:global(.custom-popover-inner) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4) !important;
}

:global(.custom-popover-inner .hmfw-tour-title) {
  color: white !important;
}

:global(.custom-popover-inner .hmfw-tour-description) {
  color: rgba(255, 255, 255, 0.9) !important;
}

/* 场景 2：自定义文字 */
:global(.custom-title) {
  color: #1890ff !important;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(24, 144, 255, 0.2);
}

:global(.custom-description) {
  color: #52c41a !important;
  font-size: 15px;
  line-height: 1.8;
}

:global(.custom-close) {
  color: #ff4d4f !important;
  font-size: 16px;
  transition: all 0.3s;
}

:global(.custom-close:hover) {
  color: #ff7875 !important;
  transform: rotate(90deg);
  background-color: rgba(255, 77, 79, 0.1) !important;
}

/* 场景 3：自定义指示器和按钮 */
:global(.custom-indicators) {
  gap: 10px;
}

:global(.custom-indicator) {
  width: 8px !important;
  height: 8px !important;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  transition: all 0.3s;
}

:global(.custom-indicator:hover) {
  transform: scale(1.3);
}

:global(.hmfw-tour-indicator-active.custom-indicator) {
  width: 24px !important;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
}

:global(.custom-buttons) {
  gap: 12px;
}

:global(.custom-prev-btn) {
  border-color: #d9d9d9;
  color: #595959;
  transition: all 0.3s;
}

:global(.custom-prev-btn:hover) {
  border-color: #40a9ff;
  color: #40a9ff;
  transform: translateX(-2px);
}

:global(.custom-next-btn) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  border: none;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
  transition: all 0.3s;
}

:global(.custom-next-btn:hover) {
  transform: translateX(2px);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4);
}

/* 场景 5：组合样式 */
:global(.gradient-card) {
  background: linear-gradient(to right, #52c41a, #389e0d) !important;
  color: white !important;
}

:global(.gradient-card .hmfw-tour-title) {
  color: white !important;
}

:global(.gradient-card .hmfw-tour-description) {
  color: rgba(255, 255, 255, 0.9) !important;
}

:global(.gradient-indicator) {
  background: rgba(255, 255, 255, 0.5) !important;
}

:global(.hmfw-tour-indicator-active.gradient-indicator) {
  background: white !important;
  width: 20px !important;
}
</style>
