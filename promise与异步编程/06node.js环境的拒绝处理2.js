let rejected;
process.on('rejectionHandled',function (promise) {
    console.log(rejected === promise) // true
})

rejected = Promise.reject(new Error("Explosion!"));

setTimeout(function () {
    rejected.catch(function (value) {
        console.log(value.message)
    })
},1000)