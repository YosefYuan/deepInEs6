let thenable = {
    then:function (resolve,reject) {
        reject(42);
    }
};

let p1 = Promise.reject(thenable);
p1.catch(function (value) {
    // console.log(value)
    return Promise.resolve(value)
}).then(val=>{
    console.log(val)
},err=>{
    console.log(err) // 42
})