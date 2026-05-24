import { defineComponent, ref } from 'vue'
import { DatePicker } from 'ant-design-hmfw'

export default defineComponent({
  name: 'DatePickerDemo',
  setup() {
    const value = ref<string>()
    const value2 = ref('2026-05-24')

    return () => (
      <div>
        <h2>DatePicker 日期选择框</h2>

        <h3>基础用法</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <DatePicker
            v-model:value={value.value}
            onChange={(v) => console.log('change:', v)}
          />
          <span style={{ color: '#666' }}>当前值: {value.value ?? '未选择'}</span>
        </div>

        <h3 style={{ marginTop: '24px' }}>受控模式</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <DatePicker value={value2.value} onChange={(v) => (value2.value = v as string)} />
          <span style={{ color: '#666' }}>值: {value2.value}</span>
          <button onClick={() => (value2.value = '2026-01-01')} style={{ padding: '4px 12px', cursor: 'pointer' }}>
            设为 2026-01-01
          </button>
        </div>

        <h3 style={{ marginTop: '24px' }}>不同 Picker 类型</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div>
            <p style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>日期（date）</p>
            <DatePicker picker="date" />
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>周（week）—未实现</p>
            <DatePicker picker="week" placeholder="暂不支持" disabled />
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>月份（month）</p>
            <DatePicker picker="month" />
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>季度（quarter）</p>
            <DatePicker picker="quarter" />
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>年份（year）</p>
            <DatePicker picker="year" />
          </div>
        </div>

        <h3 style={{ marginTop: '24px' }}>不同尺寸</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <DatePicker size="small" placeholder="小尺寸" />
          <DatePicker size="middle" placeholder="中等（默认）" />
          <DatePicker size="large" placeholder="大尺寸" />
        </div>

        <h3 style={{ marginTop: '24px' }}>状态</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <DatePicker status="error" placeholder="错误状态" />
          <DatePicker status="warning" placeholder="警告状态" />
          <DatePicker disabled placeholder="禁用状态" />
        </div>

        <h3 style={{ marginTop: '24px' }}>禁用特定日期</h3>
        <DatePicker disabledDate={(d) => d > new Date()} placeholder="禁用未来日期" />

        <h3 style={{ marginTop: '24px' }}>不显示今天按钮</h3>
        <DatePicker showToday={false} />
      </div>
    )
  },
})
