"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReports_1 = require("./reportTargets/HtmlReports");
// Create an object that satisfies DataReader interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matches = new MatchReader_1.MatchReader(csvFileReader).load().matches;
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HtmlReports_1.HtmlReport('myHtmlReport.html'));
summary.buildAndPrintReport(matches);
