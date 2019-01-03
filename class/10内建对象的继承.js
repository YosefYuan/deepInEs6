var colors = []
colors[0] = 'red'
console.log(colors.length)

colors.length = 0
console.log(colors[0])

// 尝试通过es5语法继承数组
function MyArray(){
  Array.apply(this,arguments)
}

MyArray.prototype = Object.create(Array.prototype,{
  constructor:{
    value:MyArray,
    writable:true,
    configurable:true,
    enumerable:true,
  }
})

var colors = new MyArray()
colors[0] = "red"
console.log(colors.length)

colors.length = 0
console.log(colors[0])