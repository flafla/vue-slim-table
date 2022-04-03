import { nextTick, defineComponent } from 'vue'
import { mount } from '@vue/test-utils'
import Table from '@/ts/components/table.vue'

const perPage = 5
const columns = [
  { key: 'one', title: 'One' },
  { key: 'two', title: 'Two' },
  { key: 'three', title: 'Three' },
]

const source = new Array(13).fill(null).map((_, i) => {
  return columns.reduce((memo, { key, title }) => {
    memo[key] = [title, i + 1].join(' ')
    return memo
  }, {})
})

const asyncSource = (params) => {
  return source.slice((params.page - 1) * params.per_page, params.page * params.per_page)
}

describe('empty async data', () => {
  test('shows default no records text', async() => {
    const wrapper = mount(Table, {
      props: { columns, source: () => [], perPage }
    })

    await nextTick()
    await nextTick()

    expect(wrapper.get('table tbody').text()).toContain('No records found')
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('shows replaced row:empty slot', async() => {
    const noData = 'no data found'
    const noDataComponent = defineComponent({
      template: `<tr><td colspan="5">${noData}</td></tr>`
    })
    const wrapper = mount(Table, {
      props: { columns, source: () => [], perPage },
      slots: { 'row:empty': noDataComponent }
    })

    await nextTick()
    await nextTick()

    expect(wrapper.get('table tbody').text()).toContain(noData)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('rendering data', () => {
  test('render first page', async () => {
    const wrapper = mount(Table, {
      props: { columns, source: asyncSource, perPage }
    })

    expect(wrapper.findAll('.vst-loading-row').length).toBe(perPage)

    await nextTick()
    await nextTick()

    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('pagination', () => {
  describe('first page', () => {
    test('has more than one page', async () => {
      const wrapper = mount(Table, {
        props: { columns, source: asyncSource, perPage }
      })

      const prevLink = wrapper.get('.vst-pagination li:first-child')
      const nextLink = wrapper.get('.vst-pagination li:last-child')

      expect(prevLink.element.classList.contains('disabled')).toBe(true)
      expect(nextLink.element.classList.contains('disabled')).toBe(true)

      await nextTick()
      await nextTick()

      expect(prevLink.element.classList.contains('disabled')).toBe(true)
      expect(nextLink.element.classList.contains('disabled')).toBe(false)

      expect(wrapper.findAll('.vst-page-item').length).toBe(2)
    })

    test('has only one page', async () => {
      const wrapper = mount(Table, {
        props: { columns, source: asyncSource, perPage: source.length + 1 }
      })

      const prevLink = wrapper.get('.vst-pagination li:first-child')
      const nextLink = wrapper.get('.vst-pagination li:last-child')

      expect(prevLink.element.classList.contains('disabled')).toBe(true)
      expect(nextLink.element.classList.contains('disabled')).toBe(true)

      await nextTick()
      await nextTick()

      expect(wrapper.findAll('.vst-page-item').length).toBe(0)
    })
  })

  describe('next page', () => {
    test('click', async () => {
      const wrapper = mount(Table, {
        props: { columns, source: asyncSource, perPage }
      })

      await nextTick()
      await wrapper.get('.vst-pagination li:last-child a').trigger('click')
      await nextTick()

      expect(wrapper.html()).toMatchSnapshot()

      const prevLink = wrapper.get('.vst-pagination li:first-child')
      expect(prevLink.element.classList.contains('disabled')).toBe(false)
    })

    test('click to last page', async () => {
      const wrapper = mount(Table, {
        props: { columns, source: asyncSource, perPage: 10 }
      })

      await nextTick()
      await wrapper.get('.vst-pagination li:last-child a').trigger('click')
      await nextTick()

      expect(wrapper.html()).toMatchSnapshot()

      const prevLink = wrapper.get('.vst-pagination li:first-child')
      expect(prevLink.element.classList.contains('disabled')).toBe(false)

      const nextLink = wrapper.get('.vst-pagination li:last-child')
      expect(nextLink.element.classList.contains('disabled')).toBe(true)
    })
  })
})
