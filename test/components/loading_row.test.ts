import { mount } from '@vue/test-utils'
import LoadingRow from '@/ts/components/loading_row.vue'

test('mount component', async() => {
  const origRandom = Math.random
  Math.random = () => 1

  expect(LoadingRow).toBeTruthy()
  const wrapper = mount(LoadingRow, { props: { columnsLength: 7 } })
  expect(wrapper.html()).toMatchSnapshot()

  Math.random = origRandom
})
