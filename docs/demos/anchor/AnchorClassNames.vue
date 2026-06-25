<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义根容器和墨水条 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器和墨水条：</div>
      <Anchor
        :items="items"
        :class-names="{
          root: 'custom-root',
          ink: 'custom-ink',
        }"
        :get-container="getContainer"
      />
    </div>

    <!-- 场景 2：自定义链接项和激活状态 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义链接项和激活状态：</div>
      <Anchor
        :items="items"
        :class-names="{
          link: 'custom-link',
          linkActive: 'custom-link-active',
        }"
        :get-container="getContainer"
      />
    </div>

    <!-- 场景 3：自定义链接文本样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义链接文本样式：</div>
      <Anchor
        :items="items"
        :class-names="{
          title: 'custom-title',
          titleActive: 'custom-title-active',
        }"
        :get-container="getContainer"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Anchor
        :items="items"
        :styles="{
          root: { background: '#f0f5ff', padding: '12px', borderRadius: '8px' },
          ink: { width: '4px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
          title: { fontSize: '15px', fontWeight: 500 },
        }"
        :get-container="getContainer"
      />
    </div>

    <!-- 场景 5：组合使用 classNames 和 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合使用 classNames 和 styles：</div>
      <Anchor
        :items="items"
        :class-names="{
          root: 'combined-root',
          link: 'combined-link',
          titleActive: 'combined-title-active',
        }"
        :styles="{
          ink: { width: '3px' },
        }"
        :get-container="getContainer"
      />
    </div>

    <!-- 滚动容器 -->
    <div
      ref="containerRef"
      style="height: 200px; overflow: auto; border: 1px solid #d9d9d9; border-radius: 4px; padding: 16px"
    >
      <h3 id="anchor-demo-1">锚点 1</h3>
      <p style="height: 100px">这是第一个锚点的内容区域...</p>
      <h3 id="anchor-demo-2">锚点 2</h3>
      <p style="height: 100px">这是第二个锚点的内容区域...</p>
      <h3 id="anchor-demo-3">锚点 3</h3>
      <p style="height: 100px">这是第三个锚点的内容区域...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Anchor } from '@hmfw/ant-design'
import type { AnchorLinkItem } from '@hmfw/ant-design'

const containerRef = ref<HTMLElement>()

const items: AnchorLinkItem[] = [
  { key: '1', href: '#anchor-demo-1', title: '锚点 1' },
  { key: '2', href: '#anchor-demo-2', title: '锚点 2' },
  { key: '3', href: '#anchor-demo-3', title: '锚点 3' },
]

const getContainer = () => containerRef.value || window
</script>

<style scoped>
/* 场景 1：自定义根容器和墨水条 */
:deep(.custom-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 16px;
  border-radius: 8px;
}

:deep(.custom-root .hmfw-anchor-link-title) {
  color: white;
}

:deep(.custom-ink) {
  background: white;
  width: 3px;
  border-radius: 2px;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
}

/* 场景 2：自定义链接项和激活状态 */
:deep(.custom-link) {
  padding: 8px 12px;
  margin: 4px 0;
  border-radius: 6px;
  transition: all 0.3s;
}

:deep(.custom-link:hover) {
  background: rgba(22, 119, 255, 0.06);
  transform: translateX(4px);
}

:deep(.custom-link-active) {
  background: linear-gradient(90deg, #e6f4ff 0%, transparent 100%);
  border-left: 3px solid #1677ff;
  padding-left: 9px;
}

/* 场景 3：自定义链接文本样式 */
:deep(.custom-title) {
  font-weight: 500;
  color: #595959;
  transition: all 0.3s;
  display: inline-block;
}

:deep(.custom-title:hover) {
  color: #1677ff;
  transform: scale(1.05);
}

:deep(.custom-title-active) {
  color: #1677ff;
  font-weight: 600;
  text-shadow: 0 0 1px rgba(22, 119, 255, 0.3);
}

/* 场景 5：组合使用 */
:deep(.combined-root) {
  border: 2px solid #f0f0f0;
  border-radius: 12px;
  padding: 16px;
  background: #fafafa;
  transition: all 0.3s;
}

:deep(.combined-root:hover) {
  border-color: #1677ff;
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.15);
}

:deep(.combined-link) {
  margin: 6px 0;
  padding: 6px 12px;
  border-radius: 8px;
}

:deep(.combined-title-active) {
  background: linear-gradient(135deg, #1677ff 0%, #52c41a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
}
</style>
