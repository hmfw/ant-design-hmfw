import { defineComponent } from 'vue'
import { Spin } from 'ant-design-hmfw'

export default defineComponent({
  name: 'SpinDemo',
  setup() {
    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Spin 加载中</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>尺寸</h3>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>提示文字</h3>
          <Spin tip="加载中..." />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>嵌套内容</h3>
          <Spin spinning>
            <div style={{ padding: '32px', background: '#f5f5f5', borderRadius: '4px' }}>
              内容区域（加载遮罩）
            </div>
          </Spin>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>不加载</h3>
          <Spin spinning={false}>
            <div style={{ padding: '32px', background: '#f5f5f5', borderRadius: '4px' }}>
              内容区域（无遮罩）
            </div>
          </Spin>
        </section>
      </div>
    )
  },
})
