import { NumbersCollection } from './NumbersCollection'
import { LettersCollection } from './LettersCollection'

export interface Sortable {
    length: number,
    swap(x: number, y: number): void,
    compare(x: number, y: number): boolean,
    // data: any,
}


export abstract class Sorter {
	abstract compare(leftIndex: number, rightIndex: number): boolean;
	abstract swap(leftIndex: number, rightIndex: number): void;
	abstract length: number;


	sort(): void {
		const { length } = this;

		for (let index1 = 0; index1 < length; index1++) {
			for (let index2 = 0; index2 < length - index1 - 1; index2++) {
				if (this.compare(index2, index2 + 1)) {
                    this.swap(index2, index2 + 1)
				}
			}
		}
    }

}
