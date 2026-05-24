import { defineComponent, ref } from 'vue'
import { Breadcrumb, Pagination, Tabs } from 'ant-design-hmfw'

export default defineComponent({
  name: 'NavigationDemo',
  setup() {
    const page = ref(1)
    const activeTab = ref('tab1')

    const tabItems = [
      { key: 'tab1', label: '标签一', children: '标签一的内容' },
      { key: 'tab2', label: '标签二', children: '标签二的内容' },
      { key: 'tab3', label: '标签三（禁用）', children: '标签三的内容', disabled: true },
    ]

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>导航组件</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>Breadcrumb 面包屑</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Breadcrumb items={[{ title: '首页', href: '#' }, { title: '列表', href: '#' }, { title: '详情' }]} />
            <Breadcrumb
              separator=">"
              items={[{ title: 'Home' }, { title: 'Application Center' }, { title: 'Application List' }, { title: 'An Application' }]}
            />
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>Pagination 分页</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Pagination
              total={100}
              current={page.value}
              pageSize={10}
              onChange={(p: number) => (page.value = p)}
              showTotal={(total: number, range: [number, number]) => `第 ${range[0]}-${range[1]} 条，共 ${total} 条`}
            />
            <Pagination total={50} current={1} pageSize={10} size="small" />
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>Tabs 标签页</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Tabs
              items={tabItems}
              activeKey={activeTab.value}
              onChange={(k: string) => (activeTab.value = k)}
            />
            <Tabs items={tabItems} type="card" defaultActiveKey="tab1" />
          </div>
        </section>
      </div>
    )
  },
})
