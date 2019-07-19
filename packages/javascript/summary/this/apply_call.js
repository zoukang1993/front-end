// apply apply 方法传入两个参数：一个是作为函数上下文的对象，另外一个是作为函数参数所组成的数组。
let obj = {
    name: 'linxin',
};

function func(fName, lName) {
    console.log(fName + ' ' + this.name + ' ' + lName);
}

func.apply(obj, ['A', 'B']);   // A linxin B
// obj 是作为函数上下文的对象，函数 func 中 this 指向了 obj 这个对象。
// 参数 A 和 B 是放在数组中传入 func 函数，分别对应 func 参数的列表元素。

// call()
// call 方法第一个参数也是作为函数上下文的对象，但是后面传入的是一个参数列表，而不是单个数组。
func.call(obj, 'A', 'B');  // A linxin B
//C 和 D 是作为单独的参数传给 func 函数，而不是放到数组中。


//  apply and call usage
// 改变this的指向
// 借用别的对象的方法
let Person1 = function() {
    this.name = "linxin";
};

let Person2 = function() {
    this.getname = function() {
        console.log(this.name);
    };
    Person1.call(this);
};
let person = new Person2();
person.getname();    // linxin

// 调用函数
// apply、call 方法都会使函数立即执行，因此它们也可以用来调用函数。
function funcs() {
    console.log('linxin');
}
funcs.call();   // linxin

// call 和 bind 的区别
// 它和 call 很相似，接受的参数有两部分，第一个参数是是作为函数上下文的对象，第二部分参数是个列表，可以接受多个参数。
// bind 的返回值是函数
let obj2 = {
    name: 'linxin',
};

function func2() {
    console.log(this.name);
}

let func3 = func2.bind(obj);
func3();    // linxin
// bind 方法不会立即执行，而是返回一个改变了上下文 this 后的函数。而原函数 fun2c 中的 this 并没有被改变，依旧指向全局对象 window

// 参数的使用
function func4(a, b, c) {
    console.log(a, b, c);
}

let func5 = func4.bind(null, 'linxin');
func4('A', 'B', 'C');   // A B C
func5('A', 'B', 'C');   // linxin A B
func5('B', 'C');        // linxin B C
func4.call(null, 'linxin');     // linxin undefined undefined
// call 是把第二个及以后的参数作为 func 方法的实参传进去，而 func1 方法的实参实则是在 bind 中参数的基础上再往后排。




