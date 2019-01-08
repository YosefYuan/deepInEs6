let promise = readFile('example.txt')

// 最初的完成处理程序
promise.then(function(contents){
  console.log(contents)
// 现在又添加一个
  promise.then(function(contents){
    console.log(contents)
  })
})