import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { nextTick, h } from 'vue'
import { Upload, UploadDragger, isImageUrl } from '../Upload'
import type { UploadFile, ItemRenderActions } from '../types'

describe('Upload', () => {
  it('renders correctly', () => {
    const wrapper = mount(Upload)
    expect(wrapper.find('.hmfw-upload').exists()).toBe(true)
  })

  it('renders hidden file input', () => {
    const wrapper = mount(Upload)
    const input = wrapper.find('input[type="file"]')
    expect(input.exists()).toBe(true)
    expect(input.attributes('style')).toContain('display: none')
  })

  it('disabled state', () => {
    const wrapper = mount(Upload, { props: { disabled: true } })
    expect(wrapper.find('.hmfw-upload-disabled').exists()).toBe(true)
  })

  it('multiple attribute', () => {
    const wrapper = mount(Upload, { props: { multiple: true } })
    expect(wrapper.find('input').attributes('multiple')).toBeDefined()
  })

  it('accept attribute', () => {
    const wrapper = mount(Upload, { props: { accept: 'image/*' } })
    expect(wrapper.find('input').attributes('accept')).toBe('image/*')
  })

  it('renders picture-card wrapper', () => {
    const wrapper = mount(Upload, { props: { listType: 'picture-card' } })
    expect(wrapper.find('.hmfw-upload-picture-card-wrapper').exists()).toBe(true)
  })

  it('renders picture-circle wrapper', () => {
    const wrapper = mount(Upload, { props: { listType: 'picture-circle' } })
    expect(wrapper.find('.hmfw-upload-picture-circle-wrapper').exists()).toBe(true)
  })

  it('renders existing fileList', () => {
    const fileList = [{ uid: '1', name: 'test.png', status: 'done' as const, size: 1024 }]
    const wrapper = mount(Upload, { props: { fileList } })
    expect(wrapper.find('.hmfw-upload-list-item').exists()).toBe(true)
    expect(wrapper.find('.hmfw-upload-list-item-name').text()).toBe('test.png')
  })

  it('renders slot content', () => {
    const wrapper = mount(Upload, {
      slots: { default: '<button>点击上传</button>' },
    })
    expect(wrapper.find('button').text()).toBe('点击上传')
  })

  it('emits remove when item removed', async () => {
    const fileList = [{ uid: '1', name: 'test.png', status: 'done' as const }]
    const wrapper = mount(Upload, { props: { fileList, showUploadList: true } })
    const removeBtn = wrapper.find('.hmfw-upload-list-item-remove')
    if (removeBtn.exists()) {
      await removeBtn.trigger('click')
      expect(wrapper.emitted('remove')).toBeTruthy()
    }
  })

  it('renders error status file', () => {
    const fileList = [{ uid: '1', name: 'fail.png', status: 'error' as const }]
    const wrapper = mount(Upload, { props: { fileList } })
    expect(wrapper.find('.hmfw-upload-list-item-error').exists()).toBe(true)
  })

  it('renders uploading status file', () => {
    const fileList = [{ uid: '1', name: 'uploading.png', status: 'uploading' as const, percent: 60 }]
    const wrapper = mount(Upload, { props: { fileList } })
    expect(wrapper.find('.hmfw-upload-list-item-uploading').exists()).toBe(true)
  })

  it('showUploadList=false hides file list', () => {
    const fileList = [{ uid: '1', name: 'test.png', status: 'done' as const }]
    const wrapper = mount(Upload, { props: { fileList, showUploadList: false } })
    expect(wrapper.find('.hmfw-upload-list-item').exists()).toBe(false)
  })

  it('calls customRequest when file selected', async () => {
    const customRequest = vi.fn()
    const wrapper = mount(Upload, { props: { customRequest } })
    const file = new File(['content'], 'test.txt', { type: 'text/plain' })
    const input = wrapper.find('input[type="file"]').element as HTMLInputElement
    Object.defineProperty(input, 'files', { value: [file], configurable: true })
    await wrapper.find('input[type="file"]').trigger('change')
    await wrapper.vm.$nextTick()
    expect(customRequest).toHaveBeenCalled()
  })

  it('emits beforeUpload result false cancels upload', async () => {
    const beforeUpload = vi.fn().mockReturnValue(false)
    const customRequest = vi.fn()
    const wrapper = mount(Upload, { props: { beforeUpload, customRequest } })
    const file = new File(['content'], 'test.txt', { type: 'text/plain' })
    const input = wrapper.find('input[type="file"]').element as HTMLInputElement
    Object.defineProperty(input, 'files', { value: [file], configurable: true })
    await wrapper.find('input[type="file"]').trigger('change')
    await wrapper.vm.$nextTick()
    expect(customRequest).not.toHaveBeenCalled()
  })

  it('beforeUpload returning a File replaces the upload target', async () => {
    const replacement = new File(['REPLACED'], 'replaced.txt', { type: 'text/plain' })
    const beforeUpload = vi.fn().mockResolvedValue(replacement)
    const customRequest = vi.fn()
    const wrapper = mount(Upload, { props: { beforeUpload, customRequest } })
    const file = new File(['original'], 'orig.txt', { type: 'text/plain' })
    const input = wrapper.find('input[type="file"]').element as HTMLInputElement
    Object.defineProperty(input, 'files', { value: [file], configurable: true })
    await wrapper.find('input[type="file"]').trigger('change')
    await Promise.resolve() // settle beforeUpload
    await Promise.resolve()
    expect(customRequest).toHaveBeenCalledTimes(1)
    expect(customRequest.mock.calls[0][0].file).toBe(replacement)
  })

  it('customRequest receives defaultRequest as second arg (AntD 5.28+)', async () => {
    const customRequest = vi.fn()
    const wrapper = mount(Upload, { props: { customRequest, action: '/upload' } })
    const file = new File(['c'], 'a.txt', { type: 'text/plain' })
    const input = wrapper.find('input[type="file"]').element as HTMLInputElement
    Object.defineProperty(input, 'files', { value: [file], configurable: true })
    await wrapper.find('input[type="file"]').trigger('change')
    await Promise.resolve()
    await Promise.resolve()
    expect(customRequest).toHaveBeenCalled()
    const [, info] = customRequest.mock.calls[0]
    expect(typeof info?.defaultRequest).toBe('function')
  })

  it('action as function is awaited', async () => {
    const action = vi.fn().mockResolvedValue('/api/resolved')
    const customRequest = vi.fn()
    const wrapper = mount(Upload, { props: { action, customRequest } })
    const file = new File(['c'], 'a.txt', { type: 'text/plain' })
    const input = wrapper.find('input[type="file"]').element as HTMLInputElement
    Object.defineProperty(input, 'files', { value: [file], configurable: true })
    await wrapper.find('input[type="file"]').trigger('change')
    await Promise.resolve()
    await Promise.resolve()
    expect(action).toHaveBeenCalledWith(file)
    expect(customRequest.mock.calls[0][0].action).toBe('/api/resolved')
  })

  it('data as function is awaited and passed through', async () => {
    const data = vi.fn().mockResolvedValue({ token: 'abc' })
    const customRequest = vi.fn()
    const wrapper = mount(Upload, { props: { data, customRequest } })
    const file = new File(['c'], 'a.txt', { type: 'text/plain' })
    const input = wrapper.find('input[type="file"]').element as HTMLInputElement
    Object.defineProperty(input, 'files', { value: [file], configurable: true })
    await wrapper.find('input[type="file"]').trigger('change')
    await Promise.resolve()
    await Promise.resolve()
    expect(customRequest.mock.calls[0][0].data).toEqual({ token: 'abc' })
  })

  it('onRemove returning false cancels removal (AntD v6)', async () => {
    const onRemove = vi.fn().mockResolvedValue(false)
    const fileList = [{ uid: '1', name: 't.png', status: 'done' as const }]
    const wrapper = mount(Upload, { props: { fileList, onRemove } })
    await wrapper.find('.hmfw-upload-list-item-remove').trigger('click')
    await nextTick()
    await Promise.resolve()
    expect(onRemove).toHaveBeenCalled()
    expect(wrapper.emitted('remove')).toBeFalsy()
  })

  it('drop event emits and ingests files', async () => {
    const wrapper = mount(Upload, { props: { type: 'drag' } })
    const dt = {
      files: [new File(['c'], 'a.txt', { type: 'text/plain' })],
    }
    await wrapper.find('.hmfw-upload-drag').trigger('drop', { dataTransfer: dt })
    await nextTick()
    expect(wrapper.emitted('drop')).toBeTruthy()
  })

  it('drag-hover state survives nested dragenter/dragleave', async () => {
    const wrapper = mount(Upload, { props: { type: 'drag' } })
    const trigger = wrapper.find('.hmfw-upload-drag')
    await trigger.trigger('dragenter')
    await trigger.trigger('dragenter') // entering child
    expect(wrapper.find('.hmfw-upload-drag-hover').exists()).toBe(true)
    await trigger.trigger('dragleave')
    // still inside the wrapper, hover should remain
    expect(wrapper.find('.hmfw-upload-drag-hover').exists()).toBe(true)
    await trigger.trigger('dragleave')
    expect(wrapper.find('.hmfw-upload-drag-hover').exists()).toBe(false)
  })

  it('maxCount=1 replaces existing file rather than rejecting', async () => {
    const wrapper = mount(Upload, {
      props: {
        maxCount: 1,
        customRequest: () => {},
        defaultFileList: [{ uid: 'old', name: 'old.txt', status: 'done' as const }],
      },
    })
    const file = new File(['c'], 'new.txt', { type: 'text/plain' })
    const input = wrapper.find('input[type="file"]').element as HTMLInputElement
    Object.defineProperty(input, 'files', { value: [file], configurable: true })
    await wrapper.find('input[type="file"]').trigger('change')
    await nextTick()
    const items = wrapper.findAll('.hmfw-upload-list-item-name')
    expect(items.length).toBe(1)
    expect(items[0].text()).toBe('new.txt')
  })

  it('defaultFileList is used in uncontrolled mode', () => {
    const wrapper = mount(Upload, {
      props: { defaultFileList: [{ uid: 'd', name: 'default.png', status: 'done' as const }] },
    })
    expect(wrapper.find('.hmfw-upload-list-item-name').text()).toBe('default.png')
  })

  it('Upload.Dragger renders drag wrapper', () => {
    const wrapper = mount(UploadDragger, { slots: { default: '<p>drop here</p>' } })
    expect(wrapper.find('.hmfw-upload-drag').exists()).toBe(true)
    expect(wrapper.text()).toContain('drop here')
  })

  it('Upload.Dragger is exposed on Upload namespace', () => {
    expect((Upload as any).Dragger).toBe(UploadDragger)
  })

  it('showUploadList object hides remove icon', () => {
    const wrapper = mount(Upload, {
      props: {
        fileList: [{ uid: '1', name: 'x.png', status: 'done' as const }],
        showUploadList: { showRemoveIcon: false },
      },
    })
    expect(wrapper.find('.hmfw-upload-list-item-remove').exists()).toBe(false)
  })

  // ============ isImageUrl ============
  describe('isImageUrl', () => {
    it('returns true when thumbUrl is present', () => {
      expect(isImageUrl({ uid: '1', name: 'a', thumbUrl: 'data:image/png;base64,xxx' })).toBe(true)
    })

    it('returns true for image MIME type', () => {
      expect(isImageUrl({ uid: '1', name: 'a.png', type: 'image/png' })).toBe(true)
    })

    it('returns true for known image extension', () => {
      expect(isImageUrl({ uid: '1', name: 'a', url: 'https://x/a.JPG' })).toBe(true)
      expect(isImageUrl({ uid: '1', name: 'a', url: '/foo/bar.svg' })).toBe(true)
      expect(isImageUrl({ uid: '1', name: 'a', url: '/foo/bar.webp' })).toBe(true)
    })

    it('returns false for non-image extension', () => {
      expect(isImageUrl({ uid: '1', name: 'a', url: '/foo/bar.pdf' })).toBe(false)
      expect(isImageUrl({ uid: '1', name: 'a', url: '/foo/bar.zip' })).toBe(false)
    })

    it('returns true for data:image URL', () => {
      expect(isImageUrl({ uid: '1', name: 'a', url: 'data:image/jpeg;base64,abc' })).toBe(true)
    })

    it('returns true for ambiguous URL (no extension)', () => {
      // AntD v6 默认行为：无扩展名按图片处理
      expect(isImageUrl({ uid: '1', name: 'a', url: 'https://x/some-id' })).toBe(true)
    })

    it('returns false when no url and no thumb', () => {
      expect(isImageUrl({ uid: '1', name: 'a' })).toBe(false)
    })

    it('custom isImageUrl prop overrides default', () => {
      const customCheck = vi.fn().mockReturnValue(false)
      const wrapper = mount(Upload, {
        props: {
          fileList: [{ uid: '1', name: 'a.png', status: 'done' as const, url: '/a.png' }],
          listType: 'picture',
          isImageUrl: customCheck,
        },
      })
      expect(customCheck).toHaveBeenCalled()
      // 自定义返回 false 时，缩略图不应渲染
      expect(wrapper.find('.hmfw-upload-list-item-thumbnail').exists()).toBe(false)
    })
  })

  // ============ itemRender ============
  describe('itemRender', () => {
    it('itemRender replaces default rendering', () => {
      const itemRender = vi.fn((_origin: any, file: UploadFile) => h('div', { class: 'my-custom-item' }, file.name))
      const fileList = [{ uid: '1', name: 'custom.txt', status: 'done' as const }]
      const wrapper = mount(Upload, { props: { fileList, itemRender } })
      expect(itemRender).toHaveBeenCalled()
      expect(wrapper.find('.my-custom-item').exists()).toBe(true)
      expect(wrapper.find('.my-custom-item').text()).toBe('custom.txt')
    })

    it('itemRender receives originNode, file, fileList, actions', () => {
      const itemRender = vi.fn((_o: any, _f: any, _l: any, _a: any) => h('div', { class: 'wrap' }))
      const fileList = [{ uid: '1', name: 'a.txt', status: 'done' as const }]
      mount(Upload, { props: { fileList, itemRender } })
      const args = itemRender.mock.calls[0]
      expect(args.length).toBe(4)
      expect(args[1]).toEqual(fileList[0])
      expect(args[2]).toEqual(fileList)
      // actions 钩子
      expect(typeof (args[3] as any).preview).toBe('function')
      expect(typeof (args[3] as any).remove).toBe('function')
      expect(typeof (args[3] as any).download).toBe('function')
    })

    it('itemRender actions.remove triggers internal remove flow', async () => {
      let actionsRef: ItemRenderActions | null = null
      const itemRender = (_o: any, _f: any, _l: any, a: ItemRenderActions) => {
        actionsRef = a
        return h('div', { class: 'wrap' })
      }
      const fileList = [{ uid: '1', name: 'a.txt', status: 'done' as const }]
      const wrapper = mount(Upload, { props: { fileList, itemRender } })
      actionsRef!.remove()
      await nextTick()
      await Promise.resolve()
      expect(wrapper.emitted('remove')).toBeTruthy()
    })

    it('itemRender actions.preview emits preview', () => {
      let actionsRef: ItemRenderActions | null = null
      const itemRender = (_o: any, _f: any, _l: any, a: ItemRenderActions) => {
        actionsRef = a
        return h('div')
      }
      const fileList = [{ uid: '1', name: 'a.txt', status: 'done' as const }]
      const wrapper = mount(Upload, { props: { fileList, itemRender } })
      actionsRef!.preview()
      expect(wrapper.emitted('preview')).toBeTruthy()
    })

    it('itemRender actions.download emits download', () => {
      let actionsRef: ItemRenderActions | null = null
      const itemRender = (_o: any, _f: any, _l: any, a: ItemRenderActions) => {
        actionsRef = a
        return h('div')
      }
      const fileList = [{ uid: '1', name: 'a.txt', status: 'done' as const }]
      const wrapper = mount(Upload, { props: { fileList, itemRender } })
      actionsRef!.download()
      expect(wrapper.emitted('download')).toBeTruthy()
    })
  })

  // ============ Preview ============
  describe('Preview', () => {
    it('renders hidden Image component for preview', () => {
      const wrapper = mount(Upload)
      const image = wrapper.findComponent({ name: 'Image' })
      expect(image.exists()).toBe(true)
      expect(image.attributes('style')).toContain('display: none')
    })

    it('clicking preview button emits preview event', async () => {
      const fileList = [
        {
          uid: '1',
          name: 'image.png',
          status: 'done' as const,
          url: 'https://example.com/image.png',
        },
      ]
      const wrapper = mount(Upload, {
        props: { fileList, listType: 'picture-card' },
      })
      const previewBtn = wrapper.find('.hmfw-upload-list-item-card-actions button')
      await previewBtn.trigger('click')
      expect(wrapper.emitted('preview')).toBeTruthy()
      expect(wrapper.emitted('preview')?.[0][0]).toEqual(fileList[0])
    })

    it('opens Image preview for image files', async () => {
      const fileList = [
        {
          uid: '1',
          name: 'image.png',
          status: 'done' as const,
          url: 'https://example.com/image.png',
        },
      ]
      const wrapper = mount(Upload, {
        props: { fileList, listType: 'picture-card' },
      })
      const previewBtn = wrapper.find('.hmfw-upload-list-item-card-actions button')
      await previewBtn.trigger('click')
      await nextTick()

      const image = wrapper.findComponent({ name: 'Image' })
      expect(image.props('preview')).toMatchObject({
        open: true,
        src: 'https://example.com/image.png',
      })
    })

    it('uses thumbUrl if url is not present', async () => {
      const fileList = [
        {
          uid: '1',
          name: 'image.png',
          status: 'done' as const,
          thumbUrl: 'https://example.com/thumb.png',
        },
      ]
      const wrapper = mount(Upload, {
        props: { fileList, listType: 'picture-card' },
      })
      const previewBtn = wrapper.find('.hmfw-upload-list-item-card-actions button')
      await previewBtn.trigger('click')
      await nextTick()

      const image = wrapper.findComponent({ name: 'Image' })
      expect(image.props('preview')).toMatchObject({
        open: true,
        src: 'https://example.com/thumb.png',
      })
    })

    it('does not open preview for non-image files', async () => {
      const fileList = [
        {
          uid: '1',
          name: 'document.pdf',
          status: 'done' as const,
          url: 'https://example.com/document.pdf',
        },
      ]
      const wrapper = mount(Upload, {
        props: { fileList, listType: 'picture-card' },
      })
      const previewBtn = wrapper.find('.hmfw-upload-list-item-card-actions button')
      await previewBtn.trigger('click')
      await nextTick()

      const image = wrapper.findComponent({ name: 'Image' })
      // 对于非图片文件，只触发事件，不打开预览
      expect(image.props('preview')).toMatchObject({
        open: false,
      })
      expect(wrapper.emitted('preview')).toBeTruthy()
    })

    it('closes preview when Image onOpenChange is called', async () => {
      const fileList = [
        {
          uid: '1',
          name: 'image.png',
          status: 'done' as const,
          url: 'https://example.com/image.png',
        },
      ]
      const wrapper = mount(Upload, {
        props: { fileList, listType: 'picture-card' },
      })

      // 打开预览
      const previewBtn = wrapper.find('.hmfw-upload-list-item-card-actions button')
      await previewBtn.trigger('click')
      await nextTick()

      let image = wrapper.findComponent({ name: 'Image' })
      expect(image.props('preview')).toMatchObject({ open: true })

      // 模拟关闭预览
      const onOpenChange = (image.props('preview') as any).onOpenChange
      onOpenChange(false)
      await nextTick()

      image = wrapper.findComponent({ name: 'Image' })
      expect(image.props('preview')).toMatchObject({ open: false })
    })

    it('respects custom isImageUrl prop', async () => {
      const customCheck = vi.fn().mockReturnValue(false)
      const fileList = [
        {
          uid: '1',
          name: 'image.png',
          status: 'done' as const,
          url: 'https://example.com/image.png',
        },
      ]
      const wrapper = mount(Upload, {
        props: {
          fileList,
          listType: 'picture-card',
          isImageUrl: customCheck,
        },
      })

      const previewBtn = wrapper.find('.hmfw-upload-list-item-card-actions button')
      await previewBtn.trigger('click')
      await nextTick()

      const image = wrapper.findComponent({ name: 'Image' })
      // 自定义判断返回 false，不应打开预览
      expect(image.props('preview')).toMatchObject({ open: false })
    })
  })

  // ============ download ============
  it('renders download button when showDownloadIcon=true and url present', () => {
    const wrapper = mount(Upload, {
      props: {
        fileList: [{ uid: '1', name: 'd.png', status: 'done' as const, url: '/d.png' }],
        showUploadList: { showDownloadIcon: true },
      },
    })
    expect(wrapper.find('.hmfw-upload-list-item-download').exists()).toBe(true)
  })

  // ============ TransitionGroup wrapper ============
  it('uses TransitionGroup for file list animations', () => {
    const fileList = [{ uid: '1', name: 'a.txt', status: 'done' as const }]
    const wrapper = mount(Upload, { props: { fileList } })
    // 每个 item 都包了一层 container 用于动画
    expect(wrapper.find('.hmfw-upload-list-item-container').exists()).toBe(true)
  })
})
