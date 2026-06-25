<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：主组件基础样式定制 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-weight: 500">主组件：自定义头部与段落样式</div>
      <Skeleton
        avatar
        :paragraph="{ rows: 3 }"
        active
        :class-names="{
          root: 'custom-skeleton-root',
          header: 'custom-header',
          avatar: 'custom-avatar',
          section: 'custom-section',
          title: 'custom-title',
          paragraph: 'custom-paragraph',
          row: 'custom-row',
        }"
      />
    </div>

    <!-- 场景 2：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-weight: 500">主组件：使用内联样式</div>
      <Skeleton
        avatar
        :paragraph="{ rows: 2 }"
        active
        :styles="{
          root: { padding: '16px', backgroundColor: '#fafafa', borderRadius: '8px' },
          avatar: { borderRadius: '12px' },
          title: { height: '20px', backgroundColor: '#1890ff20' },
          row: { height: '14px', backgroundColor: '#52c41a20' },
        }"
      />
    </div>

    <!-- 场景 3：SkeletonButton 样式定制 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-weight: 500">SkeletonButton：自定义按钮骨架</div>
      <div style="display: flex; gap: 12px; align-items: center">
        <SkeletonButton
          active
          size="large"
          :class-names="{
            root: 'custom-button-root',
            button: 'custom-button',
          }"
        />
        <SkeletonButton
          active
          shape="round"
          :styles="{
            button: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
          }"
        />
        <SkeletonButton active shape="circle" :class-names="{ button: 'custom-button-circle' }" />
      </div>
    </div>

    <!-- 场景 4：SkeletonInput 样式定制 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-weight: 500">SkeletonInput：自定义输入框骨架</div>
      <div style="display: flex; flex-direction: column; gap: 12px">
        <SkeletonInput active size="large" block :class-names="{ input: 'custom-input' }" />
        <SkeletonInput
          active
          :styles="{
            input: { backgroundColor: '#ff4d4f20', borderRadius: '6px' },
          }"
        />
      </div>
    </div>

    <!-- 场景 5：SkeletonAvatar + SkeletonImage 组合 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-weight: 500">SkeletonAvatar 与 SkeletonImage：组合样式</div>
      <div style="display: flex; gap: 16px; align-items: center">
        <SkeletonAvatar active :size="64" :class-names="{ avatar: 'custom-large-avatar' }" />
        <SkeletonImage
          active
          :class-names="{
            image: 'custom-image',
            svg: 'custom-svg',
            path: 'custom-path',
          }"
        />
        <SkeletonAvatar
          active
          shape="square"
          size="large"
          :styles="{
            avatar: { borderRadius: '16px', background: 'linear-gradient(135deg, #ffd89b 0%, #19547b 100%)' },
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Skeleton, SkeletonButton, SkeletonInput, SkeletonAvatar, SkeletonImage } from '@hmfw/ant-design'
</script>

<style scoped>
/* 主组件样式 */
:deep(.custom-skeleton-root) {
  padding: 20px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 12px;
  border: 2px solid #667eea30;
}

:deep(.custom-header) {
  padding-right: 24px;
}

:deep(.custom-avatar) {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  border: 3px solid #ffffff;
}

:deep(.custom-section) {
  padding-left: 8px;
}

:deep(.custom-title) {
  height: 22px !important;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%) !important;
  border-radius: 8px;
  opacity: 0.3;
}

:deep(.custom-paragraph) {
  margin-top: 16px;
}

:deep(.custom-row) {
  height: 18px !important;
  background: linear-gradient(90deg, #52c41a 0%, #389e0d 100%) !important;
  border-radius: 6px;
  opacity: 0.25;
  transition: opacity 0.3s;
}

:deep(.custom-row:hover) {
  opacity: 0.4;
}

/* SkeletonButton 样式 */
:deep(.custom-button-root) {
  display: inline-flex;
  align-items: center;
}

:deep(.custom-button) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
  transition: all 0.3s;
}

:deep(.custom-button:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4);
}

:deep(.custom-button-circle) {
  background: linear-gradient(135deg, #ff4d4f 0%, #cf1322 100%);
  box-shadow: 0 2px 8px rgba(255, 77, 79, 0.3);
}

/* SkeletonInput 样式 */
:deep(.custom-input) {
  background: linear-gradient(135deg, #52c41a15 0%, #389e0d15 100%);
  border: 2px solid #52c41a;
  border-radius: 8px;
  box-shadow: inset 0 2px 4px rgba(82, 196, 26, 0.1);
}

/* SkeletonAvatar 样式 */
:deep(.custom-large-avatar) {
  background: linear-gradient(135deg, #722ed1 0%, #531dab 100%);
  box-shadow: 0 4px 16px rgba(114, 46, 209, 0.4);
  border: 4px solid #ffffff;
  transition: all 0.3s;
}

:deep(.custom-large-avatar:hover) {
  transform: scale(1.05);
}

/* SkeletonImage 样式 */
:deep(.custom-image) {
  background: linear-gradient(135deg, #faad14 0%, #d48806 100%);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(250, 173, 20, 0.3);
  padding: 12px;
}

:deep(.custom-svg) {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

:deep(.custom-path) {
  fill: #ffffff;
  opacity: 0.8;
}
</style>
