class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop;
// getter
// 


class Htmls {
    constructor(element) {
        this.element = element;
    }
    
    get html() {
        return this.element.innerHTML;
    }
    
    set html(value) {
        this.element.innerHTML = value;
    }
}

let descriptor = Object.getOwnPropertyDescriptor(Htmls.prototype, 'html');
console.log(descriptor);

console.log('set' in descriptor);  //true
console.log('get' in descriptor);   // true
console.log(descriptor.enumerable);   // false

const sets = {
    _name: 'lili',
    get name() {
        return this._name;
    },
    set name(val) {
        this._name = val;
    }
};

console.log(sets.name);    // lili
sets.name = 'jack'; 
console.log(sets.name);    // jack
