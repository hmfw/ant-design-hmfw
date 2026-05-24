import { defineComponent } from 'vue'
import { Empty, Button } from 'ant-design-hmfw'

export default defineComponent({
  name: 'EmptyDemo',
  setup() {
    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Empty 空状态</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>默认</h3>
          <Empty />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>自定义描述</h3>
          <Empty description="暂时没有数据" />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>无描述</h3>
          <Empty description={false} />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>带操作按钮</h3>
          <Empty>
            {{
              default: () => <Button type="primary">立即创建</Button>,
            }}
          </Empty>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>自定义图片</h3>
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{ height: '60px' }}
            description="暂无数据"
          />
        </section>
      </div>
    )
  },
})
