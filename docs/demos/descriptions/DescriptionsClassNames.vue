<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义标题和头部区域 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 13px">自定义标题和头部区域样式：</div>
      <Descriptions
        title="用户信息"
        extra="更多操作"
        :items="basicItems"
        :class-names="{
          header: 'custom-header',
          title: 'custom-title',
          extra: 'custom-extra',
        }"
      />
    </div>

    <!-- 场景 2：自定义标签和内容样式 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 13px">自定义标签和内容区域样式：</div>
      <Descriptions
        title="产品信息"
        bordered
        :items="productItems"
        :class-names="{
          label: 'custom-label',
          content: 'custom-content',
        }"
      />
    </div>

    <!-- 场景 3：垂直布局自定义行样式 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 13px">垂直布局自定义行样式（hover 效果）：</div>
      <Descriptions
        title="订单详情"
        layout="vertical"
        bordered
        :items="orderItems"
        :class-names="{
          row: 'custom-row',
          label: 'custom-vertical-label',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 13px">使用 styles 内联样式：</div>
      <Descriptions
        title="配置信息"
        :items="configItems"
        :styles="{
          root: { border: '2px solid #1890ff', borderRadius: '12px', padding: '16px' },
          title: { fontSize: '18px', color: '#1890ff', fontWeight: 600 },
          label: { color: '#8c8c8c', fontWeight: 500 },
          content: { color: '#262626', fontWeight: 600 },
        }"
      />
    </div>

    <!-- 场景 5：组合使用 classNames 和 styles -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 13px">
        组合使用 classNames 和 styles（渐变背景 + 自定义间距）：
      </div>
      <Descriptions
        title="高级配置"
        extra="编辑"
        :items="advancedItems"
        :class-names="{
          root: 'gradient-root',
          view: 'gradient-view',
          label: 'gradient-label',
          content: 'gradient-content',
        }"
        :styles="{
          header: { padding: '16px 20px' },
          view: { padding: '16px 20px' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Descriptions } from '@hmfw/ant-design'

const basicItems = [
  { label: '姓名', children: '张三' },
  { label: '手机号', children: '138-0000-0000' },
  { label: '邮箱', children: 'zhangsan@example.com' },
  { label: '住址', children: '浙江省杭州市西湖区某某路 123 号', span: 2 },
]

const productItems = [
  { label: '产品名称', children: 'Ant Design Vue' },
  { label: '版本号', children: 'v4.0.0' },
  { label: '许可证', children: 'MIT' },
  { label: '作者', children: 'Ant Design Team' },
  { label: '仓库地址', children: 'https://github.com/vueComponent/ant-design-vue', span: 2 },
]

const orderItems = [
  { label: '订单编号', children: 'ORD20230615001' },
  { label: '下单时间', children: '2023-06-15 14:30:00' },
  { label: '订单状态', children: '已完成' },
]

const configItems = [
  { label: 'API 地址', children: 'https://api.example.com' },
  { label: '超时时间', children: '30 秒' },
  { label: '重试次数', children: '3 次' },
]

const advancedItems = [
  { label: '服务器', children: 'Server-01' },
  { label: '状态', children: '运行中' },
  { label: 'CPU 使用率', children: '45%' },
  { label: '内存使用率', children: '68%' },
  { label: '磁盘使用率', children: '52%' },
  { label: '网络流量', children: '125 MB/s' },
]
</script>

<style scoped>
/* 场景 1：自定义标题和头部 */
:deep(.custom-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 16px 20px;
  border-radius: 8px 8px 0 0;
}

:deep(.custom-title) {
  color: white;
  font-size: 18px;
  font-weight: 600;
}

:deep(.custom-extra) {
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: all 0.3s;
}

:deep(.custom-extra:hover) {
  color: white;
  transform: translateX(-2px);
}

/* 场景 2：自定义标签和内容 */
:deep(.custom-label) {
  background: #f0f5ff;
  color: #1890ff;
  font-weight: 600;
  position: relative;
}

:deep(.custom-label::before) {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #1890ff;
}

:deep(.custom-content) {
  background: #fafafa;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 13px;
}

/* 场景 3：垂直布局行样式 */
:deep(.custom-row) {
  transition: all 0.3s;
}

:deep(.custom-row:hover) {
  background-color: #f0f5ff;
  transform: translateX(2px);
}

:deep(.custom-vertical-label) {
  color: #1890ff;
  font-weight: 500;
}

/* 场景 5：渐变背景 */
:deep(.gradient-root) {
  background: linear-gradient(135deg, #e0f7fa 0%, #f3e5f5 100%);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

:deep(.gradient-view) {
  background: rgba(255, 255, 255, 0.6);
}

:deep(.gradient-label) {
  color: #00838f;
  font-weight: 500;
}

:deep(.gradient-content) {
  color: #4a148c;
  font-weight: 600;
}
</style>
