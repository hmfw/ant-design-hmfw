import { defineComponent } from 'vue'
import { Progress } from 'ant-design-hmfw'

export default defineComponent({
  name: 'ProgressDemo',
  setup() {
    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Progress 进度条</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>线形进度条</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
            <Progress percent={50} size="small" />
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>圆形 / 仪表盘</h3>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <Progress type="circle" percent={75} />
            <Progress type="circle" percent={100} />
            <Progress type="circle" percent={70} status="exception" />
            <Progress type="dashboard" percent={75} />
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>自定义格式</h3>
          <Progress percent={75} format={(p: number) => `${p} 天`} />
        </section>
      </div>
    )
  },
})
