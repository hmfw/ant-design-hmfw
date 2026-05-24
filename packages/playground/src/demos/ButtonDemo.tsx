import { defineComponent, ref } from 'vue'
import { Button, Space } from 'ant-design-hmfw'
import { SearchOutlined, CheckOutlined, CloseOutlined } from 'ant-design-hmfw'

export default defineComponent({
  name: 'ButtonDemo',
  setup() {
    const loading = ref(false)

    const handleClick = () => {
      console.log('Button clicked!')
    }

    const handleLoadingClick = () => {
      loading.value = true
      setTimeout(() => {
        loading.value = false
      }, 2000)
    }

    return () => (
      <div>
        <h2>Button 组件</h2>

        <div style={{ marginBottom: '16px' }}>
          <h3>按钮类型</h3>
          <Space>
            <Button type="primary" onClick={handleClick}>Primary</Button>
            <Button type="default" onClick={handleClick}>Default</Button>
            <Button type="dashed" onClick={handleClick}>Dashed</Button>
            <Button type="text" onClick={handleClick}>Text</Button>
            <Button type="link" onClick={handleClick}>Link</Button>
          </Space>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>按钮尺寸</h3>
          <Space align="center">
            <Button size="large" type="primary">Large</Button>
            <Button size="middle" type="primary">Middle</Button>
            <Button size="small" type="primary">Small</Button>
          </Space>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>禁用状态</h3>
          <Space wrap>
            <Button type="primary" disabled>Primary Disabled</Button>
            <Button type="default" disabled>Default Disabled</Button>
            <Button type="dashed" disabled>Dashed Disabled</Button>
            <Button type="text" disabled>Text Disabled</Button>
            <Button type="link" disabled>Link Disabled</Button>
          </Space>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>加载状态</h3>
          <Space>
            <Button type="primary" loading>Loading</Button>
            <Button type="default" loading>Loading</Button>
            <Button type="primary" loading={loading.value} onClick={handleLoadingClick}>
              Click to Load
            </Button>
          </Space>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>危险按钮</h3>
          <Space>
            <Button type="primary" danger>Primary Danger</Button>
            <Button type="default" danger>Default Danger</Button>
            <Button type="text" danger>Text Danger</Button>
            <Button type="link" danger>Link Danger</Button>
          </Space>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>Block 按钮</h3>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Button type="primary" block>Primary Block</Button>
            <Button type="default" block>Default Block</Button>
          </Space>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>Ghost 按钮</h3>
          <div style={{ padding: '16px', background: '#1677ff' }}>
            <Space>
              <Button type="primary" ghost>Primary Ghost</Button>
              <Button type="default" ghost>Default Ghost</Button>
              <Button type="dashed" ghost>Dashed Ghost</Button>
            </Space>
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>图标按钮</h3>
          <Space>
            <Button type="primary" icon={{ component: SearchOutlined }}>Search</Button>
            <Button type="default" icon={{ component: SearchOutlined }} />
            <Button type="primary" icon={{ component: CheckOutlined }}>Confirm</Button>
            <Button type="dashed" icon={{ component: CloseOutlined }}>Cancel</Button>
          </Space>
        </div>
      </div>
    )
  },
})
