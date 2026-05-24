import { defineComponent } from 'vue'
import { Layout, Header, Footer, Content, Sider } from 'ant-design-hmfw'

export default defineComponent({
  name: 'LayoutDemo',
  setup() {
    const boxStyle = {
      padding: '16px',
      background: 'rgba(0, 0, 0, 0.06)',
      borderRadius: '4px',
      textAlign: 'center' as const,
    }

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Layout 布局</h2>

        <h3>基础布局</h3>
        <Layout style={{ marginBottom: '24px', minHeight: '120px' }}>
          <Header style={boxStyle}>Header</Header>
          <Content style={{ ...boxStyle, background: '#fff', minHeight: '60px' }}>Content</Content>
          <Footer style={boxStyle}>Footer</Footer>
        </Layout>

        <h3>含侧边栏</h3>
        <Layout hasSider style={{ marginBottom: '24px', minHeight: '120px' }}>
          <Sider theme="light" style={{ ...boxStyle, minHeight: '120px' }}>Sider</Sider>
          <Layout>
            <Header style={boxStyle}>Header</Header>
            <Content style={{ ...boxStyle, background: '#fff', minHeight: '60px' }}>Content</Content>
            <Footer style={boxStyle}>Footer</Footer>
          </Layout>
        </Layout>

        <h3>右侧侧边栏</h3>
        <Layout hasSider style={{ marginBottom: '24px', minHeight: '120px' }}>
          <Layout>
            <Header style={boxStyle}>Header</Header>
            <Content style={{ ...boxStyle, background: '#fff', minHeight: '60px' }}>Content</Content>
            <Footer style={boxStyle}>Footer</Footer>
          </Layout>
          <Sider theme="light" style={{ ...boxStyle, minHeight: '120px' }}>Sider</Sider>
        </Layout>
      </div>
    )
  },
})
