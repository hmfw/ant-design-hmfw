<template>
  <div class="demo-card-classnames">
    <!-- 场景 1: 自定义根节点 -->
    <section class="demo-section">
      <h3>1. 自定义根节点样式</h3>
      <Card title="自定义根节点" :class-names="{ root: 'custom-root' }">
        <p>这是一个自定义根节点样式的卡片</p>
      </Card>
    </section>

    <!-- 场景 2: 自定义头部 -->
    <section class="demo-section">
      <h3>2. 自定义头部样式</h3>
      <Card title="自定义头部" :class-names="{ head: 'custom-head' }">
        <p>这是一个自定义头部样式的卡片</p>
      </Card>
    </section>

    <!-- 场景 3: 自定义标题 -->
    <section class="demo-section">
      <h3>3. 自定义标题样式</h3>
      <Card title="渐变标题" :class-names="{ title: 'custom-title' }">
        <p>这是一个自定义标题样式的卡片</p>
      </Card>
    </section>

    <!-- 场景 4: 自定义扩展区域 -->
    <section class="demo-section">
      <h3>4. 自定义扩展区域样式</h3>
      <Card title="标题" :class-names="{ extra: 'custom-extra' }">
        <template #extra>
          <a href="#">更多</a>
        </template>
        <p>这是一个自定义扩展区域样式的卡片</p>
      </Card>
    </section>

    <!-- 场景 5: 自定义主体内容 -->
    <section class="demo-section">
      <h3>5. 自定义主体内容样式</h3>
      <Card title="主体样式" :class-names="{ body: 'custom-body' }">
        <p>这是一个自定义主体样式的卡片</p>
        <p>内容可以有多个段落</p>
      </Card>
    </section>

    <!-- 场景 6: 自定义操作区域 -->
    <section class="demo-section">
      <h3>6. 自定义操作区域样式</h3>
      <Card title="操作样式" :class-names="{ actions: 'custom-actions' }">
        <p>这是一个自定义操作区域样式的卡片</p>
        <template #actions>
          <li><a>设置</a></li>
          <li><a>编辑</a></li>
          <li><a>删除</a></li>
        </template>
      </Card>
    </section>

    <!-- 场景 7: 组合使用多个 classNames -->
    <section class="demo-section">
      <h3>7. 组合使用多个 classNames</h3>
      <Card
        title="综合样式"
        :class-names="{
          root: 'combined-root',
          head: 'combined-head',
          title: 'combined-title',
          body: 'combined-body',
          actions: 'combined-actions',
        }"
      >
        <template #extra>
          <a href="#">操作</a>
        </template>
        <p>这是一个组合多个自定义样式的卡片</p>
        <p>所有部分都有自定义样式</p>
        <template #actions>
          <li><a>操作 1</a></li>
          <li><a>操作 2</a></li>
        </template>
      </Card>
    </section>

    <!-- 场景 8: 使用 styles prop -->
    <section class="demo-section">
      <h3>8. 使用 styles 动态样式</h3>
      <Card
        title="动态样式卡片"
        :styles="{
          root: { border: '2px solid #1890ff', borderRadius: '12px' },
          head: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' },
          title: { fontWeight: 'bold', fontSize: '18px' },
          body: { padding: '24px', background: '#f0f2f5' },
        }"
      >
        <p>这是一个使用动态样式的卡片</p>
      </Card>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Card } from '@hmfw/ant-design'
</script>

<style scoped>
.demo-card-classnames {
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
  border: 3px solid #722ed1;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(114, 46, 209, 0.2);
  transition: all 0.3s ease;
}

:deep(.custom-root:hover) {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(114, 46, 209, 0.3);
}

/* 场景 2: 自定义头部 */
:deep(.custom-head) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px 8px 0 0;
}

:deep(.custom-head .hmfw-card-head-title) {
  color: white;
}

/* 场景 3: 自定义标题 */
:deep(.custom-title) {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 20px;
}

/* 场景 4: 自定义扩展区域 */
:deep(.custom-extra a) {
  padding: 4px 12px;
  background: #1890ff;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
}

:deep(.custom-extra a:hover) {
  background: #40a9ff;
  transform: scale(1.05);
}

/* 场景 5: 自定义主体内容 */
:deep(.custom-body) {
  background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
  padding: 24px;
  border-radius: 8px;
  color: #1890ff;
  font-weight: 500;
}

/* 场景 6: 自定义操作区域 */
:deep(.custom-actions) {
  background: #f0f2f5;
  border-radius: 0 0 8px 8px;
}

:deep(.custom-actions li) {
  transition: all 0.3s ease;
}

:deep(.custom-actions li:hover) {
  background: #e6f7ff;
  transform: translateY(-2px);
}

:deep(.custom-actions a) {
  color: #1890ff;
  font-weight: 600;
}

/* 场景 7: 组合样式 */
:deep(.combined-root) {
  border: 2px dashed #52c41a;
  border-radius: 16px;
  background: #f6ffed;
  transition: all 0.3s ease;
}

:deep(.combined-root:hover) {
  border-color: #73d13d;
  background: #d9f7be;
}

:deep(.combined-head) {
  background: #52c41a;
  color: white;
  border-radius: 14px 14px 0 0;
}

:deep(.combined-title) {
  color: white;
  font-weight: 700;
}

:deep(.combined-body) {
  padding: 24px;
  color: #389e0d;
}

:deep(.combined-actions) {
  background: #d9f7be;
}

:deep(.combined-actions a) {
  color: #389e0d;
  font-weight: 600;
}
</style>
