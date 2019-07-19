// has(trapTarget, key)
// hide 
// 
// in  自有属性或者原型属性都会返回true,
let targetIn = {
    value: 22,
};

console.log('value' in targetIn);   // true
console.log('toString' in targetIn);  // true

// use has() method to trap in of error
let target = {
    name: 'target',
    value: 22,
};

let proxy = new Proxy(target, {
    has(trapTarget, key) {
        if(key === 'value') {
            return false;
        } else {
            return Reflect.has(trapTarget, key);
        }
    }
});

console.log('value' in proxy);   // false 
console.log('name' in proxy);    // true
console.log('toSting' in proxy);    // true
