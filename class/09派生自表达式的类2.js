let SerializableMixin = {
  serialize(){
    return JSON.stringify(this)
  }
}

let AreaMixin = {
  getArea(){
    return this.length * this.width
  }
}

function mixin(...mixins){
  var base = function(){}
  Object.assign(base.prototype, ...mixins)
  return base
}

class Square extends mixin(AreaMixin,SerializableMixin){
  constructor(length){
    super()
    this.length = length
    this.width = length
  }
}

var x = new Square(3)
console.log(x.getArea())
console.log(x.serialize())