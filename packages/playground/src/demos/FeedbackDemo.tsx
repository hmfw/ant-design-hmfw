import { defineComponent, ref } from 'vue'
import { Spin, Progress, Button } from 'ant-design-hmfw'

export default defineComponent({
  name: 'FeedbackDemo',
  setup() {
    const spinning = ref(true)

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>反馈组件</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>Spin 加载中</h3>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
            <Spin tip="加载中..." />
          </div>
          <div style={{ marginTop: '16px' }}>
            <Button onClick={() => (spinning.value = !spinning.value)} style={{ marginBottom: '8px' }}>
              {spinning.value ? '停止' : '开始'}加载
            </Button>
            <Spin spinning={spinning.value}>
              <div style={{ padding: '32px', background: '#f5f5f5', borderRadius: '4px' }}>
                内容区域
              </div>
            </Spin>
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>Progress 进度条</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
            <Progress percent={50} size="small" />
          </div>
          <div style={{ display: 'flex', gap: '24px', marginTop: '16px', flexWrap: 'wrap' }}>
            <Progress type="circle" percent={75} />
            <Progress type="circle" percent={100} />
            <Progress type="circle" percent={70} status="exception" />
            <Progress type="dashboard" percent={75} />
          </div>
        </section>
      </div>
    )
  },
})
