import { defineComponent } from 'vue'
import { Alert, Space, Button } from 'ant-design-hmfw'

export default defineComponent({
  name: 'AlertDemo',
  setup() {
    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Alert 警告提示</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础类型</h3>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Alert type="success" message="成功提示" showIcon />
            <Alert type="info" message="信息提示" showIcon />
            <Alert type="warning" message="警告提示" showIcon />
            <Alert type="error" message="错误提示" showIcon />
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>带描述</h3>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Alert
              type="success"
              message="操作成功"
              description="您的操作已成功完成，数据已保存到服务器。"
              showIcon
            />
            <Alert
              type="error"
              message="操作失败"
              description="请求超时，请检查网络连接后重试。如果问题持续存在，请联系技术支持。"
              showIcon
            />
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>可关闭</h3>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Alert type="warning" message="可关闭的警告" closable showIcon />
            <Alert type="info" message="自定义关闭文字" closable closeText="关闭" showIcon />
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>顶部公告（Banner）</h3>
          <Alert
            banner
            message="这是一条顶部公告，通常用于全局通知。"
            showIcon
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>带操作按钮</h3>
          <Alert
            type="info"
            message="系统将于今晚 22:00 进行维护"
            showIcon
            v-slots={{
              action: () => <Button size="small" type="link">了解更多</Button>,
            }}
          />
        </section>
      </div>
    )
  },
})
