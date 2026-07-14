<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">自定义 Avatar 尺寸（数字像素值）</div>
      <div style="display: flex; gap: 16px; align-items: center">
        <Skeleton.Avatar :size="48" active />
        <Skeleton.Avatar :size="64" active />
        <Skeleton.Avatar :size="80" shape="square" active />
      </div>
    </div>

    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">Avatar 尺寸对比（预设 + 自定义）</div>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap">
        <div style="text-align: center">
          <Skeleton.Avatar size="small" active />
          <div style="margin-top: 8px; font-size: 12px; color: #999">small (24px)</div>
        </div>
        <div style="text-align: center">
          <Skeleton.Avatar size="default" active />
          <div style="margin-top: 8px; font-size: 12px; color: #999">default (32px)</div>
        </div>
        <div style="text-align: center">
          <Skeleton.Avatar size="large" active />
          <div style="margin-top: 8px; font-size: 12px; color: #999">large (40px)</div>
        </div>
        <div style="text-align: center">
          <Skeleton.Avatar :size="56" active />
          <div style="margin-top: 8px; font-size: 12px; color: #999">56px</div>
        </div>
        <div style="text-align: center">
          <Skeleton.Avatar :size="72" active />
          <div style="margin-top: 8px; font-size: 12px; color: #999">72px</div>
        </div>
      </div>
    </div>

    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">组合配置（自定义 Avatar 尺寸 + 段落配置）</div>
      <Skeleton
        :avatar="{ size: 56, shape: 'square' }"
        :title="{ width: '60%' }"
        :paragraph="{ rows: 3, width: ['100%', '100%', '70%'] }"
        active
      />
    </div>

    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">大尺寸组合（适合用户资料卡）</div>
      <Skeleton :avatar="{ size: 96, shape: 'circle' }" :title="{ width: 240 }" :paragraph="{ rows: 4 }" active round />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Skeleton } from '@hmfw/ant-design'
</script>
