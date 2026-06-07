<template>
  <Space direction="vertical" style="width: 100%">
    <div>水平间距</div>
    <Row :gutter="16">
      <Col :span="6">
        <div style="background: #e6f4ff; border: 1px solid #91caff; text-align: center; padding: 8px">col-6</div>
      </Col>
      <Col :span="6">
        <div style="background: #e6f4ff; border: 1px solid #91caff; text-align: center; padding: 8px">col-6</div>
      </Col>
      <Col :span="6">
        <div style="background: #e6f4ff; border: 1px solid #91caff; text-align: center; padding: 8px">col-6</div>
      </Col>
      <Col :span="6">
        <div style="background: #e6f4ff; border: 1px solid #91caff; text-align: center; padding: 8px">col-6</div>
      </Col>
    </Row>
    <div>水平 + 垂直间距</div>
    <Row :gutter="[16, 24]">
      <Col v-for="i in 8" :key="i" :span="6">
        <div style="background: #e6f4ff; border: 1px solid #91caff; text-align: center; padding: 8px">col-6</div>
      </Col>
    </Row>
  </Space>
</template>

<script setup lang="ts">
import { Row, Col, Space } from 'ant-design-hmfw'
</script>
