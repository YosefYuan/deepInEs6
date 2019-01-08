let promise = readFile('example.txt')

// 成功失败 二者皆有
promise.then(function(contents){
  console.log(contents)
},
function(err){
  console.log(err.message)
})

// 只有完成
promise.then(function(contents){
  console.log(contents)
})


// 只有失败
promise.then(null,function(err){
  console.log(err.message)
})
