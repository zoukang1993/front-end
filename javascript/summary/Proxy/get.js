// get(trapTarget, key, receiver)
// verify object shape
// if property is not exist, get trap will throw a error

// example
let proxy  = new Proxy({}, {
    get(trapTarget, key, receiver) {
        if(!(key in receiver)) {
            throw new TypeError('property ' + key + ' is not exist');
        }
        
        return Reflect.get(trapTarget, key, receiver);
    }
});

proxy.name = 'proxy';
console.log(proxy.name);   // proxy


console.log(proxy.myName);   // property myName is not exist
