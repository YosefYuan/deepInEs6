let target = {};
let proxy = new Proxy(target,{
  getPrototypeOf(traptarget){
    return null;
  },
  setPrototypeOf(traptarget,proto){
    return false;
  }
});

let tragetProto = Object.getPrototypeOf(target);
let proxyProto = Object.getPrototypeOf(proxy);

console.log(tragetProto === Object.prototype); //true
console.log(proxyProto === Object.prototype); //false
console.log(proxyProto);

// 成功
Object.setPrototypeOf(target,{});

// 给不存在的属性赋值会抛出错误
Object.setPrototypeOf(proxy,{});