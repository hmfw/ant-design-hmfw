# Upload 上传

文件选择上传和拖拽上传控件。

## 何时使用

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

- 当需要上传一个或一些文件时。
- 当需要展现上传的进度时。
- 当需要使用拖拽交互时。

## 代码演示

### 点击上传

经典款式，用户点击按钮弹出文件选择框。

<DemoBlock title="点击上传" :source="UploadBasicSource">
  <UploadBasic />
</DemoBlock>

### 图片卡片

使用 `list-type="picture-card"` 展示图片卡片样式。点击预览图标可查看大图。

<DemoBlock title="图片卡片" :source="UploadPictureCardSource">
  <UploadPictureCard />
</DemoBlock>

### 拖拽上传

可以把文件拖入指定区域，完成上传，同样支持点击上传。

<DemoBlock title="拖拽上传" :source="UploadDraggerSource">
  <UploadDragger />
</DemoBlock>

### 自定义上传

通过 `custom-request` 覆盖默认的上传行为，实现自定义上传逻辑。

<DemoBlock title="自定义上传" :source="UploadCustomSource">
  <UploadCustom />
</DemoBlock>

### 自定义文件项渲染

通过 `item-render` 自定义文件列表项外观，可通过 `actions` 调用内置的 `preview`、`download`、`remove` 行为。

<DemoBlock title="自定义文件项渲染" :source="UploadItemRenderSource">
  <UploadItemRender />
</DemoBlock>

### 分片上传

大文件场景下，通过 `custom-request` 配合 `File.slice()` 切片，多次请求上传到服务端，最后合并。下面演示了串行分片 + 进度上报的实现思路。

<DemoBlock title="分片上传" :source="UploadChunkedSource">
  <UploadChunked />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对选择按钮、拖拽区、文件列表、卡片等子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="UploadClassNamesSource">
  <UploadClassNames />
</DemoBlock>

## API

### Upload Props

| 参数                  | 说明                                                                             | 类型                                                                        | 默认值                   |
| --------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------ |
| fileList(v-model)     | 已经上传的文件列表（受控）                                                       | `UploadFile[]`                                                              | -                        |
| defaultFileList       | 默认已经上传的文件列表（非受控）                                                 | `UploadFile[]`                                                              | -                        |
| accept                | 接受上传的文件类型，详见 input accept Attribute                                  | `string`                                                                    | -                        |
| action                | 上传的地址，支持函数返回字符串或 Promise                                         | `string \| ((file: File) => string \| Promise<string>)`                     | -                        |
| data                  | 上传所需额外参数，支持函数返回对象或 Promise                                     | `object \| ((file: UploadFile) => object \| Promise<object>)`               | -                        |
| disabled              | 是否禁用                                                                         | `boolean`                                                                   | `false`                  |
| listType              | 上传列表的内建样式                                                               | `'text' \| 'picture' \| 'picture-card' \| 'picture-circle'`                 | `'text'`                 |
| type                  | 触发器类型，`drag` 即拖拽上传区域                                                | `'select' \| 'drag'`                                                        | `'select'`               |
| maxCount              | 限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件                        | `number`                                                                    | -                        |
| multiple              | 是否支持多选文件                                                                 | `boolean`                                                                   | `false`                  |
| name                  | 发到后台的文件参数名                                                             | `string`                                                                    | `'file'`                 |
| showUploadList        | 是否展示文件列表，可对象配置                                                     | `boolean \| { showRemoveIcon?: boolean; showPreviewIcon?: boolean }`        | `true`                   |
| beforeUpload          | 上传文件之前的钩子，返回 `false` 取消，返回 `File/Blob` 替换上传目标             | `(file: File, fileList: File[]) => boolean \| File \| Blob \| Promise<...>` | -                        |
| customRequest         | 覆盖默认上传行为；第二参数 `{ defaultRequest }` 可回退默认实现                   | `(options, info?: { defaultRequest }) => void`                              | -                        |
| onRemove              | 删除文件的拦截钩子，返回 `false` 阻止删除                                        | `(file: UploadFile) => boolean \| Promise<boolean>`                         | -                        |
| openFileDialogOnClick | 点击触发器是否弹出文件选择框                                                     | `boolean`                                                                   | `true`                   |
| method                | 上传请求 HTTP 方法                                                               | `string`                                                                    | `'post'`                 |
| isImageUrl            | 自定义判断是否为图片以决定是否显示缩略图                                         | `(file: UploadFile) => boolean`                                             | 内置：扩展名 + MIME 检测 |
| itemRender            | 自定义文件项渲染                                                                 | `(originNode, file, fileList, actions) => VNode`                            | -                        |
| classNames            | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `UploadClassNames`                                                          | -                        |
| styles                | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `UploadStyles`                                                              | -                        |

### UploadFile

| 参数     | 说明                                                   | 类型                                            |
| -------- | ------------------------------------------------------ | ----------------------------------------------- |
| uid      | 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突 | `string`                                        |
| name     | 文件名                                                 | `string`                                        |
| size     | 文件大小（字节）                                       | `number`                                        |
| type     | 文件类型                                               | `string`                                        |
| status   | 上传状态                                               | `'uploading' \| 'done' \| 'error' \| 'removed'` |
| percent  | 上传进度                                               | `number`                                        |
| url      | 下载链接额外的 html 属性                               | `string`                                        |
| thumbUrl | 缩略图地址                                             | `string`                                        |

### Upload Events

| 事件名          | 说明                                                            | 回调参数                                                                                    |
| --------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| update:fileList | 文件列表变化时的回调                                            | `(fileList: UploadFile[]) => void`                                                          |
| change          | 上传文件改变时的状态。进度变化时 `event` 字段携带 `{ percent }` | `(info: { file: UploadFile; fileList: UploadFile[]; event?: { percent: number } }) => void` |
| remove          | 点击移除文件后触发（被 `onRemove` 拦截 false 时不触发）         | `(file: UploadFile) => void`                                                                |
| preview         | 点击预览图标时触发。对于图片文件，会自动打开内置预览弹窗        | `(file: UploadFile) => void`                                                                |
| download        | 点击下载图标时触发（需配置 `showUploadList.showDownloadIcon`）  | `(file: UploadFile) => void`                                                                |
| drop            | 文件拖拽到上传区域释放时触发                                    | `(event: DragEvent) => void`                                                                |

### Upload Slots

| 插槽名  | 说明                             |
| ------- | -------------------------------- |
| default | 触发上传的控件，通常为按钮或图标 |

### 图片预览

Upload 组件内置了图片预览功能，当点击图片卡片的预览图标（👁）时：

1. **自动判断**：通过 `isImageUrl` 函数判断文件是否为图片
2. **触发事件**：先触发 `@preview` 事件，允许用户自定义行为
3. **内置预览**：对于图片文件，自动打开预览弹窗，支持缩放、旋转等操作
4. **非图片文件**：只触发 `@preview` 事件，不打开预览弹窗

**自定义预览行为**：如果需要自定义预览逻辑（如跳转到详情页），可以监听 `@preview` 事件。内置预览不会影响自定义逻辑的执行。

```vue
<Upload list-type="picture-card" @preview="handlePreview">
  <!-- 仍会触发内置图片预览 -->
</Upload>
```

## Upload.Dragger

`<UploadDragger>` 是 `<Upload type="drag">` 的便捷别名，等同于 AntD 的 `Upload.Dragger`。也可通过 `Upload.Dragger` 访问。

```vue
<UploadDragger v-model:file-list="fileList" action="/api/upload">
  ...
</UploadDragger>
```

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对上传组件的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface UploadClassNames {
  root?: string // 根容器
  select?: string // 选择按钮容器
  selectIcon?: string // 选择按钮图标
  selectText?: string // 选择按钮文本
  drag?: string // 拖拽容器
  dragContainer?: string // 拖拽内部容器
  list?: string // 文件列表容器
  listItem?: string // 列表项
  listItemContainer?: string // 列表项外层容器
  thumbnail?: string // 缩略图容器
  itemInfo?: string // 文件信息容器
  itemIcon?: string // 文件图标
  itemName?: string // 文件名
  itemSize?: string // 文件大小
  itemCard?: string // 卡片模式容器
  cardActions?: string // 卡片操作区
  itemAction?: string // 操作按钮
  progress?: string // 进度条容器
  progressBar?: string // 进度条
}

interface UploadStyles {
  root?: CSSProperties
  select?: CSSProperties
  selectIcon?: CSSProperties
  selectText?: CSSProperties
  drag?: CSSProperties
  dragContainer?: CSSProperties
  list?: CSSProperties
  listItem?: CSSProperties
  listItemContainer?: CSSProperties
  thumbnail?: CSSProperties
  itemInfo?: CSSProperties
  itemIcon?: CSSProperties
  itemName?: CSSProperties
  itemSize?: CSSProperties
  itemCard?: CSSProperties
  cardActions?: CSSProperties
  itemAction?: CSSProperties
  progress?: CSSProperties
  progressBar?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<!-- 选择按钮模式 (type="select") -->
<div class="hmfw-upload">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-upload-select">
    <!-- ↑ classNames.select / styles.select 应用于此 -->
    <span class="hmfw-upload-select-icon">
      <!-- ↑ classNames.selectIcon / styles.selectIcon 应用于此 -->
      <svg>...</svg>
    </span>
    <span class="hmfw-upload-select-text">
      <!-- ↑ classNames.selectText / styles.selectText 应用于此 -->
      上传文件
    </span>
  </div>
  <div class="hmfw-upload-list">
    <!-- ↑ classNames.list / styles.list 应用于此 -->
    <div class="hmfw-upload-list-item-container">
      <!-- ↑ classNames.listItemContainer / styles.listItemContainer 应用于此 -->
      <div class="hmfw-upload-list-item">
        <!-- ↑ classNames.listItem / styles.listItem 应用于此 -->
        <span class="hmfw-upload-list-item-icon">
          <!-- ↑ classNames.itemIcon / styles.itemIcon 应用于此 -->
        </span>
        <span class="hmfw-upload-list-item-info">
          <!-- ↑ classNames.itemInfo / styles.itemInfo 应用于此 -->
          <span class="hmfw-upload-list-item-name">
            <!-- ↑ classNames.itemName / styles.itemName 应用于此 -->
            文件名.pdf
          </span>
          <span class="hmfw-upload-list-item-size">
            <!-- ↑ classNames.itemSize / styles.itemSize 应用于此 -->
            1.2 MB
          </span>
        </span>
      </div>
    </div>
  </div>
</div>

<!-- 拖拽上传模式 (type="drag") -->
<div class="hmfw-upload">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-upload-drag">
    <!-- ↑ classNames.drag / styles.drag 应用于此 -->
    <div class="hmfw-upload-drag-container">
      <!-- ↑ classNames.dragContainer / styles.dragContainer 应用于此 -->
      <p class="ant-upload-drag-icon">...</p>
      <p class="ant-upload-text">点击或拖拽文件到此区域上传</p>
    </div>
  </div>
</div>

<!-- 图片卡片模式 (list-type="picture-card") -->
<div class="hmfw-upload">
  <div class="hmfw-upload-list hmfw-upload-list-picture-card">
    <!-- ↑ classNames.list / styles.list 应用于此 -->
    <div class="hmfw-upload-list-item-container">
      <!-- ↑ classNames.listItemContainer / styles.listItemContainer 应用于此 -->
      <div class="hmfw-upload-list-item-card">
        <!-- ↑ classNames.itemCard / styles.itemCard 应用于此 -->
        <div class="hmfw-upload-list-item-thumbnail">
          <!-- ↑ classNames.thumbnail / styles.thumbnail 应用于此 -->
          <img src="..." />
        </div>
        <div class="hmfw-upload-list-item-actions">
          <!-- ↑ classNames.cardActions / styles.cardActions 应用于此 -->
          <button class="hmfw-upload-list-item-action">
            <!-- ↑ classNames.itemAction / styles.itemAction 应用于此 -->
            预览
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- 上传进度 -->
<div class="hmfw-upload-list-item">
  <div class="hmfw-upload-list-item-progress">
    <!-- ↑ classNames.progress / styles.progress 应用于此 -->
    <div class="hmfw-upload-list-item-progress-bar" style="width: 60%">
      <!-- ↑ classNames.progressBar / styles.progressBar 应用于此 -->
    </div>
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义拖拽区样式 -->
  <Upload
    type="drag"
    action="/api/upload"
    :class-names="{
      drag: 'my-drag-area',
      dragContainer: 'my-drag-container',
    }"
  >
    <p class="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p class="ant-upload-text">点击或拖拽文件到此区域上传</p>
  </Upload>

  <!-- 自定义文件列表项 -->
  <Upload
    action="/api/upload"
    :class-names="{
      list: 'my-file-list',
      listItem: 'my-file-item',
      itemIcon: 'my-file-icon',
      itemName: 'my-file-name',
    }"
  >
    <Button>上传文件</Button>
  </Upload>

  <!-- 自定义图片卡片 -->
  <Upload
    action="/api/upload"
    list-type="picture-card"
    :class-names="{
      itemCard: 'my-picture-card',
      thumbnail: 'my-thumbnail',
      cardActions: 'my-actions',
    }"
  >
    <div>+ 上传图片</div>
  </Upload>
</template>

<style scoped>
:deep(.my-drag-area) {
  border: 2px dashed #1890ff;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.05) 0%, rgba(9, 109, 217, 0.05) 100%);
  transition: all 0.3s;
}

:deep(.my-drag-area:hover) {
  border-color: #40a9ff;
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.1) 0%, rgba(9, 109, 217, 0.1) 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.2);
}

:deep(.my-file-item) {
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  background: linear-gradient(to right, rgba(82, 196, 26, 0.05), rgba(56, 158, 13, 0.05));
  border: 1px solid rgba(82, 196, 26, 0.2);
  transition: all 0.3s;
}

:deep(.my-file-item:hover) {
  transform: translateX(4px);
}

:deep(.my-picture-card) {
  border-radius: 12px;
  border: 2px dashed #faad14;
  transition: all 0.3s;
}

:deep(.my-picture-card:hover) {
  box-shadow: 0 4px 12px rgba(250, 173, 20, 0.3);
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制拖拽区 -->
  <Upload
    type="drag"
    action="/api/upload"
    :styles="{
      drag: { borderColor: '#722ed1', borderWidth: '2px' },
      dragContainer: { padding: '32px' },
    }"
  >
    <p class="ant-upload-drag-icon">
      <InboxOutlined style="color: #722ed1" />
    </p>
    <p class="ant-upload-text">紫色主题拖拽上传</p>
  </Upload>

  <!-- 自定义进度条颜色 -->
  <Upload
    action="/api/upload"
    :styles="{
      progress: { backgroundColor: 'rgba(114, 46, 209, 0.1)' },
      progressBar: { backgroundColor: '#722ed1' },
    }"
  >
    <Button>上传文件</Button>
  </Upload>

  <!-- 组合使用 -->
  <Upload
    action="/api/upload"
    list-type="picture-card"
    :styles="{
      itemCard: { borderRadius: '16px', borderColor: '#13c2c2' },
      thumbnail: { borderRadius: '12px' },
      cardActions: { background: 'linear-gradient(to bottom, transparent, rgba(19, 194, 194, 0.8))' },
    }"
  >
    <div>+ 上传</div>
  </Upload>
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `select`、`selectIcon`、`selectText` 仅在 `type="select"` 时有效
- `drag`、`dragContainer` 仅在 `type="drag"` 时有效
- `itemCard`、`thumbnail`、`cardActions` 仅在 `list-type="picture-card"` 或 `list-type="picture-circle"` 时有效
- `progress`、`progressBar` 仅在文件上传中状态时渲染
- 不同的 `listType`（`text`/`picture`/`picture-card`/`picture-circle`）会影响部分节点的渲染逻辑

## 设计 Token

Upload 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                    | 说明           | 默认值                |
| ----------------------------- | -------------- | --------------------- |
| `--hmfw-color-bg-container`   | 容器背景色     | `#ffffff`             |
| `--hmfw-color-bg-text-hover`  | 文本悬停背景色 | `rgba(0,0,0,0.06)`    |
| `--hmfw-color-border`         | 边框色         | `#d9d9d9`             |
| `--hmfw-color-error`          | 错误状态色     | `#ff4d4f`             |
| `--hmfw-color-primary`        | 主题色         | `#1677ff`             |
| `--hmfw-color-primary-bg`     | 主题背景色     | `#e6f4ff`（动态生成） |
| `--hmfw-color-primary-hover`  | 主题色悬停态   | `#4096ff`（动态生成） |
| `--hmfw-color-text-secondary` | 次级文本色     | `rgba(0,0,0,0.65)`    |
