function PersonType(name){
  this.name = name
}

// 静态方法
PersonType.create = function(name){
  return new PersonType(name)
}

// 实例方法
PersonType.prototype.sayName = function(){
  console.log(this.name)
}
var person = PersonType.create('testname')

person.sayName()