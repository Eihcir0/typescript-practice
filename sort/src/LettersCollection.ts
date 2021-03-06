import { Sorter } from './Sorter'


export class LettersCollection extends Sorter {
	data: string;

	constructor(data: string) {
		super()
		this.data = data;
	}

	get length(): number {
		return this.data.length;
	}

	compare(x: number, y: number): boolean {
		return this.data[x].toLowerCase() > this.data[y].toLocaleLowerCase();
	}

	swap(x: number, y: number): void {
		const splits = this.data.split('')
		const lefty = splits[x];
		splits[x] = splits[y];
		splits[y] = lefty;
		this.data = splits.join('')
	}

}
