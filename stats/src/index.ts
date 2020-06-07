import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResult'


// Create an object that satisfies DataReader interface
const csvFileReader = new CsvFileReader('football.csv')
const matches = new MatchReader(csvFileReader).load().matches


let manUnitedWins = 0;


for (let match of matches) {
    if (
		(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
		(match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
	) {
		manUnitedWins++;
	}
}

console.log(manUnitedWins)