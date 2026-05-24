import { defineComponent, ref } from 'vue'
import { Avatar, AvatarGroup, Badge, Tag, CheckableTag } from 'ant-design-hmfw'

export default defineComponent({
  name: 'DataDisplayDemo',
  setup() {
    const checked1 = ref(false)
    const checked2 = ref(true)

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>数据展示组件</h2>

        {/* Avatar */}
        <section style={{ marginBottom: '32px' }}>
          <h3>Avatar 头像</h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Avatar size="large">U</Avatar>
            <Avatar>U</Avatar>
            <Avatar size="small">U</Avatar>
            <Avatar size={64}>64</Avatar>
            <Avatar shape="square" size="large">S</Avatar>
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          </div>
          <div style={{ marginTop: '16px' }}>
            <h4>头像组</h4>
            <AvatarGroup maxCount={3}>
              <Avatar style={{ background: '#f56a00' }}>K</Avatar>
              <Avatar style={{ background: '#7265e6' }}>L</Avatar>
              <Avatar style={{ background: '#ffbf00' }}>M</Avatar>
              <Avatar style={{ background: '#00a2ae' }}>N</Avatar>
              <Avatar style={{ background: '#1677ff' }}>O</Avatar>
            </AvatarGroup>
          </div>
        </section>

        {/* Badge */}
        <section style={{ marginBottom: '32px' }}>
          <h3>Badge 徽标</h3>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Badge count={5}>
              <div style={{ width: '40px', height: '40px', background: '#eee', borderRadius: '4px' }} />
            </Badge>
            <Badge count={100} overflowCount={99}>
              <div style={{ width: '40px', height: '40px', background: '#eee', borderRadius: '4px' }} />
            </Badge>
            <Badge dot>
              <div style={{ width: '40px', height: '40px', background: '#eee', borderRadius: '4px' }} />
            </Badge>
            <Badge count={0} showZero>
              <div style={{ width: '40px', height: '40px', background: '#eee', borderRadius: '4px' }} />
            </Badge>
          </div>
          <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Badge status="success" text="Success" />
            <Badge status="processing" text="Processing" />
            <Badge status="default" text="Default" />
            <Badge status="error" text="Error" />
            <Badge status="warning" text="Warning" />
          </div>
        </section>

        {/* Tag */}
        <section style={{ marginBottom: '32px' }}>
          <h3>Tag 标签</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
            <Tag>Default</Tag>
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>
            <Tag color="lime">lime</Tag>
            <Tag color="green">green</Tag>
            <Tag color="cyan">cyan</Tag>
            <Tag color="blue">blue</Tag>
            <Tag color="geekblue">geekblue</Tag>
            <Tag color="purple">purple</Tag>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
            <Tag color="success">success</Tag>
            <Tag color="processing">processing</Tag>
            <Tag color="error">error</Tag>
            <Tag color="warning">warning</Tag>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
            <Tag closable onClose={(e: Event) => e.preventDefault()}>Closable</Tag>
            <Tag closable color="blue">Blue Closable</Tag>
            <Tag bordered={false}>No Border</Tag>
            <Tag color="#f50">#f50</Tag>
            <Tag color="#2db7f5">#2db7f5</Tag>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <CheckableTag
              checked={checked1.value}
              onChange={(v: boolean) => (checked1.value = v)}
            >
              Checkable 1
            </CheckableTag>
            <CheckableTag
              checked={checked2.value}
              onChange={(v: boolean) => (checked2.value = v)}
            >
              Checkable 2
            </CheckableTag>
          </div>
        </section>
      </div>
    )
  },
})
