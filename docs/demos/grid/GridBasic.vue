<template>
  <Space direction="vertical" style="width: 100%">
    <Row>
      <Col :span="24">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px">col-24</div>
      </Col>
    </Row>
    <Row>
      <Col :span="12">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px">col-12</div>
      </Col>
      <Col :span="12">
        <div style="background: #4096ff; color: #fff; text-align: center; padding: 8px">col-12</div>
      </Col>
    </Row>
    <Row>
      <Col :span="8">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px">col-8</div>
      </Col>
      <Col :span="8">
        <div style="background: #4096ff; color: #fff; text-align: center; padding: 8px">col-8</div>
      </Col>
      <Col :span="8">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px">col-8</div>
      </Col>
    </Row>
    <Row>
      <Col :span="6">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px">col-6</div>
      </Col>
      <Col :span="6">
        <div style="background: #4096ff; color: #fff; text-align: center; padding: 8px">col-6</div>
      </Col>
      <Col :span="6">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px">col-6</div>
      </Col>
      <Col :span="6">
        <div style="background: #4096ff; color: #fff; text-align: center; padding: 8px">col-6</div>
      </Col>
    </Row>
  </Space>
</template>

<script setup lang="ts">
import { Row, Col, Space } from '@hmfw/ant-design'
</script>
