let target = {
    name:"target",
    value:42
};

let proxy = new Proxy(target,{
    has(trapTarget,key){
        if(key === "value"){
            return false;
        }else{
            return Reflect.has(trapTarget,key)
        }
    }
});
console.log("value" in proxy);
console.log("name" in proxy);
console.log("toString" in proxy);
