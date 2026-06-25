<template>
  <div style="display: flex; flex-direction: column; gap: 20px">
    <!-- 自定义标题样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义标题样式：</div>
      <Popover title="渐变标题" content="这是一段内容，展示自定义标题的效果" :class-names="{ title: 'custom-title' }">
        <Button>渐变标题</Button>
      </Popover>
    </div>

    <!-- 自定义内容样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义内容样式：</div>
      <Popover title="通知" content="您有 3 条新消息未读" :class-names="{ content: 'custom-content' }">
        <Button>查看通知</Button>
      </Popover>
    </div>

    <!-- 组合使用 classNames -->
    <div>
      <div style="margin-bottom: 8px; color: #666">同时自定义标题和内容：</div>
      <Popover
        title="完整自定义"
        content="标题和内容都应用了自定义样式"
        :class-names="{
          title: 'combined-title',
          content: 'combined-content',
        }"
      >
        <Button type="primary">完整示例</Button>
      </Popover>
    </div>

    <!-- 使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式（styles）：</div>
      <Popover
        title="内联样式标题"
        content="使用 styles 属性控制样式"
        :styles="{
          title: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '12px 16px',
            fontWeight: 'bold',
            borderRadius: '4px 4px 0 0',
          },
          content: {
            background: '#f0f5ff',
            padding: '16px',
            fontSize: '14px',
          },
        }"
      >
        <Button>内联样式</Button>
      </Popover>
    </div>

    <!-- 函数形式（动态计算） -->
    <div>
      <div style="margin-bottom: 8px; color: #666">函数形式动态计算样式：</div>
      <Popover
        :title="dynamicTitle"
        content="根据 props 动态计算样式"
        :class-names="
          (info) => ({
            title: info.props.title ? 'has-title' : 'no-title',
            content: 'dynamic-content',
          })
        "
      >
        <Button>动态样式</Button>
      </Popover>
      <Button style="margin-left: 8px" size="small" @click="toggleTitle"> 切换标题 </Button>
    </div>

    <!-- 无标题场景 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">仅内容（无标题）：</div>
      <Popover content="这是一段没有标题的提示内容" :class-names="{ content: 'content-only' }">
        <Button>仅内容</Button>
      </Popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Popover, Button } from '@hmfw/ant-design'

const dynamicTitle = ref('动态标题')

const toggleTitle = () => {
  dynamicTitle.value = dynamicTitle.value ? '' : '动态标题'
}
</script>

<style scoped>
:deep(.custom-title) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 16px;
  font-weight: bold;
  border-radius: 4px 4px 0 0;
  margin: -12px -16px 8px;
}

:deep(.custom-content) {
  background: #f0f5ff;
  padding: 16px;
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  border-radius: 4px;
}

:deep(.combined-title) {
  color: #722ed1;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 2px solid #722ed1;
  padding-bottom: 8px;
  margin-bottom: 12px;
}

:deep(.combined-content) {
  color: #1890ff;
  line-height: 1.8;
  font-size: 13px;
}

:deep(.has-title) {
  background: #e6f7ff;
  padding: 8px 12px;
  border-radius: 4px;
  margin: -8px -12px 8px;
}

:deep(.no-title) {
  /* 无标题时不应用样式 */
}

:deep(.dynamic-content) {
  font-style: italic;
  color: #595959;
}

:deep(.content-only) {
  background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(253, 203, 110, 0.3);
}
</style>
