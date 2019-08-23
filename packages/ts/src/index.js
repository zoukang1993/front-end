// import { name } from './source';
var Queue = /** @class */ (function () {
    function Queue() {
        var _this = this;
        this.data = [];
        this.pop = function () { return _this.data.shift(); };
    }
    Queue.prototype.push = function (item) {
        this.data.push(item);
    };
    return Queue;
}());
var queue = new Queue();
queue.push(1);
function printUser(user) {
    console.log(user.name);
}
printUser({
    name: 'names',
    age: 22,
    leaderFlag: true,
    sex: 'man'
});
