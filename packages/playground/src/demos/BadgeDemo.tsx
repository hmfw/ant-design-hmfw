import { defineComponent } from 'vue'
import { Badge } from 'ant-design-hmfw'

export default defineComponent({
  name: 'BadgeDemo',
  setup() {
    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Badge 徽标</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Badge count={5}>
              <div style={{ width: '40px', height: '40px', background: '#eee', borderRadius: '4px' }} />
            </Badge>
            <Badge count={100} overflowCount={99}>
              <div style={{ width: '40px', height: '40px', background: '#eee', borderRadius: '4px' }} />
            </Badge>
            <Badge dot>
              <div style={{ width: '40px', height: '40px', background: '#eee', borderRadius: '4px' }} />
            </Badge>
            <Badge count={0} showZero>
              <div style={{ width: '40px', height: '40px', background: '#eee', borderRadius: '4px' }} />
            </Badge>
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>状态点</h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Badge status="success" text="Success" />
            <Badge status="processing" text="Processing" />
            <Badge status="default" text="Default" />
            <Badge status="error" text="Error" />
            <Badge status="warning" text="Warning" />
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>尺寸</h3>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Badge count={5}>
              <div style={{ width: '40px', height: '40px', background: '#eee', borderRadius: '4px' }} />
            </Badge>
            <Badge count={5} size="small">
              <div style={{ width: '40px', height: '40px', background: '#eee', borderRadius: '4px' }} />
            </Badge>
          </div>
        </section>
      </div>
    )
  },
})
