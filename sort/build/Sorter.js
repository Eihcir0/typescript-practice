"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var index1 = 0; index1 < length; index1++) {
            for (var index2 = 0; index2 < length - index1 - 1; index2++) {
                if (this.compare(index2, index2 + 1)) {
                    this.swap(index2, index2 + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
