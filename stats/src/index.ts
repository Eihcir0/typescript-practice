import { MatchReader } from './MatchReader'
import { Summary } from './Summary';


const matches = MatchReader.getMatchesWithCsv()
const summary = Summary.winsAnalysisWithConsoleReport('Man United')

summary.buildAndPrintReport(matches)
