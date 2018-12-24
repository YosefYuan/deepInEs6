function* createNumIterator() {
  yield 1
  yield 2
}

function* createColorIterator() {
  yield "green"
  yield "red"
}

function* createCombineIterator() {
  yield* createNumIterator();
  yield* createColorIterator();
  yield true;
}

var iterator = createCombineIterator()

console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)