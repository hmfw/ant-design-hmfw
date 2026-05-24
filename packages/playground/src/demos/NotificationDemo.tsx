import { defineComponent } from 'vue'
import { notification, Button, Space } from 'ant-design-hmfw'

export default defineComponent({
  name: 'NotificationDemo',
  setup() {
    const openBasic = () => {
      notification.open({
        message: '通知标题',
        description: '这是通知的描述内容，可以包含更多详细信息。',
        duration: 3,
      })
    }

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Notification 通知提醒框</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <Button onClick={openBasic}>打开通知</Button>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>通知类型</h3>
          <Space>
            <Button
              type="primary"
              onClick={() => notification.success({ message: '操作成功', description: '数据已保存。' })}
            >
              成功
            </Button>
            <Button
              onClick={() => notification.info({ message: '提示信息', description: '请注意查看最新公告。' })}
            >
              信息
            </Button>
            <Button
              onClick={() => notification.warning({ message: '警告', description: '磁盘空间不足，请及时清理。' })}
            >
              警告
            </Button>
            <Button
              danger
              onClick={() => notification.error({ message: '操作失败', description: '网络连接超时，请重试。' })}
            >
              错误
            </Button>
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>不同位置</h3>
          <Space wrap>
            {(['topLeft', 'topRight', 'bottomLeft', 'bottomRight'] as const).map((placement) => (
              <Button
                key={placement}
                onClick={() => notification.info({ message: placement, description: `显示在 ${placement}`, placement })}
              >
                {placement}
              </Button>
            ))}
          </Space>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>不自动关闭</h3>
          <Space>
            <Button
              onClick={() => notification.open({
                message: '持久通知',
                description: '此通知不会自动关闭，需要手动点击关闭按钮。',
                duration: 0,
                key: 'persistent',
              })}
            >
              打开持久通知
            </Button>
            <Button onClick={() => notification.destroy('persistent')}>关闭持久通知</Button>
            <Button onClick={() => notification.destroy()}>关闭所有通知</Button>
          </Space>
        </section>
      </div>
    )
  },
})
