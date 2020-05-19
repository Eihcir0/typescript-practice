import { NumbersCollection } from './NumbersCollection'
import { LettersCollection } from './LettersCollection'

export interface Sortable {
    length: number,
    swap(x: number, y: number): void,
    compare(x: number, y: number): boolean,
    data: any,
}


export class Sorter {
	constructor(public collection: Sortable) {}

	sort(): void {
		const { length } = this.collection;

		for (let index1 = 0; index1 < length; index1++) {
			for (let index2 = 0; index2 < length - index1 - 1; index2++) {
				if (this.collection.compare(index2, index2 + 1)) {
                    this.collection.swap(index2, index2 + 1)
				}
			}
		}
    }

}
