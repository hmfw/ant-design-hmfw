import { defineComponent, ref } from 'vue'
import { Drawer, Button } from 'ant-design-hmfw'

export default defineComponent({
  name: 'DrawerDemo',
  setup() {
    const open = ref(false)
    const placement = ref<'right' | 'left' | 'top' | 'bottom'>('right')

    const show = (p: 'right' | 'left' | 'top' | 'bottom') => {
      placement.value = p
      open.value = true
    }

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Drawer 抽屉</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>四个方向</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {(['right', 'left', 'top', 'bottom'] as const).map((p) => (
              <Button key={p} onClick={() => show(p)}>{p}</Button>
            ))}
          </div>
          <Drawer
            open={open.value}
            title={`${placement.value} 抽屉`}
            placement={placement.value}
            onClose={() => (open.value = false)}
          >
            <p>抽屉内容</p>
            <p>可以放置任意内容。</p>
          </Drawer>
        </section>
      </div>
    )
  },
})
