// const promise = new Promise(function(resolve, reject) {
//     //todo
//
//     if (//promise success) {
//         resolve(value);
//     } else {
//         reject(value);
//     }
// });
//
// promise.then(function(value) {
//     //success
// }, function(value) {
//     //failure
// });

function timeout(ms) {
    return new  Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(100).then((value) => {
    console.log(value);
}, (value) => {
    console.log('error');
});

let promise = new  Promise((resolve, reject) => {
    console.log('Promise');
    resolve();
});

promise.then(() => {
    console.log('resolved.');
});

console.log('Hi!');

let p1 = new Promise((resolve, reject) => {
    resolve(42);
});

p1.then((value) => {
    console.log(value);
}).then(() => {
    console.log('finished');
});


//Promise 链的返回值
let p3 = new Promise((resolve, reject) => {
    resolve(99);
});

p3.then((value) => {
    console.log(value);
    return value + 1;
}).then((value) =>
    console.log(value)
);

let p4 = new Promise((resolve, reject) =>{
    reject(199);
});

p4.catch((value) => {
    console.log(value);
    return value + 1;
}).then(value => console.log(value));

//响应多个Promise
let p_1 = new Promise((resolve, reject) => {
    resolve(1);
});

let p_2 = new Promise((resolve, reject) => {
    resolve(2);
});

let p_3 = new Promise((resolve, reject) => {
    resolve(3);
});

let p_4 = Promise.all([p_1, p_2, p_3]);

p_4.then((value) => {
    console.log(Array.isArray(value));
    console.log(value[0]);
    console.log(value[1]);
    console.log(value[2]);
});

//Promise.race()
let p_1_1 = new Promise((resolve, reject) => {
    resolve(4);
});

let p_1_2 = Promise.reject(5);

let p_1_3 = new Promise((resolve, reject) => {
    resolve(6);
});

let p_1_4 = Promise.race([p_1_1, p_1_2, p_1_3]);

p_1_4.catch(value => {
    console.log(value);
});
