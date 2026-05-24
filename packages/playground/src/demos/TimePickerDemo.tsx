import { defineComponent, ref } from 'vue'
import { TimePicker } from 'ant-design-hmfw'

export default defineComponent({
  name: 'TimePickerDemo',
  setup() {
    const value = ref<string>()
    const value2 = ref('09:30:00')

    return () => (
      <div>
        <h2>TimePicker 时间选择框</h2>

        <h3>基础用法</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <TimePicker
            v-model:value={value.value}
            onChange={(v) => console.log('change:', v)}
          />
          <span style={{ color: '#666' }}>当前值: {value.value ?? '未选择'}</span>
        </div>

        <h3 style={{ marginTop: '24px' }}>受控模式</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <TimePicker value={value2.value} onChange={(v) => (value2.value = v as string)} />
          <span style={{ color: '#666' }}>值: {value2.value}</span>
          <button onClick={() => (value2.value = '12:00:00')} style={{ padding: '4px 12px', cursor: 'pointer' }}>
            设为 12:00:00
          </button>
        </div>

        <h3 style={{ marginTop: '24px' }}>不同尺寸</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <TimePicker size="small" placeholder="小尺寸" />
          <TimePicker size="middle" placeholder="中等（默认）" />
          <TimePicker size="large" placeholder="大尺寸" />
        </div>

        <h3 style={{ marginTop: '24px' }}>状态</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <TimePicker status="error" placeholder="错误状态" />
          <TimePicker status="warning" placeholder="警告状态" />
          <TimePicker disabled placeholder="禁用状态" />
        </div>

        <h3 style={{ marginTop: '24px' }}>自定义格式</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>HH:mm:ss（默认）</p>
            <TimePicker format="HH:mm:ss" placeholder="HH:mm:ss" />
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>HH:mm</p>
            <TimePicker format="HH:mm" placeholder="HH:mm" />
          </div>
        </div>

        <h3 style={{ marginTop: '24px' }}>步进</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>小时步进 2，分钟步进 15</p>
            <TimePicker hourStep={2} minuteStep={15} secondStep={10} />
          </div>
        </div>
      </div>
    )
  },
})
