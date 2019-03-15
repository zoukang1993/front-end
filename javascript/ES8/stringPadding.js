// 字符串填充
//padStart

let vue = 'Vue';
let react = 'React';
let js = 'JavaScript';

console.log(vue.padStart(10));     //       Vue
console.log(react.padStart(10));   //     React
console.log(js.padStart(10));      //JavaScript
console.log('I\'m twenty-five years old');      //I'm twenty-five years old

console.log(vue.padStart(10, '_*'));        //_*_*_*_Vue
console.log(react.padStart(10, 'hello'));   //helloReact
console.log(js.padStart(10, 'hi'));         //JavaScript
console.log(js.padStart(8, 'hi'));          //JavaScript

//padEnd作用同padStart,只不过是从字符串尾部做填充
console.log(vue.padEnd(10, '_*'));        //Vue_*_*_*_
console.log(react.padEnd(10, 'hello'));   //Reacthello
console.log(js.padEnd(10, 'hi'));         //JavaScript
console.log(js.padEnd(8, 'hi'));          //JavaScript
