<template>
  <Space direction="vertical" style="width: 100%">
    <div>
      <h4>align="top"（默认）</h4>
      <Row align="top" style="background: #f5f5f5; min-height: 80px">
        <Col :span="6">
          <div style="background: #1677ff; color: #fff; padding: 8px; height: 30px">col-6</div>
        </Col>
        <Col :span="6">
          <div style="background: #4096ff; color: #fff; padding: 8px; height: 50px">col-6</div>
        </Col>
        <Col :span="6">
          <div style="background: #1677ff; color: #fff; padding: 8px; height: 40px">col-6</div>
        </Col>
      </Row>
    </div>

    <div>
      <h4>align="middle"</h4>
      <Row align="middle" style="background: #f5f5f5; min-height: 80px">
        <Col :span="6">
          <div style="background: #52c41a; color: #fff; padding: 8px; height: 30px">col-6</div>
        </Col>
        <Col :span="6">
          <div style="background: #73d13d; color: #fff; padding: 8px; height: 50px">col-6</div>
        </Col>
        <Col :span="6">
          <div style="background: #52c41a; color: #fff; padding: 8px; height: 40px">col-6</div>
        </Col>
      </Row>
    </div>

    <div>
      <h4>align="bottom"</h4>
      <Row align="bottom" style="background: #f5f5f5; min-height: 80px">
        <Col :span="6">
          <div style="background: #faad14; color: #fff; padding: 8px; height: 30px">col-6</div>
        </Col>
        <Col :span="6">
          <div style="background: #ffc53d; color: #fff; padding: 8px; height: 50px">col-6</div>
        </Col>
        <Col :span="6">
          <div style="background: #faad14; color: #fff; padding: 8px; height: 40px">col-6</div>
        </Col>
      </Row>
    </div>

    <div>
      <h4>justify="center"</h4>
      <Row justify="center">
        <Col :span="4">
          <div style="background: #1677ff; color: #fff; padding: 8px; text-align: center">col-4</div>
        </Col>
        <Col :span="4">
          <div style="background: #4096ff; color: #fff; padding: 8px; text-align: center">col-4</div>
        </Col>
      </Row>
    </div>

    <div>
      <h4>justify="space-between"</h4>
      <Row justify="space-between">
        <Col :span="4">
          <div style="background: #ff4d4f; color: #fff; padding: 8px; text-align: center">col-4</div>
        </Col>
        <Col :span="4">
          <div style="background: #ff7875; color: #fff; padding: 8px; text-align: center">col-4</div>
        </Col>
        <Col :span="4">
          <div style="background: #ff4d4f; color: #fff; padding: 8px; text-align: center">col-4</div>
        </Col>
      </Row>
    </div>
  </Space>
</template>

<script setup lang="ts">
import { Row, Col, Space } from '@hmfw/ant-design'
</script>

<style scoped>
h4 {
  margin: 12px 0 8px;
  font-size: 14px;
  color: #666;
}
</style>
