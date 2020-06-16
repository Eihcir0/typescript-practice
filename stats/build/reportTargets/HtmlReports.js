"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var HtmlReport = /** @class */ (function () {
    function HtmlReport(fileName) {
        if (fileName === void 0) { fileName = 'report.html'; }
        this.fileName = fileName;
    }
    HtmlReport.prototype.print = function (report) {
        var html = "\n        <div>\n            <h1>Analysis Outpu</h1>\n            <div>" + report + "</div>\n        </div>";
        fs_1.default.writeFileSync(this.fileName, html);
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
