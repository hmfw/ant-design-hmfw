import { defineComponent, ref } from 'vue'
import { Tag, CheckableTag } from 'ant-design-hmfw'

export default defineComponent({
  name: 'TagDemo',
  setup() {
    const checked1 = ref(false)
    const checked2 = ref(true)

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Tag 标签</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>预设颜色</h3>
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
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Tag color="success">success</Tag>
            <Tag color="processing">processing</Tag>
            <Tag color="error">error</Tag>
            <Tag color="warning">warning</Tag>
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>自定义颜色 / 可关闭 / 无边框</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Tag closable onClose={(e: Event) => e.preventDefault()}>Closable</Tag>
            <Tag closable color="blue">Blue Closable</Tag>
            <Tag bordered={false}>No Border</Tag>
            <Tag color="#f50">#f50</Tag>
            <Tag color="#2db7f5">#2db7f5</Tag>
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>可选中</h3>
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
