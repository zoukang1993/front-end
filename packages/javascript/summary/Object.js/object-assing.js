


// real use
// 将多个对象合并到某个对象
const mergeOne = (target, ...source) => {Object.assign(target, ...source)};

// 如果希望合并后返回一个新对象，可以改写上面函数，对一个空对象合并。
const mergeTwo = (...source) => {Object.assing({}, ...source); };
