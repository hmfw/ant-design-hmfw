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

使用 `list-type="picture-card"` 展示图片卡片样式。

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

## API

### Upload Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| fileList(v-model) | 已经上传的文件列表（受控） | `UploadFile[]` | - |
| accept | 接受上传的文件类型，详见 input accept Attribute | `string` | - |
| action | 上传的地址 | `string \| ((file: File) => Promise<string>)` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| listType | 上传列表的内建样式 | `'text' \| 'picture' \| 'picture-card' \| 'picture-circle'` | `'text'` |
| maxCount | 限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件 | `number` | - |
| multiple | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件 | `boolean` | `false` |
| name | 发到后台的文件参数名 | `string` | `'file'` |
| showUploadList | 是否展示文件列表 | `boolean` | `true` |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传 | `(file: File, fileList: File[]) => boolean \| Promise<File \| boolean>` | - |
| customRequest | 通过覆盖默认的上传行为，可以自定义自己的上传实现 | `(options: UploadRequestOption) => void` | - |

### UploadFile

| 参数 | 说明 | 类型 |
|------|------|------|
| uid | 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突 | `string` |
| name | 文件名 | `string` |
| size | 文件大小（字节） | `number` |
| type | 文件类型 | `string` |
| status | 上传状态 | `'uploading' \| 'done' \| 'error' \| 'removed'` |
| percent | 上传进度 | `number` |
| url | 下载链接额外的 html 属性 | `string` |
| thumbUrl | 缩略图地址 | `string` |

### Upload Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:fileList | 文件列表变化时的回调 | `(fileList: UploadFile[]) => void` |
| change | 上传文件改变时的状态，详见 change | `(info: { file: UploadFile; fileList: UploadFile[] }) => void` |
| remove | 点击移除文件时的回调，返回值为 false 时不移除 | `(file: UploadFile) => boolean \| Promise<boolean>` |
| preview | 点击文件链接或预览图标时的回调 | `(file: UploadFile) => void` |
| drop | 拖拽文件进入上传区域时执行的回调（仅 Dragger 模式） | `(event: DragEvent) => void` |

### Upload Slots

| 插槽名 | 说明 |
|--------|------|
| default | 触发上传的控件，通常为按钮或图标 |
