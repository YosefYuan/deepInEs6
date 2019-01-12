let possiblyUnhandledRejections = new Map()

window.onunhandledrejection = function (event) {
    possiblyUnhandledRejections.set(event.promise,event.reason)
}

window.onrejectionhandled = function (event) {
    possiblyUnhandledRejections.delete(event.promise)
}

setInterval(function () {
    possiblyUnhandledRejections.forEach(function (reason, promise) {
        console.log(reason.message ? reason.message : reason)

    //    处理拒绝程序
    //     handleRejection(promise,reason)
    })

    possiblyUnhandledRejections.clear()
},60000)