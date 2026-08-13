<template>
  <div class="demo-divider-classnames">
    <!-- 场景 1: 自定义根容器样式 -->
    <section class="demo-section">
      <h3>1. 自定义根容器样式</h3>
      <div>
        <p>内容上方</p>
        <Divider :class-names="{ root: 'custom-root' }" />
        <p>内容下方</p>
      </div>
    </section>

    <!-- 场景 2: 自定义带文字的分割线 -->
    <section class="demo-section">
      <h3>2. 自定义带文字的分割线</h3>
      <div>
        <p>第一段内容</p>
        <Divider :class-names="{ root: 'gradient-divider', content: 'gradient-text' }"> 渐变文字 </Divider>
        <p>第二段内容</p>
      </div>
    </section>

    <!-- 场景 3: 自定义两侧线条（rail） -->
    <section class="demo-section">
      <h3>3. 自定义两侧线条（rail）</h3>
      <div>
        <p>第一段内容</p>
        <Divider :class-names="{ rail: 'dotted-rail', content: 'rail-demo-text' }"> 虚线两翼 </Divider>
        <p>第二段内容</p>
      </div>
    </section>

    <!-- 场景 4: 自定义垂直分割线 -->
    <section class="demo-section">
      <h3>4. 自定义垂直分割线</h3>
      <div style="display: flex; align-items: center; gap: 8px">
        <a href="#">链接 1</a>
        <Divider type="vertical" :class-names="{ root: 'custom-vertical' }" />
        <a href="#">链接 2</a>
        <Divider type="vertical" :class-names="{ root: 'custom-vertical' }" />
        <a href="#">链接 3</a>
      </div>
    </section>

    <!-- 场景 5: 组合使用 classNames -->
    <section class="demo-section">
      <h3>5. 组合使用 classNames</h3>
      <div>
        <p>这是一个组合样式的示例</p>
        <Divider
          :class-names="{
            root: 'combined-root',
            content: 'combined-text',
          }"
        >
          特殊标记
        </Divider>
        <p>通过组合 root 和 content 实现完整的自定义效果</p>
      </div>
    </section>

    <!-- 场景 6: 使用 styles 动态样式 -->
    <section class="demo-section">
      <h3>6. 使用 styles 动态样式</h3>
      <div>
        <p>第一部分内容</p>
        <Divider
          :styles="{
            root: { borderColor: '#1890ff', borderWidth: '2px', margin: '32px 0' },
            rail: { opacity: 0.6 },
            content: { fontSize: '16px', color: '#1890ff', fontWeight: 'bold' },
          }"
        >
          动态样式文字
        </Divider>
        <p>第二部分内容</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Divider } from '@hmfw/ant-design'
</script>

<style scoped>
.demo-divider-classnames {
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

/* 场景 1: 自定义根容器 */
:deep(.custom-root) {
  border-top: 3px solid transparent;
  border-image: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-image-slice: 1;
  transition: all 0.3s ease;
}

:deep(.custom-root:hover) {
  border-image: linear-gradient(90deg, #764ba2 0%, #667eea 100%);
}

/* 场景 2: 渐变分割线与文字 */
:deep(.gradient-divider) {
  border-top: 2px solid transparent;
  border-image: linear-gradient(90deg, #f093fb 0%, #f5576c 100%);
  border-image-slice: 1;
}

:deep(.gradient-text) {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 16px;
  padding: 0 24px;
}

/* 场景 3: 自定义 rail 线条 */
:deep(.dotted-rail) {
  border-block-start-style: dotted;
  border-block-start-color: #fa8c16;
}

:deep(.rail-demo-text) {
  color: #fa8c16;
  font-weight: 600;
}

/* 场景 4: 自定义垂直分割线 */
:deep(.custom-vertical) {
  border-left: 2px solid #52c41a;
  height: 24px;
  transition: all 0.3s ease;
}

:deep(.custom-vertical:hover) {
  border-left-color: #73d13d;
  border-left-width: 3px;
}

/* 场景 5: 组合样式 */
:deep(.combined-root) {
  border-top: 2px dashed #1890ff;
  margin: 24px 0;
  position: relative;
}

:deep(.combined-text) {
  background: #e6f7ff;
  color: #1890ff;
  padding: 8px 24px;
  border-radius: 20px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.2);
  transition: all 0.3s ease;
}

:deep(.combined-text:hover) {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.3);
}
</style>
