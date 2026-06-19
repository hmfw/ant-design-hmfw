<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义消息容器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义消息容器与图标：</div>
      <Popconfirm
        title="确定删除这条记录吗？"
        description="此操作不可逆，请谨慎操作"
        :class-names="{
          message: 'custom-message',
          icon: 'custom-icon',
        }"
      >
        <Button type="primary">删除记录</Button>
      </Popconfirm>
    </div>

    <!-- 场景 2：自定义标题与描述样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义标题与描述：</div>
      <Popconfirm
        title="重要提示"
        description="该操作将影响所有关联数据"
        :class-names="{
          title: 'custom-title',
          description: 'custom-description',
        }"
      >
        <Button type="default">批量操作</Button>
      </Popconfirm>
    </div>

    <!-- 场景 3：自定义按钮组样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义按钮组：</div>
      <Popconfirm
        title="确定要提交吗？"
        :class-names="{
          buttons: 'custom-buttons',
          cancelBtn: 'custom-cancel',
          okBtn: 'custom-ok',
        }"
      >
        <Button>提交表单</Button>
      </Popconfirm>
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Popconfirm
        title="确认操作"
        description="这是一个测试描述"
        :styles="{
          message: { padding: '8px 0' },
          icon: { color: '#52c41a', fontSize: '18px' },
          title: { fontWeight: 'bold', color: '#1677ff' },
          description: { fontStyle: 'italic', color: '#8c8c8c' },
        }"
      >
        <Button type="dashed">样式演示</Button>
      </Popconfirm>
    </div>

    <!-- 场景 5：组合使用 classNames 和 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合自定义：</div>
      <Popconfirm
        title="确认发布文章？"
        description="发布后将立即对所有用户可见"
        :class-names="{
          message: 'gradient-message',
          buttons: 'gradient-buttons',
        }"
        :styles="{
          icon: { fontSize: '20px' },
          okBtn: { minWidth: '80px' },
        }"
      >
        <Button type="primary">发布</Button>
      </Popconfirm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button, Popconfirm } from 'ant-design-hmfw'
</script>

<style scoped>
/* 场景 1：消息容器与图标 */
:global(.custom-message) {
  background: linear-gradient(135deg, #f0f5ff 0%, #e6f4ff 100%);
  padding: 8px;
  border-radius: 6px;
  border-left: 3px solid #1677ff;
}

:global(.custom-icon) {
  color: #1677ff;
  font-size: 18px;
  transform: scale(1.2);
}

/* 场景 2：标题与描述 */
:global(.custom-title) {
  font-weight: 600;
  color: #d4380d;
  font-size: 15px;
}

:global(.custom-description) {
  background: #fff7e6;
  padding: 6px 8px;
  border-radius: 4px;
  color: #d46b08;
  border: 1px dashed #ffa940;
}

/* 场景 3：按钮组 */
:global(.custom-buttons) {
  gap: 12px;
  padding-top: 4px;
}

:global(.custom-cancel) {
  border-color: #d9d9d9;
  color: #595959;
  transition: all 0.3s;
}

:global(.custom-cancel:hover) {
  border-color: #ff4d4f;
  color: #ff4d4f;
}

:global(.custom-ok) {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
  border: none;
  box-shadow: 0 2px 4px rgba(82, 196, 26, 0.3);
  transition: all 0.3s;
}

:global(.custom-ok:hover) {
  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.5);
  transform: translateY(-1px);
}

/* 场景 5：渐变主题 */
:global(.gradient-message) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 12px;
  border-radius: 8px;
}

:global(.gradient-message .hmfw-popconfirm-message-icon) {
  color: #fff;
  font-size: 20px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

:global(.gradient-message .hmfw-popconfirm-message-title) {
  color: #fff;
  font-weight: 600;
}

:global(.gradient-message + .hmfw-popconfirm-description) {
  color: rgba(255, 255, 255, 0.9);
  padding-left: 0;
  margin-top: 8px;
}

:global(.gradient-buttons) {
  margin-top: 12px;
}
</style>
