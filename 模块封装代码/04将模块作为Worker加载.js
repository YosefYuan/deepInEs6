// 按照脚本的方式加在script.js
let worker = new Worker('script.js');

// 按照模块方式加载module.js
let worker = new Workder("module.js", {type: "module"});  