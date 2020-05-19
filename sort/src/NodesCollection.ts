import { Sortable } from "./Sorter";

class Node {
	next: Node | null = null;

	constructor(public data: number) {}
}

export class LinkedList implements Sortable{
	head: Node | null = null;

	add(data: number): void {
		const node = new Node(data);
		if (!this.head) {
			this.head = node;
			return;
		}

		let tail = this.head;
		while (tail.next) {
			tail = tail.next;
		}

		tail.next = node;
    }

    compare(x: number, y: number): boolean {
        if (!this.head) throw new Error('List empty')
        return this.at(x).data > this.at(y).data
    }

    swap(x: number, y: number) {
		const left = this.at(x)
		const right = this.at(y)
		const leftHand = left.data
		left.data = right.data
		right.data = leftHand
    }

	at(index: number): Node {
		if (!this.head) {
            throw new Error('Index out of bounds');
        }
        let counter = 0;
        let node: Node | null = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++
            node = node.next
        }
        throw new Error('Index out of bounds');
	}

	get length(): number {
		if (!this.head) return 0;
		let length = 1;
		let node = this.head;
		while (node.next) {
			length++;
			node = node.next;
		}
		return length;
	}

	print(): void {
		if (this.head === null) return console.log([]);
		let node = this.head
		const results = []
		while (node.next) {
			results.push(node.data)
			node = node.next;
		}
		results.push(node.data)

		console.log(results)

	}
}
