// Iterator 迭代器

// next()
function createIterator(items) {
    let i = 0;

    return {
        next: function() {
            let done = (i >= items.length);
            let value = !done ? items[i++] : undefined;

            return {
                done: done,
                value: value
            };
        }
    };
}

let iterator = createIterator([1, 2, 3]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// 生成器 是一种返回迭代器的函数, function 关键字后的 * 表示, 函数中用到关键字yield.
function* createIterators() {
    yield 1;
    yield 2;
    yield 3
}

let iterators = createIterators();

console.log(iterators.next().value); // 1
console.log(iterators.next().value); // 2
console.log(iterators.next().value); // 3

// 可迭代对象和 for-of 循坏
let val = Array.of(1, 2, 3);
for (let num of val) {
    console.log(num);
}

console.log(val);

// 访问默认迭代器
let value = Array.of(1, 2, 3);
let iterator_value = value[Symbol.iterator]();

console.log(iterator_value.next());
console.log(iterator_value.next());
console.log(iterator_value.next());
console.log(iterator_value.next());


// 创建可迭代对象
let collection = {
    items: [],
    *[Symbol.iterator]() {
        for (let item of this.items) {
            yield item;
        }
    }
};

collection.items.push(1);
collection.items.push(2);
collection.items.push(3);

for (let x of collection) {
    console.log(x); // 1 2 3
}

// 内建迭代器
// entries()   values()   keys()
let colors = Array.of("red", "blue", "yellow");
let tracking = new Set([12, 23, 34]);
let data = new Map();
data.set("title", "title-one");
data.set("time", "Monday");

for (let entry of colors.entries()) {
    console.log(entry); //[ 0, 'red' ]  [ 1, 'blue' ]   [ 2, 'yellow' ]
}

for (let entry of tracking.entries(0)) {
    console.log(entry); //[12, 12]   [23, 23]   [34, 34]
}

for (let entry of data.entries()) {
    console.log(entry); //["title", title-one]   ["time", "Monday"]
}

// 解构与for-of 循环
for (let [key, value] of data) {
    console.log(key + " => " + value); // title => title-one     time => Monday
}

// 字符串迭代器
let message = "A 爱 B";
for (let c of message) {
    console.log(c); //A 爱 B
}

// NodeList 迭代器
// let divs = document.getElementsByTagName('div');

// for (let div of divs) {
//     console.log(div.id);
// }

// 展开运算符与非数组可迭代对象
// 数组的合并插入
let smallNum = Array.of(1, 2, 3),
    bigNum = Array.of(11, 12, 11),
    allNums = Array.of(0, ...smallNum, ...bigNum);

console.log(allNums.length); // 7
console.log(allNums); // [ 0, 1, 2, 3, 11, 12, 11 ]

// 高级迭代器功能
function* createIterators_advanced() {
    let first = yield 1;
    let second = yield first + 2;
    yield seconde + 3;
}

let iterator_advanced = createIterators_advanced();

console.log(iterator_advanced.next()); // {value: 1, done: false}
console.log(iterator_advanced.next(4)); // {value: 6, done: false}
console.log(iterator_advanced.next(5)); // {value: 8, done: false}
console.log(iterator_advanced.next()); // {value: undefined, done: true}
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();