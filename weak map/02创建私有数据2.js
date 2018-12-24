let Person = (function () {
  let privateData = new WeakMap();

  function Pserson(name) {
    privateData.set(this, {
      name: name
    })
  }

  Person.prototype.getName = function () {
    return privateData.get(this).name
  }
  return Person
})()