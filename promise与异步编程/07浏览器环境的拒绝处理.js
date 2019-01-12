let rejected;

window.onunhandledrejection = function (event) {
    console.log(event.type)
    console.log(event.reason.message)
    console.log(rejected === event.promise)
}

window.onrejectionhandled  = function (event) {
    console.log(event.type)
    console.log(event.reason.message)
    console.log(rejected === event.promise)
}

rejected = Promise.reject(new Error("Explosion!"))