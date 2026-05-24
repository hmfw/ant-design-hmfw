import { defineComponent } from 'vue'
import { Button, Space } from 'ant-design-hmfw'

export default defineComponent({
  name: 'SpaceDemo',
  setup() {
    return () => (
      <div>
        <h2>Space 组件</h2>

        <div style={{ marginBottom: '16px' }}>
          <h3>基础用法</h3>
          <Space>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
          </Space>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>垂直间距</h3>
          <Space direction="vertical">
            <Button block>Button 1</Button>
            <Button block>Button 2</Button>
            <Button block>Button 3</Button>
          </Space>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>间距大小</h3>
          <div style={{ marginBottom: '8px' }}>
            <div>Small:</div>
            <Space size="small">
              <Button>Button 1</Button>
              <Button>Button 2</Button>
              <Button>Button 3</Button>
            </Space>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <div>Middle:</div>
            <Space size="middle">
              <Button>Button 1</Button>
              <Button>Button 2</Button>
              <Button>Button 3</Button>
            </Space>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <div>Large:</div>
            <Space size="large">
              <Button>Button 1</Button>
              <Button>Button 2</Button>
              <Button>Button 3</Button>
            </Space>
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>自动换行</h3>
          <Space wrap style={{ width: '300px' }}>
            {Array.from({ length: 10 }, (_, i) => (
              <Button key={i}>Button {i + 1}</Button>
            ))}
          </Space>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>分隔符</h3>
          <Space split={<span style={{ color: '#ccc' }}>|</span>}>
            <span>Link 1</span>
            <span>Link 2</span>
            <span>Link 3</span>
          </Space>
        </div>
      </div>
    )
  },
})
