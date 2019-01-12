let p1 = new Promise(function (resolve, reject) {
    return resolve(42)
})

p1.then(function (val) {
    console.log(val)
}).then(function () {
    console.log("finished 1")
})

//拆解版

let p2 = new Promise(function (resolve, reject) {
    resolve(48)
})

let p3 = p2.then(function (val) {
    console.log(val)
})

p3.then(function () {
    console.log("Finished 2")
})