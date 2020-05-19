"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LettersCollection = /** @class */ (function () {
    function LettersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(LettersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    LettersCollection.prototype.compare = function (x, y) {
        return this.data[x].toLowerCase() > this.data[y].toLocaleLowerCase();
    };
    LettersCollection.prototype.swap = function (x, y) {
        var splits = this.data.split('');
        var lefty = splits[x];
        splits[x] = splits[y];
        splits[y] = lefty;
        this.data = splits.join('');
    };
    return LettersCollection;
}());
exports.LettersCollection = LettersCollection;
