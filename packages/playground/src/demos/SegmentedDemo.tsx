import { defineComponent, ref } from 'vue'
import { Segmented, Space } from 'ant-design-hmfw'

export default defineComponent({
  name: 'SegmentedDemo',
  setup() {
    const value = ref('Daily')

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Segmented 分段控制器</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <Segmented
            options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']}
            value={value.value}
            onChange={(v) => (value.value = v as string)}
          />
          <span style={{ marginLeft: '12px', color: '#666' }}>当前: {value.value}</span>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>禁用</h3>
          <Segmented options={['Map', 'Transit', 'Satellite']} disabled />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>禁用某项</h3>
          <Segmented
            options={[
              { label: 'Daily', value: 'Daily' },
              { label: 'Weekly', value: 'Weekly', disabled: true },
              { label: 'Monthly', value: 'Monthly' },
            ]}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>尺寸</h3>
          <Space direction="vertical">
            <Segmented options={['Daily', 'Weekly', 'Monthly']} size="large" />
            <Segmented options={['Daily', 'Weekly', 'Monthly']} />
            <Segmented options={['Daily', 'Weekly', 'Monthly']} size="small" />
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>Block 模式</h3>
          <Segmented options={['Daily', 'Weekly', 'Monthly']} block />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>带图标</h3>
          <Segmented
            options={[
              { label: 'List', value: 'list', icon: '☰' },
              { label: 'Kanban', value: 'kanban', icon: '⊞' },
            ]}
          />
        </section>
      </div>
    )
  },
})
