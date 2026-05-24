import { defineComponent, ref } from 'vue'
import { Radio, RadioGroup } from 'ant-design-hmfw'

export default defineComponent({
  name: 'RadioDemo',
  setup() {
    const radioVal = ref('a')

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Radio 单选框</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Radio checked>选中</Radio>
            <Radio>未选中</Radio>
            <Radio disabled>禁用</Radio>
            <Radio checked disabled>禁用选中</Radio>
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>RadioGroup</h3>
          <RadioGroup
            value={radioVal.value}
            options={[
              { label: '选项 A', value: 'a' },
              { label: '选项 B', value: 'b' },
              { label: '选项 C（禁用）', value: 'c', disabled: true },
            ]}
            onChange={(v: string) => (radioVal.value = v)}
          />
          <div style={{ marginTop: '8px', color: '#666' }}>当前选中：{radioVal.value}</div>
        </section>
      </div>
    )
  },
})
