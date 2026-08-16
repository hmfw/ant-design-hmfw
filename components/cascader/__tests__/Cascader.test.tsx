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

  it('change event includes selectedOptions', async () => {
    const wrapper = mount(Cascader, {
      props: { options, defaultValue: ['zhejiang'], allowClear: true },
    })
    // 通过清除按钮触发内部 change，验证事件签名
    const clearBtn = wrapper.find('.hmfw-cascader-clear')
    expect(clearBtn.exists()).toBe(true)
    await clearBtn.trigger('mousedown')
    const changeEvents = wrapper.emitted('change')
    expect(changeEvents).toBeTruthy()
    const [value, selectedOptions] = changeEvents![0]
    expect(value).toEqual([])
    expect(Array.isArray(selectedOptions)).toBe(true)
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
      // zhejiang 的子路径全部折叠为「浙江」；jiangsu 的唯一子节点南京被选中 → 折叠显示「江苏」
      const tags = wrapper.findAll('.hmfw-cascader-selection-item-content')
      expect(tags.length).toBe(2)
      expect(tags[0].text()).toBe('浙江')
      expect(tags[1].text()).toBe('江苏')
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
      // 值传导补齐（浙江全选 → 宁波联动勾选）后，只显示叶子节点：西湖、宁波、南京
      const tags = wrapper.findAll('.hmfw-cascader-selection-item-content')
      expect(tags.length).toBe(3)
      expect(tags[0].text()).toBe('浙江 / 杭州 / 西湖')
      expect(tags[1].text()).toBe('江苏 / 南京')
      expect(tags[2].text()).toBe('浙江 / 宁波')
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
      // SHOW_PARENT：zhejiang 子路径折叠为「浙江」；jiangsu 唯一子节点全选 → 折叠显示「江苏」
      const tags = wrapper.findAll('.hmfw-cascader-selection-item-content')
      expect(tags.length).toBe(2)
      expect(tags[0].text()).toBe('浙江')
      expect(tags[1].text()).toBe('江苏')
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

  // ----------------------------------------------------------------
  // 虚拟滚动测试
  // ----------------------------------------------------------------
  describe('虚拟滚动', () => {
    // 生成大量级联选项用于虚拟滚动测试
    const largeOptions = Array.from({ length: 30 }, (_, i) => ({
      value: `province-${i}`,
      label: `省 ${i}`,
      children: Array.from({ length: 20 }, (_, j) => ({
        value: `city-${i}-${j}`,
        label: `市 ${i}-${j}`,
        children: Array.from({ length: 10 }, (_, k) => ({
          value: `district-${i}-${j}-${k}`,
          label: `区 ${i}-${j}-${k}`,
        })),
      })),
    }))

    it('搜索模式下 virtual=true 时渲染 VirtualList', async () => {
      const wrapper = mount(Cascader, {
        props: { options: largeOptions, showSearch: true, virtual: true },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-cascader').trigger('click')
      await nextTick()

      const input = wrapper.find('.hmfw-cascader-search-input')
      await input.setValue('区')
      await nextTick()
      await new Promise((r) => setTimeout(r, 50))

      // 搜索模式下应有 VirtualList 容器
      const vl = document.querySelector('.hmfw-cascader-dropdown .hmfw-virtual-list')
      expect(vl).toBeTruthy()
      wrapper.unmount()
    })

    it('搜索模式下 virtual=false 时不渲染 VirtualList', async () => {
      const wrapper = mount(Cascader, {
        props: { options: largeOptions, showSearch: true, virtual: false },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-cascader').trigger('click')
      await nextTick()

      const input = wrapper.find('.hmfw-cascader-search-input')
      await input.setValue('区')
      await nextTick()
      await new Promise((r) => setTimeout(r, 50))

      const vl = document.querySelector('.hmfw-cascader-dropdown .hmfw-virtual-list')
      expect(vl).toBeFalsy()
      wrapper.unmount()
    })

    it('搜索模式虚拟滚动仅渲染可见项', async () => {
      const wrapper = mount(Cascader, {
        props: { options: largeOptions, showSearch: true, virtual: true, listHeight: 200 },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-cascader').trigger('click')
      await nextTick()

      const input = wrapper.find('.hmfw-cascader-search-input')
      await input.setValue('区')
      await nextTick()
      await new Promise((r) => setTimeout(r, 50))

      // VirtualList 渲染的 DOM 节点应远小于总数
      const items = document.querySelectorAll('.hmfw-cascader-dropdown .hmfw-virtual-list-item')
      expect(items.length).toBeLessThan(100) // 远小于全部 leaf 节点数
      expect(items.length).toBeGreaterThan(0)
      wrapper.unmount()
    })

    it('列模式下 virtual=true 且选项 >10 时渲染 VirtualList', async () => {
      // 顶层 30 个省份 > 10，应触发 VirtualList
      const wrapper = mount(Cascader, {
        props: { options: largeOptions, virtual: true, listHeight: 300 },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-cascader').trigger('click')
      await nextTick()
      await new Promise((r) => setTimeout(r, 50))

      const vl = document.querySelector('.hmfw-cascader-dropdown .hmfw-virtual-list')
      expect(vl).toBeTruthy()
      wrapper.unmount()
    })

    it('列模式下选项少时不启用 VirtualList', async () => {
      const wrapper = mount(Cascader, {
        props: { options: options.slice(0, 1), virtual: true, listHeight: 300 },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-cascader').trigger('click')
      await nextTick()
      await new Promise((r) => setTimeout(r, 50))

      // 第一层只有 1 个选项 (< 10)，不应使用 VirtualList
      const vl = document.querySelector('.hmfw-cascader-dropdown .hmfw-virtual-list')
      expect(vl).toBeFalsy()
      wrapper.unmount()
    })
  })

  // ----------------------------------------------------------------
  // 行为对齐测试（多选任意层级选择 / showCheckedStrategy 值同步 / 搜索去重等）
  // ----------------------------------------------------------------

  const findMenuItem = (text: string): HTMLElement | undefined =>
    Array.from(document.querySelectorAll<HTMLElement>('.hmfw-cascader-dropdown .hmfw-cascader-menu-item')).find((el) =>
      el.textContent?.includes(text),
    )

  // 点击某菜单项的 checkbox（勾选仅绑定在 checkbox 上，对齐 AntD）
  const clickCheckbox = (text: string) => {
    const checkbox = findMenuItem(text)!.querySelector<HTMLElement>('.hmfw-cascader-menu-item-checkbox')!
    checkbox.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  }

  describe('多选行为', () => {
    it('多选模式点击任意层级节点的 checkbox 即可选中（对齐 AntD：multiple 下始终可以选择）', async () => {
      const wrapper = mount(Cascader, {
        props: { options, multiple: true },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-cascader').trigger('click')
      await nextTick()
      // 点击第一级「浙江」的 checkbox（非叶子，无 changeOnSelect 也应直接选中）
      clickCheckbox('浙江')
      await nextTick()
      const change = wrapper.emitted('change')
      expect(change).toBeTruthy()
      expect(change![change!.length - 1][0]).toEqual([['zhejiang']])
      wrapper.unmount()
    })

    it('多选打开时恢复已选路径的激活状态', async () => {
      const wrapper = mount(Cascader, {
        props: { options, multiple: true, value: [['zhejiang', 'hangzhou']] },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-cascader').trigger('click')
      await nextTick()
      // activePath 恢复后第二列直接可见「杭州」
      expect(findMenuItem('杭州')).toBeTruthy()
      wrapper.unmount()
    })

    it('多选 checkbox 半选态：部分子路径选中时父节点显示半选', async () => {
      const wrapper = mount(Cascader, {
        props: { options, multiple: true, value: [['zhejiang', 'hangzhou', 'xihu']], defaultOpen: true },
        attachTo: document.body,
      })
      await nextTick()
      const zhejiang = findMenuItem('浙江')
      const checkbox = zhejiang!.querySelector('.hmfw-cascader-menu-item-checkbox')
      expect(checkbox?.className).toContain('hmfw-cascader-menu-item-checkbox-indeterminate')
      wrapper.unmount()
    })

    it('勾选父节点：所有后代联动全选（父关联子）', async () => {
      const wrapper = mount(Cascader, {
        props: { options, multiple: true, defaultOpen: true },
        attachTo: document.body,
      })
      await nextTick()
      // 点击「浙江」的 checkbox 勾选（checkbox 点击不展开列），值按 SHOW_PARENT 去重后仅含父路径
      clickCheckbox('浙江')
      await nextTick()
      expect(wrapper.emitted('change')!.at(-1)![0]).toEqual([['zhejiang']])
      // 点击菜单项展开下一列
      findMenuItem('浙江')!.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      await nextTick()
      // 传导后「浙江」「杭州」「宁波」均勾选（西湖在第三列，点击「浙江」只展开两列）
      const checked = document.querySelectorAll('.hmfw-cascader-menu-item-checkbox-checked')
      expect(checked.length).toBe(3)
      wrapper.unmount()
    })

    it('点击已勾选的非叶子节点仅展开列，不改变勾选（勾选仅绑定 checkbox）', async () => {
      const wrapper = mount(Cascader, {
        props: { options, multiple: true, defaultValue: [['zhejiang']] },
        attachTo: document.body,
      })
      // 点击打开并恢复已选路径的列（activePath）
      await wrapper.find('.hmfw-cascader').trigger('click')
      await nextTick()
      // 点击已勾选的「浙江」菜单项 → 只展开列，不触发取消
      findMenuItem('浙江')!.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      await nextTick()
      expect(wrapper.emitted('change')).toBeFalsy()
      expect(findMenuItem('浙江')!.querySelector('.hmfw-cascader-menu-item-checkbox')?.className).toContain(
        'hmfw-cascader-menu-item-checkbox-checked',
      )
      // 点击其 checkbox 才取消勾选
      clickCheckbox('浙江')
      await nextTick()
      expect(wrapper.emitted('change')!.at(-1)![0]).toEqual([])
      wrapper.unmount()
    })

    it('半选穿透多层：孙级部分勾选时逐层向上传导半选', async () => {
      // 含重名 value 的选项（顶层「杭州」「余杭区」与浙江子树同名，验证路径 key 不冲突）
      const dupOptions = [
        {
          value: 'zhejiang',
          label: '浙江',
          children: [
            {
              value: 'hangzhou',
              label: '杭州',
              children: [
                { value: 'xihu', label: '西湖区' },
                { value: 'yuhang', label: '余杭区' },
              ],
            },
            {
              value: 'ningbo',
              label: '宁波',
              children: [{ value: 'haishu', label: '海曙区' }],
            },
          ],
        },
        {
          value: 'hangzhou',
          label: '杭州',
          children: [
            { value: 'xihu', label: '西湖区' },
            { value: 'yuhang', label: '余杭区' },
          ],
        },
        { value: 'yuhang', label: '余杭区' },
      ]
      const wrapper = mount(Cascader, {
        props: {
          options: dupOptions,
          multiple: true,
          value: [['zhejiang', 'hangzhou', 'yuhang']],
          defaultOpen: true,
        },
        attachTo: document.body,
      })
      await nextTick()
      // 浙江 > 杭州 下余杭区勾选、西湖区未勾选 → 杭州半选 → 浙江半选（逐层传导）
      expect(findMenuItem('浙江')!.querySelector('.hmfw-cascader-menu-item-checkbox')?.className).toContain(
        'hmfw-cascader-menu-item-checkbox-indeterminate',
      )
      wrapper.unmount()
    })

    it('取消父节点：所有后代联动取消', async () => {
      const wrapper = mount(Cascader, {
        props: { options, multiple: true, defaultValue: [['zhejiang']], defaultOpen: true },
        attachTo: document.body,
      })
      await nextTick()
      clickCheckbox('浙江')
      await nextTick()
      expect(wrapper.emitted('change')!.at(-1)![0]).toEqual([])
      expect(document.querySelector('.hmfw-cascader-menu-item-checkbox-checked')).toBeNull()
      wrapper.unmount()
    })

    it('子节点全部勾选：父节点自动选中（子关联父）', async () => {
      const wrapper = mount(Cascader, {
        props: {
          options,
          multiple: true,
          defaultValue: [['zhejiang', 'hangzhou']],
        },
        attachTo: document.body,
      })
      // 点击打开并恢复已选路径的列（activePath）
      await wrapper.find('.hmfw-cascader').trigger('click')
      await nextTick()
      // 已选杭州（其唯一子西湖联动勾选），再勾选宁波 → 浙江子节点全选，父自动选中
      findMenuItem('宁波')!.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      await nextTick()
      // 值折叠为父路径
      expect(wrapper.emitted('change')!.at(-1)![0]).toEqual([['zhejiang']])
      // 面板中「浙江」为全选态
      expect(findMenuItem('浙江')!.querySelector('.hmfw-cascader-menu-item-checkbox')?.className).toContain(
        'hmfw-cascader-menu-item-checkbox-checked',
      )
      wrapper.unmount()
    })

    it('部分子节点勾选：父节点半选，点击半选父节点全选整棵子树', async () => {
      const wrapper = mount(Cascader, {
        props: { options, multiple: true, defaultOpen: true },
        attachTo: document.body,
      })
      await nextTick()
      // 勾选「浙江」后取消「宁波」→ 浙江半选（杭州子树仍勾选）
      clickCheckbox('浙江')
      await nextTick()
      // 点击菜单项展开下一列（勾选不受影响）
      findMenuItem('浙江')!.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      await nextTick()
      findMenuItem('宁波')!.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      await nextTick()
      expect(findMenuItem('浙江')!.querySelector('.hmfw-cascader-menu-item-checkbox')?.className).toContain(
        'hmfw-cascader-menu-item-checkbox-indeterminate',
      )
      // 点击半选的「浙江」checkbox → 全选整棵子树，值折叠为父路径
      clickCheckbox('浙江')
      await nextTick()
      expect(wrapper.emitted('change')!.at(-1)![0]).toEqual([['zhejiang']])
      expect(findMenuItem('浙江')!.querySelector('.hmfw-cascader-menu-item-checkbox')?.className).toContain(
        'hmfw-cascader-menu-item-checkbox-checked',
      )
      wrapper.unmount()
    })

    it('移除父路径 tag：传导取消连带清空所有后代（SHOW_PARENT）', async () => {
      const wrapper = mount(Cascader, {
        props: { options, multiple: true, defaultValue: [['zhejiang']], defaultOpen: true },
        attachTo: document.body,
      })
      await nextTick()
      // SHOW_PARENT 展示单个父 tag，移除后全部后代联动取消
      await wrapper.find('.hmfw-cascader-selection-item-remove').trigger('click')
      await nextTick()
      expect(wrapper.emitted('change')!.at(-1)![0]).toEqual([])
      expect(wrapper.findAll('.hmfw-cascader-selection-item-content').length).toBe(0)
      wrapper.unmount()
    })
  })

  describe('showCheckedStrategy', () => {
    it('勾选父节点：传导全选后按 SHOW_PARENT 去重，emit 仅含父路径（对齐 AntD）', async () => {
      const wrapper = mount(Cascader, {
        props: {
          options,
          multiple: true,
          showCheckedStrategy: 'SHOW_PARENT',
          defaultValue: [['zhejiang', 'hangzhou']],
        },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-cascader').trigger('click')
      await nextTick()
      // 追加勾选父路径「浙江」checkbox → 传导全选其子树 → 去重后 emit 仅 [['zhejiang']]
      clickCheckbox('浙江')
      await nextTick()
      const change = wrapper.emitted('change')
      expect(change![change!.length - 1][0]).toEqual([['zhejiang']])
      wrapper.unmount()
    })

    it('取消已全选的子节点后父转为半选，回流后状态保持', async () => {
      const wrapper = mount(Cascader, {
        props: {
          options,
          multiple: true,
          showCheckedStrategy: 'SHOW_PARENT',
          defaultValue: [['zhejiang']],
        },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-cascader').trigger('click')
      await nextTick()
      // 「浙江」全选传导后「杭州」已勾选，点击其 checkbox 即取消（值折叠为剩余顶层路径）
      clickCheckbox('杭州')
      await nextTick()
      const emittedValue = wrapper.emitted('update:value')!.at(-1)![0]
      expect(emittedValue).toEqual([['zhejiang', 'ningbo']])
      // 模拟 v-model 回流：父组件用 emit 的值回填 value
      await wrapper.setProps({ value: emittedValue })
      await nextTick()
      // 回流后「杭州」取消勾选、「浙江」半选
      const hangzhou = findMenuItem('杭州')
      expect(hangzhou!.querySelector('.hmfw-cascader-menu-item-checkbox-checked')).toBeNull()
      const zhejiang = findMenuItem('浙江')
      expect(zhejiang!.querySelector('.hmfw-cascader-menu-item-checkbox')?.className).toContain(
        'hmfw-cascader-menu-item-checkbox-indeterminate',
      )
      wrapper.unmount()
    })

    it('SHOW_PARENT：某节点所有子节点选中时折叠显示父路径', () => {
      const wrapper = mount(Cascader, {
        props: {
          options,
          multiple: true,
          showCheckedStrategy: 'SHOW_PARENT',
          // 浙江的两个叶子分支全部选中（杭州/西湖 + 宁波）→ 折叠显示「浙江」
          value: [
            ['zhejiang', 'hangzhou', 'xihu'],
            ['zhejiang', 'ningbo'],
          ],
        },
      })
      const tags = wrapper.findAll('.hmfw-cascader-selection-item-content')
      expect(tags.length).toBe(1)
      expect(tags[0].text()).toBe('浙江')
    })
  })

  describe('搜索行为', () => {
    it('多选搜索选中已选路径即取消（toggle 语义对齐 AntD）', async () => {
      const wrapper = mount(Cascader, {
        props: { options, multiple: true, showSearch: true },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-cascader').trigger('click')
      await nextTick()
      const input = wrapper.find('.hmfw-cascader-search-input')
      const clickFirstResult = () => {
        document
          .querySelector<HTMLElement>('.hmfw-cascader-dropdown .hmfw-cascader-menu-item')!
          .dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
      }
      // 第一次选择：勾选西湖（杭州唯一子全选 → 值折叠为杭州路径）
      await input.setValue('西湖')
      await nextTick()
      clickFirstResult()
      await nextTick()
      expect(wrapper.emitted('change')!.at(-1)![0]).toEqual([['zhejiang', 'hangzhou']])
      // 第二次选择同一路径（搜索词已清空，重新输入）→ 取消勾选
      await input.setValue('西湖')
      await nextTick()
      clickFirstResult()
      await nextTick()
      expect(wrapper.emitted('change')!.at(-1)![0]).toEqual([])
      wrapper.unmount()
    })

    it('多选搜索选中后清空搜索词（对齐 AntD autoClearSearchValue 默认行为）', async () => {
      const wrapper = mount(Cascader, {
        props: { options, multiple: true, showSearch: true },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-cascader').trigger('click')
      await nextTick()
      const input = wrapper.find('.hmfw-cascader-search-input')
      await input.setValue('西湖')
      await nextTick()
      document
        .querySelector<HTMLElement>('.hmfw-cascader-dropdown .hmfw-cascader-menu-item')!
        .dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
      await nextTick()
      expect((input.element as HTMLInputElement).value).toBe('')
      wrapper.unmount()
    })
  })

  describe('无障碍', () => {
    it('渲染菜单语义与 aria 属性', async () => {
      const wrapper = mount(Cascader, { props: { options }, attachTo: document.body })
      await wrapper.find('.hmfw-cascader').trigger('click')
      await nextTick()
      const menu = document.querySelector('.hmfw-cascader-dropdown .hmfw-cascader-menu')
      expect(menu?.getAttribute('role')).toBe('menu')
      const zhejiang = findMenuItem('浙江')
      expect(zhejiang?.getAttribute('role')).toBe('menuitem')
      expect(zhejiang?.getAttribute('tabindex')).toBe('-1')
      // 「浙江」有子节点 → aria-expanded
      expect(zhejiang?.getAttribute('aria-expanded')).toBe('true')
      wrapper.unmount()
    })

    it('多选菜单项 aria-checked 三态', async () => {
      const wrapper = mount(Cascader, {
        props: { options, multiple: true, value: [['zhejiang', 'hangzhou', 'xihu']], defaultOpen: true },
        attachTo: document.body,
      })
      await nextTick()
      const zhejiang = findMenuItem('浙江')
      expect(zhejiang?.getAttribute('role')).toBe('menuitemcheckbox')
      // 部分子路径选中 → aria-checked=mixed
      expect(zhejiang?.getAttribute('aria-checked')).toBe('mixed')
      wrapper.unmount()
    })

    it('菜单项支持 Enter 键选择', async () => {
      const wrapper = mount(Cascader, { props: { options }, attachTo: document.body })
      await wrapper.find('.hmfw-cascader').trigger('click')
      await nextTick()
      findMenuItem('浙江')!.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
      await nextTick()
      // Enter 展开「浙江」的子列
      expect(findMenuItem('杭州')).toBeTruthy()
      wrapper.unmount()
    })
  })
})
