import { expect, test, vi } from 'vitest'
import toQueryString from '@/ts/helpers/to_query_string'

describe('toQueryString', () => {
  test('turn object to query string', () => {
    const obj = {
      null: null,
      undefined: undefined,
      string: 'a',
      arrayOfObjects: [{ a: 'a', b: 'b' }, { c: 'c' }],
      object: { a: 'a', b: 'b' }
    }

    expect(toQueryString(obj)).toBe('string=a&arrayOfObjects[0][a]=a&arrayOfObjects[0][b]=b&arrayOfObjects[1][c]=c&object[a]=a&object[b]=b')
  })
})
