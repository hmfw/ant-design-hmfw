import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Input, InputPassword, TextArea, InputSearch } from '../index'
import { SearchOutlined } from '@hmfw/icons'

describe('Input', () => {
  it('renders correctly', () => {
    const wrapper = mount(Input)
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('input').classes()).toContain('hmfw-input')
  })

  it('renders with placeholder', () => {
    const wrapper = mount(Input, { props: { placeholder: 'Enter text' } })
    expect(wrapper.find('input').attributes('placeholder')).toBe('Enter text')
  })

  it('renders disabled state', () => {
    const wrapper = mount(Input, { props: { disabled: true } })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('applies large size class', () => {
    const wrapper = mount(Input, { props: { size: 'large' } })
    expect(wrapper.find('input').classes()).toContain('hmfw-input-lg')
  })

  it('applies small size class', () => {
    const wrapper = mount(Input, { props: { size: 'small' } })
    expect(wrapper.find('input').classes()).toContain('hmfw-input-sm')
  })

  it('applies error status class', () => {
    const wrapper = mount(Input, { props: { status: 'error' } })
    expect(wrapper.find('input').classes()).toContain('hmfw-input-status-error')
  })

  it('emits update:value on input', async () => {
    const wrapper = mount(Input)
    await wrapper.find('input').setValue('hello')
    expect(wrapper.emitted('update:value')).toBeTruthy()
    expect(wrapper.emitted('update:value')![0]).toEqual(['hello'])
  })

  it('renders prefix slot in affix wrapper', () => {
    const wrapper = mount(Input, { slots: { prefix: '<span>@</span>' } })
    expect(wrapper.find('.hmfw-input-affix-wrapper').exists()).toBe(true)
    expect(wrapper.find('.hmfw-input-prefix span').text()).toBe('@')
  })

  it('renders prefix prop in affix wrapper', () => {
    const wrapper = mount(Input, { props: { prefix: '@' } })
    expect(wrapper.find('.hmfw-input-affix-wrapper').exists()).toBe(true)
    expect(wrapper.find('.hmfw-input-prefix').text()).toBe('@')
  })

  it('renders icon component as prefix/suffix', () => {
    const wrapper = mount(Input, { props: { prefix: SearchOutlined, suffix: SearchOutlined } })
    // 图标组件直接渲染为 svg.hmfw-icon
    expect(wrapper.find('.hmfw-input-prefix .hmfw-icon').exists()).toBe(true)
    expect(wrapper.find('.hmfw-input-suffix .hmfw-icon').exists()).toBe(true)
  })

  it('renders clear button when allowClear and has value', async () => {
    const wrapper = mount(Input, { props: { allowClear: true, value: 'text' } })
    expect(wrapper.find('.hmfw-input-clear-icon').exists()).toBe(true)
  })

  it('clears value when clear button clicked', async () => {
    const wrapper = mount(Input, { props: { allowClear: true, value: 'text' } })
    await wrapper.find('.hmfw-input-clear-icon').trigger('click')
    expect(wrapper.emitted('update:value')).toBeTruthy()
    expect(wrapper.emitted('update:value')![0]).toEqual([''])
    expect(wrapper.emitted('clear')).toBeTruthy()
  })

  it('emits pressEnter on Enter key', async () => {
    const wrapper = mount(Input)
    await wrapper.find('input').trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('pressEnter')).toBeTruthy()
  })

  it('shows count when showCount is true', () => {
    const wrapper = mount(Input, { props: { showCount: true, value: 'hello' } })
    expect(wrapper.find('.hmfw-input-show-count-suffix').text()).toBe('5')
  })

  it('shows count with maxLength', () => {
    const wrapper = mount(Input, { props: { showCount: true, value: 'hello', maxLength: 10 } })
    expect(wrapper.find('.hmfw-input-show-count-suffix').text()).toBe('5 / 10')
  })

  it('exposes focus and blur methods', () => {
    const wrapper = mount(Input)
    const vm = wrapper.vm as any
    expect(vm.focus).toBeDefined()
    expect(vm.blur).toBeDefined()
  })

  it('forwards id prop to input', () => {
    const wrapper = mount(Input, { props: { id: 'test-input' } })
    expect(wrapper.find('input').attributes('id')).toBe('test-input')
  })

  it('applies classNames.affixWrapper', () => {
    const wrapper = mount(Input, { props: { prefix: '@', classNames: { affixWrapper: 'custom-class' } } })
    expect(wrapper.find('.hmfw-input-affix-wrapper').classes()).toContain('custom-class')
  })

  it('applies warning status class', () => {
    const wrapper = mount(Input, { props: { status: 'warning' } })
    expect(wrapper.find('input').classes()).toContain('hmfw-input-status-warning')
  })

  it('renders custom type prop', () => {
    const wrapper = mount(Input, { props: { type: 'email' } })
    expect(wrapper.find('input').attributes('type')).toBe('email')
  })

  it('shows count with custom formatter', () => {
    const wrapper = mount(Input, {
      props: {
        showCount: { formatter: ({ count, maxLength }) => `${count} / ${maxLength} 字符` },
        value: 'hi',
        maxLength: 10,
      },
    })
    expect(wrapper.find('.hmfw-input-show-count-suffix').text()).toBe('2 / 10 字符')
  })

  it('shows count with custom strategy for emoji', () => {
    // 👋 = 1 字素，.length=2，[...].length=1
    const wrapper = mount(Input, {
      props: { showCount: { strategy: (s: string) => [...s].length }, value: 'hi👋' },
    })
    expect(wrapper.find('.hmfw-input-show-count-suffix').text()).toBe('3')
  })

  it('applies classNames.input', () => {
    const wrapper = mount(Input, { props: { classNames: { input: 'my-input' } } })
    expect(wrapper.find('input').classes()).toContain('my-input')
  })

  it('applies classNames.prefix/suffix/count', () => {
    const wrapper = mount(Input, {
      props: {
        prefix: '@',
        suffix: 'RMB',
        showCount: true,
        value: 'x',
        classNames: { prefix: 'pre-cls', suffix: 'suf-cls', count: 'cnt-cls' },
      },
    })
    expect(wrapper.find('.hmfw-input-prefix').classes()).toContain('pre-cls')
    expect(wrapper.find('.hmfw-input-suffix').classes()).toContain('suf-cls')
    expect(wrapper.find('.hmfw-input-show-count-suffix').classes()).toContain('cnt-cls')
  })

  it('applies styles via semantic API', () => {
    const wrapper = mount(Input, {
      props: {
        prefix: '@',
        styles: { input: { color: 'red' }, prefix: { fontSize: '16px' } },
      },
    })
    expect(wrapper.find('input').attributes('style')).toContain('color: red')
    expect(wrapper.find('.hmfw-input-prefix').attributes('style')).toContain('font-size: 16px')
  })

  it('emits focus and blur events', async () => {
    const wrapper = mount(Input)
    await wrapper.find('input').trigger('focus')
    expect(wrapper.emitted('focus')).toBeTruthy()
    await wrapper.find('input').trigger('blur')
    expect(wrapper.emitted('blur')).toBeTruthy()
  })
})

describe('InputPassword', () => {
  it('renders password input', () => {
    const wrapper = mount(InputPassword)
    expect(wrapper.find('input').attributes('type')).toBe('password')
  })

  it('toggles visibility', async () => {
    const wrapper = mount(InputPassword)
    expect(wrapper.find('input').attributes('type')).toBe('password')
    await wrapper.find('.hmfw-input-password-icon').trigger('click')
    expect(wrapper.find('input').attributes('type')).toBe('text')
  })

  it('supports visibilityToggle as false', () => {
    const wrapper = mount(InputPassword, { props: { visibilityToggle: false } })
    expect(wrapper.find('.hmfw-input-password-icon').exists()).toBe(false)
  })

  it('supports controlled visibility', async () => {
    const onVisibleChange = vi.fn()
    const wrapper = mount(InputPassword, {
      props: { visibilityToggle: { visible: false, onVisibleChange } },
    })
    expect(wrapper.find('input').attributes('type')).toBe('password')
    await wrapper.find('.hmfw-input-password-icon').trigger('click')
    expect(onVisibleChange).toHaveBeenCalledWith(true)
  })

  it('supports custom iconRender', () => {
    const wrapper = mount(InputPassword, {
      props: { iconRender: (visible: boolean) => (visible ? 'SHOW' : 'HIDE') },
    })
    expect(wrapper.find('.hmfw-input-password-icon').text()).toContain('HIDE')
  })

  it('supports hover action to show password on mouseenter and hide on mouseleave', async () => {
    const wrapper = mount(InputPassword, { props: { action: 'hover' } })
    const icon = wrapper.find('.hmfw-input-password-icon')
    expect(wrapper.find('input').attributes('type')).toBe('password')
    await icon.trigger('mouseenter')
    expect(wrapper.find('input').attributes('type')).toBe('text')
    await icon.trigger('mouseleave')
    expect(wrapper.find('input').attributes('type')).toBe('password')
  })

  it('hover action does not toggle when disabled', async () => {
    const wrapper = mount(InputPassword, { props: { action: 'hover', disabled: true } })
    await wrapper.find('.hmfw-input-password-icon').trigger('mouseenter')
    expect(wrapper.find('input').attributes('type')).toBe('password')
  })

  it('click action does not toggle when disabled', async () => {
    const wrapper = mount(InputPassword, { props: { disabled: true } })
    const icon = wrapper.find('.hmfw-input-password-icon')
    await icon.trigger('click')
    expect(wrapper.find('input').attributes('type')).toBe('password')
  })

  it('controlled visibility does not self-mutate on toggle click', async () => {
    const onVisibleChange = vi.fn()
    const wrapper = mount(InputPassword, {
      props: { visibilityToggle: { visible: false, onVisibleChange } },
    })
    expect(wrapper.find('input').attributes('type')).toBe('password')
    await wrapper.find('.hmfw-input-password-icon').trigger('click')
    // 点击只上报意图，不自行改 DOM
    expect(wrapper.find('input').attributes('type')).toBe('password')
    expect(onVisibleChange).toHaveBeenCalledWith(true)
  })

  it('controlled visibility follows remote change', async () => {
    const onVisibleChange = vi.fn()
    const wrapper = mount(InputPassword, {
      props: { visibilityToggle: { visible: true, onVisibleChange } },
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('input').attributes('type')).toBe('text')
    await wrapper.setProps({ visibilityToggle: { visible: false, onVisibleChange } })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('input').attributes('type')).toBe('password')
  })

  it('applies error status class to wrapper', () => {
    const wrapper = mount(InputPassword, { props: { status: 'error' } })
    expect(wrapper.find('.hmfw-input-password').classes()).toContain('hmfw-input-affix-wrapper-status-error')
  })

  it('applies large size class to wrapper', () => {
    const wrapper = mount(InputPassword, { props: { size: 'large' } })
    expect(wrapper.find('.hmfw-input-password').classes()).toContain('hmfw-input-affix-wrapper-lg')
  })

  it('applies small size class to wrapper', () => {
    const wrapper = mount(InputPassword, { props: { size: 'small' } })
    expect(wrapper.find('.hmfw-input-password').classes()).toContain('hmfw-input-affix-wrapper-sm')
  })

  it('forwards maxLength to input', () => {
    const wrapper = mount(InputPassword, { props: { maxLength: 20 } })
    expect(wrapper.find('input').attributes('maxlength')).toBe('20')
  })

  it('forwards id to input', () => {
    const wrapper = mount(InputPassword, { props: { id: 'pwd-field' } })
    expect(wrapper.find('input').attributes('id')).toBe('pwd-field')
  })

  it('applies readOnly to input', () => {
    const wrapper = mount(InputPassword, { props: { readOnly: true } })
    expect(wrapper.find('input').attributes('readonly')).toBeDefined()
  })

  it('emits focus and blur events', async () => {
    const wrapper = mount(InputPassword)
    await wrapper.find('input').trigger('focus')
    expect(wrapper.emitted('focus')).toBeTruthy()
    await wrapper.find('input').trigger('blur')
    expect(wrapper.emitted('blur')).toBeTruthy()
  })

  it('click action does not react to mouseenter', async () => {
    const wrapper = mount(InputPassword)
    const icon = wrapper.find('.hmfw-input-password-icon')
    await icon.trigger('mouseenter')
    expect(wrapper.find('input').attributes('type')).toBe('password')
  })

  it('exposes focus and blur methods', () => {
    const wrapper = mount(InputPassword)
    const vm = wrapper.vm as any
    expect(vm.focus).toBeDefined()
    expect(vm.blur).toBeDefined()
  })
})

describe('TextArea', () => {
  it('renders textarea', () => {
    const wrapper = mount(TextArea)
    expect(wrapper.find('textarea').exists()).toBe(true)
    expect(wrapper.find('textarea').classes()).toContain('hmfw-input')
  })

  it('renders with rows', () => {
    const wrapper = mount(TextArea, { props: { rows: 6 } })
    expect(wrapper.find('textarea').attributes('rows')).toBe('6')
  })

  it('emits update:value on input', async () => {
    const wrapper = mount(TextArea)
    await wrapper.find('textarea').setValue('hello')
    expect(wrapper.emitted('update:value')).toBeTruthy()
  })

  it('shows count when showCount is true', () => {
    const wrapper = mount(TextArea, { props: { showCount: true, value: 'hello' } })
    expect(wrapper.find('.hmfw-input-show-count-suffix').text()).toBe('5')
  })

  it('supports allowClear', async () => {
    const wrapper = mount(TextArea, { props: { allowClear: true, value: 'text' } })
    expect(wrapper.find('.hmfw-input-clear-icon').exists()).toBe(true)
    await wrapper.find('.hmfw-input-clear-icon').trigger('click')
    expect(wrapper.emitted('clear')).toBeTruthy()
  })

  it('omits rows attribute when autoSize is true', () => {
    const wrapper = mount(TextArea, { props: { autoSize: true } })
    expect(wrapper.find('textarea').attributes('rows')).toBeUndefined()
  })

  it('omits rows attribute when autoSize is object', () => {
    const wrapper = mount(TextArea, { props: { autoSize: { minRows: 2, maxRows: 6 } } })
    expect(wrapper.find('textarea').attributes('rows')).toBeUndefined()
  })

  it('renders rows attribute when autoSize is not set', () => {
    const wrapper = mount(TextArea, { props: { rows: 8 } })
    expect(wrapper.find('textarea').attributes('rows')).toBe('8')
  })

  it('applies out-of-range class when count exceeds max', () => {
    const wrapper = mount(TextArea, {
      props: { value: 'hello world', count: { show: true, max: 5 } },
    })
    // 11 > 5 → 应标记 out-of-range
    expect(wrapper.find('.hmfw-input-out-of-range').exists()).toBe(true)
  })

  it('does not apply out-of-range class when count within max', () => {
    const wrapper = mount(TextArea, {
      props: { value: 'hi', count: { show: true, max: 5 } },
    })
    expect(wrapper.find('.hmfw-input-out-of-range').exists()).toBe(false)
  })

  it('does not apply out-of-range class when max not set', () => {
    const wrapper = mount(TextArea, {
      props: { value: 'hello world', count: { show: true } },
    })
    expect(wrapper.find('.hmfw-input-out-of-range').exists()).toBe(false)
  })

  it('out-of-range class on wrapper div, not textarea', () => {
    const wrapper = mount(TextArea, {
      props: { value: 'too long', count: { show: true, max: 3 } },
    })
    // 类在 .hmfw-input-textarea-show-count 上，不在 textarea 上
    expect(wrapper.find('.hmfw-input-textarea-show-count.hmfw-input-out-of-range').exists()).toBe(true)
    expect(wrapper.find('textarea.hmfw-input-out-of-range').exists()).toBe(false)
  })

  it('supports count with custom strategy (byte count)', () => {
    // 中文每字 2 字节、英文 1 字节
    const byteStrategy = (txt: string) =>
      txt.split('').reduce((len: number, char: string) => len + (char.charCodeAt(0) > 255 ? 2 : 1), 0)
    const wrapper = mount(TextArea, {
      props: { value: 'abc 中文', count: { show: true, max: 10, strategy: byteStrategy } },
    })
    // 'abc 中文' = 3(abc) + 1(space) + 4(中文) = 8 bytes → 8 ≤ 10，不超
    expect(wrapper.find('.hmfw-input-out-of-range').exists()).toBe(false)
    expect(wrapper.find('.hmfw-input-data-count').text()).toBe('8 / 10')
  })

  it('renders disabled state', () => {
    const wrapper = mount(TextArea, { props: { disabled: true } })
    expect(wrapper.find('textarea').attributes('disabled')).toBeDefined()
  })

  it('applies readOnly to textarea', () => {
    const wrapper = mount(TextArea, { props: { readOnly: true } })
    expect(wrapper.find('textarea').attributes('readonly')).toBeDefined()
  })

  it('shows count with showCount custom formatter', () => {
    const wrapper = mount(TextArea, {
      props: {
        showCount: { formatter: ({ count, maxLength }) => `已写 ${count}/${maxLength} 字` },
        value: 'abc',
        maxLength: 10,
      },
    })
    expect(wrapper.find('.hmfw-input-data-count').text()).toBe('已写 3/10 字')
  })

  it('shows count with count.showFormatter function', () => {
    const wrapper = mount(TextArea, {
      props: {
        value: 'xyz',
        count: { show: ({ count, maxLength }) => `${count} of ${maxLength}`, max: 20 },
      },
    })
    expect(wrapper.find('.hmfw-input-data-count').text()).toBe('3 of 20')
  })

  it('applies classNames.textarea and classNames.count', () => {
    const wrapper = mount(TextArea, {
      props: {
        showCount: true,
        value: 'a',
        maxLength: 10,
        classNames: { textarea: 'ta-cls', count: 'cnt-cls' },
      },
    })
    expect(wrapper.find('textarea').classes()).toContain('ta-cls')
    expect(wrapper.find('.hmfw-input-data-count').classes()).toContain('cnt-cls')
  })

  it('applies styles.textarea and styles.count', () => {
    const wrapper = mount(TextArea, {
      props: {
        showCount: true,
        value: 'a',
        maxLength: 10,
        styles: { textarea: { resize: 'none' }, count: { color: 'red' } },
      },
    })
    expect(wrapper.find('textarea').attributes('style')).toContain('resize: none')
    expect(wrapper.find('.hmfw-input-data-count').attributes('style')).toContain('color: red')
  })

  it('applies error status class to textarea', () => {
    const wrapper = mount(TextArea, { props: { status: 'error' } })
    expect(wrapper.find('textarea').classes()).toContain('hmfw-input-status-error')
  })

  it('emits focus and blur events', async () => {
    const wrapper = mount(TextArea)
    await wrapper.find('textarea').trigger('focus')
    expect(wrapper.emitted('focus')).toBeTruthy()
    await wrapper.find('textarea').trigger('blur')
    expect(wrapper.emitted('blur')).toBeTruthy()
  })

  it('exposes focus and blur methods', () => {
    const wrapper = mount(TextArea)
    const vm = wrapper.vm as any
    expect(vm.focus).toBeDefined()
    expect(vm.blur).toBeDefined()
  })
})

describe('InputSearch', () => {
  it('renders search input', () => {
    const wrapper = mount(InputSearch)
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('.hmfw-input-search-button').exists()).toBe(true)
  })

  it('emits search on button click', async () => {
    const wrapper = mount(InputSearch, { props: { value: 'query' } })
    await wrapper.find('.hmfw-input-search-button').trigger('click')
    expect(wrapper.emitted('search')).toBeTruthy()
    expect(wrapper.emitted('search')![0][0]).toBe('query')
  })

  it('emits search with info.source on button click', async () => {
    const wrapper = mount(InputSearch, { props: { value: 'query' } })
    await wrapper.find('.hmfw-input-search-button').trigger('click')
    const searchEvent = wrapper.emitted('search')![0]
    expect(searchEvent[2]).toEqual({ source: 'input' })
  })

  it('shows loading icon when loading', () => {
    const wrapper = mount(InputSearch, { props: { loading: true } })
    expect(wrapper.find('.hmfw-icon-loading').exists()).toBe(true)
  })

  it('disables search suffix when loading', () => {
    const wrapper = mount(InputSearch, { props: { loading: true } })
    expect(wrapper.find('.hmfw-input-search-button').classes()).toContain('hmfw-input-search-button-disabled')
  })

  it('supports custom searchIcon', () => {
    const wrapper = mount(InputSearch, { props: { searchIcon: '🔎' } })
    expect(wrapper.find('.hmfw-input-search-button').text()).toContain('🔎')
  })

  it('emits search on Enter key', async () => {
    const wrapper = mount(InputSearch, { props: { value: 'query' } })
    await wrapper.find('input').trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('search')).toBeTruthy()
    expect(wrapper.emitted('search')![0][0]).toBe('query')
  })

  it('emits pressEnter on Enter key', async () => {
    const wrapper = mount(InputSearch)
    await wrapper.find('input').trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('pressEnter')).toBeTruthy()
  })

  it('renders enterButton as string on button', () => {
    const wrapper = mount(InputSearch, { props: { enterButton: '搜索' } })
    expect(wrapper.find('.hmfw-input-search-button').text()).toBe('搜索')
  })

  it('applies error status class to wrapper', () => {
    const wrapper = mount(InputSearch, { props: { status: 'error' } })
    expect(wrapper.find('.hmfw-input-search').classes()).toContain('hmfw-input-affix-wrapper-status-error')
  })

  it('applies warning status class to wrapper', () => {
    const wrapper = mount(InputSearch, { props: { status: 'warning' } })
    expect(wrapper.find('.hmfw-input-search').classes()).toContain('hmfw-input-affix-wrapper-status-warning')
  })

  it('renders disabled state', () => {
    const wrapper = mount(InputSearch, { props: { disabled: true } })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('applies large size class to wrapper', () => {
    const wrapper = mount(InputSearch, { props: { size: 'large' } })
    expect(wrapper.find('.hmfw-input-search').classes()).toContain('hmfw-input-affix-wrapper-lg')
  })

  it('applies small size class to wrapper', () => {
    const wrapper = mount(InputSearch, { props: { size: 'small' } })
    expect(wrapper.find('.hmfw-input-search').classes()).toContain('hmfw-input-affix-wrapper-sm')
  })

  it('forwards readOnly to input', () => {
    const wrapper = mount(InputSearch, { props: { readOnly: true } })
    expect(wrapper.find('input').attributes('readonly')).toBeDefined()
  })

  it('forwards id to input', () => {
    const wrapper = mount(InputSearch, { props: { id: 'search-box' } })
    expect(wrapper.find('input').attributes('id')).toBe('search-box')
  })

  it('emits focus and blur events', async () => {
    const wrapper = mount(InputSearch)
    await wrapper.find('input').trigger('focus')
    expect(wrapper.emitted('focus')).toBeTruthy()
    await wrapper.find('input').trigger('blur')
    expect(wrapper.emitted('blur')).toBeTruthy()
  })

  it('exposes focus and blur methods', () => {
    const wrapper = mount(InputSearch)
    const vm = wrapper.vm as any
    expect(vm.focus).toBeDefined()
    expect(vm.blur).toBeDefined()
  })
})
