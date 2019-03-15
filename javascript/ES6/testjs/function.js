//es6 默认值
function log(x, y = 'world') {
    console.log(x, y);
}


//与结构赋值
function foo({x, y = 5} = {}) {
    console.log(x, y);
}

foo();          //undifined 5



//箭头函数 (=>)
//如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分
//如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回
//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号
var f = v => v;

var f = function (v) {
    return v;
}

//如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。
let fn = () => void doesNotReturn();


//与变量结构
const full = ({first, last}) => first + '' + last;

//equal
function full(person) {
    return person.first+ ' ' + person.last;
}

[1, 2, 3].map(x => x + 1);
[1, 2, 3].sort((a, b) => a - b);



//箭头函数可以绑定this对象，大大减少了显式绑定this对象的写法（call、apply、bind）。但是，箭头函数并不适用于所有场合，所以现在有一个提案，提出了“函数绑定”（function bind）运算符，用来取代call、apply、bind调用。
//函数绑定运算符是并排的两个冒号（::），双冒号左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面。
foo::bar
bar.bind(foo);


foo::bar(...arguments);
bar.apply(foo, arguments);

//如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上面。
obj::obj.foo
//equal    ::obj.foo



//尾调用优化   尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数
function f(x) {
    return g(x);
}


//例子
function f() {
  let m = 1;
  let n = 2;
  return g(m + n);
}
f();

// 等同于
function f() {
  return g(3);
}
f();

// 等同于
g(3);


//递归  函数调用自身，称为递归。如果尾调用自身，就称为尾递归
function factory (x) {
    if (x === 0) {
        return 1;
    }

    return n * factory(x - 1);
}

factory(5);

//尾递归
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(5, 1) // 120
