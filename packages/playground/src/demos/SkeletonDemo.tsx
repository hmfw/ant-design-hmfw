import { defineComponent } from 'vue'
import { Skeleton, SkeletonButton, SkeletonInput, Space, Switch } from 'ant-design-hmfw'
import { ref } from 'vue'

export default defineComponent({
  name: 'SkeletonDemo',
  setup() {
    const loading = ref(true)

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Skeleton 骨架屏</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <Skeleton />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>带头像</h3>
          <Skeleton avatar />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>动画效果</h3>
          <Skeleton active avatar />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>圆角</h3>
          <Skeleton active round />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>切换加载状态</h3>
          <div style={{ marginBottom: '16px' }}>
            <Space>
              <span>Loading:</span>
              <Switch
                checked={loading.value}
                onChange={(v) => (loading.value = v as boolean)}
              />
            </Space>
          </div>
          <Skeleton loading={loading.value} active avatar>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1677ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>A</div>
              <div>
                <div style={{ fontWeight: 600, marginBottom: '4px' }}>Ant Design</div>
                <div style={{ color: '#666' }}>We supply a series of design principles, practical patterns and high quality design resources.</div>
              </div>
            </div>
          </Skeleton>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>按钮/输入框骨架</h3>
          <Space direction="vertical">
            <Space>
              <SkeletonButton active />
              <SkeletonButton active size="small" />
              <SkeletonButton active size="large" />
            </Space>
            <Space>
              <SkeletonButton active shape="circle" />
              <SkeletonButton active shape="round" />
            </Space>
            <Space>
              <SkeletonInput active />
              <SkeletonInput active size="small" />
              <SkeletonInput active size="large" />
            </Space>
          </Space>
        </section>
      </div>
    )
  },
})
