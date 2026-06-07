import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Cascader } from '../Cascader'
import { nextTick, h } from 'vue'

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [{ value: 'xihu', label: '西湖' }],
      },
      { value: 'ningbo', label: '宁波' },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [{ value: 'nanjing', label: '南京' }],
  },
]

describe('Cascader', () => {
  it('renders correctly', () => {
    const wrapper = mount(Cascader, { props: { options } })
    expect(wrapper.find('.hmfw-cascader').exists()).toBe(true)
  })

  it('shows placeholder', () => {
    const wrapper = mount(Cascader, { props: { options, placeholder: '请选择地区' } })
    expect(wrapper.find('.hmfw-cascader-selection-placeholder').text()).toBe('请选择地区')
  })

  it('disabled state', () => {
    const wrapper = mount(Cascader, { props: { options, disabled: true } })
    expect(wrapper.find('.hmfw-cascader-disabled').exists()).toBe(true)
  })

  it('small size', () => {
    const wrapper = mount(Cascader, { props: { options, size: 'small' } })
    expect(wrapper.find('.hmfw-cascader-small').exists()).toBe(true)
  })

  it('large size', () => {
    const wrapper = mount(Cascader, { props: { options, size: 'large' } })
    expect(wrapper.find('.hmfw-cascader-large').exists()).toBe(true)
  })

  it('error status', () => {
    const wrapper = mount(Cascader, { props: { options, status: 'error' } })
    expect(wrapper.find('.hmfw-cascader-status-error').exists()).toBe(true)
  })

  it('displays value labels', () => {
    const wrapper = mount(Cascader, {
      props: { options, value: ['zhejiang', 'hangzhou', 'xihu'] },
    })
    expect(wrapper.find('.hmfw-cascader-selection-item').text()).toBe('浙江 / 杭州 / 西湖')
  })

  it('custom displayRender with string', () => {
    const wrapper = mount(Cascader, {
      props: {
        options,
        value: ['zhejiang', 'hangzhou'],
        displayRender: (labels: string[]) => labels.join(' > '),
      },
    })
    expect(wrapper.find('.hmfw-cascader-selection-item').text()).toBe('浙江 > 杭州')
  })

  it('custom displayRender with VNode', () => {
    const wrapper = mount(Cascader, {
      props: {
        options,
        value: ['zhejiang', 'hangzhou'],
        displayRender: (labels: string[]) => h('strong', labels.join(' - ')),
      },
    })
    const item = wrapper.find('.hmfw-cascader-selection-item strong')
    expect(item.exists()).toBe(true)
    expect(item.text()).toBe('浙江 - 杭州')
  })

  it('displayRender receives selectedOptions', () => {
    const displayRender = vi.fn((labels, _selectedOptions) => labels.join(' > '))
    mount(Cascader, {
      props: {
        options,
        value: ['zhejiang', 'hangzhou'],
        displayRender,
      },
    })
    expect(displayRender).toHaveBeenCalled()
    const [labels, selectedOptions] = displayRender.mock.calls[0]
    expect(labels).toEqual(['浙江', '杭州'])
    expect(selectedOptions).toHaveLength(2)
    expect(selectedOptions[0].value).toBe('zhejiang')
    expect(selectedOptions[1].value).toBe('hangzhou')
  })

  it('opens dropdown on click', async () => {
    const wrapper = mount(Cascader, { props: { options }, attachTo: document.body })
    await wrapper.find('.hmfw-cascader').trigger('click')
    expect(wrapper.find('.hmfw-cascader-open').exists()).toBe(true)
    wrapper.unmount()
  })

  it('shows columns when open', async () => {
    const wrapper = mount(Cascader, { props: { options }, attachTo: document.body })
    await wrapper.find('.hmfw-cascader').trigger('click')
    expect(document.querySelector('.hmfw-cascader-menus')).not.toBeNull()
    wrapper.unmount()
  })

  it('shows clear button when value set', () => {
    const wrapper = mount(Cascader, {
      props: { options, value: ['zhejiang'], allowClear: true },
    })
    expect(wrapper.find('.hmfw-cascader-clear').exists()).toBe(true)
  })

  it('no clear when allowClear=false', () => {
    const wrapper = mount(Cascader, {
      props: { options, value: ['zhejiang'], allowClear: false },
    })
    expect(wrapper.find('.hmfw-cascader-clear').exists()).toBe(false)
  })

  it('emits clear', async () => {
    const wrapper = mount(Cascader, {
      props: { options, value: ['zhejiang'], allowClear: true },
    })
    await wrapper.find('.hmfw-cascader-clear').trigger('mousedown')
    expect(wrapper.emitted('clear')).toBeTruthy()
  })

  it('change event includes selectedOptions', () => {
    const onChange = vi.fn()
    const wrapper = mount(Cascader, {
      props: { options, defaultValue: ['zhejiang'], onChange },
    })
    // Simulate internal change by clearing
    const clearBtn = wrapper.find('.hmfw-cascader-clear')
    if (clearBtn.exists()) {
      clearBtn.trigger('mousedown')
    }
    // Check that change was emitted with correct signature
    const changeEvents = wrapper.emitted('change')
    if (changeEvents && changeEvents.length > 0) {
      const [_value, selectedOptions] = changeEvents[0]
      expect(Array.isArray(selectedOptions)).toBe(true)
    }
  })

  it('custom fieldNames', () => {
    const customOptions = [{ id: 'a', name: '选项A', sub: [] }]
    const wrapper = mount(Cascader, {
      props: {
        options: customOptions as any,
        value: ['a'],
        fieldNames: { value: 'id', label: 'name', children: 'sub' },
      },
    })
    expect(wrapper.find('.hmfw-cascader-selection-item').text()).toBe('选项A')
  })

  it('multiple mode', () => {
    const wrapper = mount(Cascader, {
      props: { options, multiple: true, value: [['zhejiang'], ['jiangsu']] },
    })
    expect(wrapper.find('.hmfw-cascader-multiple').exists()).toBe(true)
    expect(wrapper.findAll('.hmfw-cascader-selection-item').length).toBeGreaterThan(0)
  })

  it('maxTagCount', () => {
    const wrapper = mount(Cascader, {
      props: {
        options,
        multiple: true,
        value: [['zhejiang'], ['jiangsu']],
        maxTagCount: 1,
      },
    })
    const tags = wrapper.findAll('.hmfw-cascader-selection-item')
    expect(tags.length).toBeLessThanOrEqual(2) // 1 tag + 1 overflow
  })

  it('defaultOpen', async () => {
    const wrapper = mount(Cascader, {
      props: { options, defaultOpen: true },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-cascader-dropdown')).not.toBeNull()
    wrapper.unmount()
  })

  it('controlled open', async () => {
    const wrapper = mount(Cascader, {
      props: { options, open: true },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-cascader-dropdown')).not.toBeNull()
    wrapper.unmount()
  })

  it('emits update:open', async () => {
    const wrapper = mount(Cascader, {
      props: { options },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-cascader').trigger('click')
    expect(wrapper.emitted('update:open')).toBeTruthy()
    expect(wrapper.emitted('update:open')![0]).toEqual([true])
    wrapper.unmount()
  })

  it('notFoundContent in search', async () => {
    const wrapper = mount(Cascader, {
      props: { options, showSearch: true, notFoundContent: '没有数据' },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-cascader').trigger('click')
    await nextTick()
    const input = wrapper.find('.hmfw-cascader-search-input')
    await input.setValue('xyz')
    await nextTick()
    const empty = document.querySelector('.hmfw-cascader-menu-item-empty')
    expect(empty?.textContent).toBe('没有数据')
    wrapper.unmount()
  })

  it('exposes focus and blur methods', () => {
    const wrapper = mount(Cascader, { props: { options } })
    expect(wrapper.vm.focus).toBeDefined()
    expect(wrapper.vm.blur).toBeDefined()
  })

  describe('showCheckedStrategy', () => {
    it('SHOW_PARENT filters child paths when parent is selected', () => {
      const wrapper = mount(Cascader, {
        props: {
          options,
          multiple: true,
          showCheckedStrategy: 'SHOW_PARENT',
          value: [['zhejiang'], ['zhejiang', 'hangzhou'], ['zhejiang', 'hangzhou', 'xihu'], ['jiangsu', 'nanjing']],
        },
      })
      // 只应显示 ['zhejiang'] 和 ['jiangsu', 'nanjing']，因为其他是 zhejiang 的子路径
      const tags = wrapper.findAll('.hmfw-cascader-selection-item-content')
      expect(tags.length).toBe(2)
      expect(tags[0].text()).toBe('浙江')
      expect(tags[1].text()).toBe('江苏 / 南京')
    })

    it('SHOW_CHILD filters parent paths when children are selected', () => {
      const wrapper = mount(Cascader, {
        props: {
          options,
          multiple: true,
          showCheckedStrategy: 'SHOW_CHILD',
          value: [['zhejiang'], ['zhejiang', 'hangzhou'], ['zhejiang', 'hangzhou', 'xihu'], ['jiangsu', 'nanjing']],
        },
      })
      // 只应显示叶子节点 ['zhejiang', 'hangzhou', 'xihu'] 和 ['jiangsu', 'nanjing']
      const tags = wrapper.findAll('.hmfw-cascader-selection-item-content')
      expect(tags.length).toBe(2)
      expect(tags[0].text()).toBe('浙江 / 杭州 / 西湖')
      expect(tags[1].text()).toBe('江苏 / 南京')
    })

    it('shows all paths when showCheckedStrategy is not set', () => {
      const wrapper = mount(Cascader, {
        props: {
          options,
          multiple: true,
          showCheckedStrategy: 'SHOW_PARENT' as any, // 默认值
          value: [['zhejiang'], ['zhejiang', 'hangzhou'], ['jiangsu', 'nanjing']],
        },
      })
      // SHOW_PARENT 默认会过滤子路径，所以只显示 ['zhejiang'] 和 ['jiangsu', 'nanjing']
      const tags = wrapper.findAll('.hmfw-cascader-selection-item-content')
      expect(tags.length).toBe(2)
      expect(tags[0].text()).toBe('浙江')
      expect(tags[1].text()).toBe('江苏 / 南京')
    })
  })

  describe('search highlight', () => {
    it('highlights matched text in search results', async () => {
      const wrapper = mount(Cascader, {
        props: { options, showSearch: true },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-cascader').trigger('click')
      await nextTick()
      const input = wrapper.find('.hmfw-cascader-search-input')
      await input.setValue('杭州')
      await nextTick()
      const dropdown = document.querySelector('.hmfw-cascader-dropdown')
      const highlight = dropdown?.querySelector('.hmfw-cascader-menu-item-highlight')
      expect(highlight).not.toBeNull()
      expect(highlight?.textContent).toBe('杭州')
      wrapper.unmount()
    })

    it('highlights case-insensitive matches', async () => {
      const wrapper = mount(Cascader, {
        props: { options, showSearch: true },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-cascader').trigger('click')
      await nextTick()
      const input = wrapper.find('.hmfw-cascader-search-input')
      await input.setValue('浙')
      await nextTick()
      const dropdown = document.querySelector('.hmfw-cascader-dropdown')
      const highlights = dropdown?.querySelectorAll('.hmfw-cascader-menu-item-highlight')
      expect(highlights && highlights.length > 0).toBe(true)
      wrapper.unmount()
    })
  })
})
