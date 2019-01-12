class MyPromise extends Promise {
//    使用默认的构造函数
    success(resolve,reject){
        return this.then(resolve,reject)
    }

    failure(reject){
        return this.catch(reject)
    }
}

let promise = new MyPromise(function (resolve,reject) {
    resolve(42)
})

promise.success(function (value) {
    console.log(value)
}).failure(function (value) {
    console.log(value)
})