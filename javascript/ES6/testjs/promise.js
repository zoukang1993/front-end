//Promise 对象是一个构造函数
const promise = new Promise(function(resolve, reject) {
    //some code
    if (true /*异步操作成功*/) {
        resolve(value);
    } else {
        reject(error);
    }
});


//Promise 实例生成以后.可以用then方法分别制定resolved,rejected 状态的回调函数
promise.then(function(resolve) {
    //success
}, function() {
    //error
});

let promise1 = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
});


console.log('asyn');    //promise asyn then


//异步加载图片的例子
function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        const image = new Image();
        image.onload = function() {
            resolve(image);
        };

        image.onerror = function() {
            reject(new Error('could not load image at' + url));
        };

        image.src = url;
    });
}


//Promise 判断AJAX 例子
const getJSON = function(url) {
    const promise = new Promise(function(resolve, reject) {
        const handler = function() {
            if (this.readyState !== 4) {
                return;
            }

            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText()));
            }
        };

        const client = new XMLHttpRequest();
        client.open('GET', url);
        client.onreadyStatechange = handle;
        client.response = 'json';
        client.setRequestHeader('Accept', 'application/json');
        client.send();
    });

    return promise;
};

getJSON('/post.json').then(function(json) {
    console.log('Content:' + json);
}, function(error) {
    console.log(error);
});


//调用resolve或reject并不会终结 Promise 的参数函数的执行
new Promise(function(resolve, reject) {
    resolve(1);
    console.log(2);
}).then(r => {
    console.log(r);
});             //2 1


//Promise.prototype.then()
getJSON('/JSON').then(function(json) {
    return.json.post;
}).then(fucntion(post) {
    //...
});

//Promise.prototype.catch()
//相当于 .then(null, rejected)
getJSON('/json').then(function(posts) {
    //...
}).catch(fucntion(error) {
    //处理getJSON和前一个毁掉函数运行时发生的错误
    console.log(error);
});
