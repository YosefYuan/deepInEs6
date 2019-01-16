let buffer = new ArrayBuffer(10),
view1 = new DataView(buffer),
view2 = new DataView(buffer,5,2)

console.log(view1.buffer === buffer)
console.log(view2.buffer === buffer)
console.log(view1.byteOffset)
console.log(view2.byteOffset)
console.log(view1.byteLength)
console.log(view2.byteLength)
