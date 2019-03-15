// Object.getOwnPropertyDescriptors()
let obj1 = {
    id: 1,
    name: 'test',
    get gender() {
        console.log('gender');    
    },
    set grade(g) {
        console.log(g);    
    }
};

//console.log(Object.getOwnPropertyDescriptors(obj1));

console.log(Object.getOwnPropertyDescriptors(obj1, 'id'));
console.log(Object.getOwnPropertyDescriptors(obj1, 'name'));

// Object.getOwnpropertyDescriptors 方法配合Object.defineProperties 方法, 实现正确拷贝
let obj = {};
console.log(Object.defineProperties(obj, Object.getOwnPropertyDescriptors(obj1)));
console.log(Object.getOwnPropertyDescriptors(obj));

