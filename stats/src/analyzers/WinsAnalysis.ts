import { Analyzer } from '../Summary'
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult'
export class WinsAnalysis implements Analyzer {
    constructor(public team: string) {}

    run(matches: MatchData[]): string {
        let wins = 0;
        for (let match of matches) {
            if (
                (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
                (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
            ) {
                wins++;
            }
        }

        return `Team: ${this.team} \nGames won: ${wins}`
    }
}