class MyCalss{
  *crateIterator(){
    yield 1;
    yield 2;
    yield 3;
  }
}

let instance = new MyCalss()
let iterator = instance.crateIterator()

for (let x of iterator){
  console.log(x)
}
