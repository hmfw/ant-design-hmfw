import { defineComponent } from 'vue'
import { Popconfirm, Button, Space } from 'ant-design-hmfw'

export default defineComponent({
  name: 'PopconfirmDemo',
  setup() {
    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Popconfirm 气泡确认框</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <Popconfirm
            title="确定要删除吗？"
            onConfirm={() => console.log('confirmed')}
            onCancel={() => console.log('cancelled')}
          >
            <Button danger>删除</Button>
          </Popconfirm>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>带描述</h3>
          <Popconfirm
            title="确定要删除吗？"
            description="删除后数据将无法恢复，请谨慎操作。"
            onConfirm={() => console.log('confirmed')}
          >
            <Button danger>删除（带描述）</Button>
          </Popconfirm>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>位置</h3>
          <Space wrap>
            {(['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight'] as const).map((p) => (
              <Popconfirm key={p} title={`placement: ${p}`} placement={p}>
                <Button size="small">{p}</Button>
              </Popconfirm>
            ))}
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>自定义按钮文字</h3>
          <Popconfirm
            title="确认提交？"
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary">提交</Button>
          </Popconfirm>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>不显示取消按钮</h3>
          <Popconfirm title="确认操作？" showCancel={false}>
            <Button>操作</Button>
          </Popconfirm>
        </section>
      </div>
    )
  },
})
