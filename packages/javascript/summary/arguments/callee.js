// recursive
// function factory(x) {
//     return x < 1 ? 1 : x * factory(x - 1);
// }

// callee  callee是arguments对象的一个属性，指向 arguments 对象的函数，即当前函数。
function factory1(x) {
    return x < 1 ? 1 : x * arguments.callee(x - 1);
}

// caller  函数对象的一个属性，指向调用当前函数的函数。比如 A() 调用 B()， 则在B()中 B.caller 指向A()。
function b() {
    console.log(arguments.callee.caller);
}

(
    function a() {
        b();
    }
)()

// 只有当函数被调用时，该属性才会有值。不过当函数被全局调用时，该属性为null。
function c() {
    console.log(c.caller);
}

c();   // [Function]


// 斐波那契数列
//  如果一对兔子每月生一对兔子；一对新生兔，从第二个月起就开始生兔子；假定每对兔子都是一雌一雄，试问一对兔子，第n个月能繁殖成多少对兔子？
function fib(nMother) {
    return nMother <= 2 ? 1 : arguments.callee(nMother - 1) + arguments.callee(nMother - 2);
}

