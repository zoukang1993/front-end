let a = ['a', 'b', 'c'];
let mm = a[Symbol.iterator]();

console.log(
    mm.next(),
    mm.next(),
    mm.next(),
    mm.next()
);

let person = {
    "first": "hahhaha",
    "last name": "heheheheh"
};

console.log(person.first);
console.log(person["first"]);
console.log(person["last name"]);