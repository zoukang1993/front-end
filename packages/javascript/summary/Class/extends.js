class Point {}

class ColorPoint extends Point {
    constructor() {
        super();

        this.colors = {};    // 只有调用super之后，才可以使用this关键字
    }

    toString() {}
}

let cp = new ColorPoint();

// 父类的静态方法， 也会被子类继承
class A {
    static hello() {
        console.log('hello');
    }
}

class B extends A {}

B.hello();   // hello


// Object.getPrototypeOf()  可以从子类上 获取父类
Object.getPrototypeOf(B) === A;   // true


// super 关键字
// 作为函数使用， 代表父类的构造函数，但是返回的是子类的实例， super内部的this指的是子类，
// super() 相当于 FatherClass.prototype.constructor.call(this)
//  子类的构造函数必输使用一次super函数

class C {}

class D extends C {
    constructor() {
        super();
        this.d = {};
    }

    toValue() {}
}

let d = new D();

class E {
    constructor() {
        console.log(new.target.name);
    }
}

class F extends E {
    constructor() {
        super();
    }
}

new E();    // E
new F();    // F

// extends 的继承目标
