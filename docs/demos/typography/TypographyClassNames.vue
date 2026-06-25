<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：Text 自定义根节点 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">Text 自定义根节点样式：</div>
      <Text :class-names="{ root: 'custom-text-root' }"> 渐变文字效果 </Text>
    </div>

    <!-- 场景 2：Title 自定义复制按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">Title 自定义复制按钮：</div>
      <Title :level="3" copyable :class-names="{ copy: 'custom-copy-btn' }"> 可复制的标题 </Title>
    </div>

    <!-- 场景 3：Paragraph 组合样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">Paragraph 组合 classNames：</div>
      <Paragraph copyable :class-names="{ root: 'custom-paragraph', copy: 'custom-paragraph-copy' }">
        这是一段带有自定义样式的段落文字，同时复制按钮也应用了自定义样式。点击右侧按钮即可复制全部内容。
      </Paragraph>
    </div>

    <!-- 场景 4：Link 使用 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">Link 使用内联样式：</div>
      <Link
        href="https://github.com"
        target="_blank"
        :styles="{
          root: {
            fontSize: '16px',
            fontWeight: 600,
            textDecoration: 'underline',
            textDecorationColor: '#52c41a',
            textDecorationThickness: '2px',
          },
        }"
      >
        GitHub 官网
      </Link>
    </div>

    <!-- 场景 5：Text 组合 classNames 和 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合使用 classNames 和 styles：</div>
      <Text
        copyable
        :class-names="{ root: 'combined-text' }"
        :styles="{ copy: { fontSize: '18px', color: '#faad14' } }"
      >
        classNames 控制文字，styles 控制按钮
      </Text>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Text, Title, Paragraph, Link } from '@hmfw/ant-design'
</script>

<style scoped>
:deep(.custom-text-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.3s;
}

:deep(.custom-text-root:hover) {
  letter-spacing: 1px;
}

:deep(.custom-copy-btn) {
  padding: 4px 8px;
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white !important;
  border-radius: 4px;
  transition: all 0.3s;
}

:deep(.custom-copy-btn:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4);
}

:deep(.custom-paragraph) {
  padding: 16px;
  background: linear-gradient(to right, #f0f5ff, #fff);
  border-left: 4px solid #1677ff;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.75);
  transition: all 0.3s;
}

:deep(.custom-paragraph:hover) {
  background: linear-gradient(to right, #e6f4ff, #fff);
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.15);
}

:deep(.custom-paragraph-copy) {
  font-size: 16px;
  color: #52c41a;
  transition: all 0.3s;
}

:deep(.custom-paragraph-copy:hover) {
  transform: scale(1.2);
}

:deep(.combined-text) {
  padding: 8px 12px;
  background: #f6ffed;
  border: 1px solid #b7eb8f;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  color: #389e0d;
}
</style>
