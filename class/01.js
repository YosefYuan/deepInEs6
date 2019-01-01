let PersonType2 = (function () {
  "use strict";

  const PersonType2 = function (name) {
    if (typeof new.target === 'undefined') {
      throw new Error('必须通过关键字new调用构造函数');
    }

    this.name = name;
  }

  Object.defineProperty(PersonType2.prototype, "sayName", {
    value: function () {
      if (typeof new.target !== 'undefined') {
        throw new Error('不可使用关键字new调用该方法');
      }

      console.log(this.name)
    },
    enumerable: false,
    writable: true,
    configurable: true
  });

  return PersonType2
})()
