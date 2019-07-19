function fun(n) {
    if(n === 1) { return 1; }
    return n * fun(n - 1);
}

function factory(n, total) {
    if(n === 1) { return total; }
    return factory(n - 1, n * total);
}

console.log(factory(5, 1));

console.log();
console.log();
console.log();

console.log();

console.log();

console.log();


let datas = {
    'admin': ['listSpu', 'deleteUser'],
    'account': [],
};
