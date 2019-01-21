let target = {};

let proxy = new Proxy(target,{
  isExtensible(trapTarget) {
    return Reflect.isExtensible(trapTarget);
  },
  preventExtensions(trapTarget) {
    return false;
  }
});

console.log(Object.isExtensible(target));
console.log(Object.isExtensible(proxy));

Reflect.preventExtensions(proxy);

console.log(Object.isExtensible(target));
console.log(Object.isExtensible(proxy));