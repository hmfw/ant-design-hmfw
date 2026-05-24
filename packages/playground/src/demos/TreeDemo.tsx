import { defineComponent, ref } from 'vue'
import { Tree } from 'ant-design-hmfw'
import type { TreeDataNode } from 'ant-design-hmfw'

const treeData: TreeDataNode[] = [
  {
    key: '0-0',
    title: 'parent 1',
    children: [
      {
        key: '0-0-0',
        title: 'parent 1-0',
        children: [
          { key: '0-0-0-0', title: 'leaf' },
          { key: '0-0-0-1', title: 'leaf' },
          { key: '0-0-0-2', title: 'leaf' },
        ],
      },
      {
        key: '0-0-1',
        title: 'parent 1-1',
        children: [
          { key: '0-0-1-0', title: 'leaf' },
        ],
      },
      {
        key: '0-0-2',
        title: 'parent 1-2',
        children: [
          { key: '0-0-2-0', title: 'leaf' },
          { key: '0-0-2-1', title: 'leaf (disabled)', disabled: true },
        ],
      },
    ],
  },
  {
    key: '0-1',
    title: 'parent 2',
    children: [
      { key: '0-1-0', title: 'parent 2-0', children: [
        { key: '0-1-0-0', title: 'leaf' },
        { key: '0-1-0-1', title: 'leaf' },
      ]},
    ],
  },
]

export default defineComponent({
  name: 'TreeDemo',
  setup() {
    const selectedKeys = ref<(string | number)[]>([])
    const checkedKeys = ref<(string | number)[]>([])
    const expandedKeys = ref<(string | number)[]>(['0-0'])

    return () => (
      <div>
        <h2>Tree 树形控件</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div>
            <h3>基础树</h3>
            <Tree
              treeData={treeData}
              defaultExpandedKeys={['0-0']}
              onSelect={(keys) => console.log('selected:', keys)}
            />
          </div>

          <div>
            <h3>展开所有节点</h3>
            <Tree
              treeData={treeData}
              defaultExpandAll
            />
          </div>

          <div>
            <h3>可勾选</h3>
            <Tree
              treeData={treeData}
              checkable
              defaultExpandAll
              v-model:checkedKeys={checkedKeys.value}
              onCheck={(keys) => (checkedKeys.value = keys as (string|number)[])}
            />
            <p style={{ fontSize: '12px', color: '#999' }}>已勾选: {JSON.stringify(checkedKeys.value)}</p>
          </div>

          <div>
            <h3>显示连接线</h3>
            <Tree
              treeData={treeData}
              showLine
              defaultExpandAll
            />
          </div>

          <div>
            <h3>多选</h3>
            <Tree
              treeData={treeData}
              multiple
              defaultExpandAll
              selectedKeys={selectedKeys.value}
              onSelect={(keys) => (selectedKeys.value = keys as (string|number)[])}
            />
            <p style={{ fontSize: '12px', color: '#999' }}>已选: {JSON.stringify(selectedKeys.value)}</p>
          </div>

          <div>
            <h3>Block 节点</h3>
            <Tree
              treeData={treeData}
              blockNode
              defaultExpandAll
            />
          </div>
        </div>
      </div>
    )
  },
})
