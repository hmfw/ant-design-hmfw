import { defineComponent } from 'vue'
import { Breadcrumb } from 'ant-design-hmfw'

export default defineComponent({
  name: 'BreadcrumbDemo',
  setup() {
    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Breadcrumb 面包屑</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>基础用法</h3>
          <Breadcrumb items={[{ title: '首页', href: '#' }, { title: '列表', href: '#' }, { title: '详情' }]} />
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>自定义分隔符</h3>
          <Breadcrumb
            separator=">"
            items={[{ title: 'Home' }, { title: 'Application Center' }, { title: 'Application List' }, { title: 'An Application' }]}
          />
        </section>
      </div>
    )
  },
})
