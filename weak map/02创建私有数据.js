var Person = (function () {
  var privateData = {},
    privateid = 0;

  function Person(name) {
    Object.defineProperty(this, "_id", {
      value: privateid++
    });

    privateData[this._id] = {
      name: name
    }

    console.log(this._id)
    console.log(name)
  }

  Person.prototype.getName = function () {
    return privateData[this._id].name
  }
  return Person;
})()

var p1 = new Person('p1')
var p2 = new Person('p2')