let fs = require("fs")

function run(taskDef) {
    let task = taskDef();
    console.log('task',task)
    let result = task.next()
    console.log('result',result)

    function step() {
        if(!result.done){
            if(typeof result.value === "function"){
                result.value(function (err, data) {
                    if(err){
                        result = task.throw(err);
                        return;
                    }
                    result = task.next(data);
                    step()
                })
            }else{
                result = task.next(result.value)
                step()
            }
        }
    }

    step()
}

function readFile(filename) {
    return function (callback) {
        fs.readFile(filename,callback)
    }
}

run(function *() {
    let contents = yield readFile("example.txt");
//    dosomethingWith(contents)
    console.log(contents)
    console.log("done")
})