let thenable = {
    then:function (resolve,reject) {
        reject(42);
    }
};

let p1 = Promise.resolve(thenable);
p1.catch(function (value) {
    console.log(value)
})