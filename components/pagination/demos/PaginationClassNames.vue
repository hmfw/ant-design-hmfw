<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根容器和页码项 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器与页码项：</div>
      <Pagination
        :total="50"
        :class-names="{
          root: 'custom-root',
          item: 'custom-item',
          itemActive: 'custom-item-active',
        }"
      />
    </div>

    <!-- 场景 2：自定义上一页/下一页按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义上一页/下一页按钮：</div>
      <Pagination
        :total="100"
        :class-names="{
          prev: 'custom-prev',
          next: 'custom-next',
        }"
      />
    </div>

    <!-- 场景 3：自定义完整功能 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义完整功能（显示总数、尺寸切换、快速跳转）：</div>
      <Pagination
        :total="200"
        show-size-changer
        show-quick-jumper
        :show-total="(total) => `共 ${total} 条`"
        :class-names="{
          root: 'custom-full-root',
          total: 'custom-total',
          sizeChanger: 'custom-size-changer',
          quickJumper: 'custom-quick-jumper',
        }"
      />
    </div>

    <!-- 场景 4：自定义跳转按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义向前/向后跳转按钮：</div>
      <Pagination
        :total="150"
        :class-names="{
          jumpPrev: 'custom-jump',
          jumpNext: 'custom-jump',
        }"
      />
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Pagination
        :total="80"
        :styles="{
          root: { padding: '16px', background: '#f0f5ff', borderRadius: '8px' },
          item: { fontWeight: 'bold' },
          itemActive: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Pagination } from '@hmfw/ant-design'
</script>

<style scoped>
/* 场景 1：自定义根容器和页码项 */
:deep(.custom-root) {
  padding: 12px;
  background: linear-gradient(135deg, #f0f5ff 0%, #e6f4ff 100%);
  border-radius: 8px;
}

:deep(.custom-item) {
  transition: all 0.3s;
}

:deep(.custom-item:hover) {
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.3);
}

:deep(.custom-item-active) {
  background: linear-gradient(135deg, #1677ff 0%, #096dd9 100%) !important;
  border: none !important;
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.4);
}

/* 场景 2：自定义上一页/下一页 */
:deep(.custom-prev),
:deep(.custom-next) {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
  border: none;
  color: white;
  font-weight: bold;
  transition: all 0.3s;
}

:deep(.custom-prev:hover),
:deep(.custom-next:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.4);
}

/* 场景 3：自定义完整功能 */
:deep(.custom-full-root) {
  padding: 16px;
  background: #fff7e6;
  border-radius: 12px;
  border: 2px dashed #faad14;
}

:deep(.custom-total) {
  color: #d46b08;
  font-weight: bold;
  font-size: 15px;
}

:deep(.custom-size-changer) {
  background: #fffbe6;
  padding: 4px 8px;
  border-radius: 6px;
}

:deep(.custom-quick-jumper) {
  background: #fffbe6;
  padding: 4px 8px;
  border-radius: 6px;
}

:deep(.custom-quick-jumper input) {
  border-color: #faad14;
}

:deep(.custom-quick-jumper input:focus) {
  border-color: #d48806;
  box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
}

/* 场景 4：自定义跳转按钮 */
:deep(.custom-jump) {
  color: #722ed1;
  font-size: 18px;
  transition: all 0.3s;
}

:deep(.custom-jump:hover) {
  color: #531dab;
  transform: scale(1.2);
}
</style>
