// "use strict";

let target = {
    name:"target",
    value: 42
}

Object.defineProperty(target,"name",{
    configurable:false
})

console.log("value" in target);

let result1 = delete target.value;

console.log(result1)

console.log("value" in target);

//
let result2 = delete target.name;

console.log(result2)

console.log("name" in target);