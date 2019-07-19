//协程
function *asyncJob() {
    //..code
    var f = yield readFile(fileA);;

    //..other code
}


//协程的Generator函数实现
function *gen(x) {
    var y = yield x + 2;
    return y;
}

var g = gen(1);
g.next();   //{value: 3, done: faluse}
g.next(2);  //{value: 2, done: true}


//Generator 函数内部还可以部署错误处理代码，捕获函数体外抛出的错误。
function *gen(x) {
    try{
        var y = yield x + 2;
    } catch(e) {
        console.log(e)
    }

    return y;
}

var g = gen(1);
g.next;    //{value: 3, done: false}
g.throw('出错了');    //出错了



//异步任务的封装
var fetch = require('node-fetch');
function *gen() {
    var url = 'https://api.github.com/users/github';
    var result = yield fetch(url);
    console.log(result.bio);
}

//执行以上的代码
var g = gen();
var result = g.next();

result.value.then(function(data){
    return data.json();
}).then(function(data){
    g.next(data);    
});



