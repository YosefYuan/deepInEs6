class MyArray extends Array{
  static get [Symbol.species](){
    return Array
  }
}

let items = new MyArray(1,2,3,4),
subitems = items.slice(1,3)

console.log(items instanceof MyArray)
console.log(subitems instanceof Array)
console.log(subitems instanceof MyArray) //false