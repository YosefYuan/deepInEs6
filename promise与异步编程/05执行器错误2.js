let promise = new Promise(function (resolve, reject) {
    try{
        throw new Error("Explosion!")
    }catch (ex) {
        reject(ex)
    }
})

promise.catch(function (err) {
    console.log(err.message) // "Explosion!"
})