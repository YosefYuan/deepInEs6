function* createNumIterator() {
  yield 1
  yield 2
  return 3
}

function* createColorIterator(count) {
  for (let i = 0; i < count; i++) {
    yield "repeat"
  }
}

function* createCombineIterator() {
  let result = yield* createNumIterator();
  yield result
  yield* createColorIterator(result);
}

var iterator = createCombineIterator()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())