import { defineComponent, ref } from 'vue'
import { Rate, Space } from 'ant-design-hmfw'

export default defineComponent({
  name: 'RateDemo',
  setup() {
    const value = ref(3)
    const halfValue = ref(2.5)

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Rate 评分</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <Rate value={value.value} onChange={(v) => (value.value = v as number)} />
          <span style={{ marginLeft: '12px', color: '#666' }}>当前评分: {value.value}</span>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>半星</h3>
          <Rate value={halfValue.value} allowHalf onChange={(v) => (halfValue.value = v as number)} />
          <span style={{ marginLeft: '12px', color: '#666' }}>当前评分: {halfValue.value}</span>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>只读</h3>
          <Rate value={3.5} allowHalf disabled />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>自定义字符</h3>
          <Space direction="vertical">
            <Rate character="A" count={5} defaultValue={3} />
            <Rate character="♥" count={5} defaultValue={4} />
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>带提示</h3>
          <Rate
            defaultValue={3}
            tooltips={['terrible', 'bad', 'normal', 'good', 'wonderful']}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>自定义数量</h3>
          <Rate count={10} defaultValue={6} />
        </section>
      </div>
    )
  },
})
