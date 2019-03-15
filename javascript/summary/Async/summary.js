// async
/*
    返回一个Promise对象，
 */


// 使用形式
// async function foo() {};
//
// const foo = async function() {};
//
// let obj = { async foo() {} };
// obj.foo.then();
//
// const foo = async () => {};

// grammar
// async 函数内部return语句返回的值， 会成为then方法回调函数的参数

async function f() {
    return 'hello world';
}

f().then(v => console.log(v));  // hello world


// async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到。
async function ff() {
    throw new Error('error');
}

ff().then(
    v => console.log(v),
    e => console.log(e)
);

// Error: error

// await 命令
// 正常情况下，await命令后面是一个 Promise 对象。如果不是，会被转成一个立即resolve的 Promise 对象

async function fAwait() {
    return await 122;
}

fAwait().then(v => console.log(v));   // 122

// 错误处理
// 如果await 后面的异步操作出错， 那么等同于async 函数返回的Promise 对象被reject
async function fE() {
    await new Promise((resolve, reject) => { throw new Error('error') });
}

fE()
.then(v => console.log(v))
.catch(e => console.log(e));      // Error error

// 为防止出错， 将其房子try...catch代码块中
async function fTry() {
    try {
        await new Promise ((resolve, reject) => { throw new Error('error'); });
        await fetch();
        await listPage();
    } catch(e) {

    }

    return await ('hello world');
}

// for await...of  遍历异步的Iterator接口
async function fAsync() {
  for await (const x of createAsyncIterable(['a', 'b'])) {
    console.log(x);
  }
}

fAsync();







console.log(
);
