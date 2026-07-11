<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义触发器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义触发器：</div>
      <ColorPicker
        v-model:value="color1"
        show-text
        :class-names="{ trigger: 'custom-trigger', colorBlock: 'custom-color-block', text: 'custom-text' }"
      />
    </div>

    <!-- 场景 2：自定义面板样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义面板：</div>
      <ColorPicker
        v-model:value="color2"
        :class-names="{
          panel: 'custom-panel',
          saturation: 'custom-saturation',
          hueSlider: 'custom-hue-slider',
        }"
      />
    </div>

    <!-- 场景 3：自定义预设颜色样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义预设颜色：</div>
      <ColorPicker
        v-model:value="color3"
        :presets="presets"
        :class-names="{
          presetLabel: 'custom-preset-label',
          presetColor: 'custom-preset-color',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <ColorPicker
        v-model:value="color4"
        show-text
        :styles="{
          trigger: { borderRadius: '12px', padding: '6px 12px', border: '2px solid #722ed1' },
          colorBlock: { borderRadius: '8px', width: '32px', height: '32px' },
          text: { color: '#722ed1', fontWeight: '500', marginLeft: '8px' },
        }"
      />
    </div>

    <!-- 场景 5：组合使用 classNames 和 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合使用：</div>
      <ColorPicker
        v-model:value="color5"
        allow-clear
        :presets="presets"
        :class-names="{
          panel: 'combined-panel',
          clearBtn: 'combined-clear-btn',
        }"
        :styles="{
          saturationCursor: { width: '24px', height: '24px', border: '3px solid white' },
          hueCursor: { width: '20px', height: '20px' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColorPicker } from '@hmfw/ant-design'

const color1 = ref('#1677ff')
const color2 = ref('#52c41a')
const color3 = ref('#722ed1')
const color4 = ref('#fa8c16')
const color5 = ref('#eb2f96')

const presets = [
  {
    label: '推荐色',
    colors: ['#1677ff', '#52c41a', '#faad14', '#f5222d', '#722ed1'],
  },
  {
    label: '最近使用',
    colors: ['#fa8c16', '#13c2c2', '#eb2f96', '#2f54eb', '#a0d911'],
  },
]
</script>

<style scoped>
:global(.custom-trigger) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s;
}

:global(.custom-trigger:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

:global(.custom-color-block) {
  border: 2px solid white;
  border-radius: 6px;
}

:global(.custom-text) {
  color: white;
  font-weight: 500;
  margin-left: 8px;
}

:global(.custom-panel) {
  border-radius: 12px;
  padding: 16px;
  background: linear-gradient(135deg, #f6f8fb 0%, #ffffff 100%);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

:global(.custom-saturation) {
  border-radius: 8px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
}

:global(.custom-hue-slider) {
  border-radius: 6px;
  height: 14px;
}

:global(.custom-preset-label) {
  color: #722ed1;
  font-weight: 600;
  font-size: 13px;
}

:global(.custom-preset-color) {
  border-radius: 6px;
  transition: all 0.3s;
}

:global(.custom-preset-color:hover) {
  transform: scale(1.15);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

:global(.combined-panel) {
  border: 2px solid #1677ff;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(22, 119, 255, 0.2);
}

:global(.combined-clear-btn) {
  background: linear-gradient(135deg, #ff4d4f 0%, #ff7875 100%);
  color: white;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.3s;
}

:global(.combined-clear-btn:hover) {
  background: linear-gradient(135deg, #ff7875 0%, #ffa39e 100%);
  transform: translateY(-1px);
}
</style>
