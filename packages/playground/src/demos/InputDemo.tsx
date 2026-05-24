import { defineComponent, ref } from 'vue'
import { Input, InputPassword, TextArea, InputSearch } from 'ant-design-hmfw'

export default defineComponent({
  name: 'InputDemo',
  setup() {
    const val = ref('')
    const searchVal = ref('')

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Input 输入框</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
            <Input placeholder="Basic input" />
            <Input placeholder="Disabled" disabled />
            <Input placeholder="Read only" readOnly value="Read only value" />
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>尺寸</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
            <Input size="large" placeholder="Large" />
            <Input placeholder="Middle (default)" />
            <Input size="small" placeholder="Small" />
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>状态</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
            <Input status="error" placeholder="Error status" />
            <Input status="warning" placeholder="Warning status" />
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>前缀 / 后缀 / 清除</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
            <Input
              placeholder="With prefix"
              value={val.value}
              onUpdate:value={(v: string) => (val.value = v)}
              v-slots={{ prefix: () => <span>@</span> }}
            />
            <Input
              placeholder="With suffix"
              v-slots={{ suffix: () => <span>RMB</span> }}
            />
            <Input
              placeholder="Allow clear"
              allowClear
              value={val.value}
              onUpdate:value={(v: string) => (val.value = v)}
            />
            <Input
              placeholder="Show count (max 20)"
              showCount
              maxLength={20}
              value={val.value}
              onUpdate:value={(v: string) => (val.value = v)}
            />
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>密码框</h3>
          <div style={{ maxWidth: '400px' }}>
            <InputPassword placeholder="Enter password" />
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>文本域</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
            <TextArea placeholder="Basic textarea" rows={4} />
            <TextArea
              placeholder="With count (max 100)"
              showCount
              maxLength={100}
            />
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>搜索框</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
            <InputSearch
              placeholder="Search..."
              value={searchVal.value}
              onUpdate:value={(v: string) => (searchVal.value = v)}
            />
            <InputSearch
              placeholder="Enter button"
              enterButton="Search"
            />
          </div>
        </section>
      </div>
    )
  },
})
