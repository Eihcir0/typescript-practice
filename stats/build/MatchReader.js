"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var utils_1 = require("./utils");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.getMatchesWithCsv = function (importFileName) {
        if (importFileName === void 0) { importFileName = 'football.csv'; }
        return new MatchReader(new CsvFileReader_1.CsvFileReader(importFileName)).load().matches;
    };
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (row) {
            return [
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
        return this;
    };
    ;
    return MatchReader;
}());
exports.MatchReader = MatchReader;
// type MatchData = [
//     Date,
//     string,
//     string,
//     number,
//     number,
//     MatchResult,
//     string,
// ]
// export class MatchReader extends CsvFileReader {
//     }
// }
