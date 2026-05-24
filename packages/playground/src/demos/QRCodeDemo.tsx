import { defineComponent, ref } from 'vue'
import { QRCode } from 'ant-design-hmfw'

export default defineComponent({
  name: 'QRCodeDemo',
  setup() {
    const value = ref('https://ant.design')
    const status = ref<'active' | 'expired' | 'loading' | 'scanned'>('active')

    return () => (
      <div>
        <h2>QRCode 二维码</h2>

        <h3>基础用法</h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div>
            <p>默认</p>
            <QRCode value="https://ant.design" />
          </div>
          <div>
            <p>自定义颜色</p>
            <QRCode value="https://ant.design" color="#722ed1" />
          </div>
          <div>
            <p>无边框</p>
            <QRCode value="https://ant.design" bordered={false} />
          </div>
          <div>
            <p>自定义背景色</p>
            <QRCode value="https://ant.design" color="#fff" bgColor="#1677ff" />
          </div>
        </div>

        <h3 style={{ marginTop: '24px' }}>不同尺寸</h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <div>
            <p>100px</p>
            <QRCode value="https://ant.design" size={100} />
          </div>
          <div>
            <p>160px（默认）</p>
            <QRCode value="https://ant.design" size={160} />
          </div>
          <div>
            <p>200px</p>
            <QRCode value="https://ant.design" size={200} />
          </div>
        </div>

        <h3 style={{ marginTop: '24px' }}>状态</h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div>
            <p>active</p>
            <QRCode value="https://ant.design" status="active" />
          </div>
          <div>
            <p>expired（过期）</p>
            <QRCode value="https://ant.design" status="expired" onRefresh={() => alert('刷新二维码')} />
          </div>
          <div>
            <p>loading</p>
            <QRCode value="https://ant.design" status="loading" />
          </div>
          <div>
            <p>scanned（已扫描）</p>
            <QRCode value="https://ant.design" status="scanned" />
          </div>
        </div>

        <h3 style={{ marginTop: '24px' }}>纠错级别</h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {(['L', 'M', 'Q', 'H'] as const).map((level) => (
            <div key={level}>
              <p>纠错级别 {level}</p>
              <QRCode value="https://ant.design" errorLevel={level} />
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: '24px' }}>自定义值</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexDirection: 'column' }}>
          <input
            value={value.value}
            onInput={(e) => (value.value = (e.target as HTMLInputElement).value)}
            style={{ width: '300px', padding: '4px 8px', border: '1px solid #d9d9d9', borderRadius: '6px' }}
            placeholder="输入 URL 或文本"
          />
          <QRCode value={value.value} />
        </div>
      </div>
    )
  },
})
