let reject1 = Promise.reject(new Error('reject1'))
let reject2 = Promise.reject(new Error('reject2'))
let reject3 = Promise.reject(new Error('reject3'))
// setTimeout(()=>{

    reject1.catch((val)=>{
        console.log(val.message)
    })
    reject2.catch((val)=>{
        console.log(val.message)
    })
    reject3.catch((val)=>{
        console.log(val.message)
    })

// },2000)

let possiblyUnhandlerejections = new Map()

//如果一个拒绝没被处理，则将它添加到Map集合中
process.on("unhandledRejection",function (reason,promise) {
    possiblyUnhandlerejections.set(promise,reason);
});

process.on("rejectionHandled",function (promise) {
    console.log('unhandled handled')
    possiblyUnhandlerejections.delete(promise);
});

setInterval(function () {
    possiblyUnhandlerejections.forEach(function (reason, promise) {
        console.log(reason.message ? reason.message : reason);

    //    处理这些拒绝
    //     handleRejection(promise,reason)
    })

    possiblyUnhandlerejections.clear()
},3000)