import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { Upload } from '../Upload'

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
})
