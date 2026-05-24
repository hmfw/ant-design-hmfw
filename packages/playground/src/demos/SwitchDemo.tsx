import { defineComponent, ref } from 'vue'
import { Switch } from 'ant-design-hmfw'

export default defineComponent({
  name: 'SwitchDemo',
  setup() {
    const on = ref(false)

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Switch 开关</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Switch checked={on.value} onChange={(v: boolean) => (on.value = v)} />
            <Switch
              checked={on.value}
              checkedChildren="开"
              unCheckedChildren="关"
              onChange={(v: boolean) => (on.value = v)}
            />
            <Switch size="small" checked={on.value} onChange={(v: boolean) => (on.value = v)} />
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>禁用 / 加载</h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Switch disabled />
            <Switch checked disabled />
            <Switch loading />
          </div>
        </section>
      </div>
    )
  },
})
