import { defineComponent } from 'vue'
import { Collapse, Space } from 'ant-design-hmfw'

const items = [
  {
    key: '1',
    label: '这是第一个面板',
    children: '这是第一个面板的内容。可以放置任意内容，包括文字、图片、表单等。',
  },
  {
    key: '2',
    label: '这是第二个面板',
    children: '这是第二个面板的内容。',
    extra: '额外操作',
  },
  {
    key: '3',
    label: '这是第三个面板（禁用）',
    children: '这是第三个面板的内容。',
    disabled: true,
  },
]

export default defineComponent({
  name: 'CollapseDemo',
  setup() {
    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Collapse 折叠面板</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <Collapse items={items} defaultActiveKey={['1']} />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>手风琴模式</h3>
          <Collapse items={items} accordion />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>无边框</h3>
          <Collapse items={items} bordered={false} defaultActiveKey={['1']} />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>幽灵模式</h3>
          <Collapse items={items} ghost defaultActiveKey={['1']} />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>尺寸</h3>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Collapse items={items.slice(0, 2)} size="small" defaultActiveKey={['1']} />
            <Collapse items={items.slice(0, 2)} size="large" defaultActiveKey={['1']} />
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>图标位置（右侧）</h3>
          <Collapse items={items.slice(0, 2)} expandIconPosition="end" defaultActiveKey={['1']} />
        </section>
      </div>
    )
  },
})
