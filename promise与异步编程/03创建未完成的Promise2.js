
let promise = new Promise(function(resolve,reject){
  console.log('Promise')
  resolve()
})

console.log('hi')

// 1.Promise
// 2.hi

promise = new Promise(function(resolve,reject){
  console.log('Promise2')
  resolve()
})

promise.then(function(){
  console.log('Resolved2')
})

console.log('hi 2')

// 1.Promise2
// 2.hi 2
// 3.Resolved2
