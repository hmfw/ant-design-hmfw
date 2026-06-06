import { defineComponent, type PropType } from 'vue'
import { Tree } from './Tree'
import { FolderOutlined, FolderOpenOutlined, FileOutlined } from '../icon'
import type { TreeDataNode, ExpandAction } from './types'

/**
 * 目录树：在 Tree 基础上默认 blockNode + showIcon，并提供文件夹/文件图标。
 * 文件夹依据展开态切换 Folder/FolderOpen，叶子节点用 File。
 */
export const DirectoryTree = defineComponent({
  name: 'DirectoryTree',
  props: {
    expandAction: { type: [Boolean, String] as PropType<ExpandAction>, default: 'click' },
    showIcon: { type: Boolean, default: true },
  },
  setup(props, { attrs, slots }) {
    const folderIcon = (node: TreeDataNode, ctx?: { expanded: boolean; isLeaf: boolean }) => {
      // 节点自定义 icon 优先
      if (node.icon) return typeof node.icon === 'function' ? node.icon(node) : node.icon
      if (ctx?.isLeaf) return <FileOutlined />
      return ctx?.expanded ? <FolderOpenOutlined /> : <FolderOutlined />
    }

    return () => (
      <Tree
        {...(attrs as Record<string, unknown>)}
        class="hmfw-tree-directory"
        blockNode
        showIcon={props.showIcon}
        expandAction={props.expandAction}
        icon={folderIcon}
      >
        {slots.default?.()}
      </Tree>
    )
  },
})
