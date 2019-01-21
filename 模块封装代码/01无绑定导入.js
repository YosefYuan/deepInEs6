// 没有export 或 import 的模块代码
Array.prototype.pushAll = function(items) {
  // items必须是一个数组
  if(!Array.isArray(items)){
    throw new TypeError("参数必须是一个数组");
  }

  // 使用内建的push()和展开运算符
  return this.push(...items);
}

