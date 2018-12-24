let set = new Set(),
  key = {}

set.add(key)
console.log(set.size)

key = null
console.log(set.size)

key = [...set][0]
console.log({
  key
})