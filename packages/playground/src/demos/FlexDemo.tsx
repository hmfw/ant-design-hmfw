import { defineComponent } from 'vue'
import { Flex, Button, Tag, Badge } from 'ant-design-hmfw'

export default defineComponent({
  name: 'FlexDemo',
  setup() {
    const box = (label: string, color = '#1677ff') => (
      <div style={{
        padding: '8px 16px',
        background: color,
        color: '#fff',
        borderRadius: '4px',
        fontSize: '14px',
      }}>{label}</div>
    )

    return () => (
      <div>
        <h2>Flex 弹性布局</h2>

        <h3>水平排列（默认）</h3>
        <Flex gap="middle">
          {box('Item 1')}
          {box('Item 2', '#52c41a')}
          {box('Item 3', '#fa8c16')}
        </Flex>

        <h3 style={{ marginTop: '24px' }}>垂直排列</h3>
        <Flex vertical gap="small">
          {box('Item 1')}
          {box('Item 2', '#52c41a')}
          {box('Item 3', '#fa8c16')}
        </Flex>

        <h3 style={{ marginTop: '24px' }}>justify 对齐</h3>
        {(['flex-start', 'center', 'flex-end', 'space-between', 'space-around'] as const).map((j) => (
          <div key={j} style={{ marginBottom: '8px' }}>
            <p style={{ fontSize: '12px', color: '#999', margin: '0 0 4px' }}>{j}</p>
            <Flex justify={j} style={{ background: '#f5f5f5', padding: '8px', borderRadius: '6px' }}>
              {box('A')}
              {box('B', '#52c41a')}
              {box('C', '#fa8c16')}
            </Flex>
          </div>
        ))}

        <h3 style={{ marginTop: '24px' }}>align 对齐</h3>
        {(['flex-start', 'center', 'flex-end', 'stretch'] as const).map((a) => (
          <div key={a} style={{ marginBottom: '8px' }}>
            <p style={{ fontSize: '12px', color: '#999', margin: '0 0 4px' }}>{a}</p>
            <Flex align={a} style={{ background: '#f5f5f5', padding: '8px', borderRadius: '6px', height: '60px' }}>
              {box('A')}
              {box('B', '#52c41a')}
              {box('C', '#fa8c16')}
            </Flex>
          </div>
        ))}

        <h3 style={{ marginTop: '24px' }}>gap 间距</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <p style={{ fontSize: '12px', color: '#999', margin: '0 0 4px' }}>small (8px)</p>
            <Flex gap="small">{[1,2,3,4].map((i) => <Button key={i}>按钮{i}</Button>)}</Flex>
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#999', margin: '0 0 4px' }}>middle (16px)</p>
            <Flex gap="middle">{[1,2,3,4].map((i) => <Button key={i}>按钮{i}</Button>)}</Flex>
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#999', margin: '0 0 4px' }}>large (24px)</p>
            <Flex gap="large">{[1,2,3,4].map((i) => <Button key={i}>按钮{i}</Button>)}</Flex>
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#999', margin: '0 0 4px' }}>自定义 32px</p>
            <Flex gap={32}>{[1,2,3,4].map((i) => <Button key={i}>按钮{i}</Button>)}</Flex>
          </div>
        </div>

        <h3 style={{ marginTop: '24px' }}>自动换行</h3>
        <Flex wrap gap="small" style={{ maxWidth: '400px', background: '#f5f5f5', padding: '8px', borderRadius: '6px' }}>
          {Array.from({ length: 10 }, (_, i) => (
            <Tag key={i} color="blue">标签 {i + 1}</Tag>
          ))}
        </Flex>

        <h3 style={{ marginTop: '24px' }}>自定义标签元素</h3>
        <Flex component="nav" gap="middle">
          <a href="#" style={{ textDecoration: 'none', color: '#1677ff' }}>首页</a>
          <a href="#" style={{ textDecoration: 'none', color: '#1677ff' }}>产品</a>
          <a href="#" style={{ textDecoration: 'none', color: '#1677ff' }}>关于</a>
        </Flex>
      </div>
    )
  },
})
