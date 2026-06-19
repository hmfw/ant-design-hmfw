<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义指示符与描述（classNames） -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义指示符与描述文案：</div>
      <Spin
        tip="数据加载中..."
        :class-names="{
          dot: 'demo-spin-dot',
          description: 'demo-spin-desc',
        }"
      />
    </div>

    <!-- 场景 2：自定义根容器（classNames.root） -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器卡片：</div>
      <Spin tip="正在处理" :class-names="{ root: 'demo-spin-root', description: 'demo-spin-desc' }" />
    </div>

    <!-- 场景 3：嵌套加载浮层（classNames.container） -->
    <div>
      <div style="margin-bottom: 8px; color: #666">嵌套加载浮层着色：</div>
      <Spin spinning :class-names="{ container: 'demo-spin-container', dot: 'demo-spin-dot' }">
        <div style="padding: 24px; background: #f5f5f5; border-radius: 8px">
          这是一段被遮罩的内容区域，浮层通过 container 自定义背景。
        </div>
      </Spin>
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式控制描述与根节点：</div>
      <Spin
        tip="上传中"
        :styles="{
          root: { padding: '16px', background: '#f6ffed', borderRadius: '8px' },
          description: { color: '#52c41a', fontWeight: 600 },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Spin } from 'ant-design-hmfw'
</script>

<style scoped>
:deep(.demo-spin-dot .hmfw-spin-dot-item) {
  background: #722ed1;
}

:deep(.demo-spin-desc) {
  color: #722ed1;
  font-weight: 600;
  letter-spacing: 1px;
}

:deep(.demo-spin-root) {
  padding: 16px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
}

:deep(.demo-spin-root .hmfw-spin-dot-item) {
  background: #fff;
}

:deep(.demo-spin-root .demo-spin-desc) {
  color: #fff;
}

:deep(.demo-spin-container) {
  background: rgba(114, 46, 209, 0.12);
  backdrop-filter: blur(2px);
}
</style>
