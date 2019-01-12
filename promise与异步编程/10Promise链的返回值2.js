let p1 = new Promise(function (resolve, reject) {
    reject(42)
})

p1.catch(function (val) {
    console.log(val)
    return val + 1
}).then(function (val) {
    console.log(val)
})