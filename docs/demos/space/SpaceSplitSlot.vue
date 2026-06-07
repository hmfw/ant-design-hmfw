<template>
  <div>
    <!-- 使用 slot 插槽方式设置分隔符 -->
    <Space>
      <template #split>
        <Divider type="vertical" />
      </template>
      <a href="#">链接一</a>
      <a href="#">链接二</a>
      <a href="#">链接三</a>
    </Space>

    <Divider />

    <!-- 自定义分隔符内容 -->
    <Space>
      <template #split>
        <span style="color: #999">|</span>
      </template>
      <span>选项A</span>
      <span>选项B</span>
      <span>选项C</span>
    </Space>
  </div>
</template>

<script setup lang="ts">
import { Space, Divider } from 'ant-design-hmfw'
</script>
