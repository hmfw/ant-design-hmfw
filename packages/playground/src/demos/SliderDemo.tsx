import { defineComponent, ref } from 'vue'
import { Slider, Space } from 'ant-design-hmfw'

export default defineComponent({
  name: 'SliderDemo',
  setup() {
    const value = ref(30)
    const rangeValue = ref<[number, number]>([20, 60])

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Slider 滑动输入条</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <Slider value={value.value} onChange={(v) => (value.value = v as number)} />
          <span style={{ color: '#666' }}>当前值: {value.value}</span>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>范围选择</h3>
          <Slider
            range
            value={rangeValue.value}
            onChange={(v) => (rangeValue.value = v as [number, number])}
          />
          <span style={{ color: '#666' }}>当前值: [{rangeValue.value.join(', ')}]</span>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>带刻度</h3>
          <Slider
            defaultValue={37}
            marks={{ 0: '0°C', 26: '26°C', 37: '37°C', 100: '100°C' }}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>禁用</h3>
          <Slider defaultValue={30} disabled />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>步长</h3>
          <Slider defaultValue={20} step={10} marks={{ 0: '0', 10: '10', 20: '20', 30: '30', 40: '40', 50: '50', 60: '60', 70: '70', 80: '80', 90: '90', 100: '100' }} />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>自定义 Tooltip</h3>
          <Slider
            defaultValue={50}
            tooltip={{ formatter: (v: number) => `${v}%` }}
          />
        </section>
      </div>
    )
  },
})
