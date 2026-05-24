import { defineComponent, ref } from 'vue'
import { Select, Space } from 'ant-design-hmfw'

const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
  { label: '葡萄', value: 'grape' },
  { label: '西瓜（禁用）', value: 'watermelon', disabled: true },
]

export default defineComponent({
  name: 'SelectDemo',
  setup() {
    const single = ref<string | undefined>(undefined)
    const multi = ref<string[]>([])
    const search = ref<string | undefined>(undefined)

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Select 选择器</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础单选</h3>
          <Select
            options={options}
            value={single.value}
            placeholder="请选择水果"
            style={{ width: '200px' }}
            onChange={(v) => (single.value = v as string)}
          />
          <span style={{ marginLeft: '12px', color: '#666' }}>当前值: {single.value ?? '未选择'}</span>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>多选</h3>
          <Select
            options={options}
            value={multi.value}
            mode="multiple"
            placeholder="请选择多个水果"
            style={{ width: '300px' }}
            onChange={(v) => (multi.value = v as string[])}
            allowClear
          />
          <span style={{ marginLeft: '12px', color: '#666' }}>已选: {multi.value.join(', ') || '无'}</span>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>可搜索</h3>
          <Select
            options={options}
            value={search.value}
            showSearch
            placeholder="搜索水果"
            style={{ width: '200px' }}
            onChange={(v) => (search.value = v as string)}
            allowClear
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>尺寸</h3>
          <Space>
            <Select options={options} size="small" placeholder="Small" style={{ width: '120px' }} />
            <Select options={options} size="middle" placeholder="Middle" style={{ width: '120px' }} />
            <Select options={options} size="large" placeholder="Large" style={{ width: '120px' }} />
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>状态</h3>
          <Space>
            <Select options={options} status="error" placeholder="Error" style={{ width: '150px' }} />
            <Select options={options} status="warning" placeholder="Warning" style={{ width: '150px' }} />
            <Select options={options} disabled placeholder="Disabled" style={{ width: '150px' }} />
            <Select options={options} loading placeholder="Loading" style={{ width: '150px' }} />
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>多选限制显示数量</h3>
          <Select
            options={options}
            mode="multiple"
            maxTagCount={2}
            defaultValue={['apple', 'banana', 'orange']}
            style={{ width: '300px' }}
          />
        </section>
      </div>
    )
  },
})
