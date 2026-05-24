import { defineComponent } from 'vue'
import { Text, Title, Paragraph, Divider } from 'ant-design-hmfw'

export default defineComponent({
  name: 'TypographyDemo',
  setup() {
    return () => (
      <div>
        <h2>Typography 组件</h2>

        <div style={{ marginBottom: '16px' }}>
          <h3>标题</h3>
          <Title level={1}>h1. Ant Design</Title>
          <Title level={2}>h2. Ant Design</Title>
          <Title level={3}>h3. Ant Design</Title>
          <Title level={4}>h4. Ant Design</Title>
          <Title level={5}>h5. Ant Design</Title>
        </div>

        <Divider />

        <div style={{ marginBottom: '16px' }}>
          <h3>文本</h3>
          <div style={{ marginBottom: '8px' }}>
            <Text>Ant Design (default)</Text>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <Text type="secondary">Ant Design (secondary)</Text>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <Text type="success">Ant Design (success)</Text>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <Text type="warning">Ant Design (warning)</Text>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <Text type="danger">Ant Design (danger)</Text>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <Text disabled>Ant Design (disabled)</Text>
          </div>
        </div>

        <Divider />

        <div style={{ marginBottom: '16px' }}>
          <h3>文本样式</h3>
          <div style={{ marginBottom: '8px' }}>
            <Text mark>Ant Design (mark)</Text>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <Text code>Ant Design (code)</Text>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <Text keyboard>Ant Design (keyboard)</Text>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <Text underline>Ant Design (underline)</Text>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <Text delete>Ant Design (delete)</Text>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <Text strong>Ant Design (strong)</Text>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <Text italic>Ant Design (italic)</Text>
          </div>
        </div>

        <Divider />

        <div style={{ marginBottom: '16px' }}>
          <h3>段落</h3>
          <Paragraph>
            Ant Design, a design language for background applications, is refined by Ant UED Team.
            Ant Design, a design language for background applications, is refined by Ant UED Team.
          </Paragraph>
          <Paragraph type="secondary">
            This is a secondary paragraph. Ant Design, a design language for background applications.
          </Paragraph>
          <Paragraph strong>
            This is a strong paragraph. Ant Design, a design language for background applications.
          </Paragraph>
        </div>

        <Divider />

        <div style={{ marginBottom: '16px' }}>
          <h3>组合使用</h3>
          <Title level={2} type="danger">
            <Text delete>Deprecated</Text> New Feature
          </Title>
          <Paragraph>
            <Text strong>Ant Design</Text> is a <Text mark>design language</Text> for background applications.
            It is refined by <Text code>Ant UED Team</Text>.
          </Paragraph>
        </div>
      </div>
    )
  },
})
