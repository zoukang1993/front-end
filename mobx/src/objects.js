//import {observable, autorun, action} from 'mobx';
let observable = require('mobx');
let action = require('mobx');
let autorun = require('mobx');

let person = observable({
    name: "John",
    age: 23,
    showAge: false,

    get labelText() {
        return this.showAge ? `${this.name}(age: ${this.age})` : this.name;    
    },

    setAge(age) {
        this.age = age;    
}
    },{
    setAge: action        
});

autorun(() => console.log(person.labelText));

person.name = "Dave";


person.setAge(2);


