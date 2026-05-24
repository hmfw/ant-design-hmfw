import { defineComponent, ref } from 'vue'
import { Popover, Button, Space } from 'ant-design-hmfw'

export default defineComponent({
  name: 'PopoverDemo',
  setup() {
    const open = ref(false)

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Popover 气泡卡片</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <Space>
            <Popover title="标题" content="这是气泡卡片的内容，可以包含任意内容。">
              <Button>悬停显示</Button>
            </Popover>
            <Popover title="点击触发" content="点击触发的气泡卡片" trigger="click">
              <Button>点击显示</Button>
            </Popover>
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>位置</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: '8px', width: 'fit-content' }}>
            {(['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight', 'left', 'right'] as const).map((p) => (
              <Popover
                key={p}
                title={`placement: ${p}`}
                content="气泡卡片内容"
                placement={p}
              >
                <Button size="small">{p}</Button>
              </Popover>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>自定义内容（slot）</h3>
          <Popover
            trigger="click"
            v-slots={{
              title: () => <span style={{ color: '#1677ff' }}>自定义标题</span>,
              content: () => (
                <div>
                  <p>第一行内容</p>
                  <p>第二行内容</p>
                  <a href="#">了解更多</a>
                </div>
              ),
            }}
          >
            <Button type="primary">点击查看详情</Button>
          </Popover>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>受控模式</h3>
          <Space>
            <Popover title="受控" content="受控显示的气泡卡片" open={open.value}>
              <Button>受控 Popover</Button>
            </Popover>
            <Button type="primary" onClick={() => (open.value = !open.value)}>
              {open.value ? '隐藏' : '显示'}
            </Button>
          </Space>
        </section>
      </div>
    )
  },
})
