//Array.prototype.includes()
let arr1 = Array.of('a', 'b', 'c', 'd');

console.log(arr1.includes('a'));        //true
console.log(arr1.includes('e'));        //false

console.log(arr1.includes('b'));        //true
console.log(arr1.includes('b', 2));     //false

//indexOf
console.log(arr1.indexOf('a'));         //0
console.log(arr1.indexOf('a') > -1);    //true

//compare both
let demo = Array.of(+0, 1, NaN, 2, 3);

console.log(demo.indexOf(NaN));         //-1      使用 === 判断
console.log(demo.includes(NaN));        //true   因为两个NaN被认为相等的

//+0 -0 被认为相同的
console.log(demo.includes(-0));         //true
console.log(demo.indexOf(-0));          //0
