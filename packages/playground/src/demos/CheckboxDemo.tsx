import { defineComponent, ref } from 'vue'
import { Checkbox, CheckboxGroup } from 'ant-design-hmfw'

export default defineComponent({
  name: 'CheckboxDemo',
  setup() {
    const checked = ref(false)
    const indeterminate = ref(true)
    const checkAll = ref(false)
    const checkedList = ref<string[]>(['Apple'])
    const options = ['Apple', 'Banana', 'Orange']

    const onCheckAllChange = (e: Event) => {
      const target = e.target as HTMLInputElement
      checkedList.value = target.checked ? [...options] : []
      indeterminate.value = false
      checkAll.value = target.checked
    }

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Checkbox 多选框</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Checkbox checked={checked.value} onChange={() => (checked.value = !checked.value)}>
              基础 Checkbox
            </Checkbox>
            <Checkbox disabled>禁用</Checkbox>
            <Checkbox checked disabled>禁用选中</Checkbox>
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>全选 / 半选</h3>
          <Checkbox
            indeterminate={indeterminate.value}
            checked={checkAll.value}
            onChange={onCheckAllChange}
          >
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
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>CheckboxGroup</h3>
          <CheckboxGroup
            options={[
              { label: 'Apple', value: 'apple' },
              { label: 'Banana', value: 'banana' },
              { label: 'Orange（禁用）', value: 'orange', disabled: true },
            ]}
            defaultValue={['apple']}
          />
        </section>
      </div>
    )
  },
})
