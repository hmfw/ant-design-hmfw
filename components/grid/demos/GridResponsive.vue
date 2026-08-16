<template>
  <Row :gutter="16">
    <Col v-for="i in 8" :key="i" :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" :xxxl="2">
      <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px">响应式</div>
    </Col>
  </Row>
</template>

<script setup lang="ts">
import { Row, Col } from '@hmfw/ant-design'
</script>
