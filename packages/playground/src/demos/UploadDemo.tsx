import { defineComponent, ref } from 'vue'
import { Upload, Button } from 'ant-design-hmfw'
import type { UploadFile } from 'ant-design-hmfw'

export default defineComponent({
  name: 'UploadDemo',
  setup() {
    const fileList = ref<UploadFile[]>([
      { uid: '-1', name: 'xxx.png', status: 'done', url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' },
      { uid: '-2', name: 'yyy.png', status: 'error' },
    ])

    const pictureList = ref<UploadFile[]>([])

    const cardList = ref<UploadFile[]>([
      { uid: '-1', name: 'image.png', status: 'done', url: '', thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' },
    ])

    return () => (
      <div>
        <h2>Upload 上传</h2>

        <h3>点击上传</h3>
        <Upload
          fileList={fileList.value}
          onChange={({ fileList: newList }) => (fileList.value = newList)}
        >
          <Button>点击上传文件</Button>
        </Upload>

        <h3 style={{ marginTop: '24px' }}>图片列表</h3>
        <Upload
          listType="picture"
          accept="image/*"
          fileList={pictureList.value}
          onChange={({ fileList: newList }) => (pictureList.value = newList)}
        >
          <Button>上传图片</Button>
        </Upload>

        <h3 style={{ marginTop: '24px' }}>图片卡片</h3>
        <Upload
          listType="picture-card"
          fileList={cardList.value}
          onChange={({ fileList: newList }) => (cardList.value = newList)}
        />

        <h3 style={{ marginTop: '24px' }}>图片圆形卡片</h3>
        <Upload
          listType="picture-circle"
          fileList={ref<UploadFile[]>([]).value}
        />

        <h3 style={{ marginTop: '24px' }}>拖拽上传区域</h3>
        <Upload
          multiple
          fileList={ref<UploadFile[]>([]).value}
        >
          <div style={{
            border: '1px dashed #d9d9d9',
            borderRadius: '8px',
            padding: '32px',
            textAlign: 'center',
            background: '#fafafa',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}>
            <p style={{ fontSize: '24px', marginBottom: '8px' }}>📥</p>
            <p style={{ marginBottom: '4px', color: 'rgba(0,0,0,0.88)' }}>点击或拖拽文件到此区域上传</p>
            <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.45)' }}>支持单个或批量上传</p>
          </div>
        </Upload>

        <h3 style={{ marginTop: '24px' }}>限制文件数量（maxCount=3）</h3>
        <Upload maxCount={3} multiple>
          <Button>上传（最多 3 个）</Button>
        </Upload>

        <h3 style={{ marginTop: '24px' }}>禁用</h3>
        <Upload disabled>
          <Button disabled>禁用上传</Button>
        </Upload>

        <h3 style={{ marginTop: '24px' }}>只接受图片</h3>
        <Upload accept="image/*">
          <Button>只接受图片</Button>
        </Upload>
      </div>
    )
  },
})
