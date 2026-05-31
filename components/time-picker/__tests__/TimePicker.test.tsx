import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import { TimePicker } from '../TimePicker'

describe('TimePicker', () => {
  it('renders correctly', () => {
    const wrapper = mount(TimePicker, { attachTo: document.body })
    expect(wrapper.find('.hmfw-time-picker').exists()).toBe(true)
    wrapper.unmount()
  })

  it('shows placeholder', () => {
    const wrapper = mount(TimePicker, { props: { placeholder: '选择时间' }, attachTo: document.body })
    const input = wrapper.find('input')
    expect(input.attributes('placeholder')).toBe('选择时间')
    wrapper.unmount()
  })

  it('disabled state', () => {
    const wrapper = mount(TimePicker, { props: { disabled: true }, attachTo: document.body })
    expect(wrapper.find('.hmfw-time-picker-disabled').exists()).toBe(true)
    wrapper.unmount()
  })

  it('small size', () => {
    const wrapper = mount(TimePicker, { props: { size: 'small' }, attachTo: document.body })
    expect(wrapper.find('.hmfw-time-picker-small').exists()).toBe(true)
    wrapper.unmount()
  })

  it('large size', () => {
    const wrapper = mount(TimePicker, { props: { size: 'large' }, attachTo: document.body })
    expect(wrapper.find('.hmfw-time-picker-large').exists()).toBe(true)
    wrapper.unmount()
  })

  it('error status', () => {
    const wrapper = mount(TimePicker, { props: { status: 'error' }, attachTo: document.body })
    expect(wrapper.find('.hmfw-time-picker-status-error').exists()).toBe(true)
    wrapper.unmount()
  })

  it('warning status', () => {
    const wrapper = mount(TimePicker, { props: { status: 'warning' }, attachTo: document.body })
    expect(wrapper.find('.hmfw-time-picker-status-warning').exists()).toBe(true)
    wrapper.unmount()
  })

  it('displays value', () => {
    const wrapper = mount(TimePicker, { props: { value: '14:30:00' }, attachTo: document.body })
    const input = wrapper.find('input')
    expect(input.element.value).toBe('14:30:00')
    wrapper.unmount()
  })


  it('formats value with custom format', () => {
    const wrapper = mount(TimePicker, { props: { value: '14:30:00', format: 'HH:mm' }, attachTo: document.body })
    const input = wrapper.find('input')
    expect(input.element.value).toBe('14:30')
    wrapper.unmount()
  })

  it('use12Hours displays AM/PM', () => {
    const wrapper = mount(TimePicker, { props: { value: '14:30:00', use12Hours: true, format: 'h:mm a' }, attachTo: document.body })
    const input = wrapper.find('input')
    expect(input.element.value).toBe('2:30 pm')
    wrapper.unmount()
  })

  it('use12Hours handles midnight correctly', () => {
    const wrapper = mount(TimePicker, { props: { value: '00:30:00', use12Hours: true, format: 'h:mm a' }, attachTo: document.body })
    const input = wrapper.find('input')
    expect(input.element.value).toBe('12:30 am')
    wrapper.unmount()
  })

  it('use12Hours handles noon correctly', () => {
    const wrapper = mount(TimePicker, { props: { value: '12:30:00', use12Hours: true, format: 'h:mm a' }, attachTo: document.body })
    const input = wrapper.find('input')
    expect(input.element.value).toBe('12:30 pm')
    wrapper.unmount()
  })

  it('hourStep generates correct hours', async () => {
    const wrapper = mount(TimePicker, { props: { hourStep: 2, open: true }, attachTo: document.body })
    await nextTick()
    const columns = document.querySelectorAll('.hmfw-time-picker-panel-column')
    const hourCells = columns[0].querySelectorAll('.hmfw-time-picker-panel-cell')
    expect(hourCells.length).toBe(12)
    expect(hourCells[0].textContent).toBe('00')
    expect(hourCells[1].textContent).toBe('02')
    expect(hourCells[11].textContent).toBe('22')
    wrapper.unmount()
  })

  it('minuteStep generates correct minutes', async () => {
    const wrapper = mount(TimePicker, { props: { minuteStep: 15, open: true }, attachTo: document.body })
    await nextTick()
    const columns = document.querySelectorAll('.hmfw-time-picker-panel-column')
    const minuteCells = columns[1].querySelectorAll('.hmfw-time-picker-panel-cell')
    expect(minuteCells.length).toBe(4)
    expect(minuteCells[0].textContent).toBe('00')
    expect(minuteCells[1].textContent).toBe('15')
    expect(minuteCells[2].textContent).toBe('30')
    expect(minuteCells[3].textContent).toBe('45')
    wrapper.unmount()
  })

  it('secondStep generates correct seconds', async () => {
    const wrapper = mount(TimePicker, { props: { secondStep: 30, open: true }, attachTo: document.body })
    await nextTick()
    const columns = document.querySelectorAll('.hmfw-time-picker-panel-column')
    const secondCells = columns[2].querySelectorAll('.hmfw-time-picker-panel-cell')
    expect(secondCells.length).toBe(2)
    expect(secondCells[0].textContent).toBe('00')
    expect(secondCells[1].textContent).toBe('30')
    wrapper.unmount()
  })


  it('disabledTime hides disabled hours when hideDisabledOptions is true', async () => {
    const disabledTime = () => ({ disabledHours: () => [0, 1, 2, 22, 23] })
    const wrapper = mount(TimePicker, { props: { disabledTime, hideDisabledOptions: true, open: true }, attachTo: document.body })
    await nextTick()
    const columns = document.querySelectorAll('.hmfw-time-picker-panel-column')
    const hourCells = columns[0].querySelectorAll('.hmfw-time-picker-panel-cell')
    expect(hourCells.length).toBe(19)
    wrapper.unmount()
  })

  it('disabledTime shows disabled hours with disabled class when hideDisabledOptions is false', async () => {
    const disabledTime = () => ({ disabledHours: () => [0, 1, 2] })
    const wrapper = mount(TimePicker, { props: { disabledTime, open: true }, attachTo: document.body })
    await nextTick()
    const columns = document.querySelectorAll('.hmfw-time-picker-panel-column')
    const hourCells = columns[0].querySelectorAll('.hmfw-time-picker-panel-cell')
    expect(hourCells.length).toBe(24)
    expect(hourCells[0].classList.contains('hmfw-time-picker-panel-cell-disabled')).toBe(true)
    expect(hourCells[1].classList.contains('hmfw-time-picker-panel-cell-disabled')).toBe(true)
    expect(hourCells[2].classList.contains('hmfw-time-picker-panel-cell-disabled')).toBe(true)
    expect(hourCells[3].classList.contains('hmfw-time-picker-panel-cell-disabled')).toBe(false)
    wrapper.unmount()
  })

  it('needConfirm shows OK button', async () => {
    const wrapper = mount(TimePicker, { props: { needConfirm: true, open: true }, attachTo: document.body })
    await nextTick()
    const okBtn = document.querySelector('.hmfw-time-picker-panel-footer-ok')
    expect(okBtn).toBeTruthy()
    wrapper.unmount()
  })

  it('needConfirm does not emit change until OK is clicked', async () => {
    const wrapper = mount(TimePicker, { props: { needConfirm: true, open: true }, attachTo: document.body })
    await nextTick()
    const columns = document.querySelectorAll('.hmfw-time-picker-panel-column')
    const hourCells = columns[0].querySelectorAll('.hmfw-time-picker-panel-cell')
    ;(hourCells[10] as HTMLElement).click()
    await nextTick()
    expect(wrapper.emitted('change')).toBeUndefined()
    const okBtn = document.querySelector('.hmfw-time-picker-panel-footer-ok') as HTMLElement
    okBtn.click()
    await nextTick()
    expect(wrapper.emitted('change')).toBeTruthy()
    wrapper.unmount()
  })

  it('changeOnScroll emits change immediately when needConfirm is false', async () => {
    const wrapper = mount(TimePicker, { props: { changeOnScroll: true, needConfirm: false, open: true }, attachTo: document.body })
    await nextTick()
    const columns = document.querySelectorAll('.hmfw-time-picker-panel-column')
    const hourCells = columns[0].querySelectorAll('.hmfw-time-picker-panel-cell')
    ;(hourCells[10] as HTMLElement).click()
    await nextTick()
    expect(wrapper.emitted('change')).toBeTruthy()
    wrapper.unmount()
  })

  it('renderExtraFooter renders custom footer content', async () => {
    const renderExtraFooter = () => 'Custom Footer'
    const wrapper = mount(TimePicker, { props: { renderExtraFooter, open: true }, attachTo: document.body })
    await nextTick()
    const extra = document.querySelector('.hmfw-time-picker-panel-footer-extra')
    expect(extra?.textContent).toBe('Custom Footer')
    wrapper.unmount()
  })

  it('variant borderless applies correct class', () => {
    const wrapper = mount(TimePicker, { props: { variant: 'borderless' }, attachTo: document.body })
    expect(wrapper.find('.hmfw-time-picker-borderless').exists()).toBe(true)
    wrapper.unmount()
  })

  it('variant filled applies correct class', () => {
    const wrapper = mount(TimePicker, { props: { variant: 'filled' }, attachTo: document.body })
    expect(wrapper.find('.hmfw-time-picker-filled').exists()).toBe(true)
    wrapper.unmount()
  })

  it('variant underlined applies correct class', () => {
    const wrapper = mount(TimePicker, { props: { variant: 'underlined' }, attachTo: document.body })
    expect(wrapper.find('.hmfw-time-picker-underlined').exists()).toBe(true)
    wrapper.unmount()
  })

  it('emits change with two arguments', async () => {
    const wrapper = mount(TimePicker, { props: { open: true, needConfirm: true }, attachTo: document.body })
    await nextTick()
    const okBtn = document.querySelector('.hmfw-time-picker-panel-footer-ok') as HTMLElement
    okBtn.click()
    await nextTick()
    const changeEvents = wrapper.emitted('change')
    expect(changeEvents).toBeTruthy()
    expect(changeEvents![0].length).toBe(2)
    wrapper.unmount()
  })

  it('exposes focus and blur methods', () => {
    const wrapper = mount(TimePicker, { attachTo: document.body })
    expect(wrapper.vm.focus).toBeDefined()
    expect(wrapper.vm.blur).toBeDefined()
    wrapper.unmount()
  })

  it('controlled value clears correctly', async () => {
    const wrapper = mount(TimePicker, { props: { value: '14:30:00' }, attachTo: document.body })
    expect(wrapper.find('input').element.value).toBe('14:30:00')
    await wrapper.setProps({ value: '' })
    await nextTick()
    expect(wrapper.find('input').element.value).toBe('')
    wrapper.unmount()
  })
})

