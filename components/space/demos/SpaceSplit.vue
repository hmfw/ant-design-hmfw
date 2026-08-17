<template>
  <div>
    <!-- 使用 separator prop 设置分隔符 -->
    <Space separator="|">
      <a href="#">链接一</a>
      <a href="#">链接二</a>
      <a href="#">链接三</a>
    </Space>

    <Divider />

    <!-- 使用自定义文本分隔符 -->
    <Space separator="·">
      <span>首页</span>
      <span>产品</span>
      <span>关于我们</span>
    </Space>
  </div>
</template>

<script setup lang="ts">
import { Space, Divider } from '@hmfw/ant-design'
</script>
