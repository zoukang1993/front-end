//symbol 是一种原始数据类型,不是对象
let s = Symbol();
typeof s;  //symbol


//Symbol() 括号中的参数为标注描述,没有实际意义,
let s1 = Symbol('s1');
let s2 = Symbol('s2');

s1;         //symbol(s1)
s2;         //symbol(s2)

s1.toString();    //symbol(s1)
s2.toString();    //symbol(s2)

s1 === s2;    //false

//如果Symbol 的参数是一个对象,就会调用该对象的toString() 方法,将其转化为字符串,然后生成一个Symbol.
const obj = {
    toString() {
        return 'abc';
    }
};

const sym = Symbol(obj);
sym;        //Symbol(abc);


//Symbol 的值不能与其它类型的值进行运算,会报错
// 'you symbol is' + sym;       Cannot convert a Symbol value to a string


//但是Symbol 可以转换为字符串
String(sym);        //Symbol(abc)
sym.toString();

//Symbol 值可以转为布尔值.不能转为数值
Boolean(sym);      //true
!sym;               //false

// Number(sym);    //TypeError
// sym + 2;        //TypeError


/*作为属性名的Symbol*/
let mySymbol = Symbol();
//one
let a = {};
a[mySymbol] = 'Hello!';

//two
let b = {
    [mySymbol]: 'Hello!'
};

//three
let c = {};
Object.defineProperty(c, mySymbol, {value: 'Hello!'});


let ss = Symbol();
let obj = {
    [ss]: function(arg) {
        //...
    }
};

obj[s](123);

//equal
let obj = {
    [ss](arg){//...}
};

//Symbol 类型还可以用于定义一组常量，保证这组常量的值都是不相等的
const COLOR_RED = Symbol();
const COLOR_GREEN = Symbol();

function getComplement(color) {
    switch(color) {
        case COLOR_RED:
        return COLOR_RED;

        case COLOR_GREEN:
        return COLOR_GREEN;

        default:
        throw new Error('undifined color');
    }
}

//实例:消除魔术字符串
const shapeType = {
    triangle: 'Triangle'
};

function getArea(shape, options) {
    let area = 0;

    switch (shape) {
        case shapeType.triangle:
        area = .5 * options.width * options.height;
        break;
    }

    return area;
}

getArea(shapeType.triangle, {width: 100, height: 100});


