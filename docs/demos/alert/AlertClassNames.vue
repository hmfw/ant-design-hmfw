<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根容器 + 关闭按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器与关闭按钮：</div>
      <Alert
        type="info"
        title="系统通知"
        closable
        :class-names="{ root: 'demo-alert-root', closeIcon: 'demo-alert-close' }"
      />
    </div>

    <!-- 场景 2：带描述，定制图标 / 标题 / 描述 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">定制图标、标题与描述：</div>
      <Alert
        type="success"
        show-icon
        title="部署成功"
        description="新版本已平滑发布到生产环境，所有节点运行正常。"
        :class-names="{
          icon: 'demo-alert-icon',
          title: 'demo-alert-title',
          description: 'demo-alert-desc',
        }"
      />
    </div>

    <!-- 场景 3：内容区与操作项 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">定制内容区与操作项：</div>
      <Alert
        type="warning"
        show-icon
        title="存储空间不足"
        description="当前剩余空间已低于 10%，请及时清理。"
        :class-names="{ section: 'demo-alert-section', actions: 'demo-alert-actions' }"
      >
        <template #action>
          <Button size="small" type="primary">立即清理</Button>
        </template>
      </Alert>
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式（styles）：</div>
      <Alert
        type="error"
        show-icon
        title="请求失败"
        description="服务暂时不可用，请稍后重试。"
        closable
        :styles="{
          root: { borderRadius: '10px', borderColor: '#ff7875' },
          title: { fontWeight: 700, color: '#cf1322' },
          icon: { fontSize: '22px' },
          closeIcon: { color: '#cf1322' },
        }"
      />
    </div>

    <!-- 场景 5：className 与 styles 叠加 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">className 与 styles 叠加：</div>
      <Alert
        type="info"
        show-icon
        title="组合定制"
        description="className 控制结构样式，styles 覆盖关键细节。"
        :class-names="{ root: 'demo-alert-root', description: 'demo-alert-desc' }"
        :styles="{ title: { letterSpacing: '1px' } }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Alert, Button } from '@hmfw/ant-design'
</script>

<style scoped>
:deep(.demo-alert-root) {
  background: #f0f5ff;
  border: 1px solid #adc6ff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
}

:deep(.demo-alert-root:hover) {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
}

:deep(.demo-alert-close) {
  color: #1677ff;
  transition: transform 0.3s;
}

:deep(.demo-alert-close:hover) {
  transform: rotate(90deg);
}

:deep(.demo-alert-icon) {
  transform: scale(1.1);
  transition: transform 0.3s;
}

:deep(.demo-alert-title) {
  background: linear-gradient(135deg, #389e0d, #52c41a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 700;
}

:deep(.demo-alert-desc) {
  font-style: italic;
  color: #595959;
}

:deep(.demo-alert-section) {
  padding-left: 4px;
  border-left: 3px solid #faad14;
}

:deep(.demo-alert-actions) {
  display: flex;
  align-items: center;
}
</style>
