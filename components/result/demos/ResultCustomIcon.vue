<template>
  <div style="display: flex; flex-wrap: wrap; gap: 16px">
    <!-- 自定义图标：通过 icon slot 传入任意图标组件 -->
    <div style="flex: 1; min-width: 260px">
      <Result title="自定义图标" sub-title="通过 icon 插槽替换默认图标。">
        <template #icon>
          <SmileOutlined style="color: #eb2f96" />
        </template>
        <template #extra>
          <Button type="primary">下一步</Button>
        </template>
      </Result>
    </div>

    <!-- 隐藏图标：icon 设为 false -->
    <div style="flex: 1; min-width: 260px">
      <Result status="success" :icon="false" title="隐藏图标" sub-title="icon 设为 false 时不渲染图标。">
        <template #extra>
          <Button>返回</Button>
        </template>
      </Result>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Result, Button } from '@hmfw/ant-design'
import { SmileOutlined } from '@hmfw/icons'
</script>
