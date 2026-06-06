import { Tree as TreeComponent } from './Tree'
import { DirectoryTree as DirectoryTreeComponent } from './DirectoryTree'

export type {
  TreeProps, TreeDataNode, TreeExpandedKeys, TreeSelectedKeys, TreeCheckedKeys,
  CheckedKeysObject, FieldNames, ShowLineConfig, DraggableConfig,
  TreeExpandInfo, TreeSelectInfo, TreeCheckInfo, TreeNodeMouseInfo,
  TreeDropInfo, TreeDragEnterInfo, TreeSemanticClassNames, TreeSemanticStyles,
  DirectoryTreeProps, ExpandAction, Key,
} from './types'

// 挂载静态成员 Tree.DirectoryTree
const Tree = TreeComponent as typeof TreeComponent & {
  DirectoryTree: typeof DirectoryTreeComponent
}
Tree.DirectoryTree = DirectoryTreeComponent

export { Tree, DirectoryTreeComponent as DirectoryTree }
export default Tree
