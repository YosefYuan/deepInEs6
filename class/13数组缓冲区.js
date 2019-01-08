let buffer = new ArrayBuffer(10)

console.log(buffer.byteLength)

let buffer2 = buffer.slice(4,6)

console.log(buffer2.byteLength)