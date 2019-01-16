let fs = require('fs');

function run(taskDef) {
    let task = taskDef();
    console.log(task);

    let result = task.next();
    console.log(result);
    
    (function step() {
        if(!result.done){
            let promise = Promise.resolve(result.value)
            promise.then(function (value) {
                result = task.next(value)
                step()
            }).catch(function (error) {
                result = task.throw(error)
                step()
            })
        }
    }())
}

function readFile(filename) {
    return new Promise(function (resolve,reject) {
        fs.readFile(filename,function (err, contents) {
            if(err){
                reject(err)
            }else{
                resolve(contents)
            }
        })
    })
}

run(function *() {
    let contents = yield readFile("example.txt")

    console.log("done")
})