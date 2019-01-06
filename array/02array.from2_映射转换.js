// method 4
function doSomething(){
  var args = Array.from(arguments,value => value+1)
  console.dir(args)
}

doSomething(5,6,73,4,67)

// method 5
global.diff = 5;
let helper ={
  diff:1,
  add(value){
    return value + this.diff;
  }
};

function translate(){
  return Array.from(arguments,helper.add,global);// 最后一个参数 修改this 指向
}

function translate2(context){
  return Array.from(arguments,helper.add,helper);// 最后一个参数 修改this 指向
}

let numbers = translate(1,2,3)
console.log(numbers)
numbers = translate2(1,2,3)
console.log(numbers)