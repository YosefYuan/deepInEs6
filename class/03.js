function createObj(classDef){
  return new classDef()
}

let obj = createObj(class{
  sayHi(){
    console.log('Hi')
  }
})

obj.sayHi()

