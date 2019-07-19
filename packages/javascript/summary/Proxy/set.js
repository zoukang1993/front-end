// set(TrapTarget, key, value,receiver); 
// verify object property
// 
// example verify every value is number when you add a property value
let target = {
    name: 'target',
};

let proxy = new Proxy(target, {
    set(trapTarget, key, value, receiver) {
        // 忽略不希望受到影响的已有属性
        if(!trapTarget.hasOwnProperty(key)) {
            if(isNaN(value)) {
                throw new TypeErrow('property must be number');
            }
        }
        
        // add property
        return Reflect.set(trapTarget, key, value, receiver);
    }
});

// add a new property
proxy.count = 1;
console.log(proxy.count);   // 1
console.log(target.count);   // 1

// target has name property , could set value for it
proxy.name = 'proxy';
console.log(proxy.name); // proxy
console.log(target.name);   // proxy

//valid
proxy.anotherName = 2;
console.log(proxy.anotherName);   // 2
console.log(target.anotherName);   //2

// its error
proxy.otherName = 'proxy';
console.log(proxy.otherName);    // throw error
