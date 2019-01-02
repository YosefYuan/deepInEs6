class Rectangle{
  constructor(length,width){
    this.length = length
    this.width = width
  }

  getArea(){
    return this.length * this.width
  }
}

class Square extends Rectangle{
  constructor(length){
    super(length,length)
  }
}

var square = new Square(3)

console.log(square.getArea())
console.log(square instanceof Square)
console.log(square instanceof Rectangle)