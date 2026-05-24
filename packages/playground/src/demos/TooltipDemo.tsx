import { defineComponent, ref } from 'vue'
import { Tooltip, Button, Space } from 'ant-design-hmfw'

export default defineComponent({
  name: 'TooltipDemo',
  setup() {
    const open = ref(false)

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Tooltip 文字提示</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <Space>
            <Tooltip title="这是一个提示文字">
              <Button>悬停显示</Button>
            </Tooltip>
            <Tooltip title="点击触发" trigger="click">
              <Button>点击显示</Button>
            </Tooltip>
            <Tooltip title="禁用状态" disabled>
              <Button>禁用</Button>
            </Tooltip>
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>位置</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: '8px', width: 'fit-content' }}>
            {(['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight', 'left', 'leftTop', 'leftBottom', 'right', 'rightTop', 'rightBottom'] as const).map((p) => (
              <Tooltip key={p} title={`placement: ${p}`} placement={p}>
                <Button size="small">{p}</Button>
              </Tooltip>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>自定义颜色</h3>
          <Space>
            {(['#f50', '#2db7f5', '#87d068', '#108ee9'] as const).map((color) => (
              <Tooltip key={color} title={color} color={color}>
                <Button style={{ background: color, borderColor: color, color: '#fff' }}>{color}</Button>
              </Tooltip>
            ))}
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>受控模式</h3>
          <Space>
            <Tooltip title="受控显示" open={open.value}>
              <Button>受控 Tooltip</Button>
            </Tooltip>
            <Button type="primary" onClick={() => (open.value = !open.value)}>
              {open.value ? '隐藏' : '显示'}
            </Button>
          </Space>
        </section>
      </div>
    )
  },
})
