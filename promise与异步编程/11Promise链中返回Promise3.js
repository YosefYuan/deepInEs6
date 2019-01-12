let p1 = new Promise(function (resolve, reject) {
    resolve(42)
})

let p2 = new Promise(function (resolve, reject) {
    reject(43)
})

p1.then(function (value) {
    console.log(value)
    return p2
}).then(function (value) {
    console.log(value) //从未调用
}).catch(function (err) {
    console.log(err)
})