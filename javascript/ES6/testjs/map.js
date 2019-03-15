// Map 集合

// set() get()
let m = new Map();
m.set("title", "happy new year");
m.set("year", 2018);

console.log(m); // Map { 'title' => 'happy new year', 'year' => 2018 }
console.log(m.get("title")); // happy new yewar
console.log(m.get("year")); // 2018
console.log(m.get("size")); // undefined


let key1 = {},
    key2 = {};
m.set(key1, 1);
m.set(key2, 2);

console.log(m); // Map { 'title' => 'happy new year', 'year' => 2018, {} => 1, {} => 2 }
console.log(m.get(key1)); // 1

//has(key) delete(key) clear()
let map_method = new Map();
map_method.set("name", "js");
map_method.set("version", 6);

console.log(map_method.size); // 2
console.log(map_method.has("name")); // true
console.log(map_method.get("name")); // js

map_method.delete("name");
console.log(map_method); // Map {"version" => 6}

map_method.clear();
console.log(map_method); // Map {}


// Map 集合的初始化方法
let map_gather = new Map([
    ["name", "zk"],
    ["age", 24]
]);

console.log(map_gather.has("name")); // true
console.log(map_gather.get("name")); // zk
console.log(map_gather.size); // 2

// Map集合的forEach() 方法
let map_foreach = new Map([
    ["name", "zou"],
    ["age", 24]
]);

map_foreach.forEach((value, key, ownerMap) => {
    console.log(key + " " + value);
    console.log(ownerMap === map_foreach)
});