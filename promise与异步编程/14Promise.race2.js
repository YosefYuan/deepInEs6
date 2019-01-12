
let p1 = new Promise(function (resolve, reject) {
    resolve(42)
})

let p2 = Promise.reject(43)

let p3 = new Promise(function (resolve, reject) {
    resolve(44)
})

let p4 = Promise.race([p1,p2,p3])

p4.then(function (value) {
    console.log(value)
}).catch(function (value) {
    console.log(value)
})