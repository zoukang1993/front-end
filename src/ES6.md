## ES6

### 问题


1. 谈谈箭头函数和class中**this**关键字．

2. 简述Promise构造函数两个参数的用法．

3. Promise 中then()两个参数的作用.

4. 简述Iterator中next()的作用．

5. module、export、import是什么，有什么作用？

6. 日常前端代码开发中，有哪些值得用ES6去改进的编程优化或者规范？

7. 举一些ES6+对**Object**类型做的常用升级优化?

8. 遍历**对象**有哪些方法？

9. 举十五个**Array**类型常用的方法? (例如： map())

10. 手写ES6代码，定义两个类Animail, Cat, 要求： Animal是Cat的父类， Cat调用了父类的
    run(), say(word) 两个方法, 初始化类的type属性，实例执行了run(), say(say)方法，输出打印．（type, word可自行定义）．


### 答案

1. 
> 箭头函数会捕获其所在上下文的 this 值，作为自己的 this 值，自己本身并没有this值, 
  不能用作构造函数；
  箭头函数的this永远指向其上下文的this，任何方法都改变不了其指向，如call(), bind(), apply().
> 默认指向类的实例.

2. 
> Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。
resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

3. 
> then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用。其中，第二个函数是可选的，不一定要提供。这两个函数都接受Promise对象传出的值作为参数。

4. 
> 每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束

5. 
> module、export、import是ES6用来统一前端模块化方案的设计思路和实现方案。export、import的出现统一了前端模块化的实现方案，整合规范了浏览器/服务端的模块化方法，用来取代传统的AMD/CMD、requireJS、seaJS、commondJS等等一系列前端模块不同的实现方案，使前端模块化更加统一规范，JS也能更加能实现大型的应用程序开发。
import引入的模块是静态加载（编译阶段加载）而不是动态加载（运行时加载）。
import引入export导出的接口值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。

6. 
> 1、常用箭头函数来取代var self = this;的做法。
  2、常用let取代var命令。
  3、常用数组/对象的结构赋值来命名变量，结构更清晰，语义更明确，可读性更好。
  4、在长字符串多变量组合场合，用模板字符串来取代字符串累加，能取得更好地效果和阅读体验。
  5、用Class类取代传统的构造函数，来生成实例化对象。
  6、在大型应用开发中，要保持module模块化开发思维，分清模块之间的关系，常用import、export方法。

7. 
> 拓展运算符，　解构赋值，　属性名表达式，　Object.getOwnPropertyDescriptor，　Object.is(), 属性名／值的简写，　Object.values()，　Object.entries()，　
　Object.entries()，　

8. 
> * for...in
> for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
> * Object.keys(obj)
> Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。
> * Object.getOwnPropertyNames(obj)
> Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
> * Object.getOwnPropertySymbols(obj)
> Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。
> * Reflect.ownKeys(obj)
> Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

9. 
> map(), filter(), find(), findIndex(), flat(), flatMap(), [...],         includes(), Array.of(), Array.from(), Array.isArray(), fill(),          copyWith(), some(), join(), reduce(), sort(), entries(), values() 
  keys(), reverse(), concat(), indexOf(), push(), pop(), splice(),
  slice(), forEach(), 

10. 
```
class Animal {
	constructor (type) {
		this.type = type;
	}
	say(say) {
		console.log(this.type + ' says ' + say)
	}

    run() {
        console.log(`${this.type} running.`);
    }
}

class Cat extends Animal {
 	constructor(type) {
 		super(type)
 		this.type = type
 	}
}

```
