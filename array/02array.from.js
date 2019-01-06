
//method 1
function makeArray(arrayLike){
  var result = [];
  for(var i = 0,len= arrayLike.length;i<len;i++){
    result.push(arrayLike[i])
  }
  return result;
}

function doSomething(){
  var args = makeArray(arguments);
  console.dir(args)
}

doSomething(5,6,73,4,67)


// method 2
function makeArray(arrayLike){
  return Array.prototype.slice.call(arrayLike)
}

function doSomething(){
  var args = makeArray(arguments);
  console.dir(args)
}

doSomething(5,6,73,4,67)

// method 3
function doSomething(){
  var args = Array.from(arguments)
  console.dir(args)
}

doSomething(5,6,73,4,67)