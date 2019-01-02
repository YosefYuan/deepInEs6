  class PersonClass{
    // 等价于PersonType构造函数
    constructor(name){
      this.name = name
    }

    // 等价于PersonType.prototype.sayName
    sayName(){
      console.log(this.name)
    }

    // 等价于PersonType.create
    static create(name){
      return new PersonClass(name)
    }
  }

  let person = PersonClass.create('testname')
  person.sayName()