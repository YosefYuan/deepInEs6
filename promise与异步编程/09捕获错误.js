let p1 = new Promise(function (resolve, reject) {
    resolve(42)
})

p1.then(function (val) {
    throw new Error('Boom1!')
}).catch(function (error) {
    console.log(error.message)
})


//test2

let p2 = new Promise(function (resolve, reject) {
    throw new Error('Explosion!')
})

p2.then(()=>{
    console.log('test')
}).catch(function (error) {
    console.log(error.message)
    throw new Error('Boom2!')
}).catch(function (error) {
    console.log(error.message)
})