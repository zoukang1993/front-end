/*尾调用*/

// 尾调用优化
function factory (n, total) {
    if (n === 0) { return 1; }

    return n * factory(n - 1, n * total);
}

// 尾调用
function factories(n) {
    if(n === 1) { return 1; }
    return n * factories(n - 1);
}

let a = factory(5, 1);
console.log(a);   // 120

let b = factories(5);
console.log(b);  //120
