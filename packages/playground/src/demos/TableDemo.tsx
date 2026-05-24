import { defineComponent, ref } from 'vue'
import { Table, Button, Space, Tag } from 'ant-design-hmfw'

const columns = [
  { key: 'name', dataIndex: 'name', title: '姓名', sorter: (a: any, b: any) => a.name.localeCompare(b.name) },
  { key: 'age', dataIndex: 'age', title: '年龄', sorter: (a: any, b: any) => a.age - b.age },
  { key: 'address', dataIndex: 'address', title: '地址' },
  { key: 'tags', dataIndex: 'tags', title: '标签', render: (tags: string[]) => tags?.map((t) => <Tag key={t}>{t}</Tag>) },
  {
    key: 'action', title: '操作',
    render: (_: any, record: any) => (
      <Space>
        <a>编辑 {record.name}</a>
        <a style={{ color: '#ff4d4f' }}>删除</a>
      </Space>
    ),
  },
]

const dataSource = Array.from({ length: 20 }, (_, i) => ({
  key: String(i + 1),
  name: ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'][i % 5],
  age: 20 + (i % 15),
  address: ['北京市朝阳区', '上海市浦东新区', '广州市天河区', '深圳市南山区', '杭州市西湖区'][i % 5],
  tags: [['开发者', '前端'], ['设计师'], ['产品经理', 'PM'], ['测试工程师'], ['运维工程师']][i % 5],
}))

export default defineComponent({
  name: 'TableDemo',
  setup() {
    const selectedRowKeys = ref<string[]>([])

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Table 表格</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础表格（带排序）</h3>
          <Table
            columns={columns.slice(0, 3)}
            dataSource={dataSource.slice(0, 5)}
            pagination={false}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>带边框</h3>
          <Table
            columns={columns.slice(0, 3)}
            dataSource={dataSource.slice(0, 5)}
            bordered
            pagination={false}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>行选择</h3>
          <Table
            columns={columns.slice(0, 3)}
            dataSource={dataSource.slice(0, 5)}
            rowSelection={{
              selectedRowKeys: selectedRowKeys.value,
              onChange: (keys: string[]) => (selectedRowKeys.value = keys),
            }}
            pagination={false}
          />
          <p style={{ marginTop: '8px', color: '#666' }}>已选: {selectedRowKeys.value.join(', ') || '无'}</p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>分页</h3>
          <Table
            columns={columns.slice(0, 3)}
            dataSource={dataSource}
            pagination={{ pageSize: 5 }}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>自定义渲染</h3>
          <Table
            columns={columns}
            dataSource={dataSource.slice(0, 5)}
            pagination={false}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>尺寸</h3>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Table columns={columns.slice(0, 3)} dataSource={dataSource.slice(0, 3)} size="small" pagination={false} />
            <Table columns={columns.slice(0, 3)} dataSource={dataSource.slice(0, 3)} size="middle" pagination={false} />
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>空数据</h3>
          <Table columns={columns.slice(0, 3)} dataSource={[]} pagination={false} />
        </section>
      </div>
    )
  },
})
