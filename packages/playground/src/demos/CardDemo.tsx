import { defineComponent } from 'vue'
import { Card, CardMeta, Avatar } from 'ant-design-hmfw'

export default defineComponent({
  name: 'CardDemo',
  setup() {
    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Card 卡片</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础卡片</h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Card title="Card Title" style={{ width: '300px' }}>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card
              title="Card Title"
              style={{ width: '300px' }}
              v-slots={{ extra: () => <a href="#">More</a> }}
            >
              <p>Card content</p>
            </Card>
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>无边框 / 可悬浮</h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', background: '#f5f5f5', padding: '16px' }}>
            <Card bordered={false} title="No Border" style={{ width: '200px' }}>
              <p>Content</p>
            </Card>
            <Card hoverable title="Hoverable" style={{ width: '200px' }}>
              <p>Hover me</p>
            </Card>
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>小尺寸</h3>
          <Card size="small" title="Small Card" style={{ width: '300px' }}>
            <p>Small card content</p>
          </Card>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>加载中</h3>
          <Card loading title="Loading Card" style={{ width: '300px' }}>
            <p>This content is hidden while loading</p>
          </Card>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>CardMeta</h3>
          <Card style={{ width: '300px' }}>
            <CardMeta
              title="Card Meta Title"
              description="This is the description"
              v-slots={{ avatar: () => <Avatar style={{ background: '#1677ff' }}>U</Avatar> }}
            />
          </Card>
        </section>
      </div>
    )
  },
})
