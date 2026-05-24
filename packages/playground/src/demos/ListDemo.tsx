import { defineComponent } from 'vue'
import { List, ListItem, ListItemMeta, Avatar, Space } from 'ant-design-hmfw'

const data = [
  { title: 'Ant Design Title 1', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.' },
  { title: 'Ant Design Title 2', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.' },
  { title: 'Ant Design Title 3', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.' },
  { title: 'Ant Design Title 4', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.' },
]

export default defineComponent({
  name: 'ListDemo',
  setup() {
    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>List 列表</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础列表</h3>
          <List
            dataSource={data}
            renderItem={(item: any) => (
              <ListItem>
                <ListItemMeta
                  avatar={<Avatar>{item.title[0]}</Avatar>}
                  title={item.title}
                  description={item.description}
                />
              </ListItem>
            )}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>带边框</h3>
          <List
            bordered
            dataSource={['Racing car sprays burning fuel into crowd.', 'Japanese princess to wed commoner.', 'Australian walks 100km after outback crash.', 'Man charged over missing wedding girl.', 'Los Angeles battles huge wildfires.']}
            renderItem={(item: any) => <ListItem>{item}</ListItem>}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>带 header 和 footer</h3>
          <List
            bordered
            header="Header"
            footer="Footer"
            dataSource={['Item 1', 'Item 2', 'Item 3']}
            renderItem={(item: any) => <ListItem>{item}</ListItem>}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>带操作</h3>
          <List
            dataSource={data.slice(0, 3)}
            renderItem={(item: any) => (
              <ListItem
                v-slots={{
                  actions: () => [
                    <a key="edit">编辑</a>,
                    <a key="delete" style={{ color: '#ff4d4f' }}>删除</a>,
                  ],
                }}
              >
                <ListItemMeta title={item.title} description={item.description} />
              </ListItem>
            )}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>空列表</h3>
          <List bordered dataSource={[]} />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>尺寸</h3>
          <Space direction="vertical" style={{ width: '100%' }}>
            <List size="small" bordered dataSource={['Item 1', 'Item 2']} renderItem={(item: any) => <ListItem>{item}</ListItem>} />
            <List size="large" bordered dataSource={['Item 1', 'Item 2']} renderItem={(item: any) => <ListItem>{item}</ListItem>} />
          </Space>
        </section>
      </div>
    )
  },
})
