let p1 = new Promise(function (resolve, reject) {
    resolve(42)
})

p1.then(function (val) {
    console.log(val)
    return val + 1;
}).then(function (val) {
    console.log(val)
})

//test
p1.then(function (val) {
    console.log(666)
})



