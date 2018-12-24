let map = new WeakMap(),
  element = document.querySelector("body")

map.set(element, "original")

let value = map.get(element)
console.log(value)

element.parentNode.removeChild(element)
element = null