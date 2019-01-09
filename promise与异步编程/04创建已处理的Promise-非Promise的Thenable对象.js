let thenable = {
    then:function (resolve,reject) {
        resolve(42);
    }
};

let p1 = Promise.resolve(thenable)

p1.then(function (value) {
    console.log(value); //2.42
});

let thenable2 = {
    then:function (resolve,reject) {
        resolve(30);
    }
};
let p2 = Promise.reject(thenable2)

p2.then(function (value) {
    console.log(value);
    console.log(666)
},function (err) {
    console.log(777) //1.777
    // console.log(err);
    return Promise.resolve(err)
}).then((val)=>{
    console.log(val) // 3.30
});