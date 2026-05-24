import { defineComponent, ref } from 'vue'
import { Steps, Button, Space } from 'ant-design-hmfw'

const items = [
  { title: '第一步', description: '填写基本信息' },
  { title: '第二步', description: '上传证明材料' },
  { title: '第三步', description: '等待审核' },
  { title: '完成', description: '审核通过' },
]

export default defineComponent({
  name: 'StepsDemo',
  setup() {
    const current = ref(1)

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Steps 步骤条</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <Steps items={items} current={current.value} />
          <div style={{ marginTop: '16px' }}>
            <Space>
              <Button
                disabled={current.value === 0}
                onClick={() => (current.value = Math.max(0, current.value - 1))}
              >
                上一步
              </Button>
              <Button
                type="primary"
                disabled={current.value === items.length - 1}
                onClick={() => (current.value = Math.min(items.length - 1, current.value + 1))}
              >
                下一步
              </Button>
            </Space>
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>垂直方向</h3>
          <Steps items={items} current={1} direction="vertical" />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>小尺寸</h3>
          <Steps items={items} current={1} size="small" />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>错误状态</h3>
          <Steps
            items={[
              { title: '第一步', description: '已完成' },
              { title: '第二步', description: '出错了', status: 'error' },
              { title: '第三步', description: '等待中' },
            ]}
            current={1}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>点状步骤条</h3>
          <Steps items={items} current={1} progressDot />
        </section>
      </div>
    )
  },
})
