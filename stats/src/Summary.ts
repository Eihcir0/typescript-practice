import { MatchData } from './MatchData'
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReports';
import { ConsoleReport } from './reportTargets/ConsoleReport';

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void
}

export class Summary {
    static winsAnalysisWithHtmlReport(team: string, fileName: string) {
        return new Summary(
            new WinsAnalysis(team),
            new HtmlReport(fileName),
        )
    }
    static winsAnalysisWithConsoleReport(team: string) {
        return new Summary(
            new WinsAnalysis(team),
            new ConsoleReport(),
        )
    }
	constructor(
        public analyzer: Analyzer,
        public outputTarget: OutputTarget) {}

    buildAndPrintReport(matches: MatchData[]): void {
        this.outputTarget.print((this.analyzer.run(matches)))
    }
}

