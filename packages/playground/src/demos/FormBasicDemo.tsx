import { defineComponent, ref } from 'vue'
import { Checkbox, CheckboxGroup, Radio, RadioGroup, Switch } from 'ant-design-hmfw'

export default defineComponent({
  name: 'FormBasicDemo',
  setup() {
    const checked = ref(false)
    const indeterminate = ref(true)
    const checkAll = ref(false)
    const checkedList = ref<string[]>(['Apple'])
    const radioVal = ref('a')
    const switchOn = ref(false)

    const options = ['Apple', 'Banana', 'Orange']

    const onCheckAllChange = (e: Event) => {
      const target = e.target as HTMLInputElement
      checkedList.value = target.checked ? [...options] : []
      indeterminate.value = false
      checkAll.value = target.checked
    }

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>表单基础组件</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>Checkbox 多选框</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Checkbox checked={checked.value} onChange={() => (checked.value = !checked.value)}>
              基础 Checkbox
            </Checkbox>
            <Checkbox disabled>禁用</Checkbox>
            <Checkbox checked disabled>禁用选中</Checkbox>
            <Checkbox indeterminate={indeterminate.value} checked={checkAll.value} onChange={onCheckAllChange}>
              全选
            </Checkbox>
            <CheckboxGroup
              value={checkedList.value}
              options={options}
              onChange={(v: string[]) => {
                checkedList.value = v
                indeterminate.value = v.length > 0 && v.length < options.length
                checkAll.value = v.length === options.length
              }}
            />
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>Radio 单选框</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <RadioGroup
              value={radioVal.value}
              options={[
                { label: '选项 A', value: 'a' },
                { label: '选项 B', value: 'b' },
                { label: '选项 C（禁用）', value: 'c', disabled: true },
              ]}
              onChange={(v: string) => (radioVal.value = v)}
            />
            <div>当前选中：{radioVal.value}</div>
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>Switch 开关</h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Switch checked={switchOn.value} onChange={(v: boolean) => (switchOn.value = v)} />
            <Switch checked={switchOn.value} checkedChildren="开" unCheckedChildren="关" onChange={(v: boolean) => (switchOn.value = v)} />
            <Switch size="small" checked={switchOn.value} onChange={(v: boolean) => (switchOn.value = v)} />
            <Switch disabled />
            <Switch loading />
          </div>
        </section>
      </div>
    )
  },
})
