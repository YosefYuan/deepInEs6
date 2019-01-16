let target = {
    name:"target",
    value:42
};

let proxy = new Proxy(target,{
    deleteProperty(trapTarget,key){
        if(key === 'value'){
            return false;
        }else{
            return Reflect.deleteProperty(trapTarget,key)
        }
    }
});

//尝试删除proxy.value

console.log("value" in proxy);

let result1 = delete proxy.value;
console.log(result1);

console.log("value" in proxy);

//尝试删除proxy.name

console.log("name" in proxy);

let result2 = delete proxy.name;
console.log(result2);

console.log("name" in proxy);