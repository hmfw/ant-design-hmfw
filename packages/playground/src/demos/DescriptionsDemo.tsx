import { defineComponent } from 'vue'
import { Descriptions, Space } from 'ant-design-hmfw'

const items = [
  { label: '姓名', children: '张三' },
  { label: '年龄', children: '28' },
  { label: '城市', children: '北京' },
  { label: '邮箱', children: 'zhangsan@example.com', span: 2 },
  { label: '手机', children: '138-0000-0000' },
  { label: '地址', children: '北京市朝阳区某某街道某某小区', span: 3 },
]

export default defineComponent({
  name: 'DescriptionsDemo',
  setup() {
    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Descriptions 描述列表</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <Descriptions title="用户信息" items={items} />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>带边框</h3>
          <Descriptions title="用户信息" items={items} bordered />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>尺寸</h3>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Descriptions title="Small" items={items.slice(0, 3)} size="small" bordered />
            <Descriptions title="Middle" items={items.slice(0, 3)} size="middle" bordered />
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>垂直布局</h3>
          <Descriptions title="垂直布局" items={items.slice(0, 3)} layout="vertical" bordered />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>带 extra</h3>
          <Descriptions
            title="用户信息"
            extra="编辑"
            items={items.slice(0, 3)}
            bordered
          />
        </section>
      </div>
    )
  },
})
