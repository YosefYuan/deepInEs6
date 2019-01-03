class MyArray extends Array{

}

var colors = new MyArray()
colors[0] = "red"

console.log(colors.length)

colors.length = 0
console.log(colors[0])