import { defineComponent, ref } from 'vue'
import { Tabs } from 'ant-design-hmfw'

export default defineComponent({
  name: 'TabsDemo',
  setup() {
    const activeTab = ref('tab1')

    const items = [
      { key: 'tab1', label: '标签一', children: '标签一的内容' },
      { key: 'tab2', label: '标签二', children: '标签二的内容' },
      { key: 'tab3', label: '标签三（禁用）', children: '标签三的内容', disabled: true },
    ]

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Tabs 标签页</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>线形（默认）</h3>
          <Tabs
            items={items}
            activeKey={activeTab.value}
            onChange={(k: string) => (activeTab.value = k)}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>卡片式</h3>
          <Tabs items={items} type="card" defaultActiveKey="tab1" />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>居中</h3>
          <Tabs items={items} centered defaultActiveKey="tab1" />
        </section>
      </div>
    )
  },
})
