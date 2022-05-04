const stringify = (obj, parentPrefix?: string) => (outputArray, [key, val]) => {
  if (val === null || val === undefined) {
    return outputArray
  }

  const encodedKey = encodeURIComponent(key)
  const prefix = parentPrefix ? `${parentPrefix}[${encodedKey}]` : encodedKey

  if (['number', 'string'].includes(typeof val)) {
    outputArray.push(`${prefix}=${encodeURIComponent(val)}`)
    return outputArray
  }

  outputArray.push(Object.entries(val).reduce(stringify(val, prefix), []).join('&'))
  return outputArray
}

export default (obj): string => Object.entries(obj).reduce(stringify(obj), []).join('&')
