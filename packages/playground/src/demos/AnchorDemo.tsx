import { defineComponent, ref } from 'vue'
import { Anchor } from 'ant-design-hmfw'

export default defineComponent({
  name: 'AnchorDemo',
  setup() {
    const items = [
      { href: '#anchor-basic', title: '基础用法' },
      { href: '#anchor-horizontal', title: '水平锚点' },
      { href: '#anchor-nested', title: '嵌套锚点', children: [
        { href: '#anchor-nested-1', title: '子锚点 1' },
        { href: '#anchor-nested-2', title: '子锚点 2' },
      ]},
      { href: '#anchor-static', title: '静态演示' },
    ]

    const horizontalItems = [
      { href: '#h1', title: '简介' },
      { href: '#h2', title: '安装' },
      { href: '#h3', title: '使用方法' },
      { href: '#h4', title: 'API 参考' },
    ]

    return () => (
      <div>
        <h2>Anchor 锚点</h2>

        <h3>基础用法（垂直）</h3>
        <div style={{ display: 'flex', gap: '32px' }}>
          <div style={{ flex: 1 }}>
            <div id="anchor-basic" style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px', marginBottom: '16px' }}>
              <h4 style={{ margin: 0 }}>基础用法 #anchor-basic</h4>
              <p>这是基础用法区域的内容。Anchor 组件可以用于导航到页面的不同区域。</p>
            </div>
            <div id="anchor-horizontal" style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px', marginBottom: '16px' }}>
              <h4 style={{ margin: 0 }}>水平锚点 #anchor-horizontal</h4>
              <p>水平方向的锚点导航，适合顶部导航栏使用。</p>
            </div>
            <div id="anchor-nested" style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px', marginBottom: '16px' }}>
              <h4 style={{ margin: 0 }}>嵌套锚点 #anchor-nested</h4>
              <p>支持嵌套的锚点链接，可以展示层级关系。</p>
              <div id="anchor-nested-1" style={{ marginTop: '8px' }}>子锚点 1 的内容</div>
              <div id="anchor-nested-2" style={{ marginTop: '8px' }}>子锚点 2 的内容</div>
            </div>
            <div id="anchor-static" style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
              <h4 style={{ margin: 0 }}>静态演示 #anchor-static</h4>
              <p>通过 affix=false 可以禁用固定定位。</p>
            </div>
          </div>
          <div style={{ width: '200px', flexShrink: 0 }}>
            <p style={{ fontSize: '12px', color: '#999', marginBottom: '8px' }}>垂直锚点导航</p>
            <Anchor
              items={items}
              affix={false}
              onChange={(href) => console.log('change:', href)}
              onClick={(e, link) => console.log('click:', link)}
            />
          </div>
        </div>

        <h3 style={{ marginTop: '32px' }}>水平方向</h3>
        <div style={{ marginBottom: '16px' }}>
          <Anchor items={horizontalItems} direction="horizontal" affix={false} />
        </div>

        <h3 style={{ marginTop: '24px' }}>静态锚点（affix=false）</h3>
        <Anchor items={items} affix={false} />
      </div>
    )
  },
})
