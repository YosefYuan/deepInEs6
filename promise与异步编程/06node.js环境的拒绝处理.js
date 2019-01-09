let rejected;
process.on('unhandledRejection',function (reason, promise) {
    console.log(reason.message) //"Explosion!"
    console.log(rejected === promise) // true
})

rejected = Promise.reject(new Error("Explosion!"));