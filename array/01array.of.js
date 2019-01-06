let items = new Array(2);
console.log(items.length); // 2
console.log(items[0]); // undefined
console.log(items[1]); // undefined

items = new Array("2");
console.log(items.length); // 0
console.log(items[0]); // "2"

items = new Array(1,2);
console.log(items.length); // 2
console.log(items[0]); // 1
console.log(items[1]); // 2

items = new Array(3,"2");
console.log(items.length); // 2
console.log(items[0]); // 3
console.log(items[1]); // "2"
