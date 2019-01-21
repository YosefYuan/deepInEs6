let target = {};
let proxy = new Proxy(target,{
  getPrototypeOf(traptarget){
    return Reflect.getPrototypeOf(traptarget);
  },
  setPrototypeOf(traptarget,proto){
    return Reflect.setPrototypeOf(traptarget,proto);
  }
});

let tragetProto = Object.getPrototypeOf(target);
let proxyProto = Object.getPrototypeOf(proxy);

console.log(tragetProto === Object.prototype); //true
console.log(proxyProto === Object.prototype); //true
console.log(proxyProto);// {}

// 成功
Object.setPrototypeOf(target,{});

// 同样也成功
Object.setPrototypeOf(proxy,{});