import { defineComponent } from 'vue'
import { Dropdown, Button, Space } from 'ant-design-hmfw'

const menu = {
  items: [
    { key: '1', label: '1st menu item' },
    { key: '2', label: '2nd menu item' },
    { key: '3', label: '3rd menu item (disabled)', disabled: true },
    { key: 'd', type: 'divider' as const },
    { key: '4', label: 'Danger item', danger: true },
  ],
  onClick: ({ key }: { key: string }) => console.log('Clicked:', key),
}

export default defineComponent({
  name: 'DropdownDemo',
  setup() {
    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Dropdown 下拉菜单</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法（悬停触发）</h3>
          <Dropdown menu={menu}>
            <Button>悬停显示 ▾</Button>
          </Dropdown>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>点击触发</h3>
          <Dropdown menu={menu} trigger="click">
            <Button>点击显示 ▾</Button>
          </Dropdown>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>位置</h3>
          <Space>
            {(['bottomLeft', 'bottom', 'bottomRight', 'topLeft', 'top', 'topRight'] as const).map((p) => (
              <Dropdown key={p} menu={menu} placement={p} trigger="click">
                <Button size="small">{p}</Button>
              </Dropdown>
            ))}
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>自定义 overlay</h3>
          <Dropdown
            trigger="click"
            v-slots={{
              overlay: () => (
                <div style={{ background: '#fff', padding: '8px', borderRadius: '8px', boxShadow: '0 6px 16px rgba(0,0,0,0.08)' }}>
                  <p style={{ margin: '0 0 8px' }}>自定义内容</p>
                  <Button size="small" type="primary">操作</Button>
                </div>
              ),
            }}
          >
            <Button>自定义 ▾</Button>
          </Dropdown>
        </section>
      </div>
    )
  },
})
