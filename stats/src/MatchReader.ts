import { CsvFileReader } from './CsvFileReader'
import { dateStringToDate } from './utils'
import { MatchResult } from './MatchResult'
import { MatchData } from './MatchData'


interface DataReader {
	read(): void;
	data: string[][];
}

export class MatchReader {
	static getMatchesWithCsv(importFileName: string = 'football.csv') {
		return new MatchReader(new CsvFileReader(importFileName)).load().matches;
	}
	matches: MatchData[] = [];
	constructor(public reader: DataReader) {}

	load(): MatchReader {
		this.reader.read()
		this.matches = this.reader.data.map(
			(row: string[]): MatchData => {
				return [
					dateStringToDate(row[0]),
					row[1],
					row[2],
					parseInt(row[3]),
					parseInt(row[4]),
					row[5] as MatchResult,
					row[6],
				];
			}
		);
		return this
	};
}



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