import { defineComponent } from 'vue'
import { Watermark, Space } from 'ant-design-hmfw'

export default defineComponent({
  name: 'WatermarkDemo',
  setup() {
    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Watermark 水印</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础文字水印</h3>
          <Watermark content="Ant Design">
            <div style={{ height: '200px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p>内容区域</p>
            </div>
          </Watermark>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>多行文字水印</h3>
          <Watermark content={['Ant Design', 'ant-design-hmfw']}>
            <div style={{ height: '200px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p>多行文字水印</p>
            </div>
          </Watermark>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>自定义样式</h3>
          <Watermark
            content="Custom"
            font={{ color: 'rgba(0, 0, 255, 0.15)', fontSize: 18, fontWeight: 'bold' }}
            rotate={-30}
          >
            <div style={{ height: '200px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p>自定义颜色和角度</p>
            </div>
          </Watermark>
        </section>
      </div>
    )
  },
})
