import { defineComponent } from 'vue'
import { SearchOutlined, LoadingOutlined } from 'ant-design-hmfw'

export default defineComponent({
  name: 'TestTreeShaking',
  setup() {
    return () => (
      <div>
        <SearchOutlined />
        <LoadingOutlined />
      </div>
    )
  },
})
