import { describe, beforeEach, expect, test, vi } from 'vitest'

import useFilterable from '@/ts/use/filterable'

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

const mocks = {
  asyncSource: (params) => {
    return Promise.resolve(source.slice((params.page - 1) * params.per_page, params.page * params.per_page))
  },
  asyncFailedSource: (params) => {
    return Promise.reject('Error')
  }
}

let loadSpy
let filterable
describe('useFilterable success', () => {
  beforeEach(() => {
    loadSpy = vi.spyOn(mocks, 'asyncSource')
    filterable = useFilterable({ initialFilters: {}, loadItems: loadSpy })
  })

  test('default use', async () => {
    expect(await loadSpy).toHaveBeenCalledTimes(1)
    expect(filterable.page.value).toBe(1)

    expect(filterable.isSyncing.value).toBe(false)
    expect(filterable.isSynced.value).toBe(true)
  })

  test('nextPage', async () => {
    filterable.nextPage()
    expect(await loadSpy).toHaveBeenCalledTimes(2)
    expect(filterable.page.value).toBe(2)
  })

  test('prevPage', async () => {
    filterable.nextPage()
    await loadSpy
    filterable.prevPage()
    expect(await loadSpy).toHaveBeenCalledTimes(3)
    expect(filterable.page.value).toBe(1)
  })

  describe('reload', async () => {
    test('when current page not 1', async () => {
      expect(filterable.page.value).toBe(1)
      filterable.reload()
      expect(await loadSpy).toHaveBeenCalledTimes(2)
      expect(filterable.page.value).toBe(1)
    })

    test('when current page is not 1', async () => {
      expect(filterable.page.value).toBe(1)
      filterable.nextPage()
      await loadSpy
      filterable.reload()
      expect(await loadSpy).toHaveBeenCalledTimes(3)
      expect(filterable.page.value).toBe(2)
    })
  })

  describe('refetch', () => {
    test('when current page not 1', async () => {
      expect(filterable.page.value).toBe(1)
      filterable.refetch()
      expect(await loadSpy).toHaveBeenCalledTimes(2)
      expect(filterable.page.value).toBe(1)
    })

    test('when current page is not 1', async () => {
      expect(filterable.page.value).toBe(1)
      filterable.nextPage()
      await loadSpy
      filterable.refetch()
      expect(await loadSpy).toHaveBeenCalledTimes(3)
      expect(filterable.page.value).toBe(1)
    })
  })
})


test('useFilterable failed', async () => {
    const loadSpy = vi.spyOn(mocks, 'asyncFailedSource')
    const filterable = useFilterable({ initialFilters: {}, loadItems: loadSpy })
    await loadSpy
    expect(filterable.page.value).toBe(1)

    process.nextTick(() => {
      expect(filterable.isFailed.value).toBe(true)
    })
})
