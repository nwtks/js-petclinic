export function show(a) {
  return a ? '' : 'display:none'
}

export function findById(items, id) {
  for (let i = 0; i < items.length; i += 1) {
    const item = items[i]
    if (item.id === id) {
      return item
    }
  }
  return null
}
