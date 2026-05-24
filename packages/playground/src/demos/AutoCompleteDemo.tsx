import { defineComponent, ref } from 'vue'
import { AutoComplete } from 'ant-design-hmfw'
import type { AutoCompleteOption } from 'ant-design-hmfw'

export default defineComponent({
  name: 'AutoCompleteDemo',
  setup() {
    const value1 = ref('')
    const value2 = ref('')
    const value3 = ref('')

    const emailOptions = ref<AutoCompleteOption[]>([])
    const handleEmailSearch = (text: string) => {
      const domains = ['gmail.com', 'qq.com', '163.com', 'outlook.com']
      emailOptions.value = text && !text.includes('@')
        ? domains.map((d) => ({ value: `${text}@${d}` }))
        : []
    }

    const staticOptions: AutoCompleteOption[] = [
      { value: 'Burns Bay Road' },
      { value: 'Downing Street' },
      { value: 'Wall Street' },
      { value: 'Broadway' },
      { value: 'Fifth Avenue' },
    ]

    const labelOptions: AutoCompleteOption[] = [
      { value: 'apple', label: '🍎 Apple' },
      { value: 'banana', label: '🍌 Banana' },
      { value: 'cherry', label: '🍒 Cherry' },
      { value: 'durian', label: '🍈 Durian' },
      { value: 'elderberry', label: '🫐 Elderberry' },
    ]

    return () => (
      <div>
        <h2>AutoComplete 自动完成</h2>

        <h3>基础用法</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <AutoComplete
            v-model:value={value1.value}
            options={staticOptions}
            placeholder="输入地址"
            style={{ width: '240px' }}
          />
          <span style={{ color: '#666' }}>值: {value1.value || '未输入'}</span>
        </div>

        <h3 style={{ marginTop: '24px' }}>邮箱自动补全</h3>
        <AutoComplete
          v-model:value={value2.value}
          options={emailOptions.value}
          placeholder="输入邮箱"
          onSearch={handleEmailSearch}
          style={{ width: '280px' }}
        />

        <h3 style={{ marginTop: '24px' }}>自定义 label</h3>
        <AutoComplete
          v-model:value={value3.value}
          options={labelOptions}
          placeholder="搜索水果"
          style={{ width: '240px' }}
        />

        <h3 style={{ marginTop: '24px' }}>不同尺寸</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <AutoComplete options={staticOptions} size="small" placeholder="小尺寸" style={{ width: '160px' }} />
          <AutoComplete options={staticOptions} size="middle" placeholder="中等（默认）" style={{ width: '200px' }} />
          <AutoComplete options={staticOptions} size="large" placeholder="大尺寸" style={{ width: '200px' }} />
        </div>

        <h3 style={{ marginTop: '24px' }}>状态</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <AutoComplete options={staticOptions} status="error" placeholder="错误状态" style={{ width: '180px' }} />
          <AutoComplete options={staticOptions} status="warning" placeholder="警告状态" style={{ width: '180px' }} />
          <AutoComplete options={staticOptions} disabled placeholder="禁用状态" style={{ width: '180px' }} />
        </div>

        <h3 style={{ marginTop: '24px' }}>不过滤（filterOption=false）</h3>
        <AutoComplete
          options={staticOptions}
          filterOption={false}
          placeholder="输入任意内容，显示所有选项"
          style={{ width: '280px' }}
        />

        <h3 style={{ marginTop: '24px' }}>允许清除</h3>
        <AutoComplete
          options={staticOptions}
          allowClear
          placeholder="可清除"
          style={{ width: '240px' }}
        />
      </div>
    )
  },
})
