"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (x, y) {
        return this.data[x] > this.data[y];
    };
    NumbersCollection.prototype.swap = function (x, y) {
        var lefty = this.data[x];
        this.data[x] = this.data[y];
        this.data[y] = lefty;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
