class MyPromise extends Promise {

    success(resolve,reject){
        return this.then(resolve,reject)
    }

    failure(reject){
        return this.catch(reject)
    }
}

let p1 = new Promise(function (resolve, reject) {
    resolve(42)
})

let p2 = MyPromise.resolve(p1)

p2.success(function (value) {
    console.log(value)
})

console.log(p2 instanceof MyPromise)