import { defineComponent } from 'vue'
import { FloatButton, FloatButtonGroup, Space } from 'ant-design-hmfw'

export default defineComponent({
  name: 'FloatButtonDemo',
  setup() {
    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>FloatButton 悬浮按钮</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法（相对定位演示）</h3>
          <div style={{ position: 'relative', height: '120px', background: '#f5f5f5', borderRadius: '8px' }}>
            <div style={{ position: 'absolute', right: '24px', bottom: '24px', display: 'flex', gap: '8px' }}>
              <FloatButton style={{ position: 'relative', right: 'auto', bottom: 'auto' }} />
              <FloatButton type="primary" style={{ position: 'relative', right: 'auto', bottom: 'auto' }} icon="★" />
              <FloatButton shape="square" style={{ position: 'relative', right: 'auto', bottom: 'auto' }} icon="?" description="帮助" />
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>带徽标</h3>
          <div style={{ display: 'flex', gap: '16px' }}>
            <FloatButton style={{ position: 'relative', right: 'auto', bottom: 'auto' }} badge={{ dot: true }} />
            <FloatButton style={{ position: 'relative', right: 'auto', bottom: 'auto' }} badge={{ count: 5 }} />
            <FloatButton style={{ position: 'relative', right: 'auto', bottom: 'auto' }} badge={{ count: 99 }} />
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>链接按钮</h3>
          <FloatButton
            style={{ position: 'relative', right: 'auto', bottom: 'auto' }}
            href="https://ant.design"
            target="_blank"
            icon="🔗"
            tooltip="访问 Ant Design"
          />
        </section>

        <p style={{ color: '#666', fontSize: '14px' }}>
          注意：实际使用时 FloatButton 是 fixed 定位，固定在页面右下角。
        </p>
      </div>
    )
  },
})
