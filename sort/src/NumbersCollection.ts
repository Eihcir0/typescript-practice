import { Sortable } from './Sorter'

export class NumbersCollection implements Sortable {
	data: number[];

	constructor(data: number[]) {
		this.data = data;
	}

	get length(): number {
		return this.data.length;
	}

	compare(x: number, y: number): boolean {
		return this.data[x] > this.data[y];
	}

	swap(x: number, y: number): void {
		const lefty = this.data[x];
		this.data[x] = this.data[y];
		this.data[y] = lefty;
    }

}
