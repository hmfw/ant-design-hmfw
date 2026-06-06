<template>
  <Space direction="vertical" style="width: 100%">
    <div>
      <h4>左对齐（默认）</h4>
      <Pagination :total="50" />
    </div>
    <div>
      <h4>居中对齐</h4>
      <Pagination :total="50" align="center" />
    </div>
    <div>
      <h4>右对齐</h4>
      <Pagination :total="50" align="end" />
    </div>
    <div>
      <h4>完整功能 + 居中对齐</h4>
      <Pagination
        :total="500"
        show-size-changer
        show-quick-jumper
        :show-total="(total) => `共 ${total} 条`"
        align="center"
      />
    </div>
  </Space>
</template>

<script setup lang="ts">
import { Pagination, Space } from 'ant-design-hmfw'
</script>
