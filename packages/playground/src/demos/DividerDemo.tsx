import { defineComponent } from 'vue'
import { Divider } from 'ant-design-hmfw'

export default defineComponent({
  name: 'DividerDemo',
  setup() {
    return () => (
      <div>
        <h2>Divider 组件</h2>

        <div style={{ marginBottom: '16px' }}>
          <h3>水平分割线</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Divider />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>带文字的分割线</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Divider>Text</Divider>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>文字位置</h3>
          <Divider orientation="left">Left Text</Divider>
          <Divider orientation="center">Center Text</Divider>
          <Divider orientation="right">Right Text</Divider>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>虚线</h3>
          <Divider dashed />
          <Divider dashed>Dashed with text</Divider>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>Plain 样式</h3>
          <Divider plain>Plain Text</Divider>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>垂直分割线</h3>
          <div>
            Text
            <Divider type="vertical" />
            <a href="#">Link</a>
            <Divider type="vertical" />
            <a href="#">Link</a>
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3>垂直虚线</h3>
          <div>
            Text
            <Divider type="vertical" dashed />
            <a href="#">Link</a>
            <Divider type="vertical" dashed />
            <a href="#">Link</a>
          </div>
        </div>
      </div>
    )
  },
})
