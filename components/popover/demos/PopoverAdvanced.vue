<template>
  <div style="display: flex; flex-direction: column; gap: 20px">
    <!-- color 属性 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">color - 自定义背景色：</div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap">
        <Popover title="默认颜色" content="白色背景（默认）">
          <Button>默认</Button>
        </Popover>
        <Popover
          title="蓝色"
          content="自定义蓝色背景"
          color="#1677ff"
          :styles="{ title: { color: '#fff' }, content: { color: '#fff' } }"
        >
          <Button>蓝色</Button>
        </Popover>
        <Popover
          title="绿色"
          content="自定义绿色背景"
          color="#52c41a"
          :styles="{ title: { color: '#fff' }, content: { color: '#fff' } }"
        >
          <Button>绿色</Button>
        </Popover>
        <Popover
          title="红色"
          content="自定义红色背景"
          color="#ff4d4f"
          :styles="{ title: { color: '#fff' }, content: { color: '#fff' } }"
        >
          <Button>红色</Button>
        </Popover>
        <Popover
          title="渐变色"
          content="CSS 渐变背景"
          color="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          :styles="{ title: { color: '#fff' }, content: { color: '#fff' } }"
        >
          <Button>渐变</Button>
        </Popover>
      </div>
    </div>

    <!-- overlayStyle -->
    <div>
      <div style="margin-bottom: 8px; color: #666">overlayStyle - 自定义浮层样式：</div>
      <div style="display: flex; gap: 8px">
        <Popover title="默认样式" content="无额外样式">
          <Button>默认</Button>
        </Popover>
        <Popover
          title="边框样式"
          content="添加边框和圆角"
          :overlay-style="{ border: '2px solid #1677ff', borderRadius: '12px' }"
        >
          <Button>自定义边框</Button>
        </Popover>
        <Popover
          title="最大宽度"
          content="这是一段很长的文本内容，用于演示最大宽度限制的效果。当内容超过最大宽度时会自动换行显示。"
          :overlay-style="{ maxWidth: '200px' }"
        >
          <Button>限制宽度</Button>
        </Popover>
      </div>
    </div>

    <!-- overlayInnerStyle -->
    <div>
      <div style="margin-bottom: 8px; color: #666">overlayInnerStyle - 自定义内层样式：</div>
      <div style="display: flex; gap: 8px">
        <Popover title="默认内边距" content="12px 内边距（默认）">
          <Button>默认</Button>
        </Popover>
        <Popover title="大内边距" content="更大的内边距空间" :overlay-inner-style="{ padding: '20px' }">
          <Button>大内边距</Button>
        </Popover>
        <Popover
          title="自定义背景"
          content="内层半透明背景"
          :overlay-inner-style="{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }"
        >
          <Button>半透明</Button>
        </Popover>
      </div>
    </div>

    <!-- getPopupContainer -->
    <div>
      <div style="margin-bottom: 8px; color: #666">getPopupContainer - 自定义挂载容器：</div>
      <div style="display: flex; gap: 8px; align-items: center">
        <Popover title="挂载到 body" content="默认挂载到 body 元素">
          <Button>默认容器</Button>
        </Popover>
        <div ref="customContainer" style="position: relative; display: inline-block">
          <Popover title="自定义容器" content="挂载到指定的 DOM 容器" :get-popup-container="() => customContainer">
            <Button>自定义容器</Button>
          </Popover>
        </div>
        <span style="color: #8c8c8c; font-size: 13px">（在有 overflow: hidden 的容器中使用）</span>
      </div>
    </div>

    <!-- 组合示例：延迟 + 颜色 + 样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">综合示例 1 - 通知样式：</div>
      <Popover
        :mouse-enter-delay="0"
        :mouse-leave-delay="0"
        color="#f6ffed"
        :overlay-style="{ border: '1px solid #b7eb8f' }"
        :styles="{
          title: {
            color: '#52c41a',
            fontWeight: '600',
            borderBottom: '1px solid #d9f7be',
            paddingBottom: '8px',
            marginBottom: '12px',
          },
          content: { color: '#389e0d' },
        }"
      >
        <template #title>
          <div style="display: flex; align-items: center; gap: 8px">
            <CheckCircleOutlined />
            <span>成功提示</span>
          </div>
        </template>
        <template #content>
          <div>操作已成功完成！</div>
        </template>
        <Button type="primary">成功通知</Button>
      </Popover>
    </div>

    <!-- 综合示例：警告样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">综合示例 2 - 警告样式：</div>
      <Popover
        :mouse-enter-delay="0"
        color="#fffbe6"
        :overlay-style="{ border: '1px solid #ffe58f', boxShadow: '0 4px 12px rgba(250, 173, 20, 0.15)' }"
        :overlay-inner-style="{ padding: '16px' }"
        :styles="{
          title: { color: '#faad14', fontWeight: '600' },
          content: { color: '#d48806' },
        }"
      >
        <template #title>
          <div style="display: flex; align-items: center; gap: 8px">
            <ExclamationCircleOutlined />
            <span>注意事项</span>
          </div>
        </template>
        <template #content>
          <div style="line-height: 1.6">
            <p style="margin: 0 0 8px">请注意以下事项：</p>
            <ul style="margin: 0; padding-left: 20px">
              <li>操作不可撤销</li>
              <li>请谨慎操作</li>
            </ul>
          </div>
        </template>
        <Button>警告提示</Button>
      </Popover>
    </div>

    <!-- 综合示例：深色主题 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">综合示例 3 - 深色主题：</div>
      <Popover
        color="#1f1f1f"
        :overlay-inner-style="{ padding: '16px 20px' }"
        :styles="{
          title: {
            color: '#ffffff',
            fontWeight: '600',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            paddingBottom: '12px',
            marginBottom: '12px',
          },
          content: { color: 'rgba(255,255,255,0.85)' },
        }"
      >
        <template #title>深色主题</template>
        <template #content>
          <div style="line-height: 1.6">这是深色主题的 Popover，适合夜间模式或特殊场景使用。</div>
        </template>
        <Button>深色主题</Button>
      </Popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Popover, Button } from '@hmfw/ant-design'
import { CheckCircleOutlined, ExclamationCircleOutlined } from '@hmfw/icons'

const customContainer = ref<HTMLElement>()
</script>
