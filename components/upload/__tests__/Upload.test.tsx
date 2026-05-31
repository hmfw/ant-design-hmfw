import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import { Upload, UploadDragger } from '../Upload'

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
    const fileList = [
      { uid: '1', name: 'test.png', status: 'done' as const, size: 1024 },
    ]
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
    const fileList = [
      { uid: '1', name: 'test.png', status: 'done' as const },
    ]
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
})
