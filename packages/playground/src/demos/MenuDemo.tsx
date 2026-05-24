import { defineComponent, ref } from 'vue'
import { Menu, Space } from 'ant-design-hmfw'

const items = [
  { key: '1', label: '首页', icon: '🏠' },
  { key: '2', label: '产品', icon: '📦', children: [
    { key: '2-1', label: '产品列表' },
    { key: '2-2', label: '产品详情' },
  ]},
  { key: '3', label: '关于我们', icon: 'ℹ' },
  { key: '4', label: '联系我们', icon: '📧', disabled: true },
  { key: 'divider', type: 'divider' as const },
  { key: '5', label: '危险操作', danger: true },
]

export default defineComponent({
  name: 'MenuDemo',
  setup() {
    const selectedKeys = ref(['1'])
    const openKeys = ref<string[]>([])

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Menu 导航菜单</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>水平菜单</h3>
          <Menu
            items={items.filter((i) => i.type !== 'divider')}
            mode="horizontal"
            selectedKeys={selectedKeys.value}
            onSelect={({ key }: { key: string }) => (selectedKeys.value = [key])}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>垂直菜单</h3>
          <div style={{ width: '256px' }}>
            <Menu
              items={items}
              mode="vertical"
              selectedKeys={selectedKeys.value}
              onSelect={({ key }: { key: string }) => (selectedKeys.value = [key])}
            />
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>内联菜单（可折叠子菜单）</h3>
          <div style={{ width: '256px' }}>
            <Menu
              items={items}
              mode="inline"
              selectedKeys={selectedKeys.value}
              openKeys={openKeys.value}
              onSelect={({ key }: { key: string }) => (selectedKeys.value = [key])}
              onOpenChange={(keys: string[]) => (openKeys.value = keys)}
            />
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>暗色主题</h3>
          <div style={{ width: '256px', background: '#001529', padding: '8px 0' }}>
            <Menu
              items={items.filter((i) => i.type !== 'divider')}
              mode="inline"
              theme="dark"
              selectedKeys={selectedKeys.value}
              onSelect={({ key }: { key: string }) => (selectedKeys.value = [key])}
            />
          </div>
        </section>
      </div>
    )
  },
})
