<template>
  <div class="demo-checkbox-classnames">
    <!-- 场景 1: 自定义根节点 -->
    <section class="demo-section">
      <h3>1. 自定义根节点样式</h3>
      <Checkbox :class-names="{ root: 'custom-root' }"> 自定义根节点 </Checkbox>
    </section>

    <!-- 场景 2: 自定义勾选框 -->
    <section class="demo-section">
      <h3>2. 自定义勾选框样式</h3>
      <Checkbox :class-names="{ checkbox: 'custom-checkbox' }"> 圆形勾选框 </Checkbox>
    </section>

    <!-- 场景 3: 自定义内部勾选图标 -->
    <section class="demo-section">
      <h3>3. 自定义内部勾选图标</h3>
      <Checkbox :class-names="{ inner: 'custom-inner' }"> 星形勾选 </Checkbox>
    </section>

    <!-- 场景 4: 自定义文本标签 -->
    <section class="demo-section">
      <h3>4. 自定义文本标签样式</h3>
      <Checkbox :class-names="{ label: 'custom-label' }"> 渐变文字标签 </Checkbox>
    </section>

    <!-- 场景 5: 组合使用多个 classNames -->
    <section class="demo-section">
      <h3>5. 组合使用多个 classNames</h3>
      <Checkbox
        :class-names="{
          root: 'combined-root',
          checkbox: 'combined-checkbox',
          inner: 'combined-inner',
          label: 'combined-label',
        }"
      >
        组合样式
      </Checkbox>
    </section>

    <!-- 场景 6: 使用 styles prop -->
    <section class="demo-section">
      <h3>6. 使用 styles 动态样式</h3>
      <Checkbox
        :styles="{
          root: { padding: '8px 16px', border: '2px solid #1890ff', borderRadius: '8px' },
          checkbox: { transform: 'scale(1.2)' },
          label: { fontWeight: 'bold', color: '#1890ff' },
        }"
      >
        动态样式
      </Checkbox>
    </section>

    <!-- 场景 7: 半选状态自定义 -->
    <section class="demo-section">
      <h3>7. 半选状态自定义样式</h3>
      <Checkbox :indeterminate="true" :class-names="{ checkbox: 'indeterminate-custom', inner: 'indeterminate-inner' }">
        自定义半选状态
      </Checkbox>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Checkbox } from 'ant-design-hmfw'
</script>

<style scoped>
.demo-checkbox-classnames {
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

/* 场景 1: 自定义根节点 */
:deep(.custom-root) {
  padding: 12px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  color: white;
  transition: all 0.3s ease;
}

:deep(.custom-root:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

/* 场景 2: 自定义勾选框为圆形 */
:deep(.custom-checkbox),
:deep(.custom-checkbox .hmfw-checkbox-inner) {
  border-radius: 50% !important;
}

:deep(.custom-checkbox) {
  border: 2px solid #52c41a;
}

/* 场景 3: 自定义内部勾选图标为星形 */
:deep(.custom-inner::after) {
  content: '★';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #faad14;
  font-size: 12px;
  border: none !important;
}

:deep(.hmfw-checkbox-checked .custom-inner::after) {
  display: block;
}

/* 场景 4: 渐变文字标签 */
:deep(.custom-label) {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-size: 16px;
}

/* 场景 5: 组合样式 */
:deep(.combined-root) {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border: 2px dashed #1890ff;
  border-radius: 6px;
  background: #e6f7ff;
  transition: all 0.3s ease;
}

:deep(.combined-root:hover) {
  border-color: #40a9ff;
  background: #bae7ff;
}

:deep(.combined-checkbox) {
  border: 2px solid #1890ff;
}

:deep(.combined-inner) {
  background: #1890ff;
}

:deep(.combined-label) {
  color: #0050b3;
  font-weight: 500;
}

/* 场景 7: 半选状态自定义 */
:deep(.indeterminate-custom) {
  border-color: #722ed1;
  background: #f9f0ff;
}

:deep(.indeterminate-inner::after) {
  background-color: #722ed1 !important;
}
</style>
