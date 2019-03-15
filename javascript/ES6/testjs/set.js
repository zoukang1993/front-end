//set
let s = new Set();
s.add(1);
s.add("1");
s.add("1");

let key1 = {};
let key2 = {};

s.add(key1);
s.add(key2);

console.log(s);
console.log(s.size);
console.log(typeof(s));


let set_array = new Set([1, 2, 3, 4, 4, 4, 5, 5, 5, 1]);

console.log(set_array);
console.log(set_array.size);

//has()
let set_has = new Set([1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 5]);

console.log(set_has.has(1)); // true
console.log(set_has.size); // 5
console.log(set_has.has(99)); // false

//delete()
let set_del = new Set([1, 2, 3, 4, 5]);

console.log(set_del.delete(1)); // true
console.log(set_del.size); // 4

console.log(set_del.delete(99)); //false
console.log(set_del.size); // 4

//clear
let set_clear = new Set();

set_clear.add(1);
set_clear.add("1");

console.log(set_clear.size); // 2

set_clear.clear();
console.log(set_clear.size); //0

// Set集合的forEach()
let s_foreach = new Set(["a", 2]);

s_foreach.forEach((key, value, ownerSet) => {
    console.log(key + ' ' + value);
    console.log(ownerSet === s_foreach);
});

//将数组转化为Set集合
let array_to_set = new Set([1, 1, 2, 2, 3]);

// 将Set集合转化为数组
let set_to_array = [...array_to_set];

console.log(set_to_array); // [1, 2, 3]
console.log(set_to_array.length); // 3

// Weak Set 集合
let ws = new WeakSet(),
    key = {};

ws.add(key);
console.log(ws.has(key)); //true

ws.delete(key);
console.log(ws.has(key)); //false

let w = new WeakSet([{}, {}]);
console.log(w); // WeakSet {}