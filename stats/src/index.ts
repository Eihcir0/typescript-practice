import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResult'
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReports';


// Create an object that satisfies DataReader interface
const csvFileReader = new CsvFileReader('football.csv')
const matches = new MatchReader(csvFileReader).load().matches;

const summary = new Summary(
	new WinsAnalysis('Man United'),
	new HtmlReport('myHtmlReport.html'),
)

summary.buildAndPrintReport(matches)
