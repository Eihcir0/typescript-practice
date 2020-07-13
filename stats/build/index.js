"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matches = MatchReader_1.MatchReader.getMatchesWithCsv();
var summary = Summary_1.Summary.winsAnalysisWithConsoleReport('Man United');
summary.buildAndPrintReport(matches);
