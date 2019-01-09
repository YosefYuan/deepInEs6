let promise = new Promise(function (resolve, reject) {
    throw new Error("Explosion!")
})

promise.catch(function (err) {
    console.log(err.message) // "Explosion!"
})