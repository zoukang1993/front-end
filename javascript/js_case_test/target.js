function Person(name) {
    console.log(new.target);
    console.log(typeof new.target);
    console.log(name);
}

let person = new Person('zk');

console.log(typeof(1212));
