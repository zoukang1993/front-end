"use strict";
exports.__esModule = true;
var index_1 = require("./ts/index");
var TS = /** @class */ (function () {
    function TS(utils) {
        this.data = utils;
        this.name = utils.name;
    }
    TS.prototype.init = function () {
        var allTs = new index_1["default"]();
        allTs.exexute();
    };
    TS.prototype.getName = function () {
        console.log("name", this.name);
    };
    return TS;
}());
exports["default"] = TS;
