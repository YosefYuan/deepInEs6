// 事件模型
let button = document.getElementById('my-btn')
button.onclick = function(event){
  console.log("Clicked")
}

// 回调模式
readFile("example.txt",function(err,contents){
  if(err){
    throw err
  }
  console.log(contents)
})
console.log("Hi")