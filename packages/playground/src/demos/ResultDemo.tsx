import { defineComponent } from 'vue'
import { Result, Button, Space } from 'ant-design-hmfw'

export default defineComponent({
  name: 'ResultDemo',
  setup() {
    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Result 结果页</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>成功</h3>
          <Result
            status="success"
            title="提交成功"
            subTitle="订单号: 2017182818828182881 云服务器配置需要1-5分钟，请稍后查看。"
            v-slots={{
              extra: () => (
                <Space>
                  <Button type="primary">返回首页</Button>
                  <Button>查看订单</Button>
                </Space>
              ),
            }}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>失败</h3>
          <Result
            status="error"
            title="提交失败"
            subTitle="请检查并修改以下信息后，再重新提交。"
            v-slots={{
              extra: () => <Button type="primary">重新提交</Button>,
            }}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>警告</h3>
          <Result
            status="warning"
            title="该页面有一些问题"
            v-slots={{
              extra: () => <Button type="primary">返回首页</Button>,
            }}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>信息</h3>
          <Result
            status="info"
            title="您的操作已执行"
            subTitle="如有问题请联系管理员。"
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>404 / 403 / 500</h3>
          <Space>
            <Result status="404" title="404" subTitle="抱歉，您访问的页面不存在。" />
            <Result status="403" title="403" subTitle="抱歉，您无权访问该页面。" />
            <Result status="500" title="500" subTitle="抱歉，服务器出错了。" />
          </Space>
        </section>
      </div>
    )
  },
})
