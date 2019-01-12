let p1 = new Promise(function (resolve, reject) {
    setTimeout(()=>{
          resolve(
             new Promise(function (resolve, reject) {
                 resolve(45)
             })
         )
     },1000)

})

let p2 = new Promise(function (resolve, reject) {
    resolve(43)
})

let p3 = new Promise(function (resolve, reject) {
    resolve(44)
})

let p4 = Promise.all([p1,p2,p3])

p4.then(function (value) {
    console.log(Array.isArray(value))
    console.log(value[0]) //45
    console.log(value[1]) //43
    console.log(value[2]) //44
}).catch(err=>{
    console.log(err)
})