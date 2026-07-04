<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根容器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器样式：</div>
      <div style="display: flex; gap: 16px; align-items: center">
        <Avatar :class-names="{ root: 'gradient-avatar' }">U</Avatar>
        <Avatar :class-names="{ root: 'gradient-avatar' }" shape="square">U</Avatar>
        <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" :class-names="{ root: 'gradient-avatar' }" />
      </div>
    </div>

    <!-- 场景 2：自定义图片样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义图片样式：</div>
      <div style="display: flex; gap: 16px; align-items: center">
        <Avatar
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=2"
          :class-names="{ img: 'custom-img' }"
          size="{64}"
        />
        <Avatar
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=3"
          :class-names="{ img: 'custom-img' }"
          size="{64}"
          shape="square"
        />
      </div>
    </div>

    <!-- 场景 3：自定义文本容器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义文本容器样式：</div>
      <div style="display: flex; gap: 16px; align-items: center">
        <Avatar :class-names="{ string: 'text-glow' }" size="{64}">A</Avatar>
        <Avatar :class-names="{ string: 'text-glow' }" size="{64}">李</Avatar>
        <Avatar :class-names="{ string: 'text-glow' }" size="{64}" shape="square">Vue</Avatar>
      </div>
    </div>

    <!-- 场景 4：组合使用 classNames -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合使用多个 key：</div>
      <div style="display: flex; gap: 16px; align-items: center">
        <Avatar :class-names="{ root: 'gradient-avatar', string: 'text-glow' }" size="{64}"> K </Avatar>
        <Avatar
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=4"
          :class-names="{ root: 'gradient-avatar', img: 'custom-img' }"
          size="{64}"
        />
      </div>
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <div style="display: flex; gap: 16px; align-items: center">
        <Avatar
          :styles="{
            root: {
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: '3px solid #fff',
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
            },
            string: { color: '#fff', fontWeight: 'bold' },
          }"
          size="{64}"
        >
          JS
        </Avatar>
        <Avatar
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=5"
          :styles="{
            root: { borderRadius: '12px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)' },
            img: { filter: 'grayscale(50%)' },
          }"
          size="{64}"
          shape="square"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Avatar } from '@hmfw/ant-design'
</script>

<style scoped>
:deep(.gradient-avatar) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: 2px solid #fff;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  transition: all 0.3s;
}

:deep(.gradient-avatar:hover) {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);
}

:deep(.custom-img) {
  filter: saturate(1.5) contrast(1.1);
  transition: filter 0.3s;
}

:deep(.custom-img:hover) {
  filter: saturate(1.8) contrast(1.2);
}

:deep(.text-glow) {
  color: #fff;
  font-weight: bold;
  text-shadow:
    0 0 8px rgba(255, 255, 255, 0.8),
    0 0 16px rgba(102, 126, 234, 0.6);
}
</style>
