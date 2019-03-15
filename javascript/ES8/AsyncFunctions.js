//Async
// callback hell
// Promise
// generator

function *helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

let hw = helloWorldGenerator();

console.log(hw.next());    //{ value: 'hello', done: false }
console.log(hw.next());    //{ value: 'world', done: false }
console.log(hw.next());    //{ value: 'ending', done: false }
console.log(hw.next());    //{ value: undifined, done: true }


//generator 的一个登录函数
let gen = function* (){
    const f1 = yield this.login();
    const f2 = yield this.getInfo();
}

//Async functions  相当于generator的语法糖
async function asyncFunc(params) {
    const f1 = await this.login();
    const f2 = await this.getInfo();
}

//变体
//异步 函数存在以下四种使用形式
//函数声明    async function foo() {}
//函数表达式  const foo = async function() {}
//对象的方式  const obj = { async foo() {}}
//箭头函数    const foo = async () => {}

//常见用法汇总
async function asyncFuncs() {
    const result = await otherAsyncFuncs();
    console.log(result);
}

//顺序处理多个异步结果
async function asyncFunc1() {
    const result1 = await otherAsyncFunction1();
    console.log(result1);
    const result2 = await otherAsyncFunction2();
    console.log(result2);
}


//并行处理多个异步结果
async function asyncF() {
    const [result1, result2] = await Promise.all([
        otherAsyncFunc1();
        otherAsyncFunc2();
    ]);
    console.log(result1, result2);
}

//处理错误
async function asyncFunctions() {
    try {
        await otherAsyncFunc();    
    } catch(err) {
        console.error(error);    
    }
}


