import { defineComponent } from 'vue'
import { Button, message } from 'ant-design-hmfw'

export default defineComponent({
  name: 'MessageDemo',
  setup() {
    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Message 全局提示</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>各类型</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Button onClick={() => message.success('操作成功！')}>Success</Button>
            <Button onClick={() => message.error('操作失败！')}>Error</Button>
            <Button onClick={() => message.warning('请注意！')}>Warning</Button>
            <Button onClick={() => message.info('提示信息')}>Info</Button>
            <Button onClick={() => message.loading('加载中...', 2)}>Loading</Button>
          </div>
        </section>
      </div>
    )
  },
})
