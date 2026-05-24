import { defineComponent, ref } from 'vue'
import { Pagination } from 'ant-design-hmfw'

export default defineComponent({
  name: 'PaginationDemo',
  setup() {
    const page = ref(1)

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Pagination 分页</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <Pagination
            total={100}
            current={page.value}
            pageSize={10}
            onChange={(p: number) => (page.value = p)}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>显示总数</h3>
          <Pagination
            total={100}
            current={page.value}
            pageSize={10}
            onChange={(p: number) => (page.value = p)}
            showTotal={(total: number, range: [number, number]) => `第 ${range[0]}-${range[1]} 条，共 ${total} 条`}
          />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>小尺寸</h3>
          <Pagination total={50} current={1} pageSize={10} size="small" />
        </section>
      </div>
    )
  },
})
