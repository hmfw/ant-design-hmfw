import { defineComponent } from 'vue'
import { Row, Col } from 'ant-design-hmfw'

export default defineComponent({
  name: 'GridDemo',
  setup() {
    return () => (
      <div>
        <h2>Grid 组件</h2>

        <div style={{ marginBottom: '16px' }}>
          <h3>基础栅格</h3>
          <Row>
            <Col span={12}><div style={{ padding: '16px', background: '#0958d9', color: 'white' }}>col-12</div></Col>
            <Col span={12}><div style={{ padding: '16px', background: '#1677ff', color: 'white' }}>col-12</div></Col>
          </Row>
          <Row style={{ marginTop: '8px' }}>
            <Col span={8}><div style={{ padding: '16px', background: '#0958d9', color: 'white' }}>col-8</div></Col>
            <Col span={8}><div style={{ padding: '16px', background: '#1677ff', color: 'white' }}>col-8</div></Col>
            <Col span={8}><div style={{ padding: '16px', background: '#0958d9', color: 'white' }}>col-8</div></Col>
          </Row>
          <Row style={{ marginTop: '8px' }}>
            <Col span={6}><div style={{ padding: '16px', background: '#0958d9', color: 'white' }}>col-6</div></Col>
            <Col span={6}><div style={{ padding: '16px', background: '#1677ff', color: 'white' }}>col-6</div></Col>
            <Col span={6}><div style={{ padding: '16px', background: '#0958d9', color: 'white' }}>col-6</div></Col>
            <Col span={6}><div style={{ padding: '16px', background: '#1677ff', color: 'white' }}>col-6</div></Col>
          </Row>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>区块间隔</h3>
          <Row gutter={16}>
            <Col span={6}><div style={{ padding: '16px', background: '#0958d9', color: 'white' }}>col-6</div></Col>
            <Col span={6}><div style={{ padding: '16px', background: '#0958d9', color: 'white' }}>col-6</div></Col>
            <Col span={6}><div style={{ padding: '16px', background: '#0958d9', color: 'white' }}>col-6</div></Col>
            <Col span={6}><div style={{ padding: '16px', background: '#0958d9', color: 'white' }}>col-6</div></Col>
          </Row>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>左右偏移</h3>
          <Row>
            <Col span={8}><div style={{ padding: '16px', background: '#0958d9', color: 'white' }}>col-8</div></Col>
            <Col span={8} offset={8}><div style={{ padding: '16px', background: '#0958d9', color: 'white' }}>col-8 offset-8</div></Col>
          </Row>
          <Row style={{ marginTop: '8px' }}>
            <Col span={6} offset={6}><div style={{ padding: '16px', background: '#0958d9', color: 'white' }}>col-6 offset-6</div></Col>
            <Col span={6} offset={6}><div style={{ padding: '16px', background: '#0958d9', color: 'white' }}>col-6 offset-6</div></Col>
          </Row>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>对齐方式</h3>
          <div style={{ marginBottom: '8px' }}>Top:</div>
          <Row align="top" style={{ background: '#f5f5f5' }}>
            <Col span={4}><div style={{ padding: '32px 16px', background: '#0958d9', color: 'white' }}>col-4</div></Col>
            <Col span={4}><div style={{ padding: '16px', background: '#1677ff', color: 'white' }}>col-4</div></Col>
            <Col span={4}><div style={{ padding: '48px 16px', background: '#0958d9', color: 'white' }}>col-4</div></Col>
            <Col span={4}><div style={{ padding: '16px', background: '#1677ff', color: 'white' }}>col-4</div></Col>
          </Row>
          <div style={{ marginTop: '8px', marginBottom: '8px' }}>Middle:</div>
          <Row align="middle" style={{ background: '#f5f5f5' }}>
            <Col span={4}><div style={{ padding: '32px 16px', background: '#0958d9', color: 'white' }}>col-4</div></Col>
            <Col span={4}><div style={{ padding: '16px', background: '#1677ff', color: 'white' }}>col-4</div></Col>
            <Col span={4}><div style={{ padding: '48px 16px', background: '#0958d9', color: 'white' }}>col-4</div></Col>
            <Col span={4}><div style={{ padding: '16px', background: '#1677ff', color: 'white' }}>col-4</div></Col>
          </Row>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>排列方式</h3>
          <div style={{ marginBottom: '8px' }}>Start:</div>
          <Row justify="start" style={{ background: '#f5f5f5' }}>
            <Col span={4}><div style={{ padding: '16px', background: '#0958d9', color: 'white' }}>col-4</div></Col>
            <Col span={4}><div style={{ padding: '16px', background: '#1677ff', color: 'white' }}>col-4</div></Col>
            <Col span={4}><div style={{ padding: '16px', background: '#0958d9', color: 'white' }}>col-4</div></Col>
          </Row>
          <div style={{ marginTop: '8px', marginBottom: '8px' }}>Center:</div>
          <Row justify="center" style={{ background: '#f5f5f5' }}>
            <Col span={4}><div style={{ padding: '16px', background: '#0958d9', color: 'white' }}>col-4</div></Col>
            <Col span={4}><div style={{ padding: '16px', background: '#1677ff', color: 'white' }}>col-4</div></Col>
            <Col span={4}><div style={{ padding: '16px', background: '#0958d9', color: 'white' }}>col-4</div></Col>
          </Row>
          <div style={{ marginTop: '8px', marginBottom: '8px' }}>Space Between:</div>
          <Row justify="space-between" style={{ background: '#f5f5f5' }}>
            <Col span={4}><div style={{ padding: '16px', background: '#0958d9', color: 'white' }}>col-4</div></Col>
            <Col span={4}><div style={{ padding: '16px', background: '#1677ff', color: 'white' }}>col-4</div></Col>
            <Col span={4}><div style={{ padding: '16px', background: '#0958d9', color: 'white' }}>col-4</div></Col>
          </Row>
        </div>
      </div>
    )
  },
})
