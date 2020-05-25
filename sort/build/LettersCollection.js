"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LettersCollection = /** @class */ (function (_super) {
    __extends(LettersCollection, _super);
    function LettersCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
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
}(Sorter_1.Sorter));
exports.LettersCollection = LettersCollection;
