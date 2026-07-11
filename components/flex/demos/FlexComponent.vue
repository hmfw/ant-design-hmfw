<template>
  <Space direction="vertical" style="width: 100%">
    <div>
      <p>默认 div 标签</p>
      <Flex gap="small">
        <span style="background: #e6f4ff; padding: 8px">item 1</span>
        <span style="background: #e6f4ff; padding: 8px">item 2</span>
      </Flex>
    </div>

    <div>
      <p>component="section"</p>
      <Flex component="section" gap="small">
        <span style="background: #f6ffed; padding: 8px">item 1</span>
        <span style="background: #f6ffed; padding: 8px">item 2</span>
      </Flex>
    </div>

    <div>
      <p>component="nav" — 语义化导航</p>
      <Flex component="nav" justify="space-between" gap="small" style="background: #fafafa; padding: 12px">
        <span>Logo</span>
        <Flex component="ul" gap="small" style="list-style: none; margin: 0; padding: 0">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </Flex>
      </Flex>
    </div>

    <div>
      <p>component="footer" — 语义化页脚</p>
      <Flex component="footer" justify="center" gap="large" style="background: #001529; color: #fff; padding: 16px">
        <span>© 2024</span>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </Flex>
    </div>
  </Space>
</template>

<script setup lang="ts">
import { Flex, Space } from '@hmfw/ant-design'
</script>
