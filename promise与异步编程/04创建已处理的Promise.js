let promise = Promise.resolve(42);
promise.then(function (value) {
    console.log(value);
});

promise = Promise.reject(42);
promise.then(()=>{
    console.log(666);//永不会调用
},()=>{
    console.log('error') //把catch短路
}).catch(function (value) {
    console.log(value);
});