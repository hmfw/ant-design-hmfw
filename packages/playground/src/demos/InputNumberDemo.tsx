import { defineComponent, ref } from 'vue'
import { InputNumber, Space } from 'ant-design-hmfw'

export default defineComponent({
  name: 'InputNumberDemo',
  setup() {
    const value = ref<number | undefined>(3)

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>InputNumber 数字输入框</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <InputNumber
            value={value.value}
            onChange={(v) => (value.value = v as number)}
          />
          <span style={{ marginLeft: '12px', color: '#666' }}>当前值: {value.value}</span>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>最小值/最大值</h3>
          <Space>
            <InputNumber min={1} max={10} defaultValue={3} />
            <span style={{ color: '#666' }}>范围: 1 ~ 10</span>
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>步长</h3>
          <Space>
            <InputNumber step={0.1} defaultValue={1.0} />
            <span style={{ color: '#666' }}>步长 0.1</span>
            <InputNumber step={5} defaultValue={0} />
            <span style={{ color: '#666' }}>步长 5</span>
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>精度</h3>
          <InputNumber precision={2} defaultValue={1.5} step={0.01} />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>尺寸</h3>
          <Space>
            <InputNumber size="small" defaultValue={1} placeholder="Small" />
            <InputNumber size="middle" defaultValue={1} placeholder="Middle" />
            <InputNumber size="large" defaultValue={1} placeholder="Large" />
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>状态</h3>
          <Space>
            <InputNumber status="error" defaultValue={1} />
            <InputNumber status="warning" defaultValue={1} />
            <InputNumber disabled defaultValue={1} />
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>前缀/后缀</h3>
          <Space>
            <InputNumber prefix="¥" defaultValue={100} />
            <InputNumber addonBefore="+" addonAfter="元" defaultValue={100} />
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>无控制按钮</h3>
          <InputNumber controls={false} defaultValue={3} />
        </section>
      </div>
    )
  },
})
