import { defineComponent } from 'vue'
import { Timeline, Button } from 'ant-design-hmfw'

const items = [
  { children: '创建服务站点 2015-09-01', color: 'green' },
  { children: '解决初始网络问题 1 2015-09-01', color: 'green' },
  { children: '技术测试 2015-09-01', color: 'red' },
  { children: '网络问题解决 2015-09-01' },
]

export default defineComponent({
  name: 'TimelineDemo',
  setup() {
    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Timeline 时间轴</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <Timeline items={items} />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>带 pending</h3>
          <Timeline items={items.slice(0, 3)} pending="Recording..." />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>自定义颜色</h3>
          <Timeline
            items={[
              { children: '成功事件', color: 'green' },
              { children: '失败事件', color: 'red' },
              { children: '警告事件', color: '#faad14' },
              { children: '普通事件', color: 'blue' },
            ]}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>带标签</h3>
          <Timeline
            mode="left"
            items={[
              { label: '2015-09-01', children: '创建服务站点' },
              { label: '2015-09-01 09:12:11', children: '解决初始网络问题' },
              { label: '2015-09-01 09:12:11', children: '技术测试' },
              { label: '2015-09-01 09:12:11', children: '网络问题解决' },
            ]}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>交替展示</h3>
          <Timeline
            mode="alternate"
            items={[
              { children: '创建服务站点 2015-09-01', color: 'green' },
              { children: '解决初始网络问题 2015-09-01' },
              { children: '技术测试 2015-09-01', color: 'red' },
              { children: '网络问题解决 2015-09-01' },
            ]}
          />
        </section>
      </div>
    )
  },
})
