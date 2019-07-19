class Point {
    constructor() {}
}

typeof Point   // function
Point === Point.prototype.constructor   // true

let point = new Point();


// 类的所有方法，都定义在类的prototype属性上面
class Points {
    constructor() {}
    toString() {}
    toValue() {}
}

// equal
Points.prototype = {
    constructor() {},
    toString() {},
    toValue() {},
}

// 为类添加多个方法
Object.assing(
    Points.prototype,
    {
        toString(){},
        toValue(){},
    }
);

// prototype 对象的construction 属性， 直接指向类的本身
// Class.prototype.constructor === Class;


// constructor
// constructor 方法是类的默认方法， 通过new 命令生成实例， 自动调用该方法 必须


// class 表达式
const MyClass = new Me {};    // 类名是MyClass
const MyClass = class {};
let person = new Class()();    // 立即执行的类

// 不存在变量提升
new Foo();      // ReferenceError
class Foo{};

// 私有方法和属性
// 1
class Widget{
    // public method
    foo() {}

    // private method, not safety
    _baz() {}
}

// 2
class Widget {
    foo(baz) {
        bar.call(this.baz);
    }
}

function bar(baz) {
    return this.snaf = baz;
}

// 3 Symbol
const bar = Symbol('bar');
const snaf = Symbol('snaf');

class MyClass{
    // public method
    foo(baz) {
        this[bar][baz];
    }

    // private method
    [bar](baz) {
        return this[snaf] = baz;
    }
}

// 私有属性
