class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index]
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}

    get(index: string): string {
        return this.collection[index]
    }
}

class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index]
    }

}

const arr = new ArrayOfAnything(['a', 'b', 'c'])

function printStrings(array: string[]): void {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);

    }

}

function printNumbers(array: number[]): void {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
}

function printAnything<T>(array: T[]): void {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
}

printAnything<string>(['a', 'c'])


// Generic Constraints

class Car {
    print() {
        console.log('car')
    }
}

class House {
    print() {
        console.log('house')
    }
}

interface Printable {
    print(): void;
}

function printHousesorCars<T extends Printable>(array: T[]): void {
    for (let index = 0; index < array.length; index++) {
        array[index].print();
    }
}
class Richie {
    print() {
        //yo mamma
    }
}

printHousesorCars<Richie>([new House()])
