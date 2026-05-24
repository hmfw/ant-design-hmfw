import { defineComponent, ref } from 'vue'
import { Modal, Button, message } from 'ant-design-hmfw'

export default defineComponent({
  name: 'ModalDemo',
  setup() {
    const open = ref(false)
    const centeredOpen = ref(false)

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Modal 对话框</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <Button type="primary" onClick={() => (open.value = true)}>打开 Modal</Button>
          <Modal
            open={open.value}
            title="基础对话框"
            onOk={() => { message.success('点击了确定'); open.value = false }}
            onCancel={() => (open.value = false)}
          >
            <p>这是 Modal 的内容区域。</p>
            <p>可以放置任意内容。</p>
          </Modal>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>垂直居中</h3>
          <Button onClick={() => (centeredOpen.value = true)}>居中对话框</Button>
          <Modal
            open={centeredOpen.value}
            title="居中对话框"
            centered
            onOk={() => (centeredOpen.value = false)}
            onCancel={() => (centeredOpen.value = false)}
          >
            <p>垂直居中显示的对话框。</p>
          </Modal>
        </section>
      </div>
    )
  },
})
