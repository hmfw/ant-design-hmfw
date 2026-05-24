import { defineComponent } from 'vue'
import { Avatar, AvatarGroup } from 'ant-design-hmfw'

export default defineComponent({
  name: 'AvatarDemo',
  setup() {
    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Avatar 头像</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>尺寸</h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Avatar size="large">U</Avatar>
            <Avatar>U</Avatar>
            <Avatar size="small">U</Avatar>
            <Avatar size={64}>64</Avatar>
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>形状</h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Avatar shape="circle" size="large">C</Avatar>
            <Avatar shape="square" size="large">S</Avatar>
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>图片</h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" size="large" />
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>头像组</h3>
          <AvatarGroup maxCount={3}>
            <Avatar style={{ background: '#f56a00' }}>K</Avatar>
            <Avatar style={{ background: '#7265e6' }}>L</Avatar>
            <Avatar style={{ background: '#ffbf00' }}>M</Avatar>
            <Avatar style={{ background: '#00a2ae' }}>N</Avatar>
            <Avatar style={{ background: '#1677ff' }}>O</Avatar>
          </AvatarGroup>
        </section>
      </div>
    )
  },
})
