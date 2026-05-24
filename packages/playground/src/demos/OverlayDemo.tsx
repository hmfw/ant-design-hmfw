import { defineComponent, ref } from 'vue'
import { Modal, Drawer, Button, message } from 'ant-design-hmfw'

export default defineComponent({
  name: 'OverlayDemo',
  setup() {
    const modalOpen = ref(false)
    const drawerOpen = ref(false)
    const drawerPlacement = ref<'right' | 'left' | 'top' | 'bottom'>('right')

    const showMessage = (type: 'success' | 'error' | 'warning' | 'info') => {
      message[type](`这是一条${type}消息`, 2)
    }

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>浮层组件</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>Message 全局提示</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Button onClick={() => showMessage('success')}>Success</Button>
            <Button onClick={() => showMessage('error')}>Error</Button>
            <Button onClick={() => showMessage('warning')}>Warning</Button>
            <Button onClick={() => showMessage('info')}>Info</Button>
            <Button onClick={() => message.loading('加载中...', 2)}>Loading</Button>
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>Modal 对话框</h3>
          <Button type="primary" onClick={() => (modalOpen.value = true)}>打开 Modal</Button>
          <Modal
            open={modalOpen.value}
            title="基础对话框"
            onOk={() => { message.success('点击了确定'); modalOpen.value = false }}
            onCancel={() => (modalOpen.value = false)}
          >
            <p>这是 Modal 的内容区域。</p>
            <p>可以放置任意内容。</p>
          </Modal>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>Drawer 抽屉</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {(['right', 'left', 'top', 'bottom'] as const).map((p) => (
              <Button
                key={p}
                onClick={() => { drawerPlacement.value = p; drawerOpen.value = true }}
              >
                {p}
              </Button>
            ))}
          </div>
          <Drawer
            open={drawerOpen.value}
            title={`${drawerPlacement.value} 抽屉`}
            placement={drawerPlacement.value}
            onClose={() => (drawerOpen.value = false)}
          >
            <p>抽屉内容</p>
          </Drawer>
        </section>
      </div>
    )
  },
})
