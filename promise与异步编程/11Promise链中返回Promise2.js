let p1 = new Promise(function (resolve, reject) {
    resolve(42)
})

let p2 = new Promise(function (resolve, reject) {
    resolve(43)
})

let p3 = p1.then(function (value) {
    console.log(value)
    return p2
})

p3.then(function (value) {
    console.log(value)
})