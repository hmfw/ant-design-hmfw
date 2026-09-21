<template>
  <Space>
    <Button type="primary" size="large" :icon="AntDesignOutlined" :class-names="{ root: 'gradient-btn' }">
      Gradient Button
    </Button>
    <Button size="large">Button</Button>
  </Space>
</template>

<script setup lang="ts">
import { Button, Space } from '@hmfw/ant-design'
import { AntDesignOutlined } from '@hmfw/icons'
</script>

<style scoped>
/* 通过 classNames.root 给主按钮叠加渐变背景层，hover 时渐隐 */
:deep(.gradient-btn.hmfw-btn-primary:not([disabled]):not(.hmfw-btn-dangerous)) {
  border: none;
}

:deep(.gradient-btn.hmfw-btn-primary:not([disabled]):not(.hmfw-btn-dangerous))::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #6253e1, #04befe);
  border-radius: inherit;
  opacity: 1;
  transition: opacity var(--hmfw-motion-duration-mid);
  z-index: 0;
}

:deep(.gradient-btn.hmfw-btn-primary:not([disabled]):not(.hmfw-btn-dangerous):hover)::before {
  opacity: 0;
}

/* 让内容浮在渐变层之上 */
:deep(.gradient-btn.hmfw-btn-primary > *) {
  position: relative;
  z-index: 1;
}
</style>
